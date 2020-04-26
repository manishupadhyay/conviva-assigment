const express = require('express');
const app = express();
const addressRoute = require('./api/routes/addressRoute');
const productRoute = require('./api/products');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');


// app.use((req, res, next) => {
//     res.status('200').json({
//         message: 'It works'
//     });  
// });

app.use(morgan('dev'));
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

mongoose.connect(`mongodb+srv://${process.env.USER_NAME}:${process.env.MONGO_DB_PW}@cluster0-r7l83.mongodb.net/test?retryWrites=true&w=majority`,
{ useNewUrlParser: true } 
);

app.use((req, res, next) => {
    req.header('Access-Control-Allow-Origin', '*');
    req.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-type, Accept, Authorization');
    
    if (req.method === "OPTIONS") {
        res.header('Access-Control-Allow-Methods', 'PUT, POST, PATCH, DELETE, GET');
        return res.status(200).json({});
    }
    next();

});
app.use('/api/employeeDetails/address', addressRoute);
app.use('/api/products', productRoute);

app.use((req, res, next) => {
    const error = new Error('url not found');
    error.status = 404;
    next(error);
});

app.use((error, req, res, next)=> {
    res.status(error.status || 500);
    res.json({
        error: {
            msg: error.message
        }
    })
})

module.exports = app;
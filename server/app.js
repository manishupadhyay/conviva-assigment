const express = require('express');
const app = express();
const addressRoute = require('./api/routes/addressRoute');

// app.use((req, res, next) => {
//     res.status('200').json({
//         message: 'It works'
//     });  
// });

app.use('/api/employeeDetails/address', addressRoute);

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
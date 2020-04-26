const express = require('express');
const router = express.Router();
const loadJSONFile = require('load-json-file');
const path = require('path');
const employeeAddressList = loadJSONFile.sync(path.join(__dirname, '../../jsonData/employeeAddressList.json'));

router.get('/:empId', (req, res, next) => {
    const empId = req.params.empId;
    const empAddress = employeeAddressList[empId];
    res.header("Cache-Control", "no-cache, no-store, must-revalidate");
        res.header("Pragma", "no-cache");
        res.header("Expires", 0);
    console.log('request is made');
    if (typeof empAddress === 'undefined') {
        const err = new Error(`Address for empployee ${empId} not present`);
        err.status = 404
        next(err);
    }
    else {
        console.log(`request reached webserver`);
        res.status(200).json({
            message: 'employeeid request',
            empAddress
       });
    }
    
});

module.exports = router;
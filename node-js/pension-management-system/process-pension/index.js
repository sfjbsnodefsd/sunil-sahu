const express = require("express");
const app = express();
const got  = require("axios");
const mongoose = require("mongoose");
const isAuthenticated = require("../isAuthenticated");

app.use(express.json());

app.get("/processPension", isAuthenticated, async (req, resp) => {
    const { aadharNumber } = req.body;
    const url = "http://localhost:5001/getPensionerDetails/"+ aadharNumber;
    got.get(url, {responseType: 'json'}).then(res => {
        const pensionerDetail = res.data;
        let salaryEarned = pensionerDetail.pensioner.salaryEarned;
        let allowances = pensionerDetail.pensioner.allowances;
        let bankType = pensionerDetail.pensioner.bankDetails.bankType;
        let pensionCategory = pensionerDetail.pensioner.pensionCategory;
        let pensionAmount = 0;
        let bankServiceCharge = 0;
        if(pensionCategory == "self") {
            pensionAmount = parseFloat(0.8*salaryEarned) + parseFloat(allowances);
        } else if(pensionCategory == "family") {
            pensionAmount = parseFloat(0.5*salaryEarned) + parseFloat(allowances);
        }

        if(bankType == "public"){
            bankServiceCharge = 500;
        } else if(bankType == "private") {
            bankServiceCharge = 550;
        }

        return resp.json({pensionAmount: pensionAmount, bankServiceCharge: bankServiceCharge});

    }).catch(err => {
        console.log('Error: ', err.message);
        return resp.json({status: 500, message: "Internal Server Occurred"});

    }); 
    

});

app.listen(5002, () => {
console.log(`process pension service is working at port 5002`);
});

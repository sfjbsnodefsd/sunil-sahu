const express = require("express");
const app = express();
const mongoose = require("mongoose");
const isAuthenticated = require("../isAuthenticated");
const PensionerDetail = require("./PensionerDetail");

app.use(express.json());

mongoose.connect(
    "mongodb://localhost:27017/pension-service",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    },
    () => {
      console.log(`pension service DB  Connected`);
    }
  );

  app.get("/getPensionerDetails/:aadharNumber", async (req, res) => {
        const aadharNumber = req.params.aadharNumber;
        const pensioner = await PensionerDetail.findOne({ aadharNumber });
      return res.json({pensioner});
 
  });

  app.listen(5001, () => {
    console.log(`pensioner detail service is working at port 5001`);
  });
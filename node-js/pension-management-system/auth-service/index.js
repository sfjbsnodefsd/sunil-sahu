const express = require("express");
const mongoose = require("mongoose");
const app = express();
const PORT = 5000;
const User = require("./User");
const PensionerDetail = require("./PensionerDetail");
const jwt = require("jsonwebtoken");
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

// register user
app.post("/auth/reg", async (req, res) => {
  const { aadharNumber, password, name, dob, pan, salaryEarned, allowances, pensionCategory, bankDetails } = req.body;

  const userExists = await User.findOne({ aadharNumber });
  if (userExists) {
    return res.json({ sucess: 0, message: "User already exists" });
  } else {
    const newUser = new User({
      aadharNumber,
      password
    });

    const newPensioner = new PensionerDetail({
        aadharNumber,
        name,
        dob,
        pan,
        salaryEarned,
        allowances,
        pensionCategory,
        bankDetails
    })
    newUser.save();
    newPensioner.save();
    return res.json({ sucess: 200, message: "New user added successfully" });
  }
});


app.listen(PORT, () => {
  console.log(`Auth service at ${PORT}`);
});
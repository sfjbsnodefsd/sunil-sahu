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
    return res.json({ sucess: 404, message: "User already exists" });
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


app.post("/auth/login", async (req, res) => {
  const { aadharNumber, password } = req.body;

  const user = await User.findOne({ aadharNumber });
  const pensioner = await PensionerDetail.findOne({ aadharNumber });
  console.log(pensioner.name);
  if (!user) {
    return res.json({ sucess: 404, message: "User dose not exist" });
  } else {
    if (password !== user.password) {
      return res.json({ sucess: 403, message: "Invalid username or password" });
    }
    const payload = {
      aadharNumber,
      name: pensioner.name,
    };
    jwt.sign(payload, "secret", (err, token) => {
      if (err) console.log(err);
      else {
        return res.json({ token: token });
      }
    });
  }
});



app.listen(PORT, () => {
  console.log(`Auth service at ${PORT}`);
});
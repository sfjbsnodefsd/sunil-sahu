require("dotenv").config();
const express = require("express");
const app = express();
const userRouter = require("./api/users/users.router");

app.use(express.json());
app.use("/api/users", userRouter);
// app.get("/api", (req, res) => {
//   res.json({
//     sucess: 1,
//     message: "This rest api is working",
//   });
// });

app.listen(process.env.APP_PORT, () => {
  console.log("Server is up and running", process.env.APP_PORT );
});
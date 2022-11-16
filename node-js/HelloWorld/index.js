const express = require('express');
const app = express();

app.get("/", (req, res) => res.send("Hello World this app is running on a container"));

app.listen(3000, () => {
    console.log("This app is listening on port 3000");
})
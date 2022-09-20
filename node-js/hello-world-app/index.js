
//console.log("Hi Sunil, I hope you are having a great day!");

const http = require('http');

function greet(req, resp) {
    resp.write("Hi Shiva, I hope you are having a great day!");
    resp.end();
}

http.createServer(greet).listen(5000);
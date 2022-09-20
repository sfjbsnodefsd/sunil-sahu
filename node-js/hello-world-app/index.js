
//console.log("Hi Sunil, I hope you are having a great day!");

const http = require('http');

function greet(req, resp) {
    resp.writeHead(200, {'Content-Type': 'application/json'});
    resp.write(JSON.stringify({
        'name': 'Sunil Sahu',
        'emp_id': '256789',
        'address': {
            'street': 'xyz street',
            'city': 'XYZ',
            'state': 'ABC'
        }
    }));
    resp.end();
}

http.createServer(greet).listen(5000);
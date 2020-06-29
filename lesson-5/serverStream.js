const fs = require("fs");
const http = require('http');

function sendFile(file, res) {
    file.pipe(res);
}

new http.createServer( (req, res) => {
    console.log(req.url);
    const file = new fs.ReadStream("./files/big.html");

    //Add error watching;
    file.on('error', (err) => console.log(err));

    sendFile(file, res);
}).listen(3000, '127.0.0.1');
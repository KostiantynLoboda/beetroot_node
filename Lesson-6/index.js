const http = require('http');
const fs = require('fs');
const path = require('path');
const port = 3000;

const userInfo = {
    login: 'user',
    password: 'secret',
};

const server = http.createServer((req, res) => {
    req.on('error', (err) => console.log('Error', err));

    switch (req.url) {
        case '/login.html':
            const filePath = path.join(__dirname, 'login.html');
            fs.readFile(filePath, (err, data) => {
                if (err) {
                    res.write(404, {'Content-Type': 'text/plain'});
                    res.write('Not Found');
                    res.end();
                }

                res.writeHead(200, {'Content-Type': 'text/html'});
                res.write(data.toString());
                res.end();
            });
            break;
        case '/':
            res.writeHead(200, {'Content-Type': 'text/html'});
            res.write(`<h1>Go to <a href="/login.html">/login</a> page</h1>`);
            res.end();
            break;
        case '/isLoggedIn':
            let body = '';
            let content = '';

            req.on('data', function (data) {
                body += data;
                const userData = JSON.parse(`${body}`);

                if(userData.name === userInfo.login &&
                    userData.password === userInfo.password) {
                    content = `Login is Successful!
                 \nLogin: ${userData.name}
                 \nPassword: ${userData.password}`
                } else {
                    content = `Access Denied!`
                }

                res.writeHead(200, {'Content-Type': 'text/html'});
                res.write(content);
                res.end();
            });
            break;
        default:
            res.writeHead(404, {'Content-Type': 'text/plain'});
            res.write('Not Found');
            res.end();
    }
}).listen(port, (error) => {
    if (error) {
        return console.log('Error', error);
    }
    console.log(`Server running on port ${port}`);
});
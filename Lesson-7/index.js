const express = require("express");
const bodyParser = require("body-parser");

const app = express();
const urlencodedParser = bodyParser.urlencoded({extended: false});

app.set("view engine", "ejs");

app.get("/pages/login", urlencodedParser, function (request, response) {
    console.log('000000');
    response.render('pages/login');
});
app.post("/pages/login", urlencodedParser, function (request, response) {
    if(!request.body) return response.sendStatus(400);
    console.log(request.body);
    if (request.body.userName === 'bill' &&
        request.body.userPass === '12345') {
        console.log(111111);
        response.send(`Hello: ${request.body.userName}`);
    } else {
        console.log(22222);
        response.send(`Wrong login/password`);
    }
});

app.get("/", function(request, response){
    response.render('pages/home');
});

app.listen(3000);
var express = require('express')
var app = express()
var path = require('path');

const port = process.env.PORT || 5000;

app.use('/', express.static(path.join(__dirname, 'public')));

app.get('/', function (req, res) {
    res.render('index');
})

app.listen(port, function () {
    console.log(`Example app listening on port ${port}!`)
})
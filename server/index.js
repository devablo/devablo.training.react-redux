import express from 'express';
//import path = require('path');
import fs from 'fs-extra';
import yields from 'express-yields';

const port = process.env.PORT || 5000;
const app = express()

//app.use('/', express.static(path.join(__dirname, 'public')));

if (process.env.NODE_ENV === 'development') {
    const webpack = require('webpack');
    const config = require('../webpack.config.js');
    const compiler = webpack(config);
    const middleware = require('webpack-dev-middleware')(compiler, {
    });
    app.use(middleware);

    const hmr = require('webpack-hot-middleware')(compiler);
    app.use(hmr);
}

app.get('/', function * (req, res) {
    let index = yield fs.readFile('./public/index.html', 'utf-8');
    res.send(index);
})

app.listen(port, function () {
    console.log(`Example app listening on port ${port}!`)
});
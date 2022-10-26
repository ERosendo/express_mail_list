const express = require('express');
const mailRouter = require('./mail.router')

function routerApi(app) {
    const apiRouter = express.Router();
    app.use('/api', apiRouter);

    apiRouter.use('/mail', mailRouter);
}

module.exports = routerApi;
var express = require('express');
var serverless = require('serverless-http');

const api = express();

const router = express.Router();
router.get('/', (req, res) => {
    res.send('Hello World!');
})

api.use('/api/', router);

exports.handler = serverless(api);
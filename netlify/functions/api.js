var express = require('express');
var serverless = require('serverless-http');
//added the express-rate-limit module to limit the amount of requests to the server - github recommended 
var rateLimit = require('express-rate-limit');
const { appendFile } = require('fs');

var limiter = rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 100 // limit each IP to 100 requests per windowMs
});

api.use(limiter);

const api = express();

const router = express.Router();

router.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '../public/index.html'));
});

api.use('/api/', router);

exports.handler = serverless(api);
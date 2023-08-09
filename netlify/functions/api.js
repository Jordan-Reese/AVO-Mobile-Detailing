var express = require('express');
var serverless = require('serverless-http');

const api = express();

const router = express.Router();
// router.get('/', (req, res) => {
//     res.send('Hello World!');
// })

router.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '../public/index.html'));
});

api.use('/api/', router);

exports.handler = serverless(api);
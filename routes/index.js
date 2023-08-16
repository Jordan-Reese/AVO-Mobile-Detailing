var express = require('express');
var router = express.Router();
//added the path module for the html file
var path = require('path');
//added the express-rate-limit module to limit the amount of requests to the server - github recommended 
var rateLimit = require('express-rate-limit');


// /* GET home page. */ --- THIS IS THE CODE USED TO RENDER THE INDEX.EJS FILE
// router.get('/', function(req, res, next) {
//   res.render('index', { title: 'AVO Mobile Detailing | Auto Consultant' });
// });

//Setting up the rate limit for the server
var limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100 // limit each IP to 100 requests per windowMs
});

//apply rate limiter to all requests
router.use(limiter);


//Added this to send the file as an html file
router.get('/', function(req, res, next) {
  res.sendFile(path.join(__dirname + '../public/index.html'));
});


module.exports = router;

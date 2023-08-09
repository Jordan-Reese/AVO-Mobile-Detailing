var express = require('express');
var router = express.Router();
//added the path module for the html file
var path = require('path');


// /* GET home page. */ --- THIS IS THE CODE USED TO RENDER THE INDEX.EJS FILE
// router.get('/', function(req, res, next) {
//   res.render('index', { title: 'AVO Mobile Detailing | Auto Consultant' });
// });


//Added this to send the file as an html file
router.get('/', function(req, res, next) {
  res.sendFile(path.join(__dirname + '../public/index.html'));
});


module.exports = router;

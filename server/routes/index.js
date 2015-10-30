var express = require('express');
var router = express.Router();
var cheerio = require('cheerio');
var request = require('request');

router.get('/promise', function(req, res, next) {
  var successFn = function(data) { res.render('win'); };
  var errorFn = function(status) { console.log('Error: ', status); };
  var httpPromise = new Promise(function(resolve, reject) {
    request('https://github.com/ErikAbrahamson', function(error, response, body) {
      if (error) reject(res.send('Shitty request. You did not enter a valid URL'));
      if (!error && response.statusCode == 200) resolve(successFn);
      else reject (errorFn);
    });
  });
  httpPromise.then(successFn, errorFn);
});

module.exports = router;

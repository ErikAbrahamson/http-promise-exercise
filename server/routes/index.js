var express = require('express');
var router = express.Router();
var cheerio = require('cheerio');
var request = require('request');

router.post('/promise', function(req, res, next) {
  var url = req.body;
  var successFn = function(data) { res.render('win'); };
  var errorFn = function(status) { res.json(res.status); };
  var httpPromise = new Promise(function(resolve, reject) {
    request(req.body, function(error, response, body) {
      if (error) reject(res.send('Shitty request. You did not enter a valid URL'));
      if (!error && response.statusCode == 200) resolve(successFn);
      else reject (errorFn);
    });
  });
  httpPromise.then(successFn, errorFn);
});

module.exports = router;

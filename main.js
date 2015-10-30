var ourResult = true;

var promise = new Promise(function(resolve, reject) {
  if (ourResult) resolve('It Worked!');
  else reject(':(');
});

var successFn = function(message) { console.log('Success: ', message); };
var errorFn = function(message) { console.log('Error: ', message); };

promise.then(successFn, errorFn)
       .then()

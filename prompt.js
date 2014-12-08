var prompt = require('prompt');

//
// Start the prompt
//
var a;
var b;
var c;
prompt.start();

//
// Get two properties from the user: username and email
//
prompt.get(['valueA', 'valueB'], function (err, result) {
  //
  // Log the results.
  //
  a = parseInt(result.valueA);
  b = parseInt(result.valueB);
  c = a+b;
  console.log('Command-line input received:');

  console.log('  Value a: ' + result.valueA);
  console.log('  value b: ' + result.valueB);
  console.log('adding values %d', c)
  console.log('  adding value a and b');
});

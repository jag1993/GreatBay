var prompt = require('prompt');
 
  // 
  // Start the prompt 
  // 
prompt.start();
 
  // 
  // Get two properties from the user: username and email 
  // 
  prompt.get(['username', 'email'], function (err, result) {
    // 
    // Log the results. 
    // 
    console.log('Command-line input received:');
    console.log('  username: ' + result.username);
    console.log('  password: ' + result.password);
  });
prompt.start();
function test_prompt(){
   prompt.get(loadDataValues(), function(err, data){
       console.log(data.output);
   });
}
test_prompt();





var userId = 1;
var columns = ['username', 'password'];
var query = connection.query('SELECT ?? FROM ?? WHERE id = ?', [columns, 'users', userId], function(err, results) {
  // ... 
});
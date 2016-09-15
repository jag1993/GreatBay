var mysql = require('mysql');
var connection = mysql.createConnection({
   host: "localhost",
   port: 3306,
   user: "root", //Your username
   password: "Iwsi2017!", //Your password
   database: "greatbay"
})

connection.connect(function(err) {
   if (err) throw err;
   console.log("connected as id " + connection.threadId);
})


// If user selects to BID ON AN ITEM:
connection.query('SELECT * FROM items', function(err, res) {
   if (err) throw err;
   console.log(res);
})
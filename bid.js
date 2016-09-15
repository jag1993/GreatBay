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


// If user selects to BID ON AN ITEM...

// ...show a list of all items:
connection.query('SELECT * FROM items', function(err, res) {
   if (err) throw err;
   console.log(res);
})

// Ask user how much they would like to bid:



// If bid is higher...
if (userBid > price) {
   // ...replace the previous price:

   connection.query("UPDATE items SET ? WHERE ?", [{
      // The new info:
      price: 
   }, {
      // The old info:
      price: 
   }], function(err, res) {});
}

// ELSE the bid is lower...
else (userBid < price) {
   // return that the bid was too low and...
   console.log("Sorry, your bid was too low.");
   // boot the user back to the selection screen:
   
}
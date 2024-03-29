var mysql = require('mysql');
/* If the node mysql module is not found on your system, you may
 * need to do an "sudo npm install -g mysql". */

/* You'll need to fill the following out with your mysql username and password.
 * database: "chat" specifies that we're using the database called
 * "chat", which we created by running schema.sql.*/
var dbConnection = mysql.createConnection({
  user: "root",
  password: "",
  database: "CHAT"
});

dbConnection.connect();
console.log('Woohoo! We connected to the mySQL server');
/* Now you can make queries to the Mysql database using the
 * dbConnection.query() method.
 * See https://github.com/felixge/node-mysql for more details about
 * using this module.*/

exports.addUser = function(username, callback){
  console.log('TRYING TO ADD USER');
  dbConnection.query('INSERT INTO Users (username) VALUES ("' + username + '");', function(err, rows){
    if( err ) throw err;
    dbConnection.query('SELECT * from Users;', function(err, rows){
      callback(err, rows);
      console.log(rows);
      // dbConnection.release();
    });
  });
};

exports.addMessage = function(content, timestamp, U_ID, callback){
  console.log('TRYING TO ADD MESSAGE');

};

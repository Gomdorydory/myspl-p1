let mysql = require('mysql');

let db = mysql.createConnection({
  host: 'localhost', 
  user : 'root', 
  password: 'soQlQjs11!!mysql',
  database: 'dic'
});

db.connect(); //실제 접속이 일어남.

db.query('SELECT * FROM omg', function (error, results, fields) {
  if (error) {
    console.log(error);
  }
  console.log(results);
})

db.end();
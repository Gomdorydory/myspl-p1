let http = require('http');
let url = require('url');
let mysql = require('mysql');

let db = mysql.createConnection({
  host: 'localhost', 
  user : 'root', 
  password: 'soQlQjs11!!mysql',
  database: 'dic'
});
db.connect(); 

let app = http.createServer(function(request, response){
  let _url = request.url;
  let queryData = url.parse(_url, true).query;
  let pathname = url.parse(_url, true).pathname;
  if(pathname === '/'){
      if(queryData.id === undefined){
        db.query('SELECT * FROM omg', function (error, results, fields) {
          if (error) {
            console.log(error);
          }
          console.log(results);
        })
        response.writeHead(200);
        response.end('Success');
      }
    
  }
}
);

app.listen(5000);
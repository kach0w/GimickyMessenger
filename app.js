var express = require('express');
var app = express();
var mysql = require("mysql");
app.set('view engine', 'ejs');

//db connection
var mysql = require("mysql");
var con = mysql.createConnection({
  host: "localhost", 
  user: "root", 
  password: "", 
  database: "messaging", 
});
con.connect(function (err) {
  if (err) throw err;
  console.log("db connected...");
});


app.use(express.json());
app.use(express.urlencoded({
extended: true
}));

app.get('/', function(req, res){
    res.render("Create");
});


app.get('/Read', function(req, res){
    con.query("SELECT * FROM msgs", function (err, result) {
        if (err) throw err;
        //console.log(result);
        res.render('Read', { title: 'yo', userData: result});
    });

});


// app.post('/', function(req, res){
// var a = req.body.name;
// var b = req.body.email;
// var c = req.body.message;
            
//             var sql = "INSERT INTO `msgs`(`name`, `text`) VALUES ('"+a+"','"+b+"','"+c+"')";
//             connection.query(sql, function (err, result) {
//             if (err) throw err;
//             console.log("1 record inserted");
//             });
//             return res.render('Create', { errormessage: 'insert data successfully' });
// });


app.listen(3000);
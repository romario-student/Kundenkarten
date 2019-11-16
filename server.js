var express = require('express');
var app = express();
var sqlite3 = require('sqlite3');
var db = new sqlite3.Database('db/project.db');
var bodyParser = require('body-parser');

app.use(express.static(__dirname + '/public'));
app.use(bodyParser.urlencoded({extended: false}));

app.listen(3000, function(){
    console.log("Server is running on Port 3000");
});

//routes
app.get('/project', function(request, response){
    console.log('GET request received at /project');
    db.all('SELECT * FROM cards', function(err, rows){
        if(err){
            console.log("Error: " + err);
        }
        else {
            response.send(rows);
        }
    })
});

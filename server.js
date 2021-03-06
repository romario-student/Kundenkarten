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

app.post('/project', function(request, response){
    console.log('POST request received at /project');
    db.run('INSERT INTO cards VALUES (?, ?, ?, ?)',
    [request.body.company, request.body.customer, request.body.username, request.body.homepage, function(err){
        if(err) {
            console.log("Error: " + err);
        }
        else {
            response.status(200).redirect('index.html');
        }
    }])
});

app.post('/request', function(request, response){
    console.log('POST request received at /request');
    db.run('INSERT INTO request VALUES (?, ?, ?)',
    [request.body.mail, request.body.subject, request.body.message, function(err){
        if(err) {
            console.log("Error: " + err);
        }
        else {
            response.status(200).redirect('index.html');
        }
    }])
});
app.post('/delete', function(request, response){
    console.log('POST request received at /delete');
    db.run('DELETE FROM cards WHERE company = ?',
    [request.body.company,  function(err){
        if(err) {
            console.log("Error: " + err);
        }
        else {
            response.status(200).redirect('index.html');
        }
    }])
});

app.post('/update', function(request, response){
    console.log('POST request received at /update');
    db.run('UPDATE cards SET username = ?  WHERE company = ?',
    [request.body.username, request.body.company, function(err){
        if(err) {
            console.log("Error: " + err);
        }
        else {
            response.status(200).redirect('index.html');
        }
    }])
});

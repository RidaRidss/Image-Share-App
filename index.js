/**
 * Created by junaid pc on 2/17/2015.
 */
var app = require('express')();
var http = require('http').Server(app);
app.get('/', function(req, res){
    res.sendFile(__dirname + '/index.html');
});

http.listen(3000, function(){
    console.log('listening on *:3000');
});
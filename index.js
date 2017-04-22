var express = require('express');
var path = require('path');
var app= express();
var server = require('http').Server(app);
var io = require('socket.io')(server, { origins: '*:*'});
var port = process.env.PORT||8888;


var subscriber=require("redis").createClient(6380, "gebaredis.redis.cache.windows.net", 
    {auth_pass: 'P3y4W+jD1MGUmouK7Tc3cQaex3/Ficjj+21AJ0/7t/0=',
     tls: {servername:  'gebaredis.redis.cache.windows.net'}});


app.get('/', function(req,res,next){
    res.sendFile(__dirname + '/index.html');
});


io.sockets.on('connection', function(socket){
    console.log("Connection from " + socket.id);
    socket.on('channel', function(channel){
        console.log('Message from client for: ' + channel);
        socket.join(channel);
    });
});

subscriber.on("pmessage", function(pattern,channel, message){
    console.log("Message from " + channel + " was: " + message);
    io.sockets.in(channel).emit('message', message);
});

subscriber.on('error', function(err) {
    console.log('An error occurred ' + err);
});

subscriber.psubscribe("*");


server.listen(port, function() {
    console.log('Listening on port ' + port);
       
});


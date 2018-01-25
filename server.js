const express = require('express');
const app = express();
const socket = require('socket.io');

require('dotenv').config();

app.use(express.static('src'));

app.set('port', process.env.PORT || 3000);

var server = app.listen(app.get('port'), function(){
  console.log("server is running port " + app.get('port'));
});

var io = socket(server);

io.on('connection', function(socket){
  console.log('connection made ', socket.id)
})

const express = require('express');
const app = express();
const socket = require('socket.io');
const  { VERIFY_USER, USER_CONNECTED, LOGOUT } = require('./src/Event');
const { createUser, createMessage, createChat} = require('./src/Factories');

let connectedUsers = {};

require('dotenv').config();

app.use(express.static('src'));

app.set('port', process.env.PORT || 3000);

var server = app.listen(app.get('port'), function(){
  console.log("server is running port " + app.get('port'));
});

var io = socket(server);

io.on('connection', function(socket){
  console.log('connection made ', socket.id);

  socket.on(VERIFY_USER, (username, callback)=>{
    if(isUser(connectedUsers, username)){
      console.log(true)
      callback({isUser: true, user: null })
    } else {
      callback({isUser: false, user: createUser(username)})
    }
  });

  socket.on(USER_CONNECTED, (user)=>{
    connectedUsers = addUser(connectedUsers, user);
    socket.user = user;
    io.emit(USER_CONNECTED, connectedUsers);
    console.log(connectedUsers);
  })
})

function addUser(userList, user){
  let newList = Object.assign({}, userList);
  newList[user.name] = user;
  console.log("this is the list: " + newList)
  return newList;
}

function removeUser(userList, username){
  let newList = Object.assign({username}, userList);
  delete newList[username];
  return newList;
}

function isUser(userList, username){
  return username in userList;
}

const randString = require('crypto-random-string');

const createUser = (name) =>({

  id: randString(10),
  name
});

const createMessage = (message, sender) =>({
  id: randString(10),
  message,
  sender
})

const createChat = (message, name = "Communty", users)=>({
  id: randString(10),
  name,
  messsage,
  users,
  typingUsers: []
})

module.exports = {
  createUser,
  createChat,
  createMessage
}

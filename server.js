const express = require('express');
const app = express();
require('dotenv').config();

app.use(express.static('src'));

app.set('port', process.env.PORT || 3000);

app.listen(app.get('port'), function(){
  console.log("server listening on port: " + app.get('port'));
})

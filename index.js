global.host = 'localhost';
global.port = 3000;

var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');

var app = express();
app.use(express.static(__dirname + '/public'));

app.get('*', function (request, response){
  response.sendFile(path.resolve(__dirname, 'public', 'index.html'))
})

app.listen(global.port || 8080, function() {
  console.log("Node app is running at:", global.port || 8080)
})

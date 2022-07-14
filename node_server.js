var express = require('express');
var app = express();

app.use(express.static(__dirname + '/public'));

app.listen(4040, function() { "127.0.0.1";
  console.log('server up and running');
});
var express = require('express');
var app = express();

app.post('/api/webhook', function (req, res) {
   res.send('Got a POST request');
});

app.listen(8080, function () {
  console.log('Example app listening on port 8080!');
});

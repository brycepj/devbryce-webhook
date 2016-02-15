var express = require('express');
var app = express();
var mailPayload = require('./lib/send_push_notification');

app.post('/api/webhook', function (req, res) {
  mailPayload(req.payload);
  res.send('Got a POST request');
});

app.listen(8080, function () {
  console.log('Example app listening on port 8080!');
});

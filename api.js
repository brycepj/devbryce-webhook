var express = require('express');
var app = express();
var fs = require('fs');

app.post('/api/webhook', function (req, res) {
  fs.appendFile('buildLog.txt', 'webhook call' + new Date(), function (err) {
		console.log("There was an error");
	});
});

app.post('/api/devbryce-jekyll', function (req, res) {
	var blogSrcDir = '/home/devbryce/devbryce/devbryce-jekyll';
	var cmdStr = 'cd ' + blogSrcDir + ' && jekyll build --destination /home/devbryce/public';
	var child = exec(cmdStr, {async:true});
	
	child.stdout.on('data', function(data) {
		fs.appendFile('buildLog.txt', 'built devbryce' + new Date(), function (err) {
			console.log("There was an error");
		});
	});
	res.send('A-okay sir');
});

app.listen(8080, function () {
  console.log('Example app listening on port 8080!');
});

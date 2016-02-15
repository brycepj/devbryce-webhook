var nodemailer = require('nodemailer');

module.exports = function(json){

var transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
        user: 'webhook.bot@gmail.com', // Your email id
        pass: "jNk6cD$9SUv4a[b'" // Your password
    }
});

var text = 'Hello world from \n\n' + req.body.name;

var mailOptions = {
  from: 'webhook.bot@gmail.com', // sender address
  to: 'brycepj@gmail.com', // list of receivers
  subject: 'Email Example', // Subject line
  text: json //, // plaintext body
// html: '<b>Hello world ✔</b>' // You can choose to send an HTML body instead
};

transporter.sendMail(mailOptions, function(error, info){
    if(error){
        console.log(error);
        res.json({yo: 'error'});
    }else{
        console.log('Message sent: ' + info.response);
        res.json({yo: info.response});
    };
});
}


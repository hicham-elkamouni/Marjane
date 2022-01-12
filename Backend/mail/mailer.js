let nodemailer = require('nodemailer');

let transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'testcoding975@gmail.com',
    pass: 'testCoding1998'
  }
});

module.exports = email = {
    mail: (email, subj,msg) => {
        var mailOptions = {
            from: 'testcoding975@gmail.com',
            to: email,
            subject: subj,
            text : msg
        };

        transporter.sendMail(mailOptions, function (error, info) {
            if (error) {
                console.log(error);
            } else {
                console.log('Email sent: ' + info.response);
            }
        });
    },
};
const nodemailer = require('nodemailer');
const fs = require('fs');
const { EMAIL, EMAIL_PASSWORD, TO_MAIL } = require('../constans/config')


const sendEmail = async (fileDir, filename) => {
    // create reusable transporter object using the default SMTP transport
    let transporter = nodemailer.createTransport({
        service: 'gmail',
        // secure: true,//true
        // port: 465,//465
        secure: false,//true
        port: 25,//465
        auth: {
            user: EMAIL,
            pass: EMAIL_PASSWORD
        },
        tls: {
            rejectUnauthorized: false
        }
    });
    // read the PDF file as an attachment
    let pdfAttachment = {
        filename: 'record.pdf',
        content: fs.readFileSync(fileDir)
    };

    // setup email data with unicode symbols
    let mailOptions = {
        from: EMAIL,
        to: TO_MAIL,
        subject: 'Sending PDF attachment using Node.js',
        text: 'Please find attached the PDF file',
        attachments: [pdfAttachment]
    };

    // send mail with defined transport object
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            return console.log(error);
        }
        console.log('Message sent: %s', info.messageId);
        return info.messageId
    });
}

module.exports = {
    sendEmail
}
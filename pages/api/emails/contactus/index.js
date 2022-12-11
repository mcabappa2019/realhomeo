// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

const nodemailer = require('nodemailer');

export default function handler(req, res) {
  try {
    const { email, message, name, subject } = req.body;

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: 'tirhorgwebsite@gmail.com',
        pass: 'olnozijotvkjosxm',
      },
    });

    const mailBody = `
  Name : ${name}\r\n
  Email : ${email}\r\n
  Message : ${message}\r\n
  `;

    const mailOptions = {
      from: `${'TIRH Contact Us'}<support@tirh.org>`,
      to: 'info@tirh.org',
      subject: subject,
      text: mailBody,
      // html: mailBody.replace(/\r\n/g, '</br>'),
    };

    transporter.sendMail(mailOptions, function (error, info) {
      if (error) {
        console.log(error);
        res.status(500).json({ success: false });
      } else {
        console.log('Email sent: ' + info?.response);
        res.status(200).json({ success: true });
      }
    });
  } catch (e) {
    console.log(e);
    res.status(500).json({ success: false });
  }
}

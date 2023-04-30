// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

const nodemailer = require('nodemailer');

export default function handler(req, res) {
  try {
    const { email, phone, name, address, tirhRegId } = req.body;

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: 'tirhorgwebsite@gmail.com',
        pass: 'olnozijotvkjosxm',
      },
    });

    const mailBody = `
  Name : ${name}\r\n
  Address : ${address}\r\n
  Email : ${email}\r\n
  Phone No : ${phone}\r\n
  TIRH REG. NO : ${tirhRegId}\r\n
  `;

    const mailOptions = {
      from: `${'TIRH eClinic Application'}<support@tirh.org>`,
      to: 'care.tirh@gmail.com',
      // to: 'andrbappa@gmail.com',
      subject: 'eClinic Application Request',
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

const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

async function sendMail(to, subject, message) {

  const mailOptions = {
    from: process.env.EMAIL_USER,
    to,
    subject,
    text: message,
  };

  const result = await transporter.sendMail(mailOptions);

  return result;
}

module.exports = sendMail;
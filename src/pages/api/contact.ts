export default function (req: any, res: any) {
  const nodemailer = require("nodemailer");

  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false,
    requireTLS: true,
    logger: true,
    debug: true,
    auth: {
      user: "yasinburakkalkan@gmail.com",
      pass: "qxyfodayzfepepbz",
    },
  });

  const mailOptions = {
    from: "yasinburakkalkan2@gmail.com",
    to: "yasinburakkalkan@gmail.com",
    subject: "Yasin Kalkan 2",
    text: "Email content",
  };

  transporter.sendMail(mailOptions, function (error: any, info: any) {
    if (error) {
      console.log(error);
    } else {
      console.log("Email sent: " + info.response);
      // do something useful
    }
  });

  console.log(req.body);
  res.send("success");
}

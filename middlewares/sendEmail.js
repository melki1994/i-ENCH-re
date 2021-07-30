// const nodemailer = require("nodemailer");
// const { google } = require("googleapis");
// const { OAuth2 } = google.auth;
// require("dotenv").config();
// const REDIRECT_URL = "https://developers.google.com/oauthplayground";

// const {
//   MAILING_SERVICE_CLIENT_ID,
//   MAILING_SERVICE_CLIENT_SECRET,
//   MAILING_SERVICE_REFRESH_TOKEN,
//   SENDER_EMAIL_ADRESS,
// } = process.env;

// const oAuth2Client = new OAuth2(
//   MAILING_SERVICE_CLIENT_ID,
//   MAILING_SERVICE_CLIENT_SECRET,
//   MAILING_SERVICE_REFRESH_TOKEN,
//   REDIRECT_URL
// );
// oAuth2Client.setCredentials({
//   refresh_token: MAILING_SERVICE_REFRESH_TOKEN,
// });

// // send email
// async function sendEmail() {
//   try {
//     const accessToken = await oAuth2Client.getAccessToken();
//     const transport = nodemailer.createTransport({
//       service: "gmail",
//       auth: {
//         type: "OAUTH2",
//         user: SENDER_EMAIL_ADRESS,
//         clientId: MAILING_SERVICE_CLIENT_ID,
//         clientSecret: MAILING_SERVICE_CLIENT_SECRET,
//         refreshToken: MAILING_SERVICE_REFRESH_TOKEN,
//         accessToken,
//       },
//     });

//     const mailOptions = {
//       from: SENDER_EMAIL_ADRESS,
//       to: "ienchereapp@gmail.com",
//       subject: "iEnchère test",
//       text: "Hello from gmail email using API",
//       html: "<h1>Hello from gmail email using API</h1>",
//     };
//     const result = await transport.senEmail(mailOptions, function (err, data) {
//       if (err) return err;
//       return data;
//     });
//   } catch (err) {
//     return err;
//   }
// }

// (exports.activateEmail = (req, res) => {
//   try {
//     const { activation_token } = req.body;
//     const user = jwt.verify(activation_token);
//     console.log(user);

//     console.log(user);
//   } catch (err) {
//     return res.status(500).json({ status: false, message: err.message });
//   }
// }),
//   (module.exports = sendEmail);

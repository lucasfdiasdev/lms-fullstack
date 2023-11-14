require('dotenv').config();
import ejs from 'ejs'
import path from 'path';
import nodemailer, { Transporter } from 'nodemailer';

interface EmailOptions {
  email: string;
  subject: string;
  template: string;
  data: {[key: string]: any};
};

const smtpHost = process.env.SMTP_HOST;
const smtpPort = process.env.SMTP_PORT;
const smtpService = process.env.SMTP_SERVICE;
const smtpMail = process.env.SMTP_MAIL;
const smtpPassword = process.env.SMTP_PASSWORD;

const sendMail = async(options: EmailOptions): Promise<void> => {
  const transporter: Transporter = nodemailer.createTransport({
    host: smtpHost,
    port: parseInt(smtpPort || '587'),
    service: smtpService,
    auth: {
      user: smtpMail,
      pass: smtpPassword
    }
  });

  const { email, subject, template, data } = options;
  
  // get the path to the email template file
  const templatePath = path.join(__dirname, "../mails", template)

  // render the email template with EJS
  const html:string = await ejs.renderFile(templatePath, data);

  // send the email
  const mailOptions = {
    from: smtpMail,
    to: email,
    subject,
    html
  };

  await transporter.sendMail(mailOptions);
};

export default sendMail;
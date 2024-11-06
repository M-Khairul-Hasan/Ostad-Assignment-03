import nodemailer from 'nodemailer';
import { Email_User, Email_Host, Email_Port, Email_Password} from "../config/config.js";

const EmailSender = async (EmailTo,EmailText,EmailSubject,EmailHtmlBody) => {

const transporter = nodemailer.createTransport({
    host: Email_Host,
    port: Email_Port,
    secure: true,
    auth: {
        user: Email_User,
        pass: Email_Password,

    },
    tls: {
        rejectUnauthorized: false
    }
})

    const mailOptions = {
        from: Email_User,
        to: EmailTo,
        subject: EmailSubject,
        text: EmailText,
        html: EmailHtmlBody,
    }
    try {
        await transporter.sendMail(mailOptions);
        return true
    }catch (err){
    return false
    }
}

export default EmailSender
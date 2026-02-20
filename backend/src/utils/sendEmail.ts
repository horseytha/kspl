import nodemailer from 'nodemailer';
import { env } from '../config/env';

export const sendEmail = async (to: string, subject: string, text: string) => {
    try {
        const transporter = nodemailer.createTransport({
            service: 'gmail', // or any other service
            auth: {
                user: env.EMAIL_USER,
                pass: env.EMAIL_PASS,
            },
        });

        await transporter.sendMail({
            from: env.EMAIL_USER,
            to,
            subject,
            text,
        });

        console.log(`Email sent to ${to}`);
    } catch (error) {
        console.error('Error sending email', error);
    }
};

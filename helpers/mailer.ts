import nodemailer from 'nodemailer';
import Client from '../models/clientModel';
import { NextResponse } from 'next/server';



export const sendEmail = async({client: Client}) => {
    try {
        // create transporter
        const transporter = nodemailer.createTransport({
            service: 'Gmail',
            auth: {
              user: process.env.EMAIL_USER,
              pass: process.env.EMAIL_PASS,
            },
          });       
        
        const mailOptions = {
            from: 'mugabimoses@gmail.com',
            to: Client.email,
            subject: 'Thanks for your feedback',
            text: 'Your feedback has been successfully submitted and received.'
        }

        const mailOptions2 = {
            from: 'mugabimoses@gmail.com',
            to: 'mugabimoses@gmail.com',
            subject: 'New feedback received',
            text: `A new feedback has been submitted from ${Client.name}`
        }

        const mailresponse1 = await transporter.sendMail(mailOptions);
        const mailresponse2 = await transporter.sendMail(mailOptions2);
        
        console.log(mailresponse1);
        console.log(mailresponse2);
        
        return NextResponse.json({
            response1: mailresponse1, 
            response2: mailresponse2
        });

    } catch (error) {
        throw new Error(error.message);
    }
}
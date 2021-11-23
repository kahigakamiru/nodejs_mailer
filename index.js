require('dotenv').config();
const express = require('express');
const nodemailer = require('nodemailer');
const app = express();
const PORT = process.env.port;
// const hbs = require('nodemailer-express-handlebars');

const transporter = nodemailer.createTransport({
    service: 'gmail',
    tls: {
        rejectUnauthorized: false
    },
    auth: {
        user: process.env.email,
        pass: process.env.password
    }
});
// transporter.use('compile', hbs({
//     defaultLayout: false,
//     viewEngine: 'express-handlebars',
//     viewPath: './views/'
// }));

transporter.sendMail({
     from: 'kahigandegwa2244@gmail.com',
     to: 'dancanmilgo73@gmail.com',
     subject: 'kugeria mani',
     html: `
      <html>
        <div style="width: 100%; height: auto; background-color: rgba(168, 50, 139, 0.3); border-radius: 5px; padding: 10px;">
          <div style="margin: 20px;">
            <h1 style="color: white;">Hello</h1>
          </div>
          <div style="margin: 20px; color: black; line-height: 1.6; font-size: 18px;">
            <span>That class was Awesome, I learnt:</span><ul>
                                                   <li>how to give access to gmail</li>
                                                   <li>how to send emails in backend</li>
                                                   <li>how to send to multiple people</li>    
                                               </ul>
            </div>
        </div>
      </html>
    `,
    attachments: [

    ]

}, (error, response) => {
    if(error)
    console.log('Error', error);
    else
     console.log('Mail sent, ', response);
})
app.listen(PORT, () => {
    console.log('Server running', PORT);
})

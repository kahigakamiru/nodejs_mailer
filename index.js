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
     to: 'labangichukimaina@gmail.com',
     subject: 'kugeria mani',
     text: 'kesho naanzia hapa',
    //  template: 'index'

}, (error, response) => {
    if(error)
    console.log('Error', error);
    else
     console.log('Mail sent, ', response);
})
app.listen(PORT, () => {
    console.log('Server running', PORT);
})
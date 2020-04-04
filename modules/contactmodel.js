"use strict";
const nodemailer = require("nodemailer");
const bd = require('./../bd');

// async..await is not allowed in global scope, must use a wrapper
async function main(objeto) {
    try {

        let transporter = nodemailer.createTransport({
            // simple mail transfer protocol, pop3
          host: "smtp.gmail.com",
          port: 587,
          secure: false, // true for 465, false for other ports
          auth: {
            user: 'mayratbravo@gmail.com', // generated ethereal user
            pass: 'mayt0709' // generated ethereal password
          },
        //   transport security layer
          tls: {
              rejectUnauthorized : false
          }
        });
        let info = await transporter.sendMail({
          from: '"Fred Foo 👻" <foo@example.com>', // sender address
          to: 'maratbravo@gmail.com', // list of receivers
          subject: "CONTACTO DESDE LA WEB ✔", // Subject line
      
          html: "El usuario : "+objeto.nombre + " "+objeto.apellido+" con correo : " +objeto.mail + " mando el siguiente mensaje :<br> "+objeto.comentario // html body
        });
      
        return info.messageId;


    } catch(error) {
        console.log(error);
    }
}

module.exports = {main}
var express = require('express');
var router = express.Router();
const contactmodel = require('./../modules/contactmodel');

router.get('/',(req,res,next)=> {
    res.render('nosotros');
});

router.post('/',async(req,res,next)=> {
    let objCont = {
        nombre : req.body.nombre,
        apellido : req.body.apellido,
        email : req.body.mail,
        contacto : req.body.comentario
    }
    let respuesta = await contactmodel.main(objCont);
    // CANNOT SET HEADERS AFTER THEY ARE SENT
    if(respuesta) {
        res.render('nosotros', {status : true,message : 'Correo enviado, en breve nos contactaremos'});
    } else {
        res.render('nosotros', {status : false,message : 'No se pudo enviar el correo , intente de nuevo màs tarde'});
    }
})

module.exports = router;
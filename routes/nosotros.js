var express = require('express');
var router = express.Router();

router.get('/',(req,res,next)=> {
    res.render('nosotros');
});

router.post('/',async(req,res,next)=> {
    let objCont = {
        nombre : req.body.nombre,
        apellido : req.body.apellido,
        mail : req.body.mail,
        comentario : req.body.comentario
    }
    let respuesta = await contactmodel.main(objCont);
    if(respuesta) {

        res.render('contacto', {status : true,message : 'Correo enviado, en breve nos contactaremos'})
    } else {
        res.render('contacto', {status : false,message : 'No se pudo enviar el correo , intente de nuevo màs tarde'})
    }
    res.end();
})

module.exports = router;
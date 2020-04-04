var express = require('express');
var router = express.Router();
const usuariosmodel = require('./../modules/usuariosmodel');
const md5 = require('md5')


router.get('/',async(req,res,next)=> {
    res.render('login', {message : null});
})

router.post('/', async(req,res,next)=> {
    try {
        console.log(req.body);
        let resultado = await usuariosmodel.authUser(req.body.usuario,req.body.password);
        if(resultado.length > 0) {
            // crear la variable de sesion (superglobal)
            // {req : session : {usuario : 1}}
            // [{id_usuario : 1, nombre : 'franco di leo'}]
            console.log(resultado)
            let id = resultado[0].id_usuario;
            let permisos = resultado[0].permisos;
            if(permisos == 1){
                console.log("Ha ingresado como admin")
                req.session.admin = id;
                res.redirect('/admin');
            } else {
                console.log("Ha ingresado como usuario")
                req.session.usuario = id;
                res.redirect('/index');
            }
        } else {
            res.render('login', {message : 'Usuario o contraseña incorrectos'});
        }
    } catch(error) {
        console.log(error);
    }
})
module.exports = router;
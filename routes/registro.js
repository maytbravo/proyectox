var express = require ('express');
var router = express.Router();
const usuariosmodel = require('./../modules/usuariosmodel');

// 1. router.get() : muestro la vista de registro
// 2. router.post()
const md5 = require('md5'); // 32 caracteres | no es reversible

router.get('/', (req,res,next)=> {
    res.render('registro');
})

router.post('/', async (req,res,next)=> {
    let objPersona = {
        name : req.body.name,
        surname : req.body.surname,
        gender : req.body.gender,
        telefono : req.body.telefono,
        email : req.body.email,
        usuario : req.body.usuario,
        password : md5(req.body.password),
    }
    let result = await usuariosmodel.createPersona(objPersona);
    console.log(result);
    if(result){
        res.render('registro', {status : true,message : 'Registro exitoso'});
    } else {
        res.render('registro', {status : false,message : 'Error al registrarse. Revise nuevamente los datos ingresados'}); 
    }
})

module.exports = router;
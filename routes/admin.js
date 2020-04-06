const express = require('express');
const router = express.Router()
const adminmodel = require('../modules/adminmodel');
const articulosmodel = require('../modules/articulosmodel');
const multer = require('multer');
const uuid = require('node-uuid');
const fs = require('fs'); // file system
// crear un archivo .tmp dentro de la carpeta dest
const files = multer ({dest : './uploads'});
// AJAX : async javascript and xml
// observer (angular, react, vue, etc)
// async -> todas las funciones que realizan consultas
// {id : }


router.post('/alta', files.array('imagen',3), async(req,res,next)=> {
    try {
        let nombre_final= null;
        console.log(req.files);
        if (req.files[0].mimetype == 'image/png' || req.files[0].mimetype == 'image/jpeg') {
            
            if (req.files[0].size <900000) {
                let array_mimetype = req.files[0].mimetype.split('/');
                let extension = array_mimetype[1];
                let name_uuid = uuid();
                nombre_final = name_uuid+"."+extension;
                let temp_name = req.files[0].filename;
                console.log("El nombre de la imagen temporal es : "+temp_name);
                
                fs.createReadStream('./uploads/'+temp_name).pipe(fs.createWriteStream('./public/images/'+nombre_final))
                console.log("El nombre final de la imagen en el server es : " +nombre_final);
                fs.unlink(`./uploads/`+temp_name, (err) => {
                    err ? console.log(error) : console.log();
                });
            } else {
                res.render('admin', {message : 'Asegurate de que la imagen sea mas chica'});
            }
        } else {
            res.render('admin', {message : 'La imagen no es del formato correcto'});
        }
        let objArticulo = {
            nombre : req.body.nombre,
            // imagen : ''
            imagen : nombre_final,
            precio : req.body.precio,
            descripcion : req.body.descripcion,
            id_c : req.body.categoria
        }
        console.log(objArticulo);
        let resultado = await adminmodel.crearArticulo(objArticulo);
        console.log(resultado);
        res.redirect('/admin');
    } catch(error) {
        console.log(error);
        res.render('errorpage');
    }
})

router.get('/alta',async (req,res,next)=> {
    try {
        let array_categorias = await adminmodel.getCategorias();
        console.log(array_categorias);
        res.render('altaarticulo', {categorias : array_categorias});
    } catch(error){
        res.render('errorpage');
    }
})

router.post('/editar', async(req,res,next)=> {
    try {

        let objArticulo = {
            nombre : req.body.nombre,
            imagen : req.body.imagen,
            precio : req.body.precio,
            descripcion : req.body.descripcion,
            id_c : req.body.categoria
        }
        let id = req.body.id_a;
        let respuesta = await articulosmodel.updateArticulo(objArticulo,id);
        console.log(respuesta);
        res.redirect('/admin');
    } catch(error) {
        console.log(error);
        res.render('errorpage');
    }
})

router.get('/editar/:id', async(req,res,next)=> {
    try {
        let id = req.params.id;
        let articulo = await articulosmodel.getArticulo(id);
        console.log(articulo);
        res.render('editararticulo',{articulos_array : articulo, idURL : id});

    } catch(error) {
        console.log(error);
        res.render('errorpage');
    }
})

router.get('/eliminar/:id', async(req,res,next)=> {
    try{
        let id = req.params.id;
        await adminmodel.eliminarArticuloPorId(id);
        res.redirect('/admin');
    } catch(error) {
        // render('error')
    }
})
router.get('/',async (req,res,next)=> {
    try {
        let data = await adminmodel.getArticulosAdmin();
        console.log(data);
        res.render('admin',{articulos_array : data});
    } catch(error) {
        // mostrar una página de error
        res.render('errorpage');
    }
})

module.exports = router; 
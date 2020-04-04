const express = require('express');
const router = express.Router()
const adminModel = require('../modules/adminmodel');
const articulosmodel = require('../modules/articulosmodel');
const multer = require('multer');
const uuid = require('node-uuid');
const fs = require('fs'); // file system
// crear un archivo .tmp dentro de la carpeta dest
const upload = multer({dest : './uploads'});
// AJAX : async javascript and xml
// observer (angular, react, vue, etc)
// async -> todas las funciones que realizan consultas
// {id : }

router.get('/',async(req,res,next)=> {
    res.render('admin', {message : null});
})

router.post('/editar', async(req,res,next)=> {
    try {

        let objArticulo = {
            nombre : req.body.nombre,
            descripcion : req.body.descripcion,
            categorias : req.body.categoria,
            precio : req.body.precio,
            imagen : req.body.imagen
        }
        let id_a = req.body.id_a;
        let respuesta = await articulosmodel.updateArticulo(objArticulo,id_a)
        res.redirect('/admin');
    } catch(error) {
        console.log(error);
        res.render('errorpage');
    }
})

router.get('/admin', async(req,res,next)=> {
    try {
        let id = req.params.id;
        let articulo = await articulosmodel.getArticulo(id);
        console.log(articulo);
        res.render('editar',{articulo_array : articulo, idURL : id});

    } catch(error) {
        console.log(error);
        res.render('errorpage');
    }
})


router.post('/alta',upload.array('imagen',1),async(req,res,next)=> {
    try {
        var name_imagen = '';
        if(req.files[0].mimetype == 'image/jpeg' || req.files[0].mimetype == 'image/png') {
            if(req.files[0].size <= 1000000) {
                // enctype ="multipart/form-data"
                let array_mime = req.files[0].mimetype.split('/'); //image/jpeg
                let ext = array_mime[1]; // png | jpeg
                let nombre_aleatorio = uuid();
                name_imagen = nombre_aleatorio + "." + ext;
                let temporal_name = req.files[0].filename;


                fs.createReadStream('./uploads/'+temporal_name).pipe(fs.createWriteStream('./public/images/'+name_imagen))

                fs.unlink('./uploads/'+temporal_name,(err)=> {
                    if(err) {
                        console.log(err);
                    } else {
                        console.log("archivo temporal borrado")
                    }
                })
            } else {
                console.log("Imagen muy grande")
            }

        } else {
            console.log("formato incorrecto")
        }
        let objArticulo = {
            nombre : req.body.nombre,
            // imagen : ''
            imagen : name_imagen,
            precio : req.body.precio,
            categorias : req.body.categoria,
            descripcion : req.body.descripcion
        }
        let resultado = await adminmodel.crearArticulo(objArticulo);
        res.redirect('/admin');
    } catch(error) {
        console.log(error);
        res.render('errorpage');
    }
})


router.get('/alta',async (req,res,next)=> {
    try {
        let categorias = await adminmodel.getCategorias();
        res.render('altanoticia', {array_categorias : categorias});
    } catch(error){
        // res.render('error')
    }
})

router.get('/eliminar/:id', async(req,res,next)=> {
    try{
        let id = req.params.id_a;
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
        res.render('error');
    }

})



module.exports = router; 
var express = require('express');
var router = express.Router();
var articulosmodel = require('./../modules/articulosmodel');
 
 router.get ('/',async(req,res,next)=> {
    let articulos_array = await articulosmodel.getArticulos();
    res.render('store',{articulos : articulos_array});
});

router.get ('/remeras',async (req,res,next)=> {
    let articulos_array = await articulosmodel.getRemeras();
    console.log(articulos_array);
    res.render('store',{articulos : articulos_array});
});

router.get ('/buzos',async (req,res,next)=> {
    let articulos_array = await articulosmodel.getBuzos();
    console.log(articulos_array);
    res.render('store',{articulos : articulos_array});
});

router.get ('/shorts',async (req,res,next)=> {
    let articulos_array = await articulosmodel.getShorts();
    console.log(articulos_array);
    res.render('store',{articulos : articulos_array});
});

router.get ('/vestidos',async (req,res,next)=> {
    let articulos_array = await articulosmodel.getVestidos();
    console.log(articulos_array);
    res.render('store',{articulos : articulos_array});
});

router.get ('/ropainterior',async (req,res,next)=> {
    let articulos_array = await articulosmodel.getInterior();
    console.log(articulos_array);
    res.render('store',{articulos : articulos_array});
});

router.get ('/accesorios',async (req,res,next)=> {
    let articulos_array = await articulosmodel.getAccesorios();
    console.log(articulos_array);
    res.render('store',{articulos : articulos_array});
});

router.get ('/abrigos',async (req,res,next)=> {
    let articulos_array = await articulosmodel.getAbrigos();
    console.log(articulos_array);
    res.render('store',{articulos : articulos_array});
});

router.get ('/shoes',async (req,res,next)=> {
    let articulos_array = await articulosmodel.getShoes();
    console.log(articulos_array);
    res.render('store',{articulos : articulos_array});
});

router.get('/:idArticulo', async (req,res,next)=> {
    let id = req.params.idArticulo; // 1
    let data = await articulosmodel.getArticulo(id);
    res.render('articulo', {
        articulos_array : data, 
        id_a : req.params.idArticulo
    });
 })
module.exports = router;
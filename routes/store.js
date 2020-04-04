var express = require('express');
var router = express.Router();
//var articulosmodel = require('./../modules/articulosmodel');

const objetoArticulo = {
    nombre : "Buzo panda",
    // imagen : ''
    imagen : "",
    precio : 600,
    categoria : "Buzos",
    descripcion : "Buzo color blanco y negro con detalles de panda."
}

router.get ('/',(req,res,next)=> {
    //console.log(req.params);
    res.render('store',{articulos : objetoArticulo});
});

module.exports = router;
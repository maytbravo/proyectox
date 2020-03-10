var express = require('express');
var router = express.Router();

router.get('/',(req,res,next)=> {
    res.render('store');
});

router.get ('/:id',(req,res,next)=> {
    console.log(req.params);
    res.render('id',{id : req.params.id});
});
module.exports = router;
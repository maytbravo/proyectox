const express = require('express');
const router = express.Router();
const multer = require('multer');
const files = multer ({dest : './uploads'});
const fs = require('fs');
const uuid = require('node-uuid');

router.get('/', (req,res,next)=> {
    res.render('control');
})

router.post('/', files.array('imagen',3), async(req,res,next)=> {
    try {
        let nombre_final= null;
        console.log(req.files);
        if (req.files[0].mimetype == 'image/png' || req.files[0].mimetype == 'image/jpeg') {
            
            if (req.files[0].size <900000) {
                let mimetype = req.files[0].mimetype;
                let array_mimetype = mimetype.split('/');
                let extension = array_mimetype[1];
                let name_uuid = uuid();
                nombre_final = name_uuid+"."+extension;
                let temp_name = req.files[0].filename;
                
                fs.createReadStream(`./uploads/${temp_name}`).pipe(fs.createWriteStream(`/public/images/${nombre_final}`));
                fs.unlink(`./uploads/${temp_name}`, (err) => {
                    err ? console.log(error) : console.log();
                });
            } else {
                res.render('control', {message : 'Asegurate de que la imagen sea mas chica'});
            }
        } else {
            res.render('control', {message : 'La imagen no es del formato correcto'});
        }
    } catch (error) {
        console.log(error);
    }
})

module.exports = router;
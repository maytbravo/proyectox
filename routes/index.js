var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'May Store' });
});

/*router.post('/',(req,res,next)=> {
  if(req.body.email != "" && req.body.password != "") {
    res.render('login', {msglogin: 'usuario aprobado'});
  } else {
    res.render('login', {msglogin: 'usuario no aprobado'});
  }
  console.log(req.body);
});*/
module.exports = router;

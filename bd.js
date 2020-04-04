const mysql = require('mysql');
const util = require('util');

const pool = mysql.createConnection ({
    connectionLimit: 10,
    host:'localhost',
    user: 'root',
    password: '',
    database: 'proyectox'
});

// pool : referencia de la conexion a localhost con user root, password  : '', y base de datos noticias

// 
// pool.query("select * from noticias") : INSERT, UPDATE, DELETE, SELECT

pool.query = util.promisify(pool.query);
console.log("Conexion a la base de datos realizada");

module.exports = pool;
const mysql = require('mysql');
const util = require('util');

const pool = mysql.createConnection ({
    connectionLimit: 10,
    host:'localhost',
    user: 'root',
    password: '',
    database: 'proyectox'
});

pool.query = util.promisify(pool.query);

module.export = pool;
const pool = require('./../bd');

async function updateArticulo(obj,id) {
    try {
        // id : Primary key de la tabla. Actualiza solo un articulo
        let query = "update articulo set ? where id_a = ?"
        let rows = await pool.query(query,[obj,id]);
        return rows;
    } catch(error) {
        throw error;
    }
}
// consultar todas las noticias
async function getArticulos() {
    try {
        let consulta =  "select * from articulo";
        // rows contiene el resultado de la consulta (array de objetos)
        let rows =  await pool.query(consulta);
        return rows;
    } catch(error) {
        console.log(error);
    }
}
async function getRemeras() {
    try {
        let query = "select * from articulo natural join categoria where id_c = 1"
        let rows = await pool.query(query);
        return rows;
    } catch (error) {
        console.log(error);
    }
}

async function getBuzos() {
    try {
        let query = "select * from articulo natural join categoria where id_c = 2"
        let rows = await pool.query(query);
        console.log(rows);
        return rows;
    } catch (error) {
        console.log(error);
    }
}

async function getShorts() {
    try {
        let query = "select * from articulo natural join categoria where id_c = 3"
        let rows = await pool.query(query);
        return rows;
    } catch (error) {
        console.log(error);
    }
}

async function getVestidos() {
    try {
        let query = "select * from articulo natural join categoria where id_c = 4"
        let rows = await pool.query(query);
        return rows;
    } catch (error) {
        console.log(error);
    }
}

async function getInterior() {
    try {
        let query = "select * from articulo natural join categoria where id_c = 5"
        let rows = await pool.query(query);
        return rows;
    } catch (error) {
        console.log(error);
    }
}

async function getAccesorios() {
    try {
        let query = "select * from articulo natural join categoria where id_c = 6"
        let rows = await pool.query(query);
        return rows;
    } catch (error) {
        console.log(error);
    }
}

async function getAbrigos() {
    try {
        let query = "select * from articulo natural join categoria where id_c = 7"
        let rows = await pool.query(query);
        return rows;
    } catch (error) {
        console.log(error);
    }
}

async function getShoes() {
    try {
        let query = "select * from articulo natural join categoria where id_c = 8"
        let rows = await pool.query(query);
        return rows;
    } catch (error) {
        console.log(error);
    }
}

async function getArticulo(id) {
    try {
        let query = "select * from articulo natural join categoria where id_a = ?";
        let rows = await pool.query(query,[id]);
        return rows; 
    } catch(error){
        console.log(error);
    }
}

module.exports = {getArticulos, getArticulo,updateArticulo,getRemeras,getBuzos,getShorts,getVestidos,getShoes,getAbrigos,getInterior,getAccesorios}
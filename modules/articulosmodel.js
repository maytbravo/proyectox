
const pool = require('./../bd');

async function searchArticulo(obj,id) {
    try {
        // id : Primary key de la tabla. Actualiza solo un articulo
        let query = "select * from articulo where nombre = ?"
        let rows = await pool.query(query,[obj,id]);
        return rows;
    } catch(error) {
        throw error;
    }
}

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
        // DATE_FORMAT(fecha_creacion,"%d/%m/%Y") as fecha
        let consulta =  "select * from articulos";
        // rows contiene el resultado de la consulta (array de objetos)
        let rows =  await pool.query(consulta);
        return rows;
    } catch(error) {
        console.log(error);
    }

}

// traigo una noticia puntual : 3
async function getArticulo(id) {
    // solo las funciones async tienen bloque try ´catch
    try {
        let query = "select * from articulo join categoria on articulo.id_categoria = categoria.id where id_a = ?";
        let rows = await pool.query(query,[id]);
        return rows; 
    } catch(error){
        console.log(error);
    }

}


module.exports = {getArticulos, getArticulo,updateArticulo}
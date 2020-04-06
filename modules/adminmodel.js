const pool = require('../bd');

async function eliminarArticuloPorId(id){
    try{
        let query = "delete from articulo where id_a = ?";
        let rows = await pool.query(query,id);
        return rows;
    } catch(error) {
        throw error;
    }
}

// select * from noticia order by id_n desc
async function getArticulosAdmin() {
    try {
        // select * from noticia join autor on n.id_autor = a.id
        let query = "select * from articulo natural join categoria";
        let rows = await pool.query(query);
        // noticia + id, nombre, apellido
        console.log(rows);
        return rows;
    } catch(error){
        throw error;
    }
}

async function getCategorias() {
    try{
        let query = "select * from categoria";
        let rows = await pool.query(query);
        return rows;
    } catch(error) {
        throw error;
    }
}

async function crearArticulo(obj) {
    try {
        let query = "insert into articulo set ?";
        let rows = await pool.query(query,obj);
        return rows;
    } catch(error) {
        throw error;
    }

}
module.exports = {crearArticulo,getArticulosAdmin, eliminarArticuloPorId, getCategorias}
var pool = require('./../bd');

async function getPersonaByUserAndPassword(u,p) {
    try {
        let query = "select id_usuario,name from persona where usuario = ? and password = ?";
        // [] empty set
        const rows = await pool.query(query,[u,p]);
        return rows;
    } catch(error) {
        throw error;
    }
}

async function createPersona(objeto) {
    // {
        // fecha_nacimiento : ''
        // nombre : 'x',
        // mail : 'asd@gmail.com',
        // telefono : '1234',
        // password : '1234',
    //}
    try {
        // insert into usuario (nombre,mail,telefono,password,fecha_nacimiento) values ('franco','dileo.francoj@gmail.com','11111111','1234','1994-03-29');
        // let query = "insert into usuario (nombre,mail,telefono,password,fecha_nacimiento) values (?,?,?,?,?)";
        // const rows = await pool.query(query,[nombre,mail,telefono,password,fecha_nacimiento])
        let query ="insert into persona set ?";
        const rows = await pool.query(query,[objeto]);
        return rows;

    } catch(error) {
        console.log(error);
    }

}
async function authUser(usuario,password) {
    try {
        console.log("El usuario que llega al mode : ", usuario,  " el password que llega al model : ",password)
        // select * from usuario where mail = 'dileo.francoj@gmail.com' and password = '1234'
        let query = "select * from persona where usuario = ? and password = ?";
        // [{}]
        console.log(query);
        const rows = await pool.query(query,[usuario,password]);
        return rows;
        // empty set : 0 registros
    } catch(error) {
        console.log(error);
    }
}
//async function insertUserRegistration(i,n,s,t,g,e,u,p) {
//    try {
//        let name = "insert into persona (id_usuario, name, surname, telefono, gender, email, usuario, password) values [?,?,?,?,?,?,?,?]";
//        const data = await pool.createQuery(createQuery,[i,n,s,t,g,e,u,p]);
//        return data;
//    } catch (error) {
//        throw error;
//    }
//}

module.exports = {getPersonaByUserAndPassword,createPersona,authUser}
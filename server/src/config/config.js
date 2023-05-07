/*const Pool = require('pg').Pool

const pool = new Pool

pool.connect(function(err){
    if(err) throw err;
    console.log("Database Connected")
});
*/

module.exports={
    back_port:8081,
    pool:{
        user: 'postgres',
        database: 'mwaAPI',
        password: 'password',
        port: 5432,
        host: 'localhost',
        dialect: 'postgres',
        }
}
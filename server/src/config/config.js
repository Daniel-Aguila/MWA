const config = require("./config/config.js")
const Pool = require('pg').Pool
const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'mwaAPI',
  password: 'password',
  port: 5432,
})

pool.connect(function(err){
    if(err) throw err;
    console.log("Database Connected")
});

module.exports={
    back_port:8081,
    pool
}
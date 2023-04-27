const config = require("./config/config.js")
const Pool = require('pg').Pool
const pool = new Pool({
  user: config.db_user,
  host: config.db_host,
  database: config.db_database,
  password: config.db_password,
  port: config.db_port,
})

pool.connect(function(err){
    if(err) throw err;
    console.log("Database Connected")
});

//GET
const getUsers = (req,res)=>{
    pool.query('SELECT * FROM users', (err,results)=>{
        if (err) throw err;
        res.status(200).json(results.rows);
    })
}

const getSongsbyUser = (req,res)=>{
    const userid = req.params.userid;

    pool.query('SELECT * FROM usersongs WHERE userid = $1', [userid], (err,results)=>{
        if(err) throw err;
        res.status(200).json(results.rows);
    })
}

//POST
const createUser =(req,res)=>{
    const{username,password,sex,age} = req.body;
    pool.query('INSERT INTO users (username,password,sex,age) VALUES ($1,$2,$3,$4)', [username,password,sex,age], (err,results)=>{
        if(err) throw err;
        res.status(201).send(`User added`);
    })
}

const addSongbyUserid = (req,res)=>{
    const{username,song,rating,songname}=req.body;
    const userid = "";
    pool.query('SELECT userid FROM users WHERE username=$1',[username],(err,results)=>{
        if(err)throw err;
        res.status(201).send(`Got userid`);
        userid = parseInt(results.rows[0]);
    })
    //after getting userid, now we can add songs to a specific user
    pool.query('INERT INTO usersongs VALUES ($1,$2,$3,$4)',[userid,song,rating,songname],(err,results)=>{
        if(err)throw err;
        res.status(201).send(`Song added to specific user`);
    })
}

//DELETE
const deleteUser =(req,res)=>{
    const userid = parseInt(req.params.userid);
    pool.query('DELETE FROM users WHERE userid=$1',[userid],(err,results)=>{
        if(err)throw err;
        res.status(200).send(`User deleted with userid = ${userid}`)
    })
}

module.exports={
    getUsers,
    getSongsbyUser,
    createUser,
    addSongbyUserid,
    deleteUser
}
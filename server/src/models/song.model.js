const config = require('server/src/config/config.js')

const pool = config.pool;

const getSongsbyUser = (req,res)=>{
    const userid = req.params.userid;

    pool.query('SELECT * FROM usersongs WHERE userid = $1', [userid], (err,results)=>{
        if(err) throw err;
        res.status(200).json(results.rows);
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

module.exports = {
    getSongsbyUser,
    addSongbyUserid
}
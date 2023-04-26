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
        res.status(201).send('User added');
    })
}

const addSongByUserid = (req,res)=>{
    const{username,song,rating,songname}=req.body;
    const userid = "";
    pool.query('SELECT userid FROM users WHERE username=$1',[username],(err,results)=>{
        if(err)throw err;
        res.status(201).send('Got userid');
        userid = results.rows[0];
    })
    //after getting userid, now we can add songs to a specific user
    pool.query('INERT INTO usersongs VALUES ($1,$2,$3,$4)',[userid,song,rating,songname],(err,results)=>{
        if(err)throw err;
        res.status(201).send('Song added to specific user');
    })
}

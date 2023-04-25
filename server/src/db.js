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
    pool.query('INSERT INTO users VALUES ($1,$2,$3,$4)', [username,password,sex,age], (err,results)=>{
        if(err) throw err;
        res.status(201).send('User added');
    })
}

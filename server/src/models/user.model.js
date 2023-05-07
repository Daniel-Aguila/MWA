module.exports = (sequelize, DataTypes) => {
    sequelize.define ('User', {
        username:{
            type: DataTypes.STRING,
            unique: true
        },
        password: DataTypes.STRING,
        sex: DataTypes.STRING,
        age: DataTypes.INTEGER
    })
}

/*const config = require('server/src/config/config.js')

const pool = config.pool;

const getUsers = (req,res)=>{
    pool.query('SELECT * FROM users', (err,results)=>{
        if (err) throw err;
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

//DELETE
const deleteUser =(req,res)=>{
    const userid = parseInt(req.params.userid);
    pool.query('DELETE FROM users WHERE userid=$1',[userid],(err,results)=>{
        if(err)throw err;
        res.status(200).send(`User deleted with userid = ${userid}`)
    })
}

*/
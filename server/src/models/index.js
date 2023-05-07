const fs = require('fs')
const path = require('path')
const {Sequelize} = require('sequelize')
const config = require('../config/config')
const db = {}

const sequelize = new Sequelize(config.pool.database,config.pool.user,config.pool.password,{
    host: config.pool.host,
    dialect: config.pool.dialect
})

sequelize
.authenticate()
.then(() => {
  console.log('Connection has been established successfully.');
})
.catch(err => {
  console.error('Unable to connect to the database:', err);
});

fs
    .readdirSync(__dirname)
    .filter((file)=>
        file =! 'index.js'
    )
    .forEach((file)=>{
        const model = sequelize.import(path.join(__dirname,file))
        db[model.name] = model

    })

db.sequelize = sequelize
db.Sequelize = Sequelize

module.exports = db
const express = require("express")
const bodyParser = require("body-parser")
const cors = require("cors")
const morgan = require("morgan")

const Pool = require('pg').Pool
const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'mwaAPI',
  password: 'password',
  port: 5432,
})


const app = express() //builds an express server
app.use(morgan("combined"))
app.use(bodyParser.json())
app.use(cors())

//define route
app.get('/status', (req, res) => {
    res.send({
        message: `hello world!`
    })
})

app.post('/register', (req,res)=>{
    res.send({
        message: `Hello ${req.body.email}! Your user was registered! Have fun!`
    })
})

app.listen(process.env.PORT || 8081)

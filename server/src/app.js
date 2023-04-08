const express = require("express")
const bodyParser = require("body-parser")
const cors = require("cors")
const morgan = require("morgan")
const { Client } = require('pg')
const client = new Client()
/*
await client.connect()
 
const res = await client.query('SELECT $1::text as message', ['Hello world!'])
console.log(res.rows[0].message) // Hello world!
await client.end()
*/

/*

*/

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

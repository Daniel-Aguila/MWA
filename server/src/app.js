const express = require("express")
const bodyParser = require("body-parser")
const cors = require("cors")
const morgan = require("morgan")
const db = require("./db")

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

app.get('/getUsers', db.getUsers)
app.get('/getSongbyUser', db.getSongsbyUser)
app.post('/createUser', db.createUser)
app.post('/addSongbyUserid', db.addSongbyUserid)
app.delete('/deleteUser', db.deleteUser)

app.listen(process.env.PORT || 8081)

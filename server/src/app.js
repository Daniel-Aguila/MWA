const express = require("express")
const bodyParser = require("body-parser")
const cors = require("cors")
const morgan = require("morgan")

const app = express() //builds an express server
app.use(morgan("combined"))
app.use(bodyParser.json())
app.use(cors())

//define route
app.get('/status', (req, res) => {
    res.send({
        message: "hello world!"
    })
})

app.listen(process.env.PORT || 8081)

const express = require("express")
const bodyParser = require("body-parser")
const cors = require("cors")
const morgan = require("morgan")
const config = require("./config/config.js")

const app = express() //builds an express server
app.use(morgan("combined"))
app.use(bodyParser.json())
app.use(cors())

routes = require("./routes.js")(app) //we send the app

app.listen(config.back_port)

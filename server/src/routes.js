const db = require("./db")
const AuthenticationController = require("./controllers/AuthenticationController")
module.exports=(app)=>{
    //define route
    app.get('/status', (req, res) => {
        res.send({
            message: `hello world!`
        })
    }),

    app.post('/register', AuthenticationController.register),
    app.get('/getUsers', db.getUsers),
    app.get('/getSongbyUser', db.getSongsbyUser),
    app.post('/createUser', db.createUser),
    app.post('/addSongbyUserid', db.addSongbyUserid),
    app.delete('/deleteUser', db.deleteUser)

}
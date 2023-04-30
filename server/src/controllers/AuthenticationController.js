const userModel = require('server/src/models/user.model.js')

module.exports = {
    async register(req,res){
        try{
            const user = await userModel.createUser(req.body)
            res.send(user.toJSON())
        }catch(err){
            res.status(400).send({
                error: 'PLACEHOLDER'
            })
        }
    }
}
const jwt = require('jsonwebtoken')
const userSchema = require('../models/user')
const secret = require('../config/config').secret

module.exports = {
   login: function(res,req){
            console.log(req.req.body)
            const user = req.req.body.user
            console.log(user)
            const password = req.req.body.senha
            userSchema.findOne({email:user}).exec((err,login)=>{
            if(login){
                if(err){
                    console.log(err)
                }
                console.log(login)
                if(login.senha === password){
                    console.log("confirmou senha")
                    let token = jwt.sign({ user:login.email },secret,{ expiresIn: '24h' })
                    return res.res.json({
                        success:true,
                        message:"Autenticação sucedida",
                        token: token
                    })
                }
                else {
                    console.log("errou senha")
                    return res.res.send({
                        status:405,
                        message:"Usuário ou senha incorreta"
                    })
                }
            }
            else {
                return res.res.send({
                status:405,
                message:"Usuário ou senha incorreta"
                })
            }
        })
      }
}
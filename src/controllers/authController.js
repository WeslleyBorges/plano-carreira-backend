const jwt = require('jsonwebtoken')
const userSchema = require('../models/user')
const secret = require('../config/config').secret

module.exports = {
   login: function(res,req){
            const user = req.req.body.user
            const password = req.req.body.senha
            userSchema.findOne({email:user}).exec((err,login)=>{
            if(login){
                if(err){
                    console.log(err)
                }
                if(login.senha === password){
                    let token = jwt.sign({ user:login.email },secret,{ expiresIn: '7d' })
                    return res.res.json({
                        success:true,
                        message:"Autenticação sucedida",
                        token: token
                    })
                }
                else {
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
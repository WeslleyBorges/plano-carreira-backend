let JWT = require('jsonwebtoken')
const config = require('../config/config')

let checkToken = (req, res, next)=>{
    console.log(req.headers)
    let token = req.headers['x-access-token'] || req.headers['authorization']
    if(token){
        if (token.startsWith('Bearer ')) {
            // Remove Bearer from string
            token = token.slice(7, token.length);
          }
        JWT.verify(token,config.secret, (err,decoded)=>{
            if(err){
                return res.json({
                    success: false,
                    message: "Token inválido"
                })
            }
            else{
                req.decoded = decoded
                next()
            }
            
        })

    }
    else{
        return res.json({
            success: false,
            message: "Token não enviado"
        })
    }
}
module.exports = {
    checkToken
}
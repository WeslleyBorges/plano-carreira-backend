
const func = require('../models/funcionario')
module.exports = {
    populateFuncionario: function(req,res,next){
        const pathName = {path:'cargoNivel',populate:[{path:'nivel'},{path:'cargo'}]}
        func.find({}).exec(function(err,all){
            if(err){
                res.send(404)
            }
            func.populate(all,pathName,function(err,result){
                res.json({
                    result
                })
                if(err){
                    res.send(500)
                }
            })
        })
        
            
       
    }
}
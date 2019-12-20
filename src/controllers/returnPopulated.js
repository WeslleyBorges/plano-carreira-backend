const func = require('../models/funcionario')
module.exports = {
    populateFuncionario: function(req,res,next){
        const pathName = {path:'cargoNivel',populate:[{path:'nivel'},{path:'cargo'}]}
        req.quer = req.quer.populate(pathName);
        req.quer.exec(function(err, one){
            if(one){
                res.json(one)
            }
        })
            
       
    }
}
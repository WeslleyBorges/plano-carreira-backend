
const func = require('../models/funcionario')
module.exports = {
    populateFuncionario: function(req,res,next){
        const pathName = {path:'cargoNivel',populate:[{path:'nivel'},{path:'cargo'}]}
        func.find({}).exec(function(err,all){
            if(err){
                res.send(404)
            }
            func.populate(all,pathName,function(err,result){
                result.map(funcio=>{
                    if(funcio.cargoNivel===null){
                        funcio.cargoNivel = {cargo:{nome:'Não Atribuído'},nivel:{nome:"Não Atribuído"}}
                        return funcio
                    }else{
                       funcio.cargoNivel.cargo = funcio.cargoNivel.cargo?funcio.cargoNivel.cargo:{nome:"Não Atribuído"}
                       funcio.cargoNivel.nivel = funcio.cargoNivel.nivel?funcio.cargoNivel.nivel:{nome:"Não Atribuído"}
                       return funcio
                    }
                })
                res.json(
                    result
                )
                if(err){
                    res.send(500)
                }
            })
        })
        
            
       
    }
}
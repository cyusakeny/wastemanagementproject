const e = require('express');
const Recycle = require('../models/recycle')

module.exports.AddNewWaste = async(newWaste)=>{
    try{
        const recycle = await Recycle.create({
            description:newWaste.description,
            type:newWaste.type,
            user:newWaste.user,
            route:newWaste.route,
            collector:newWaste.collector,
            routeName:newWaste.routeName
        })
       return  recycle; 
    }
    catch(error){
        console.log(error)
    }
}

module.exports.findById = async(id)=>{
    const recycle = await Recycle.findByPk(id)
    return recycle;
}

module.exports.MarkWasteAsCollected = async(id)=>{
    return await Recycle.update({
        isCollected:true
    },
    {
        where:{id:id}
    }       
    ).catch(error=>{
        console.log(error)
    })
    
}

module.exports.MarkWasteAsRecycled = async(id)=>{
    return await Recycle.update({
        isRecycled:true
    },
    {
        where:{id:id}
    }
    ).catch(error=>{
        return error
    })
}

module.exports.findUnCollectedWastesByUser=async(userId)=>{
    const allWastes = await Recycle.findAll({
        where:{
            user:userId
        }
    })
    return allWastes;
}

module.exports.findUnCollectedWastesByCollector = async(collectorId)=>{
    const allWastes = await Recycle.findAll({
      where:{
        collector:collectorId
      }  
    })
    return allWastes
}

module.exports.findUnRecycledWastesByCollector = async(collectorId)=>{
    const  allWastes = await Recycle.findAll({
        where:{
            collector:collectorId,
            isRecycled:false 
        }
    })
}
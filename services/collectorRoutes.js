const { where } = require('sequelize');
const CollectorRoute = require('../models/collectorRoutes');
const { route } = require('../routes/recycle');

module.exports.addNewRoute = async(route)=>{
    try{
    const newRoute = await CollectorRoute.create({
        name:route.name,
        day:route.day,
        collector:route.collector,
        description:route.description
    })
    return newRoute;
}
catch(error){
    console.log(error)
}
}
module.exports.updateRoute = async(id,day)=>{
    return await CollectorRoute.update({
        day:day
    },
    {
        where:{id:id}
    }
    ).then(route=>{
        return route;
    }).catch(error=>{
        console.log(error)
    })
}

module.exports.getAllOnDay = async(day)=>{
    const allRoutesOnDay = CollectorRoute.findAll({
        where:{
            day:day
        }
    })
    return allRoutesOnDay
}    

module.exports.getAllOnDayByCollector = async(id, day)=>{
    const allRoutesOnDay = CollectorRoute.findAll({
        where:{
            day:day,
            collector:id
        }
    })
    return allRoutesOnDay;
}

module.exports.getAllRoutesOfCollector = async(id)=>{
    const routes = CollectorRoute.findAll(
        {
        where:{
        collector:id
        }
    }
    )
    return routes
}
module.exports.getById = async(id)=>{
   return await CollectorRoute.findByPk(id).then(route=>{return route})

}
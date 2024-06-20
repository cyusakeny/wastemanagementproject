const Collector = require('../models/wasteCollectors')
module.exports.AddCollector = async(collector)=>{
  try{
    const newCollector = await Collector.create({
    name:collector.name,
    phone:collector.phone,
    email:collector.email
  })
  return newCollector;
}
catch(error){
    console.log(error)
}

}

module.exports.getById = async(id)=>{
try{
    const collector = await Collector.findByPk(id)
    return collector;
}   
catch(error){
    console.log(error)
}
}

module.exports.updateCollector = async(id,collectorDetails)=>{
    return await Collector.update({
        name:collectorDetails.name,
        email:collectorDetails.email,
        phone:collectorDetails.phone
    },
    {
       where: {id:id} 
    }
    ).then(async()=>{
        return this.getById(id);
    })
    .catch(error=>{
        console.log(error)
    })
}


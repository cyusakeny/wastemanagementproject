const express = require('express')
const router = express.Router()
const util = require('../utils/utils')
const dashboardService = require('../services/dashboard')

router.get("/user",util.authenticateToken,async(req,res)=>{
  const inUser = req.user
  const dataRecycle = await dashboardService.getUserRecycle(inUser.id);
  const dataType = await dashboardService.getUserTypes(inUser.id)
  const dataCollection= await dashboardService.getUserCollected(inUser.id)

  const reponse = {
    recycle:dataRecycle,
    plasticType:dataType,
    collection:dataCollection
  }
  console.log(JSON.stringify(dataRecycle));
  res.json({status:200,data:reponse})
})
router.get("/collector",util.authenticateToken,async(req,res)=>{

    const inUser = req.user
    const dataRecycle = await dashboardService.getCollectorRecycle(inUser.id);
    const dataType = await dashboardService.getCollectorType(inUser.id)
    const dataCollection= await dashboardService.getCollectorCollected(inUser.id)
  
    const reponse = {
      recycle:dataRecycle,
      plasticType:dataType,
      collection:dataCollection
    }
    console.log(JSON.stringify(dataRecycle));
    res.json({status:200,data:reponse})

})
module.exports=router
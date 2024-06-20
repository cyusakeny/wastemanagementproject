const express = require('express')
const router = express.Router()
const util = require('../utils/utils')
const routeService = require('../services/collectorRoutes')


router.post('/register',util.authenticateToken,async(req,res)=>{
    const loggedInUser = req.user
    if(req.body.name===null || req.body.day===null || req.body.description ===null){
        res.json({status:400,message:'Missing information',data:null})
    }
    try{
    const collectorRoute = {
        name:req.body.name,
        day:req.body.day,
        collector:loggedInUser.id,
        description:req.body.description
    }
   const newRoute =  await routeService.addNewRoute(collectorRoute)
   res.json({status:201,data:newRoute,message:"Success"}) 
}
catch(error){
   console.error(error)
   res.json({status:500,message:'Failed to register'})
}
   
})

router.get('/allOnDay',async(req,res)=>{
    console.log("Param:",req.query.day)
    if(req.query.day===undefined){
        res.json({status:400,message:'Day missing'})
    }
    else{
    try{
        const day = req.query.day;
        const data = await routeService.getAllOnDay(day);
        res.json({status:200,message:'Success',data:data})

    }
    catch(error){
        res.json({status:500,message:'failed to get routes'})

    }
}
})

router.get('/collectorRoutes',util.authenticateToken,async(req,res)=>{
    const userIn = req.user
    try{
        const data = await routeService.getAllRoutesOfCollector(userIn.id)
        res.json({status:200,message:'Success',data:data})
    }
    catch(error){
        res.json({status:500,message:'failed to get routes'})
    }
})
module.exports=router
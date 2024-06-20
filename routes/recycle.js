const express = require('express')
const router = express.Router()
const util = require('../utils/utils')
const recycleService = require('../services/recycle')
const routeService = require('../services/collectorRoutes')
router.post('/addWastes',util.authenticateToken,async(req,res)=>{
    const loggedIn = req.user
   if(req.body.type===null || req.body.description===null || req.body.route===null){
    res.json({status:400,message:'Missing information'})
   }
   try{
    const route = await routeService.getById(req.body.route)
    const newWaste = {
        description:req.body.description,
        type: req.body.type,
        user:loggedIn.id,
        route:route.id,
        collector:route.collector,
        routeName:route.name
    }
    const data = await recycleService.AddNewWaste(newWaste)
    res.json({status:201,data:data})
   }
   catch(error){
    res.json({status:500,message:"Can't add waste"})
   }

})

router.get('/getUserUnCollected',util.authenticateToken,async(req,res)=>{
    const userIn = req.user
    try{
     const data = await recycleService.findUnCollectedWastesByUser(userIn.id)
     res.json({status:200,data:data})
    }
    catch(error){
        res.json({status:500,message:"failure in system"})
    }
})
router.get('/getCollectorUnCollected',util.authenticateToken,async(req,res)=>{
    const userIn = req.user
    try{
     const data = await recycleService.findUnCollectedWastesByCollector(userIn.id)
     res.json({status:200,data:data})
    }
    catch(error){
        res.json({status:500,message:"failure in system"})
    }
})

router.get('/collectWaste',util.authenticateToken,async(req,res)=>{
    try{
      const data = recycleService.MarkWasteAsCollected(req.params.id)
      res.json({status:200,data:data})
    }
    catch(error){
        res.json({status:500,message:"failure in system"})
    }
})

router.get('/recycle',util.authenticateToken,async(req,res)=>{
    try{
      const data = recycleService.MarkWasteAsRecycled(req.params.id)
      res.json({status:200,data:data})
    }
    catch(error){
        res.json({status:500,message:"failure in system"})
    }
})

module.exports = router
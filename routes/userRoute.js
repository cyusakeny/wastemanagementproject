const express = require('express')
const router = express.Router()
const util = require('../utils/utils')
const userService = require('../services/userservice')

router.post('/register',async(req,res)=>{
    const user = {
        name:req.body.name,
        email: req.body.email,
        password: req.body.password,
        role:req.body.role
    }
    const createdUser = await userService.addUser(user);
    res.json({data:createdUser,message:"User successfully created",status:201}).status(201);

})

router.get('/admin',async(req,res)=>{
    const user = await userService.findAdmin()
    res.json({data:user,message:"Success",status:200})
})

router.post('/login', async (req, res) => {
    console.log("Request body", req.body);

    if (!req.body.email || !req.body.password) {
        return res.status(400).json({status:400,message:"Invalid data",data:null});
    }

    try {
        const user = await userService.login(req.body.email, req.body.password);
        
        if (user) {
            return res.status(201).json({token:util.generateToken(user.email, user.id, user.role),role:user.role,message:"Success",status:201});
        } else {
            return res.status(400).json({message:"Invalid credentials",status:400});
        }
    } catch (error) {
        return res.status(500).send("Internal Server Error");
    }
});


router.get('/',async(req,res)=>{
    const user = await userService.getAll()
    res.json({data:user,status:200,message:'Success'}).status(200) 
})

module.exports=router

// user service
const User = require('../models/user')
module.exports.getAll = async()=>{
    return User.findAll()
}
module.exports.addUser = async(user)=>{
    try{
        const newUser = await User.create({
                  name: user.name,
                  email: user.email,
                  password: user.password,
                  role:user.role
                });
        return newUser;        
    }
    catch (error) {
            console.error('Unable to connect to the database:', error);
            return error
          }

}
module.exports.login = async(email, password) => {
    return await User.findOne({where:{email:email,password:password}}).then(foundUser=>{return foundUser}).catch(error=>{
        console.log(error)
        return null})
}

module.exports.findAdmin = async()=>{
   return await User.findAll({
        where:{
            role:"ADMIN"
        }
    }).then(foundUser =>{
        return foundUser
    })
}

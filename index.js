const sequelize = require('./config/database');
const User = require('./models/user');
const express = require('express');
const cors = require('cors')
const app = express();
const port = process.env.PORT || 3000;

(async () => {
  try {
    await sequelize.authenticate();
    console.log('Connection has been established successfully.');

    await sequelize.sync({ alter: true });
    console.log('All models were synchronized successfully.');

    const admin = User.findAll({
      where:{role:'ADMIN'}
    })
    if(admin===null || (await admin).length<=0){
    const newUser = await User.create({
      name: 'Super Admin',
      email: 'superadmin@gmail.com',
      password: 'super@123',
      role:'ADMIN'
    });
    console.log("First user",JSON.stringify(newUser))
  }
  else{
    console.log("First user",JSON.stringify(admin))
    
  }
  
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
})();
app.use(express.json())
app.use(cors())

app.use('/users',require('./routes/userRoute'))
app.use('/roads',require('./routes/collectorRoadsRoute'))
app.use('/waste',require('./routes/recycle'))
app.use('/stats',require('./routes/dashboards'))

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});



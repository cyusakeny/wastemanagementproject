const { DataTypes } = require('sequelize');
const sequelize = require('../config/database'); 
const Recycle = sequelize.define('recycle', {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    user:{
      type: DataTypes.INTEGER,
      allowNull: false
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    type:{
    type: DataTypes.ENUM,
    values: ['PLASTIC', 'NON-PLASTIC','MIXED'],
    allowNull: false,
    },
    route:{
      type: DataTypes.INTEGER,
      allowNull: false
    },
    collector:{
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    isCollected:{
        type:DataTypes.BOOLEAN,
        defaultValue:false
    },
    isRecycled:{
        type:DataTypes.BOOLEAN,
        defaultValue:false,
    },
    routeName:{
      type:DataTypes.STRING,
      allowNull:false
  },

  }, {
  
  });
 module.exports = Recycle 
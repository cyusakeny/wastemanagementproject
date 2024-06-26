const { DataTypes } = require('sequelize');
const sequelize = require('../config/database'); 
const Collector = sequelize.define('collector', {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    phone:{
      type: DataTypes.STRING,
      allowNull: false,
      unique: true, 
    }
  }, {
  
  });
 module.exports = Collector 
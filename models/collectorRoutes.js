const { DataTypes } = require('sequelize');
const sequelize = require('../config/database'); 
const CollectorRoutes = sequelize.define('collectoroutes', {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    day:{
    type: DataTypes.ENUM,
    values: ['MONDAY', 'TUESDAY', 'WEDNESDAY','THURSDAY','FRIDAY','SATURDAY','SUNDAY'],
    allowNull: false,
    },
    collector:{
      type: DataTypes.INTEGER,
      allowNull: false
    },
    description:{
        type: DataTypes.TEXT,
        allowNull:false
    }
  }, {
  
  });
  module.exports = CollectorRoutes;
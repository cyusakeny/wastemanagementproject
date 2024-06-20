const { Sequelize } = require('sequelize');
const sequelize = new Sequelize('alu_waste_management', 'keny_pivot', 'keny@123', {
  host: 'localhost',
  dialect: 'postgres',
});

module.exports = sequelize;

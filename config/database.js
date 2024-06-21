const { Sequelize } = require('sequelize');
const sequelize = new Sequelize('aluwastemanagement', 'keny_alu', 'frdy9TN50gf9ywFFhVFcCvC4DidAHyts', {
  host: 'dpg-cpqi0lo8fa8c739fsqa0-a',
  dialect: 'postgres',
});

module.exports = sequelize;

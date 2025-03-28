const { Sequelize } = require('sequelize');

const sequelize = new Sequelize({
  host: "db",
  dialect: "mariadb",
  database: "shop_organic",
  username: "root",
  password: "root",
  port: "3306"

});

module.exports['sequelize'] = sequelize;

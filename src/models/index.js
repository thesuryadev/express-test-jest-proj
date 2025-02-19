const sequelize = require("../database/config");
const User = require("./user.model");

const syncDB = async () => {
  await sequelize.sync({ force: true }); // Drops & recreates tables
};

module.exports = { sequelize, User, syncDB };

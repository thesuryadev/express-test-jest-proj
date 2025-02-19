const { User } = require("../models");

const UserService = {
  async getAllUsers() {
    return await User.findAll();
  },

  async createUser(name, email) {
    return await User.create({ name, email });
  },
};

module.exports = UserService;

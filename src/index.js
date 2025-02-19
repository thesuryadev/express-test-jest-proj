const express = require("express");
const userRoutes = require("../src/routes/user.route");
const { sequelize, syncDB } = require("./models");
require("dotenv").config();

const app = express();
app.use(express.json());
app.use("/api", userRoutes);

const PORT = process.env.PORT || 5000;

sequelize
  .authenticate()
  .then(() => {
    console.log("Database connected...");
    return syncDB();
  })
  .then(() => {
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
  })
  .catch((err) => console.log("Database error: ", err));

module.exports = app;

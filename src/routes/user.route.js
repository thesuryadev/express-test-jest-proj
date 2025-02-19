const express = require("express");
const UserController = require("../controllers/user.controller");

const router = express.Router();

router.get("/users", UserController.getUsers);
router.post("/users", UserController.createUser);

module.exports = router;

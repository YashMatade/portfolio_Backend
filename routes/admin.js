const router = require("express").Router();
const adminController = require("../Controllers/Admin.controller");

router.post("/login", adminController.login);

module.exports = router
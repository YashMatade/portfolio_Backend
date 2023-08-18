const visitorsController = require("../Controllers/Visitors.controller");
const router = require("express").Router();

router.post("/create", visitorsController.create);


module.exports = router;
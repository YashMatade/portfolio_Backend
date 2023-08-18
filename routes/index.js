const router = require("express").Router();
const visitorsRoutes = require("./Visitors.routes");
const adminRoutes = require("./admin");
const skillRoutes = require("./skills");
const projectRoutes = require("./projects");

router.use("/contact", visitorsRoutes);
router.use("/admin", adminRoutes);
router.use("/skill", skillRoutes);
router.use("/project", projectRoutes)
module.exports = router;
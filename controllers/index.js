const router = require("express").Router();
const apiRoutes = require("./api");
const homeRoutes = require("./home-routes");

router.use("/", homeRoutes);
router.use("/api", apiRoutes);

//add router.use block

module.exports = router;

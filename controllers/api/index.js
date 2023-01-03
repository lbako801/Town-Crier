const router = require("express").Router();
const cityRoutes = require("./city-routes");
const loginRoutes = require("./login-routes");
router.use("/city", cityRoutes);
router.use("/login", loginRoutes);

module.exports = router;

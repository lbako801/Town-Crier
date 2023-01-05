const router = require("express").Router();
const cityRoutes = require("./city-routes");
const loginRoutes = require("./login-routes");
const createRoutes = require("./create-route");
const userPostRoutes = require("./comment-routes");

router.use("/city", cityRoutes);
router.use("/login", loginRoutes);
router.use("/create", createRoutes);
router.use("/post", userPostRoutes);

module.exports = router;

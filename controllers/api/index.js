const router = require("express").Router();
const loginRoutes = require("./login-routes");
const userRoutes = require("./user-routes");

router.use("/user", userRoutes);
router.use("/login", loginRoutes);

module.exports = router;

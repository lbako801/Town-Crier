const router = require("express").Router();
const apiRoutes = require("./api");
router.use("/api", apiRoutes);
//add router.use block
router.get("/homepage", async (req, res) => {
  res.render("homepage");
});
router.get("/landing", async (req, res) => {
  res.render("landing");
});
router.get("/login", async (req, res) => {
  res.render("login");
});
router.get("/create", async (req, res) => {
  res.render("login");
});
router.get("/forgotpassword", async (req, res) => {
  res.render("login");
});

module.exports = router;
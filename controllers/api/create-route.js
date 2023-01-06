const router = require("express").Router();
const { User } = require("../../models");

router.get("/", (req, res) => {
  try {
    res.render("login", {
      loggedIn: req.session.loggedIn,
    });
  } catch (error) {
    res.status(500).json(error);
  }
});

router.post("/", async (req, res) => {
  try {
    const newUserData = await User.create({
      username: req.body.username,
      email: req.body.email,
      password: req.body.password,
      location: req.body.location,
    });
    req.session.save(() => {
      req.session.loggedIn = true;
      console.log(req.session.loggedIn);
      res.status(200).json(newUserData);
    });
  } catch (error) {
    res.status(500).json(error);
  }
});

module.exports = router;

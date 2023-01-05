const router = require("express").Router();
const { User } = require("../../models");
const bcrypt = require("bcrypt");

// Get login page
router.get("/", (req, res) => {
  res.render("login", {
    loggedIn: req.session.loggedIn,
  });
});

// Login Post Route
router.post("/", async (req, res) => {
  try {
    const userLogin = await User.findOne({
      where: { username: req.body.username },
    });
    if (!userLogin) {
      res.status(400).json({
        message: "Username  is incorrect. Please try again",
      });
      return;
    }

    const hash = userLogin.dataValues.password;
    bcrypt.compare(req.body.password, hash, function (err, result) {
      if (!result) {
        res.status(400).json({ message: "password bad" });
        return;
      } else {
        req.session.save(() => {
          req.session.loggedIn = true;
          res.status(200).json({
            message: `${userLogin.dataValues.username} is now logged in`,
          });
        });
      }
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// Logout Route
router.post("/logout", async (req, res) => {
  console.log(req.session.loggedIn);
  if (req.session.loggedIn) {
    req.session.destroy(() => {
      res.status(204).end();
    });
  } else {
    res.status(404).end();
  }
});
module.exports = router;

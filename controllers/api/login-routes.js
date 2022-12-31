const router = require("express").Router();
const { City, Comment, User, Post } = require("../../models");

router.get("/", (res, req) => {
  if (req.session.loggedIn) {
    res.redirect("/");
    return;
  }
  res.render("login");
});

module.exports = router;

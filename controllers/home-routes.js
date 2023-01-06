const router = require("express").Router();
const { Comment, Post } = require("../models");
const withAuth = require("../middleware/auth");

// Get login page
router.get("/login", (req, res) => {
  res.render("login");
});

// Get signup page
router.get("/signup", (req, res) => {
  try {
    res.render("sign-up", {});
  } catch (error) {
    res.status(500).json(error);
  }
});

// Get individual city
router.get("/city/:city", withAuth, async (req, res) => {
  try {
    const requestedCity = req.params.city;

    const cityData = await Post.findAll({
      where: {
        city_name: requestedCity,
      },
    });
    const posts = cityData.map((post) => post.get({ plain: true }));
    res.render("homepage", {
      posts,
      loggedIn: req.session.loggedIn,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
});

// Get individual posts
router.get("/post/:id", withAuth, async (req, res) => {
  try {
    const postData = await Post.findByPk(req.params.id, {
      include: [{ model: Comment }],
    });
    if (!postData) {
      res.status(404).json({ message: "No post with this id found." });
      return;
    }
    console.log(postData);
    res.render("landing", {
      postData,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
});

module.exports = router;

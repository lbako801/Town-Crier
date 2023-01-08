const router = require("express").Router();
const { Comment, Post, User } = require("../models");
const withAuth = require("../middleware/auth");

// Get login page
router.get("/", (req, res) => {
  res.render("login");
});
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
router.get("/city/:username", withAuth, async (req, res) => {
  try {
    const requestedUser = req.params.username;

    const userInfo = await User.findAll({
      where: {
        username: requestedUser,
      },
    });

    console.log(userInfo[0].location);

    const cityData = await Post.findAll({
      where: {
        city_name: userInfo[0].location,
      },
      include: [
        { model: Comment },
        { model: User, attributes: { exclude: ["password"] } },
      ],
      exclude: User.password,
    });
    const posts = cityData.map((post) => post.get({ plain: true }));
    console.log(posts);
     res.render("homepage", {
      posts,
      loggedIn: req.session.loggedIn,
    }) 
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

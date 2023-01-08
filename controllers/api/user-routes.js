const router = require("express").Router();
const { Comment, User, Post } = require("../../models");

router.post("/post", async (req, res) => {
  try {
    const addPost = await Post.create({
      creator_id: req.body.creator_id,
      post_text: req.body.post_text,
      city_name: req.body.city_name,
    });
    res.status(200).json(addPost);
  } catch (error) {
    res.status(500).json(error);
  }
});

router.post("/comment", async (req, res) => {
  try {
    const newComment = await Comment.create({
      comment_text: req.body.comment_text,
      post_id: req.body.post_id,
    });
    res.status(200).json(newComment);
  } catch (error) {
    console.error(error);
    res.status(500).json(error);
  }
});

router.post("/signup", async (req, res) => {
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

router.post("/getdata", async (req, res) => {
  try {
    const requestedUser = req.body.username;
    const userInfo = await User.findAll({
      where: {
        username: requestedUser,
      },
    });
    res.json(userInfo);
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
  }
});
module.exports = router;

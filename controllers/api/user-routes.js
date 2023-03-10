const router = require("express").Router();
const { Comment, User, Post, City } = require("../../models");

router.post("/post", async (req, res) => {
  try {
    const addPost = await Post.create({
      creator_id: req.body.creator_id,
      post_title: req.body.title,
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
    console.log("req", req.body);
    const checkCity = await City.findOne({
      where: {
        city_name: req.body.location,
      },
    });
    if (checkCity) {
      const newUserData = await User.create({
        username: req.body.username,
        email: req.body.email,
        password: req.body.password,
        location: req.body.location,
      });
      console.log("newuser", newUserData);
      req.session.save(() => {
        req.session.loggedIn = true;
        console.log(req.session.loggedIn);
        res.status(200).json(newUserData);
      });
    } else {
      const addCity = await City.create({
        city_name: req.body.location,
      });
      const newUserData = await User.create({
        username: req.body.username,
        email: req.body.email,
        password: req.body.password,
        location: req.body.location,
      });
      console.log("newuser", newUserData);
      req.session.save(() => {
        req.session.loggedIn = true;
        console.log(req.session.loggedIn);
        res.status(200).json(newUserData);
      });
    }
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
    const userData = {
      id: userInfo[0].id,
      username: userInfo[0].username,
      location: userInfo[0].location,
    };
    console.log(userData);
    res.json(userData);
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
  }
});
module.exports = router;

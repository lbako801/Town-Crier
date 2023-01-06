const router = require("express").Router();
const { Post } = require("../../models");

router.get("/:city", async (req, res) => {
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
router.post("/:city", async (req, res) => {
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

module.exports = router;

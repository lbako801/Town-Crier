const router = require("express").Router();
const cityRoutes = require("./city-routes");
const { Post, User } = require("../../models");
router.use("/city", cityRoutes);

/* router.get("/:city", async (req, res) => {
  try {
    const requestedCity = req.params.city;
    console.log(req.params.city);
    const cityData = await Post.findAll({
      where: {
        city_name: requestedCity,
      },
      include: [
        {
          model: User,
          attributes: {
            exclude: ["password", "email", "location"],
          },
        },
      ],
    });
    res.status(200).json(cityData);
  } catch (error) {
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
}); */

module.exports = router;

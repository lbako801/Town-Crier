/* const router = require("express").Router();
const { Post } = require("../../models");

router.post("/", async (req, res) => {
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
 */

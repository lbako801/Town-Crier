const router = require("express").Router();
const { Comment, Post } = require("../../models");

router.get("/:id", async (req, res) => {
  try {
    const postData = await Post.findByPk(req.params.id, {
      include: [{ model: Comment }],
    });
    if (!postData) {
      res.status(404).json({ message: "No post with this id found." });
      return;
    }
    res.render("homepage", {
      postData,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
});

module.exports = router;

const router = require("express").Router();
const { Comment, Post } = require("../../models");

router.get("/:id", async (req, res) => {
  const postData = await Post.findByPk(req.params.id, {
    include: [{ model: Comment }],
  });
  if (!postData) {
    res.status(404).json({ message: "No post with this id found." });
    return;
  }
  const comments = postData.map((comment) => {
    comment.get({ plain: true });
  });

  res.render("homepage", {
    postData,
    comments,
  });
});

module.exports = router;

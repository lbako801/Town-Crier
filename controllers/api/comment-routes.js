const router = require("express").Router();
const { Comment, Post } = require("../../models");
const withAuth = require("../../middleware/auth");

router.get("/:id", withAuth, async (req, res) => {
  try {
    const postData = await Post.findByPk(req.params.id, {
      include: [{ model: Comment }],
    });
    if (!postData) {
      res.status(404).json({ message: "No post with this id found." });
      return;
    }
    console.log(postData);
    res.render("homepage", {
      postData,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
});

router.post("/:id", async (req, res) => {
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
module.exports = router;

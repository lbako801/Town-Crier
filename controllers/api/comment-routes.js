/* const router = require("express").Router();
const { Comment } = require("../../models");

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
 */

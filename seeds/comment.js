const { Comment } = require("../models");

const commentData = [
  {
    comment_text: "Comments for jacob 1",
    post_id: "1",
  },
  {
    comment_text: "Comments for jacob 2",
    post_id: "1",
  },
  {
    comment_text: "Comments for jacob 3",
    post_id: "1",
  },
  {
    comment_text: "Comments for jacob 4",
    post_id: "1",
  },
];

const seedComment = () => Comment.bulkCreate(commentData);

module.exports = seedComment;

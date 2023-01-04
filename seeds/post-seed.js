const { Post } = require("../models");

const postData = [
  {
    creator_id: 1,
    post_text: "Test text for post create",
    city_name: "Layton",
  },
  {
    creator_id: 1,
    post_text: "Test text for post create 2",
    city_name: "Layton",
  },
  {
    creator_id: 1,
    post_text: "Test text for post create 3",
    city_name: "Ogden",
  },
];

const seedPost = () => Post.bulkCreate(postData);

module.exports = seedPost;

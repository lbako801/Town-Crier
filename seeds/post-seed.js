const { Post } = require("../models");

const postData = [
  {
    creator_id: 1,
    post_title: "Title 1",
    post_text: "Test text for post create",
    city_name: "Provo",
  },
  {
    creator_id: 1,
    post_title: "Title 2",
    post_text: "Test text for post create 2",
    city_name: "Provo",
  },
  {
    creator_id: 1,
    post_title: "Title 3",
    post_text: "Test text for post create 3",
    city_name: "Provo",
  },
];

const seedPost = () => Post.bulkCreate(postData);

module.exports = seedPost;

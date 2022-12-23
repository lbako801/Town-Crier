const { User } = require("../models");

const userData = [
  {
    username: "efsoren",
    email: "ef.sorensen@me.com",
    password: "password",
    location: "Layton",
  },
];

const seedUser = () => User.bulkCreate(userData);

module.exports = seedUser;

const { User } = require("../models");

const userData = [
  {
    username: "efsoren",
    email: "ef.sorensen@me.com",
    password: "password",
    location: "Provo",
  },
  {
    username: "User2",
    email: "testemail@email.com",
    password: "password2",
    location: "Salt Lake City",
  },
  {
    username: "User3",
    email: "useremail@gmail.com",
    password: "password3",
    location: "Orem",
  },
  {
    username: "User4",
    email: "fakemail@gmail.com",
    password: "password4",
    location: "Sandy",
  },
];

const seedUser = () => User.bulkCreate(userData);

module.exports = seedUser;

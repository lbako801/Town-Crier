const sequelize = require("../config/connection");
const seedCity = require("./seeds");
const seedPost = require("./post-seed");
const seedUser = require("./user-seed");
const seedComment = require("./comment");

const seedAll = async () => {
  await sequelize.sync({ force: true });
  await seedCity();
  await seedUser();
  await seedPost();
  await seedComment();
  process.exit(0);
};

seedAll();

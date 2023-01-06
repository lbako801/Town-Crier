const sequelize = require("../config/connection");
const seedCity = require("./seeds");
const seedPost = require("./post-seed");
const seedUser = require("./user-seed");

const seedAll = async () => {
  await sequelize.sync({ force: true });
  await seedCity();
  await seedUser();
  await seedPost();

  process.exit(0);
};

seedAll();

const { City } = require("../models");

const cityData = [
  {
    city_name: "Salt Lake City",
  },
  {
    city_name: "West Valley City",
  },
  {
    city_name: "West Jordan",
  },
  {
    city_name: "Provo",
  },
  {
    city_name: "St George",
  },
  {
    city_name: "Orem",
  },
  {
    city_name: "Sandy",
  },
  {
    city_name: "Ogden",
  },
  {
    city_name: "Layton",
  },
  {
    city_name: "South Jordan",
  },
];

const seedCity = () => City.bulkCreate(cityData);

module.exports = seedCity;

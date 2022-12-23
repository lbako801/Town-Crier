const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class City extends Model {}

City.init(
  {
    city_name: {
      type: DataTypes.STRING,
      allowNull: false,
      primaryKey: true,
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: "city",
  }
);

module.exports = City;

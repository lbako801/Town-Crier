const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class Post extends Model {}

Post.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    creator_id: {
      type: DataTypes.INTEGER,
      references: {
        model: "user",
        key: "id",
      },
    },
    post_text: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    post_title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    city_name: {
      type: DataTypes.STRING,
      allowNull: false,
      references: {
        model: "city",
        key: "city_name",
      },
    },
  },
  {
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: "post",
  }
);

module.exports = Post;
const { Model, DataTypes } = require("sequelize");
const bcrypt = require("bcrypt");
const sequelize = require("../config/connection");

class User extends Model {}

User.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    username: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isAlphanumeric: true,
      },
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isEmail: true,
      },
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [8],
      },
    },
    location: {
      type: DataTypes.STRING,
      allowNull: false,
      references: {
        model: "city",
        key: "city_name",
      },
    },
  },
  {
    hooks: {
      beforeCreate: async (newUserInfo) => {
        newUserInfo.password = await bcrypt.hash(newUserInfo.password, 10);
        return newUserInfo;
      },
      beforeBulkCreate: async (newUserInfo) => {
        console.log(newUserInfo)
        for (const user of newUserInfo) {
          user.password = await bcrypt.hash(user.password, 10);
          // return newUserInfo;
          
        }
      },
      beforeUpdate: async (updatedUserInfo) => {
        updatedUserInfo.password = await bcrypt.hash(
          updatedUserInfo.password,
          10
        );
        return updatedUserInfo;
      },
    },
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: "user",
  }
);

module.exports = User;

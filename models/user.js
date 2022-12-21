const { Model, DataTypes } = require('sequelize');
const bcrypt = require('bcrypt');
const User = require('../../../class-repo/Bootcamp-Modules/14-MVC/01-Activities/23-Ins_Auth-Review/models/User');

//Add class extension below

//------
User.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
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
    }
)


module.exports = User;
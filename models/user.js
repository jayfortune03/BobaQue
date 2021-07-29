'use strict';
const {
  Model
} = require('sequelize');

const {hashPassword} = require(`../helpers/bcrypt.js`)
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      User.belongsToMany(models.Menu, { through: `MenuToppings`, foreignKey: `UserId`})
      User.belongsToMany(models.Topping, { through: `MenuToppings`, foreignKey: `UserId`})
    }
  };
  User.init({
    username: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: {
          msg: `Username Must not be Empty`
        }
      }
    },
    email: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: {
          msg: `Email Must not be Empty`
        }
      }
    },
    name: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: {
          msg: `Name Must not be Empty`
        }
      }
    },
    password: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: {
          msg: `Password Must not be Empty`
        }
      }
    },
    role: DataTypes.STRING
  }, {
    hooks:{
      beforeCreate(instance) {
        instance.password = hashPassword(instance.password)
      }
    },
    sequelize,
    modelName: 'User',
  });
  return User;
};
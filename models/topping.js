'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Topping extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Topping.belongsToMany(models.Menu, { through: `MenuToppings`, foreignKey: `ToppingId`})
      Topping.belongsToMany(models.User, { through: `MenuToppings`, foreignKey: `ToppingId`})
      // define association here
    }
  };
  Topping.init({
    name: DataTypes.STRING,
    price: DataTypes.INTEGER,
    description: DataTypes.STRING,
    image: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Topping',
  });
  return Topping;
};
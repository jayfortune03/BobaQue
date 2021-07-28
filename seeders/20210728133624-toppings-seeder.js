'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Toppings', [
        {
          name: 'Boba',
          price: 4000,
          description : '',
          createdAt : new Date(),
          updatedAt : new Date()
        },
        {
          name: 'Egg Pudding',
          price: 5000,
          description : '',
          createdAt : new Date(),
          updatedAt : new Date()
        },
        {
          name: 'Cheese Cream',
          price: 3000,
          description : '',
          createdAt : new Date(),
          updatedAt : new Date()
        },
        {
          name: 'Regal',
          price: 5000,
          description : '',
          createdAt : new Date(),
          updatedAt : new Date()
        },
        {
          name: 'Oreo',
          price: 5000,
          description : '',
          createdAt : new Date(),
          updatedAt : new Date()
        },
        {
          name: 'Chocolate Chip',
          price: 3000,
          description : '',
          createdAt : new Date(),
          updatedAt : new Date()
        },
        {
          name: 'Grass Jelly',
          price: 3000,
          description : '',
          createdAt : new Date(),
          updatedAt : new Date()
        }
      ], {});
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Toppings', null, {});
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};

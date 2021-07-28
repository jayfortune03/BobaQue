'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Menus', [
      {
        name: 'Matcha Green Tea',
        price: 15000,
        description : 'Best Matcha in Town',
        createdAt : new Date(),
        updatedAt : new Date()
      }, 
      {
        name: 'Original Thai Tea',
        price: 12000,
        description : 'Stay Original',
        createdAt : new Date(),
        updatedAt : new Date()
      }, 
      {
        name: 'Belgian Chocolate',
        price: 20000,
        description : 'Bate Bate Chocolate',
        createdAt : new Date(),
        updatedAt : new Date()
      }, 
      {
        name: 'Cookies & Cream',
        price: 18000,
        description : 'Perfect combination',
        createdAt : new Date(),
        updatedAt : new Date()
      }, 
      {
        name: 'Regal Blend',
        price: 23000,
        description : 'Ternyata enak juga',
        createdAt : new Date(),
        updatedAt : new Date()
      }, 
      {
        name: 'Brown Sugar Fresh Milk',
        price: 25000,
        description : 'Our Favourite!',
        createdAt : new Date(),
        updatedAt : new Date()
      }, 
      {
        name: 'Vanilla Milk Tea',
        price: 15000,
        description : 'Classic',
        createdAt : new Date(),
        updatedAt : new Date()
      }, 
      {
        name: 'Taro Milk Tea',
        price: 16000,
        description : 'Yum!',
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
    return queryInterface.bulkDelete('Menus', null, {});
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};

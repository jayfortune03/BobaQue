'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Toppings', [
        {
          name: 'Boba',
          price: 4000,
          description : 'A Delicious topping to add!',
          createdAt : new Date(),
          updatedAt : new Date(),
          image : `https://asset.kompas.com/crops/aPy4w-KzngGCwfOXRz0X9r9ZeYA=/0x0:1000x667/750x500/data/photo/2020/12/25/5fe5f2da6f8a5.jpg`
        },
        {
          name: 'Egg Pudding',
          price: 5000,
          description : 'Yummy Pudding!',
          createdAt : new Date(),
          updatedAt : new Date(),
          image : `https://www.pearltea.com.au/wp-content/uploads/2020/07/IMG_20200708_200716-1.jpg`
        },
        {
          name: 'Cheese Cream',
          price: 3000,
          description : 'Yum yum Cream Cheese!	',
          createdAt : new Date(),
          updatedAt : new Date(),
          image: `https://www.hummusapien.com/wp-content/uploads/2020/04/easy-healthy-cream-cheese-frosting.jpg`
        },
        {
          name: 'Regal',
          price: 5000,
          description : 'Delicious biscuit!',
          createdAt : new Date(),
          updatedAt : new Date(),
          image : `https://cf.shopee.co.id/file/3894ae3ea66525013bff97db8f428cd1`
        },
        {
          name: 'Oreo',
          price: 5000,
          description : 'Who does not love Oreo?	',
          createdAt : new Date(),
          updatedAt : new Date(),
          image : `https://ds393qgzrxwzn.cloudfront.net/resize/m500x500/cat1/img/images/0/j4R5QF1jk9.jpg`
        },
        {
          name: 'Chocolate Chip',
          price: 3000,
          description : 'Chocho Chip YUM!',
          createdAt : new Date(),
          updatedAt : new Date(),
          image : `https://cf.shopee.co.id/file/3e65af665846985e3ae42e40e44e70c1`
        },
        {
          name: 'Grass Jelly',
          price: 3000,
          description : 'Bouncy Jelly!',
          createdAt : new Date(),
          updatedAt : new Date(),
          image : `https://cf.shopee.co.id/file/4869bd126a08b9fa1c93989b86de738c`
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

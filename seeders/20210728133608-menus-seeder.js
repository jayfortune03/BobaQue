'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Menus', [
      {
        name: 'Matcha Green Tea',
        price: 15000,
        description : 'Best Matcha in Town',
        createdAt : new Date(),
        updatedAt : new Date(),
        image: `https://images.japancentre.com/recipes/pics/16/main/matcha-latte.jpg?1469572822`
      }, 
      {
        name: 'Original Thai Tea',
        price: 12000,
        description : 'Stay Original',
        createdAt : new Date(),
        updatedAt : new Date(),
        image: `https://foodid.imgix.net/prod/thai-tea-original-green-tea-NeFgnMXfAO.jpg`
      }, 
      {
        name: 'Belgian Chocolate',
        price: 20000,
        description : 'Bate Bate Chocolate',
        createdAt : new Date(),
        updatedAt : new Date(),
        image:`https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlavYWEYUGORnR5qxTEfOf9piP2mMk-0SPrQ&usqp=CAU`
      }, 
      {
        name: 'Cookies & Cream',
        price: 18000,
        description : 'Perfect combination',
        createdAt : new Date(),
        updatedAt : new Date(),
        image: `http://abeautifulmess.com/wp-content/uploads/typekit/.a/6a00d8358081ff69e2019b01b17bcb970b-800wi`
      }, 
      {
        name: 'Regal Blend',
        price: 23000,
        description : 'Ternyata enak juga',
        createdAt : new Date(),
        updatedAt : new Date(),
        image : `https://img-global.cpcdn.com/recipes/8cef55b82be509da/680x482cq70/ice-blend-susu-regal-foto-resep-utama.jpg`
      }, 
      {
        name: 'Brown Sugar Fresh Milk',
        price: 25000,
        description : 'Our Favourite!',
        createdAt : new Date(),
        updatedAt : new Date(),
        image: `ttps://images.squarespace-cdn.com/content/v1/58d1f7308419c23d328cdb22/1559894022209-RV13I0JU6Y5N4P7XZKQU/Brown+Sugar+Bubble+Tea?format=1000w`
      }, 
      {
        name: 'Vanilla Milk Tea',
        price: 15000,
        description : 'Classic',
        createdAt : new Date(),
        updatedAt : new Date(),
        image: `https://www.savorytooth.com/wp-content/uploads/2016/08/coconut-vanilla-boba-inhand-square.jpg`
      }, 
      {
        name: 'Taro Milk Tea',
        price: 16000,
        description : 'Yum!',
        createdAt : new Date(),
        updatedAt : new Date(),
        image:`https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlzKZLdzA-lvSy9w_butDtJPfDiAWA9PAlbQ&usqp=CAU`
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

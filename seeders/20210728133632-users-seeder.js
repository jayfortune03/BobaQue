'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Users', [
        {
          name: 'John Doe',
          username: 'johndoe',
          email: 'johndoe@mail.com',
          password: "pass54321",
          role: "admin",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: 'Jane Doe',
          username: 'janedoe',
          email: 'janedoe@mail.com',
          password: "pass12345",
          role: "user",
          createdAt: new Date(),
          updatedAt: new Date()
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
    return queryInterface.bulkDelete('Users', null, {});
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};

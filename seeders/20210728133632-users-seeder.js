'use strict';
const {hashPassword} = require(`../helpers/bcrypt`)
const pw = hashPassword(`bobaque123`)

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Users', [
        {
          name: 'Admin1',
          username: 'admin1',
          email: 'bobaque56@gmail.com',
          password: pw,
          role: "Admin",
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

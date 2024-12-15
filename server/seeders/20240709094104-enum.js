'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Enums', [
      {
        status: 'pending',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        status: 'fulfilled',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        status: 'reject',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Enums', null, {});
  }
};

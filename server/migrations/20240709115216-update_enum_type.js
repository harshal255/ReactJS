'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {

    await queryInterface.changeColumn('Enums', 'status', {
      type: Sequelize.ENUM('pending', 'fulfilled', 'reject', 'success', 'error'),
      allowNull: false
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.changeColumn('Enums', 'status', {
      type: Sequelize.ENUM('pending', 'fulfilled', 'reject'),
      allowNull: false
    });
  }
};

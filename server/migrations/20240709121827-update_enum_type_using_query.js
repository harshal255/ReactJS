'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.sequelize.query("ALTER TABLE Enums MODIFY COLUMN status ENUM('pending', 'fulfilled', 'reject', 'success', 'error')");

  },

  async down(queryInterface, Sequelize) {
    await queryInterface.sequelize.query("ALTER TABLE Enums MODIFY COLUMN status ENUM('pending', 'fulfilled', 'reject')");
  }
};

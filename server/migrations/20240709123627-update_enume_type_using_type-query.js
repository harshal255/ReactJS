'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  //for postgres
  async up(queryInterface, Sequelize) {
    await queryInterface.sequelize.query(`ALTER TABLE Enums DROP COLUMN status`);
    await queryInterface.sequelize.query(`CREATE TYPE 'enum_Trackers_type' AS ENUM('pending', 'fulfilled', 'reject', 'success', 'error')`);
    await queryInterface.sequelize.query(`ALTER TABLE Enums ADD COLUMN status enum_Trackers_type`);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.sequelize.query(`ALTER TABLE Enums DROP COLUMN status`);
    await queryInterface.sequelize.query(`CREATE TYPE 'enum_Trackers_type' AS ENUM('pending', 'fulfilled', 'reject')`);
    await queryInterface.sequelize.query(`ALTER TABLE Trackers ADD COLUMN 'status' 'enum_Trackers_type'`);
  }
};

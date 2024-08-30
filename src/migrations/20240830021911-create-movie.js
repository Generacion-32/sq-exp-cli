'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('movies', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true
      },
      duration: {
        type: Sequelize.DECIMAL,
        allowNull: false,
      },
      releaseDate: {
        type: Sequelize.DATEONLY,
        allowNull: false,
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('movies');
  }
};

//npx sequelize db:migrate
//npx sequelize db:migrate:undo
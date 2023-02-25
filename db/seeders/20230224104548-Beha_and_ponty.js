'use strict';

/** @type {import('sequelize-cli').Migration} */


module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Bomer_scores', [
      {
        Username: 'Dimooon',
        Scores: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Bomer_scores', null, {});
  },
};

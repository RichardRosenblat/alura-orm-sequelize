'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, _Sequelize) {
    return queryInterface.bulkInsert(
      "Niveis",
      [
          {
              descr_nivel: "básico",
              createdAt: new Date(),
              updatedAt: new Date(),
          },
          {
              descr_nivel: "intermediário",
              createdAt: new Date(),
              updatedAt: new Date(),
          },
          {
              descr_nivel: "avançado",
              createdAt: new Date(),
              updatedAt: new Date(),
          },
      ],
      {}
  );
  },

  async down (queryInterface, _Sequelize) {
    return queryInterface.bulkDelete("Niveis", null, {});

  }
};

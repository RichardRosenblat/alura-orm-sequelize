'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, _Sequelize) {
   return queryInterface.bulkInsert(
            "Matriculas",
            [
                {
                    status: "confirmado",
                    estudante_id: 2,
                    turma_id: 1,
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
                {
                    status: "confirmado",
                    estudante_id: 3,
                    turma_id: 1,
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
                {
                    status: "confirmado",
                    estudante_id: 4,
                    turma_id: 2,
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
                {
                    status: "confirmado",
                    estudante_id: 5,
                    turma_id: 3,
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
                {
                    status: "cancelado",
                    estudante_id: 6,
                    turma_id: 2,
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
                {
                    status: "cancelado",
                    estudante_id: 3,
                    turma_id: 2,
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
            ],
            {}
        );
  },

  async down (queryInterface, _Sequelize) {
     return queryInterface.bulkDelete("Matriculas", null, {});
  }
};
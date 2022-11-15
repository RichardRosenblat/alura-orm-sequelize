export default {
    up: (queryInterface, _Sequelize) => {
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

    down: (queryInterface, _Sequelize) => {
        return queryInterface.bulkDelete("Niveis", null, {});
    },
};

"use strict";
import { Model } from "sequelize";
export default (sequelize, DataTypes) => {
    class Pessoas extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
        }
    }
    Pessoas.init(
        {
            nome: DataTypes.STRING,
            ativo: DataTypes.BOOLEAN,
            email: DataTypes.STRING,
            role: DataTypes.STRING,
        },
        {
            sequelize,
            freezeTableName: true,
            modelName: "Pessoas",
        }
    );
    return Pessoas;
};

// export default (sequelize, DataTypes) => {
//     const Pessoas = sequelize.define("Pessoas", {
//         nome: DataTypes.STRING,
//         ativo: DataTypes.BOOLEAN,
//         email: DataTypes.STRING,
//         role: DataTypes.STRING,
//     });
//     Pessoas.assosciate = function (models) {};
//     return Pessoas;
// };

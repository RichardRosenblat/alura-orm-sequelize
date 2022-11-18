import database from "../models/index.js";

class PessoaController {
    static async PegaTodasAsPessoas(_req, res) {
        try {
            const todasAsPessoas = await (await database).Pessoas.findAll();
            return res.status(200).json(todasAsPessoas);
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }
}

export default PessoaController
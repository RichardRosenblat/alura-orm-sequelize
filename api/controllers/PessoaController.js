import database from "../models/index.js";

class PessoaController {
    static async pegaTodasAsPessoas(_req, res) {
        try {
            const todasAsPessoas = await (await database).Pessoas.findAll();
            return res.status(200).json(todasAsPessoas);
        } catch (error) {
            return res.status(500).json(error.message);
        }
    }
    static async pegaUmaPessoa(req, res) {
        const { id } = req.params;
        try {
            const umaPessoa = await (await database).Pessoas.findOne({ where: { id: Number(id) } });
            return res.status(200).json(umaPessoa);
        } catch (error) {
            return res.status(500).json(error.message);
        }
    }
    static async criaPessoa(req, res) {
        const novaPessoa = req.body;
        try {
            const novaPesssoaCriada = await (await database).Pessoas.create(novaPessoa);
            return res.status(201).json(novaPesssoaCriada);
        } catch (error) {
            return res.status(500).json(error.message);
        }
    }
    static async atualizaPessoa(req, res) {
        const { id } = req.params;
        const novasInfos = req.body;
        try {
            await (await database).Pessoas.update(novasInfos, { where: { id: Number(id) } });
            const pesssoaAtualizada = await (
                await database
            ).Pessoas.findOne({ where: { id: Number(id) } });

            return res.status(201).json(pesssoaAtualizada);
        } catch (error) {
            return res.status(500).json(error.message);
        }
    }
    static async excluiPessoa(req, res) {
        const { id } = req.params;
        try {
            await (await database).Pessoas.destroy({ where: { id: Number(id) } });
            return res.status(204).send();
        } catch (error) {
            return res.status(500).json(error.message);
        }
    }
}

export default PessoaController;

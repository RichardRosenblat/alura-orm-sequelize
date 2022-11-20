import database from "../models/index.js";

class TurmaController {
    static async pegaTodasAsTurmas(_req, res) {
        try {
            const todasAsTurmas = await (await database).Turmas.findAll();
            return res.status(200).json(todasAsTurmas);
        } catch (error) {
            return res.status(500).json(error.message);
        }
    }

    static async pegaUmaTurma(req, res) {
        const { id } = req.params;
        try {
            const umaTurma = await (
                await database
            ).Turmas.findOne({
                where: {
                    id: Number(id),
                },
            });
            return res.status(200).json(umaTurma);
        } catch (error) {
            return res.status(500).json(error.message);
        }
    }

    static async criaTurma(req, res) {
        const novaTurma = req.body;
        try {
            const novaTurmaCriada = await (await database).Turmas.create(novaTurma);
            return res.status(200).json(novaTurmaCriada);
        } catch (error) {
            return res.status(500).json(error.message);
        }
    }

    static async atualizaTurma(req, res) {
        const { id } = req.params;
        const novasInfos = req.body;
        try {
            await (await database).Turmas.update(novasInfos, { where: { id: Number(id) } });
            const turmaAtualizada = await (
                await database
            ).Turmas.findOne({ where: { id: Number(id) } });
            return res.status(200).json(turmaAtualizada);
        } catch (error) {
            return res.status(500).json(error.message);
        }
    }

    static async apagaTurma(req, res) {
        const { id } = req.params;
        try {
            await (await database).Turmas.destroy({ where: { id: Number(id) } });
            return res.status(200).json({ mensagem: `id ${id} deletado` });
        } catch (error) {
            return res.status(500).json(error.message);
        }
    }
}

export default TurmaController;

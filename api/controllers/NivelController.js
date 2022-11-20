import database from "../models/index.js";

class NivelController {
    static async pegaTodosOsNiveis(_req, res) {
        try {
            const todosOsNiveis = await (await database).Niveis.findAll();
            return res.status(200).json(todosOsNiveis);
        } catch (error) {
            return res.status(500).json(error.message);
        }
    }

    static async pegaUmNivel(req, res) {
        const { id } = req.params;
        try {
            const umNivel = await (
                await database
            ).Niveis.findOne({
                where: {
                    id: Number(id),
                },
            });
            return res.status(200).json(umNivel);
        } catch (error) {
            return res.status(500).json(error.message);
        }
    }

    static async criaNivel(req, res) {
        const novoNivel = req.body;
        try {
            const novoNivelCriado = await (await database).Niveis.create(novoNivel);
            return res.status(200).json(novoNivelCriado);
        } catch (error) {
            return res.status(500).json(error.message);
        }
    }

    static async atualizaNivel(req, res) {
        const { id } = req.params;
        const novasInfos = req.body;
        try {
            await (await database).Niveis.update(novasInfos, { where: { id: Number(id) } });
            const nivelAtualizado = await (
                await database
            ).Niveis.findOne({ where: { id: Number(id) } });
            return res.status(200).json(nivelAtualizado);
        } catch (error) {
            return res.status(500).json(error.message);
        }
    }

    static async apagaNivel(req, res) {
        const { id } = req.params;
        try {
            await (await database).Niveis.destroy({ where: { id: Number(id) } });
            return res.status(200).json({ mensagem: `id ${id} deletado` });
        } catch (error) {
            return res.status(500).json(error.message);
        }
    }
}

export default NivelController;

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
            return res.status(200).json({ mensagem: `id ${id} deletado` });
        } catch (error) {
            return res.status(500).json(error.message);
        }
    }
    static async pegaMatriculasDePessoa(req, res) {
        const { estudanteId } = req.params;
        try {
            const matricula = await (
                await database
            ).Matriculas.findAll({
                where: { estudante_id: Number(estudanteId) },
            });
            return res.status(200).json(matricula);
        } catch (error) {
            return res.status(500).json(error.message);
        }
    }
    static async pegaUmaMatricula(req, res) {
        const { estudanteId, matriculaId } = req.params;
        try {
            const matricula = await (
                await database
            ).Matriculas.findOne({
                where: { id: Number(matriculaId), estudante_id: Number(estudanteId) },
            });
            return res.status(200).json(matricula);
        } catch (error) {
            return res.status(500).json(error.message);
        }
    }
    static async criaMatricula(req, res) {
        const { estudanteId } = req.params;
        const novaMatricula = { ...req.body, estudante_id: Number(estudanteId) };
        try {
            const novaMatriculaCriada = await (await database).Matriculas.create(novaMatricula);
            return res.status(201).json(novaMatriculaCriada);
        } catch (error) {
            return res.status(500).json(error.message);
        }
    }
    static async atualizaMatricula(req, res) {
        const { estudanteId, matriculaId } = req.params;
        const novasInfos = req.body;
        try {
            await (
                await database
            ).Matriculas.update(novasInfos, {
                where: { id: Number(matriculaId), estudante_id: Number(estudanteId) },
            });
            const matriculaAtualizada = await (
                await database
            ).Matriculas.findOne({
                where: { id: Number(matriculaId) },
            });

            return res.status(201).json(matriculaAtualizada);
        } catch (error) {
            return res.status(500).json(error.message);
        }
    }
    static async excluiMatricula(req, res) {
        const { estudanteId, matriculaId } = req.params;
        try {
            await (
                await database
            ).Matriculas.destroy({
                where: { id: Number(matriculaId), estudante_id: Number(estudanteId) },
            });
            return res.status(200).json({ mensagem: `id ${id} deletado` });
        } catch (error) {
            return res.status(500).json(error.message);
        }
    }
}

export default PessoaController;

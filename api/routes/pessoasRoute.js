import { Router } from "express";
import PessoaController from "../controllers/PessoaController.js";

const router = Router();

router.get("/pessoas", PessoaController.pegaTodasAsPessoas);
router.get("/pessoas/:id", PessoaController.pegaUmaPessoa);
router.post("/pessoas", PessoaController.criaPessoa);
router.put("/pessoas/:id", PessoaController.atualizaPessoa);
router.delete("/pessoas/:id", PessoaController.excluiPessoa);
router.get("/pessoas/:estudanteId/matricula", PessoaController.pegaMatriculasDePessoa);
router.get("/pessoas/:estudanteId/matricula/:matriculaId", PessoaController.pegaUmaMatricula);
router.post("/pessoas/:estudanteId/matricula", PessoaController.criaMatricula);
router.put("/pessoas/:estudanteId/matricula/:matriculaId", PessoaController.atualizaMatricula);
router.delete("/pessoas/:estudanteId/matricula/:matriculaId", PessoaController.excluiMatricula);

export default router;

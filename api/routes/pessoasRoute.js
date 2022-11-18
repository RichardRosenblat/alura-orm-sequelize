import { Router } from "express";
import PessoaController from '../controllers/PessoaController.js'

const router = Router()

router.get('/pessoas', PessoaController.PegaTodasAsPessoas)

export default router
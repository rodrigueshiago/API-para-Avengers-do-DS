import { Router } from 'express';
import {
  getJogadores,
  getMaiorSalario,
  getJogadorPorCamisa,
  getJogadoresPorPosicao,
  postJogador,
  putJogador,
  deleteJogador
} from '../controllers/jogadorController.js';

const router = Router();

router.get('/', getJogadores);
router.get('/maior-salario', getMaiorSalario);
router.get('/camisa/:numcamisa', getJogadorPorCamisa);
router.get('/posicao/:posicao', getJogadoresPorPosicao);
router.post('/', postJogador);
router.put('/:numcamisa', putJogador);
router.delete('/:numcamisa', deleteJogador);

export default router;
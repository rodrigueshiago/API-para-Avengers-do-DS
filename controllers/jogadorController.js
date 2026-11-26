import * as JogadorModel from '../models/jogadorModel.js';

// GET /jogadores
export const getJogadores = (req, res) => {
  const jogadores = JogadorModel.listarTodos();
  res.status(200).json(jogadores);
};

// GET /jogadores/maior-salario
export const getMaiorSalario = (req, res) => {
  const jogador = JogadorModel.buscarMaiorSalario();
  if (!jogador) {
    return res.status(404).json({ mensagem: "Nenhum jogador cadastrado." });
  }
  res.status(200).json(jogador);
};

// GET /jogadores/camisa/:numcamisa
export const getJogadorPorCamisa = (req, res) => {
  const numcamisa = parseInt(req.params.numcamisa);
  const jogador = JogadorModel.buscarPorCamisa(numcamisa);

  if (!jogador) {
    return res.status(404).json({ mensagem: "Jogador não encontrado com essa camisa." });
  }
  res.status(200).json(jogador);
};

// GET /jogadores/posicao/:posicao
export const getJogadoresPorPosicao = (req, res) => {
  const posicao = req.params.posicao.trim();
  const filtrados = JogadorModel.buscarPorPosicao(posicao);

  if (filtrados.length === 0) {
    return res.status(404).json({ mensagem: "Nenhum jogador encontrado nessa posição." });
  }
  res.status(200).json(filtrados);
};

// POST /jogadores
export const postJogador = (req, res) => {
  const { jogador, posicao, numcamisa, salario } = req.body;

  if (!jogador || !posicao || numcamisa === undefined || salario === undefined) {
    return res.status(400).json({ mensagem: "Todos os campos são obrigatórios." });
  }

  if (JogadorModel.existeCamisa(parseInt(numcamisa))) {
    return res.status(400).json({ mensagem: "Já existe um jogador com este número de camisa." });
  }

  const novoJogador = JogadorModel.criar({ jogador, posicao, numcamisa, salario });
  res.status(201).json({ mensagem: "Jogador cadastrado com sucesso!", jogador: novoJogador });
};

// PUT /jogadores/:numcamisa
export const putJogador = (req, res) => {
  const numcamisa = parseInt(req.params.numcamisa);
  const { jogador, posicao, salario } = req.body;

  const atualizado = JogadorModel.atualizar(numcamisa, { jogador, posicao, salario });

  if (!atualizado) {
    return res.status(404).json({ mensagem: "Jogador não encontrado para atualização." });
  }

  res.status(200).json({ mensagem: "Jogador atualizado com sucesso!", jogador: atualizado });
};

// DELETE /jogadores/:numcamisa
export const deleteJogador = (req, res) => {
  const numcamisa = parseInt(req.params.numcamisa);
  const removido = JogadorModel.remover(numcamisa);

  if (!removido) {
    return res.status(404).json({ mensagem: "Jogador não encontrado para exclusão." });
  }

  res.status(200).json({ mensagem: "Jogador removido com sucesso!", jogador: removido });
};
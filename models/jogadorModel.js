let jogadores = [
  {
    jogador: "João",
    posicao: "lateral direito",
    numcamisa: 33,
    salario: 545000.00
  },
  {
    jogador: "Larissa",
    posicao: "goleiro",
    numcamisa: 1,
    salario: 420000.00
  },
  {
    jogador: "Isabelly",
    posicao: "zagueiro",
    numcamisa: 4,
    salario: 610000.00
  },
  {
    jogador: "Kaique",
    posicao: "meio-campo",
    numcamisa: 10,
    salario: 950000.00
  },
  {
    jogador: "Hiago",
    posicao: "atacante",
    numcamisa: 9,
    salario: 1200000.00
  }
];

export const listarTodos = () => {
  return jogadores;
};

export const buscarMaiorSalario = () => {
  if (jogadores.length === 0) return null;
  return jogadores.reduce((maior, atual) => (atual.salario > maior.salario ? atual : maior));
};

export const buscarPorCamisa = (numcamisa) => {
  return jogadores.find(j => j.numcamisa === numcamisa);
};

export const buscarPorPosicao = (posicao) => {
  return jogadores.filter(j => j.posicao.toLowerCase() === posicao.toLowerCase());
};

export const criar = ({ jogador, posicao, numcamisa, salario }) => {
  const novoJogador = {
    jogador,
    posicao,
    numcamisa: parseInt(numcamisa),
    salario: parseFloat(salario)
  };
  jogadores.push(novoJogador);
  return novoJogador;
};

export const atualizar = (numcamisa, { jogador, posicao, salario }) => {
  const index = jogadores.findIndex(j => j.numcamisa === numcamisa);
  if (index === -1) return null;

  jogadores[index] = {
    jogador: jogador || jogadores[index].jogador,
    posicao: posicao || jogadores[index].posicao,
    numcamisa: numcamisa,
    salario: salario !== undefined ? parseFloat(salario) : jogadores[index].salario
  };

  return jogadores[index];
};

export const remover = (numcamisa) => {
  const index = jogadores.findIndex(j => j.numcamisa === numcamisa);
  if (index === -1) return null;

  const [removido] = jogadores.splice(index, 1);
  return removido;
};

export const existeCamisa = (numcamisa) => {
  return jogadores.some(j => j.numcamisa === numcamisa);
};
export const questions = [
  {
    id: 'q1',
    prompt: 'Quando surge um problema inesperado, o que você tende a fazer primeiro?',
    options: [
      {
        id: 'q1_a',
        label: 'Agir imediatamente para resolver.',
        weights: { colerico: 3, sanguineo: 1, melancolico: 0, fleumatico: 0 },
      },
      {
        id: 'q1_b',
        label: 'Conversar com alguém e pensar junto.',
        weights: { colerico: 0, sanguineo: 3, melancolico: 1, fleumatico: 0 },
      },
      {
        id: 'q1_c',
        label: 'Analisar com cuidado antes de agir.',
        weights: { colerico: 0, sanguineo: 0, melancolico: 3, fleumatico: 1 },
      },
      {
        id: 'q1_d',
        label: 'Esperar um pouco e observar melhor a situação.',
        weights: { colerico: 0, sanguineo: 0, melancolico: 1, fleumatico: 3 },
      },
    ],
  },
]
export const questions = [
  {
    id: 'q1',
    prompt: 'Quando surge uma dificuldade inesperada, o que você tende a fazer primeiro?',
    helperText: 'Escolha a opção que mais se aproxima do seu comportamento habitual.',
    options: [
      {
        id: 'q1_a',
        label: 'Assumo a frente e tento resolver imediatamente.',
        weights: { colerico: 3, sanguineo: 1, melancolico: 0, fleumatico: 0 },
      },
      {
        id: 'q1_b',
        label: 'Procuro alguém para conversar e pensar junto.',
        weights: { colerico: 0, sanguineo: 3, melancolico: 1, fleumatico: 0 },
      },
      {
        id: 'q1_c',
        label: 'Analiso antes de agir para evitar erro.',
        weights: { colerico: 0, sanguineo: 0, melancolico: 3, fleumatico: 1 },
      },
      {
        id: 'q1_d',
        label: 'Espero um pouco, observo e só depois decido.',
        weights: { colerico: 0, sanguineo: 0, melancolico: 1, fleumatico: 3 },
      },
    ],
  },
  {
    id: 'q2',
    prompt: 'Em ambientes sociais, você costuma ser visto como alguém que...',
    options: [
      {
        id: 'q2_a',
        label: 'Lidera naturalmente e gosta de conduzir.',
        weights: { colerico: 3, sanguineo: 1, melancolico: 0, fleumatico: 0 },
      },
      {
        id: 'q2_b',
        label: 'Anima as pessoas e cria conexão com facilidade.',
        weights: { colerico: 0, sanguineo: 3, melancolico: 0, fleumatico: 1 },
      },
      {
        id: 'q2_c',
        label: 'Observa mais, fala com profundidade e escolhe bem o que diz.',
        weights: { colerico: 0, sanguineo: 0, melancolico: 3, fleumatico: 1 },
      },
      {
        id: 'q2_d',
        label: 'Mantém serenidade e evita atritos desnecessários.',
        weights: { colerico: 0, sanguineo: 0, melancolico: 1, fleumatico: 3 },
      },
    ],
  },
  {
    id: 'q3',
    prompt: 'Quando precisa tomar uma decisão importante, você tende a...',
    options: [
      {
        id: 'q3_a',
        label: 'Decidir com rapidez e ajustar depois, se necessário.',
        weights: { colerico: 3, sanguineo: 1, melancolico: 0, fleumatico: 0 },
      },
      {
        id: 'q3_b',
        label: 'Seguir o que parece mais motivador no momento.',
        weights: { colerico: 0, sanguineo: 3, melancolico: 0, fleumatico: 1 },
      },
      {
        id: 'q3_c',
        label: 'Ponderar bastante antes de concluir.',
        weights: { colerico: 0, sanguineo: 0, melancolico: 3, fleumatico: 1 },
      },
      {
        id: 'q3_d',
        label: 'Evitar pressa e buscar uma decisão tranquila e estável.',
        weights: { colerico: 0, sanguineo: 0, melancolico: 1, fleumatico: 3 },
      },
    ],
  },
  {
    id: 'q4',
    prompt: 'O que mais costuma te desgastar no dia a dia?',
    options: [
      {
        id: 'q4_a',
        label: 'Lentidão, indecisão e falta de iniciativa.',
        weights: { colerico: 3, sanguineo: 0, melancolico: 1, fleumatico: 0 },
      },
      {
        id: 'q4_b',
        label: 'Ambientes frios, monótonos ou sem interação.',
        weights: { colerico: 0, sanguineo: 3, melancolico: 0, fleumatico: 1 },
      },
      {
        id: 'q4_c',
        label: 'Superficialidade, desorganização e falta de sentido.',
        weights: { colerico: 0, sanguineo: 0, melancolico: 3, fleumatico: 1 },
      },
      {
        id: 'q4_d',
        label: 'Conflitos constantes, pressão e instabilidade.',
        weights: { colerico: 0, sanguineo: 1, melancolico: 0, fleumatico: 3 },
      },
    ],
  },
  {
    id: 'q5',
    prompt: 'Qual destas descrições mais combina com o seu ritmo interior?',
    options: [
      {
        id: 'q5_a',
        label: 'Intenso, decidido e orientado a resultado.',
        weights: { colerico: 3, sanguineo: 1, melancolico: 0, fleumatico: 0 },
      },
      {
        id: 'q5_b',
        label: 'Vivo, espontâneo e relacional.',
        weights: { colerico: 0, sanguineo: 3, melancolico: 0, fleumatico: 1 },
      },
      {
        id: 'q5_c',
        label: 'Profundo, sensível e analítico.',
        weights: { colerico: 0, sanguineo: 0, melancolico: 3, fleumatico: 1 },
      },
      {
        id: 'q5_d',
        label: 'Calmo, constante e estável.',
        weights: { colerico: 0, sanguineo: 0, melancolico: 1, fleumatico: 3 },
      },
    ],
  },
]
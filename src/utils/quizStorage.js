const QUIZ_STORAGE_KEY = 'temperamento_catolico.quiz.v1'

export const QUIZ_STATUS = {
  NAO_INICIADO: 'nao-iniciado',
  EM_ANDAMENTO: 'em-andamento',
  COMPLETO: 'completo',
}

export const createInitialQuizState = () => ({
  version: 1,
  status: QUIZ_STATUS.NAO_INICIADO,
  startedAt: null,
  updatedAt: null,
  completedAt: null,
  currentStep: 0,
  answers: {},
  result: null,
})

export function loadQuizState() {
  try {
    const raw = localStorage.getItem(QUIZ_STORAGE_KEY)
    if (!raw) return createInitialQuizState()

    const parsed = JSON.parse(raw)

    return {
      ...createInitialQuizState(),
      ...parsed,
    }
  } catch {
    return createInitialQuizState()
  }
}

export function saveQuizState(state) {
  try {
    localStorage.setItem(QUIZ_STORAGE_KEY, JSON.stringify(state))
  } catch (error) {
    console.error('Erro ao salvar quiz no localStorage:', error)
  }
}

export function clearQuizState() {
  try {
    localStorage.removeItem(QUIZ_STORAGE_KEY)
  } catch (error) {
    console.error('Erro ao limpar quiz do localStorage:', error)
  }
}
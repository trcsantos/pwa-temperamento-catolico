const STORAGE_KEY = 'temperamento-catolico:questionnaire:v1'

export function loadQuestionnaireState() {
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY)

    if (!raw) return null

    const parsed = JSON.parse(raw)

    if (
      typeof parsed !== 'object' ||
      parsed === null ||
      !['intro', 'questionnaire', 'result'].includes(parsed.step) ||
      typeof parsed.currentQuestionIndex !== 'number' ||
      typeof parsed.answers !== 'object' ||
      parsed.answers === null
    ) {
      return null
    }

    return parsed
  } catch {
    return null
  }
}

export function saveQuestionnaireState(state) {
  try {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(state))
  } catch {
    // sem ação por enquanto
  }
}

export function clearQuestionnaireState() {
  try {
    window.localStorage.removeItem(STORAGE_KEY)
  } catch {
    // sem ação por enquanto
  }
}
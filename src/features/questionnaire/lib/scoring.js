const EMPTY_TOTALS = {
  colerico: 0,
  sanguineo: 0,
  melancolico: 0,
  fleumatico: 0,
}

export function calculateResult(answers, questions) {
  const totals = structuredClone(EMPTY_TOTALS)

  for (const question of questions) {
    const selectedOptionId = answers[question.id]
    const selectedOption = question.options.find(
      (option) => option.id === selectedOptionId
    )

    if (!selectedOption) continue

    for (const [profile, value] of Object.entries(selectedOption.weights)) {
      totals[profile] += value
    }
  }

  const ranking = Object.entries(totals).sort((a, b) => b[1] - a[1])
  const topProfile = ranking[0]?.[0] ?? null
  const topScore = ranking[0]?.[1] ?? 0

  return {
    totals,
    ranking,
    topProfile,
    topScore,
  }
}
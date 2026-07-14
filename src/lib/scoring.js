export function calculateResult(answers, questions) {
  const totals = {
    colerico: 0,
    sanguineo: 0,
    melancolico: 0,
    fleumatico: 0,
  }

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

  const sorted = Object.entries(totals).sort((a, b) => b[1] - a[1])
  const topProfile = sorted[0]?.[0] ?? null
  const topScore = sorted[0]?.[1] ?? 0

  return {
    totals,
    topProfile,
    topScore,
    ranking: sorted,
  }
}
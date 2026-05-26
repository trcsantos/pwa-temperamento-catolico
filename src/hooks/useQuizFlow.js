import { useEffect, useMemo, useState } from 'react'
import { quizQuestions } from '../data/quizData'
import {
  QUIZ_STATUS,
  clearQuizState,
  createInitialQuizState,
  loadQuizState,
  saveQuizState,
} from '../utils/quizStorage'

function calculateResult(answers) {
  const score = {
    colerico: 0,
    melancolico: 0,
    sanguineo: 0,
    fleumatico: 0,
  }

  quizQuestions.forEach((question) => {
    const selectedOptionId = answers[question.id]
    const selectedOption = question.options.find(
      (option) => option.id === selectedOptionId,
    )

    if (selectedOption) {
      score[selectedOption.temperament] += 1
    }
  })

  let highestTemperament = 'colerico'
  let highestScore = score.colerico

  Object.entries(score).forEach(([temperament, value]) => {
    if (value > highestScore) {
      highestTemperament = temperament
      highestScore = value
    }
  })

  return highestTemperament
}

export function useQuizFlow() {
  const [quizState, setQuizState] = useState(() => loadQuizState())

  useEffect(() => {
    saveQuizState(quizState)
  }, [quizState])

  const currentQuestion = quizQuestions[quizState.currentStep] ?? null
  const totalQuestions = quizQuestions.length
  const isLastQuestion = quizState.currentStep === totalQuestions - 1
  const progress = totalQuestions
    ? ((quizState.currentStep + 1) / totalQuestions) * 100
    : 0

  const started = quizState.status !== QUIZ_STATUS.NAO_INICIADO
  const completed = quizState.status === QUIZ_STATUS.COMPLETO

  function startQuiz() {
    const now = new Date().toISOString()

    setQuizState({
      ...createInitialQuizState(),
      status: QUIZ_STATUS.EM_ANDAMENTO,
      startedAt: now,
      updatedAt: now,
      currentStep: 0,
    })
  }

  function answerCurrentQuestion(optionId) {
    if (!currentQuestion) return

    const nextAnswers = {
      ...quizState.answers,
      [currentQuestion.id]: optionId,
    }

    const now = new Date().toISOString()

    if (isLastQuestion) {
      const result = calculateResult(nextAnswers)

      setQuizState({
        ...quizState,
        answers: nextAnswers,
        result,
        status: QUIZ_STATUS.COMPLETO,
        completedAt: now,
        updatedAt: now,
      })

      return
    }

    setQuizState({
      ...quizState,
      answers: nextAnswers,
      currentStep: quizState.currentStep + 1,
      status: QUIZ_STATUS.EM_ANDAMENTO,
      updatedAt: now,
    })
  }

  function goToPreviousQuestion() {
    if (quizState.currentStep === 0) return

    setQuizState({
      ...quizState,
      currentStep: quizState.currentStep - 1,
      updatedAt: new Date().toISOString(),
    })
  }

  function restartQuiz() {
    clearQuizState()
    setQuizState(createInitialQuizState())
  }

  const flow = useMemo(() => {
    if (quizState.status === QUIZ_STATUS.NAO_INICIADO) return 'home'
    if (quizState.status === QUIZ_STATUS.EM_ANDAMENTO) return 'quiz'
    if (quizState.status === QUIZ_STATUS.COMPLETO) return 'result'
    return 'home'
  }, [quizState.status])

  return {
    quizState,
    currentQuestion,
    totalQuestions,
    progress,
    started,
    completed,
    flow,
    startQuiz,
    answerCurrentQuestion,
    goToPreviousQuestion,
    restartQuiz,
  }
}
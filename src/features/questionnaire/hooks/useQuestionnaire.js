import { useEffect, useMemo, useState } from 'react'
import { calculateResult } from '../lib/scoring.js'
import {
  clearQuestionnaireState,
  loadQuestionnaireState,
  saveQuestionnaireState,
} from '../lib/storage.js'

function getDefaultState() {
  return {
    step: 'intro',
    currentQuestionIndex: 0,
    answers: {},
  }
}

function getBootState() {
  if (typeof window === 'undefined') {
    return {
      ...getDefaultState(),
      hasSavedProgress: false,
      savedProgress: null,
    }
  }

  const persisted = loadQuestionnaireState()

  const hasSavedProgress =
    persisted &&
    persisted.step === 'questionnaire' &&
    Object.keys(persisted.answers).length > 0

  return {
    ...getDefaultState(),
    hasSavedProgress: Boolean(hasSavedProgress),
    savedProgress: hasSavedProgress ? persisted : null,
  }
}

export function useQuestionnaire(questions) {
  const bootState = getBootState()

  const [step, setStep] = useState(bootState.step)
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(
    bootState.currentQuestionIndex,
  )
  const [answers, setAnswers] = useState(bootState.answers)
  const [hasSavedProgress, setHasSavedProgress] = useState(
    bootState.hasSavedProgress,
  )
  const [savedProgress, setSavedProgress] = useState(bootState.savedProgress)

  const result = useMemo(() => {
    if (step !== 'result') return null
    return calculateResult(answers, questions)
  }, [answers, questions, step])

  useEffect(() => {
    const shouldPersist =
      step === 'questionnaire' || (step === 'result' && Object.keys(answers).length > 0)

    if (!shouldPersist) return

    saveQuestionnaireState({
      step,
      currentQuestionIndex,
      answers,
    })
  }, [step, currentQuestionIndex, answers])

  function startNew() {
    clearQuestionnaireState()
    setAnswers({})
    setCurrentQuestionIndex(0)
    setStep('questionnaire')
    setHasSavedProgress(false)
    setSavedProgress(null)
  }

  function resumeSaved() {
    if (!savedProgress) {
      startNew()
      return
    }

    setAnswers(savedProgress.answers)
    setCurrentQuestionIndex(savedProgress.currentQuestionIndex)
    setStep(savedProgress.step)
    setHasSavedProgress(false)
  }

  function answerCurrentQuestion(questionId, optionId) {
    setAnswers((current) => ({
      ...current,
      [questionId]: optionId,
    }))
  }

  function nextQuestion() {
    const isLastQuestion = currentQuestionIndex >= questions.length - 1

    if (isLastQuestion) {
      setStep('result')
      return
    }

    setCurrentQuestionIndex((current) => current + 1)
  }

  function previousQuestion() {
    if (currentQuestionIndex <= 0) return
    setCurrentQuestionIndex((current) => current - 1)
  }

  function restart() {
    clearQuestionnaireState()
    setAnswers({})
    setCurrentQuestionIndex(0)
    setStep('intro')
    setHasSavedProgress(false)
    setSavedProgress(null)
  }

  return {
    step,
    answers,
    currentQuestionIndex,
    result,
    hasSavedProgress,
    startNew,
    resumeSaved,
    restart,
    answerCurrentQuestion,
    nextQuestion,
    previousQuestion,
  }
}
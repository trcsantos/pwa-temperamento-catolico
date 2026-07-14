import { useMemo } from 'react'
import IntroScreen from '../features/questionnaire/components/IntroScreen.jsx'
import QuestionScreen from '../features/questionnaire/components/QuestionScreen.jsx'
import ResultScreen from '../features/questionnaire/components/ResultScreen.jsx'
import { questions } from '../features/questionnaire/data/questions.js'
import { profiles } from '../features/questionnaire/data/profiles.js'
import { useQuestionnaire } from '../features/questionnaire/hooks/useQuestionnaire.js'

function AppShell() {
  const questionnaire = useQuestionnaire(questions)

  const activeQuestion = useMemo(() => {
    if (questionnaire.step !== 'questionnaire') return null
    return questions[questionnaire.currentQuestionIndex] ?? null
  }, [questionnaire.currentQuestionIndex, questionnaire.step])

  return (
    <div className="app-shell">
      <header className="app-header">
        <div className="container">
          <p className="app-kicker">PWA · Fase 1</p>
          <h1 className="app-title">Temperamento Católico</h1>
          <p className="app-subtitle">
            Uma base inicial para questionário progressivo com resultado por pesos,
            preparada para evoluir em conteúdo, lógica e precisão ao longo do tempo.
          </p>
        </div>
      </header>

      <main className="app-main">
        <div className="container">
          {questionnaire.step === 'intro' && (
            <IntroScreen
              totalQuestions={questions.length}
              hasSavedProgress={questionnaire.hasSavedProgress}
              onStartNew={questionnaire.startNew}
              onResumeSaved={questionnaire.resumeSaved}
            />
          )}

          {questionnaire.step === 'questionnaire' && activeQuestion && (
            <QuestionScreen
              question={activeQuestion}
              currentQuestionIndex={questionnaire.currentQuestionIndex}
              totalQuestions={questions.length}
              selectedOptionId={questionnaire.answers[activeQuestion.id] ?? null}
              onSelectOption={questionnaire.answerCurrentQuestion}
              onNext={questionnaire.nextQuestion}
              onPrevious={questionnaire.previousQuestion}
              isFirstQuestion={questionnaire.currentQuestionIndex === 0}
              isLastQuestion={
                questionnaire.currentQuestionIndex === questions.length - 1
              }
            />
          )}

          {questionnaire.step === 'result' && questionnaire.result && (
            <ResultScreen
              result={questionnaire.result}
              profiles={profiles}
              onRestart={questionnaire.restart}
            />
          )}
        </div>
      </main>
    </div>
  )
}

export default AppShell
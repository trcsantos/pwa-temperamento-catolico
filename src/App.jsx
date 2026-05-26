import './App.css'
import { quizQuestions } from './data/quizData'
import { useQuizFlow } from './hooks/useQuizFlow'
import { HomeScreen } from './screens/HomeScreen'
import { QuizScreen } from './screens/QuizScreen'
import { ResultScreen } from './screens/ResultScreen'

function App() {
  const {
    quizState,
    currentQuestion,
    totalQuestions,
    progress,
    flow,
    startQuiz,
    answerCurrentQuestion,
    goToPreviousQuestion,
    restartQuiz,
  } = useQuizFlow()

  if (flow === 'home') {
    return (
      <HomeScreen
        hasProgress={Object.keys(quizState.answers).length > 0}
        onStart={startQuiz}
        onRestart={restartQuiz}
      />
    )
  }

  if (flow === 'quiz') {
    return (
      <QuizScreen
        question={currentQuestion}
        currentStep={quizState.currentStep}
        totalQuestions={totalQuestions}
        progress={progress}
        selectedAnswer={quizState.answers[currentQuestion?.id]}
        onAnswer={answerCurrentQuestion}
        onBack={goToPreviousQuestion}
      />
    )
  }

  return (
    <ResultScreen
      result={quizState.result}
      onRestart={restartQuiz}
    />
  )
}

export default App
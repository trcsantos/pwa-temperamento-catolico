import { ProgressBar } from '../components/ProgressBar'
import { OptionButton } from '../components/OptionButton'

export function QuizScreen({
  question,
  currentStep,
  totalQuestions,
  progress,
  selectedAnswer,
  onAnswer,
  onBack,
}) {
  if (!question) return null

  return (
    <main className="screen screen-quiz">
      <section className="card quiz-card">
        <div className="quiz-header">
          <p className="eyebrow">
            {question.type === 'situacao' ? 'Situação' : 'Pergunta'}{' '}
            {currentStep + 1} de {totalQuestions}
          </p>

          <ProgressBar value={progress} />
        </div>

        <h2>{question.title}</h2>

        <div className="options">
          {question.options.map((option) => (
            <OptionButton
              key={option.id}
              label={option.label}
              selected={selectedAnswer === option.id}
              onClick={() => onAnswer(option.id)}
            />
          ))}
        </div>

        <div className="actions">
          <button
            className="btn btn-secondary"
            onClick={onBack}
            disabled={currentStep === 0}
          >
            Voltar
          </button>
        </div>
      </section>
    </main>
  )
}
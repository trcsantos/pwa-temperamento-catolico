import Button from '../../../components/Button.jsx'
import Card from '../../../components/Card.jsx'
import ProgressBar from '../../../components/ProgressBar.jsx'

function QuestionScreen({
  question,
  currentQuestionIndex,
  totalQuestions,
  selectedOptionId,
  onSelectOption,
  onNext,
  onPrevious,
  isFirstQuestion,
  isLastQuestion,
}) {
  return (
    <div className="screen screen-questionnaire">
      <ProgressBar current={currentQuestionIndex + 1} total={totalQuestions} />

      <Card>
        <p className="screen-eyebrow">Questionário</p>
        <h2>{question.prompt}</h2>

        {question.helperText ? (
          <p className="screen-text">{question.helperText}</p>
        ) : null}

        <div className="option-list" role="radiogroup" aria-label={question.prompt}>
          {question.options.map((option) => {
            const checked = selectedOptionId === option.id

            return (
              <label
                key={option.id}
                className={`option-card ${checked ? 'is-selected' : ''}`}
              >
                <input
                  className="option-input"
                  type="radio"
                  name={question.id}
                  value={option.id}
                  checked={checked}
                  onChange={() => onSelectOption(question.id, option.id)}
                />
                <span className="option-content">
                  <span className="option-title">{option.label}</span>
                  {option.description ? (
                    <span className="option-description">
                      {option.description}
                    </span>
                  ) : null}
                </span>
              </label>
            )
          })}
        </div>

        <div className="actions actions-between">
          <Button variant="secondary" onClick={onPrevious} disabled={isFirstQuestion}>
            Voltar
          </Button>

          <Button onClick={onNext} disabled={!selectedOptionId}>
            {isLastQuestion ? 'Ver resultado' : 'Próxima pergunta'}
          </Button>
        </div>
      </Card>
    </div>
  )
}

export default QuestionScreen
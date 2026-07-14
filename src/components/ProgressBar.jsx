function ProgressBar({ current, total }) {
  const percentage = total > 0 ? Math.round((current / total) * 100) : 0

  return (
    <div className="progress-block" aria-label="Progresso do questionário">
      <div className="progress-meta">
        <span>
          Pergunta {current} de {total}
        </span>
        <span>{percentage}%</span>
      </div>
      <div className="progress-track" aria-hidden="true">
        <div
          className="progress-fill"
          style={{ width: `${percentage}%` }}
        />
      </div>
    </div>
  )
}

export default ProgressBar
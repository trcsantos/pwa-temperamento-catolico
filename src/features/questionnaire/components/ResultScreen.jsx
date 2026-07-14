import Button from '../../../components/Button.jsx'
import Card from '../../../components/Card.jsx'

function ResultScreen({ result, profiles, onRestart }) {
  const topProfile = profiles[result.topProfile]

  return (
    <div className="screen screen-result">
      <Card>
        <p className="screen-eyebrow">Resultado</p>
        <h2>
          Resultado predominante:{' '}
          <span className="result-highlight">{topProfile?.title ?? 'Indefinido'}</span>
        </h2>

        <p className="screen-text">
          {topProfile?.summary ??
            'Ainda não foi possível interpretar o resultado.'}
        </p>

        <div className="result-grid">
          {result.ranking.map(([profileKey, score]) => {
            const profile = profiles[profileKey]

            return (
              <article key={profileKey} className="result-card">
                <h3>{profile?.title ?? profileKey}</h3>
                <p className="result-score">{score} pontos</p>
                <p className="result-description">
                  {profile?.description ?? 'Descrição ainda não definida.'}
                </p>
              </article>
            )
          })}
        </div>

        <div className="actions">
          <Button onClick={onRestart}>Refazer questionário</Button>
        </div>
      </Card>
    </div>
  )
}

export default ResultScreen
const temperamentLabels = {
  colerico: 'Colérico',
  melancolico: 'Melancólico',
  sanguineo: 'Sanguíneo',
  fleumatico: 'Fleumático',
}

export function ResultScreen({ result, onRestart }) {
  return (
    <main className="screen screen-result">
      <section className="card result-card">
        <p className="eyebrow">Resultado</p>
        <h1>Seu temperamento provável é</h1>
        <h2 className="result-title">
          {temperamentLabels[result] ?? 'Não identificado'}
        </h2>

        <p className="subtitle">
          Na próxima fase, você poderá ver conteúdos pensados para o seu perfil.
        </p>

        <div className="actions">
          <button className="btn btn-primary" onClick={onRestart}>
            Refazer
          </button>
        </div>
      </section>
    </main>
  )
}
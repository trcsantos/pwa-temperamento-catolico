export function HomeScreen({ hasProgress, onStart, onRestart }) {
  return (
    <main className="screen screen-home">
      <section className="card hero-card">
        <p className="eyebrow">Temperamento Católico</p>

        <h1>Descubra o seu temperamento respondendo a algumas perguntas</h1>

        <p className="subtitle">
          Leve, rápido e pensado para ajudar no seu autoconhecimento.
        </p>

        <div className="actions">
          <button className="btn btn-primary" onClick={onStart}>
            {hasProgress ? 'Continuar' : 'Começar'}
          </button>

          {hasProgress && (
            <button className="btn btn-secondary" onClick={onRestart}>
              Recomeçar
            </button>
          )}
        </div>
      </section>
    </main>
  )
}
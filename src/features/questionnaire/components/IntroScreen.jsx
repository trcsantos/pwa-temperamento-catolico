import Button from '../../../components/Button.jsx'
import Card from '../../../components/Card.jsx'

function IntroScreen({
  totalQuestions,
  hasSavedProgress,
  onStartNew,
  onResumeSaved,
}) {
  return (
    <Card className="screen screen-intro">
      <p className="screen-eyebrow">Início</p>
      <h2>
        {hasSavedProgress
          ? 'Encontramos um questionário iniciado'
          : 'Deseja iniciar o questionário?'}
      </h2>

      {!hasSavedProgress && (
        <>
          <p className="screen-text">
            Você responderá {totalQuestions} perguntas objetivas. Ao final, o app
            exibirá um resultado com base nos pesos associados às suas respostas.
          </p>
          <p className="screen-note">
            Esta é uma primeira versão. O conteúdo, os pesos e a interpretação dos
            resultados poderão ser refinados ao longo do tempo.
          </p>

          <div className="actions">
            <Button onClick={onStartNew}>Iniciar questionário</Button>
          </div>
        </>
      )}

      {hasSavedProgress && (
        <>
          <p className="screen-text">
            Há um progresso salvo localmente neste dispositivo. Você pode continuar
            o questionário anterior de onde parou ou iniciar um novo questionário.
          </p>
          <p className="screen-note">
            Se iniciar um novo questionário, o progresso salvo anteriormente será
            substituído.
          </p>

          <div className="actions">
            <Button onClick={onResumeSaved}>Continuar questionário anterior</Button>
            <Button variant="secondary" onClick={onStartNew}>
              Iniciar novo questionário
            </Button>
          </div>
        </>
      )}
    </Card>
  )
}

export default IntroScreen
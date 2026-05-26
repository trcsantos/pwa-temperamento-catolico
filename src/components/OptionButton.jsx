export function OptionButton({ label, selected, onClick }) {
  return (
    <button
      type="button"
      className={`option-button ${selected ? 'is-selected' : ''}`}
      onClick={onClick}
    >
      {label}
    </button>
  )
}
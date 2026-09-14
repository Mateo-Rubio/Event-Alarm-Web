import './Tooltip.css'

export default function Tooltip({ titulo, lineas, visible, x }) {
  return (
    <div
      className={`tooltip${visible ? ' tooltip--visible' : ''}`}
      style={{ left: x }}
      role="tooltip"
    >
      <span className="txt-13-medium tooltip-titulo">{titulo}</span>
      {lineas.map((l) => (
        <span key={l} className="txt-12 tooltip-linea">
          {l}
        </span>
      ))}
    </div>
  )
}

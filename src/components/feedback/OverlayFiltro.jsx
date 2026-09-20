import { useState } from 'react'
import './Overlay.css'

// Overlay de filtro con checkboxes — frames 127:17 (Disparador),
// 127:77 (Reto) y 127:137 (Resultado).
//
// Lógica de selección:
// - Al marcar "Todos" se marcan todas las opciones individuales.
// - Al desmarcar "Todos" se desmarcan todas.
// - Al quitar una opción individual se desmarca "Todos".
// - Cuando todas las individuales quedan marcadas, "Todos" se marca solo.
// Estado local, se pierde al recargar (maqueta sin persistencia).
export default function OverlayFiltro({
  titulo,
  descripcion,
  opciones,
  onCancelar,
  onAplicar,
}) {
  // Estado inicial del frame: "Todos" viene predeterminado (todas marcadas).
  const [seleccion, setSeleccion] = useState(() =>
    Object.fromEntries(opciones.map((op) => [op, true])),
  )

  const todasMarcadas = opciones.every((op) => seleccion[op])

  const alternarTodos = () => {
    const nuevoValor = !todasMarcadas
    setSeleccion(Object.fromEntries(opciones.map((op) => [op, nuevoValor])))
  }

  const alternarOpcion = (op) => {
    setSeleccion((prev) => ({ ...prev, [op]: !prev[op] }))
  }

  return (
    <div className="overlay" style={{ width: 300 }} role="dialog" aria-label={titulo}>
      <div className="overlay-header">
        <span className="txt-overlay-titulo overlay-titulo">{titulo}</span>
        <button
          type="button"
          className="overlay-cerrar txt-overlay-cerrar"
          aria-label="Cerrar"
          onClick={onCancelar}
        >
          ×
        </button>
      </div>

      <p className="overlay-descripcion">{descripcion}</p>

      <div className="overlay-rows">
        <button type="button" className="overlay-row" onClick={alternarTodos}>
          <span
            className={`overlay-check${todasMarcadas ? ' overlay-check--marcado' : ''}`}
          >
            {todasMarcadas && <span className="txt-13-semibold">✓</span>}
          </span>
          <span className="txt-14-semibold overlay-opcion">Todos (predeterminado)</span>
        </button>

        {opciones.map((op) => (
          <button
            key={op}
            type="button"
            className="overlay-row"
            onClick={() => alternarOpcion(op)}
          >
            <span
              className={`overlay-check${seleccion[op] ? ' overlay-check--marcado' : ''}`}
            >
              {seleccion[op] && <span className="txt-13-semibold">✓</span>}
            </span>
            <span className="txt-14-medium-left overlay-opcion">{op}</span>
          </button>
        ))}
      </div>

      <div className="overlay-footer">
        <button
          type="button"
          className="overlay-btn overlay-btn--cancelar txt-14-semibold"
          onClick={onCancelar}
        >
          Cancelar
        </button>
        <button
          type="button"
          className="overlay-btn overlay-btn--aplicar txt-14-semibold"
          onClick={onAplicar}
        >
          Aplicar
        </button>
      </div>
    </div>
  )
}

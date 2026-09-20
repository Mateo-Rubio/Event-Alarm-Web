import './Overlay.css'

// Overlay de rango de fechas — frame 125:17 (calendario de Agosto 2026).
// Réplica visual estática: los días 1 y 30 son los extremos seleccionados
// (naranja) y del 2 al 29 más el 31 quedan resaltados como rango (suave).
// Sin lógica real de selección de fechas (maqueta).

// Semanas L-M-X-J-V-S-D. Agosto 2026: el 1 cae en sábado, el 31 en lunes.
// null = celda vacía.
const SEMANAS = [
  [null, null, null, null, null, 1, 2],
  [3, 4, 5, 6, 7, 8, 9],
  [10, 11, 12, 13, 14, 15, 16],
  [17, 18, 19, 20, 21, 22, 23],
  [24, 25, 26, 27, 28, 29, 30],
  [31, null, null, null, null, null, null],
]

const DIAS_SEMANA = ['L', 'M', 'X', 'J', 'V', 'S', 'D']
const EXTREMOS = [1, 30] // días seleccionados (naranja)

export default function OverlayRangoFechas({ onCancelar, onAplicar }) {
  return (
    <div
      className="overlay overlay--fechas"
      style={{ width: 380 }}
      role="dialog"
      aria-label="Rango de fechas"
    >
      <div className="overlay-header">
        <span className="txt-overlay-titulo overlay-titulo">Rango de fechas</span>
        <button
          type="button"
          className="overlay-cerrar txt-overlay-nav"
          aria-label="Cerrar"
          onClick={onCancelar}
        >
          ×
        </button>
      </div>

      <p className="overlay-descripcion">Selecciona el rango para tu historial</p>

      <div className="overlay-chips">
        <div className="overlay-chip">
          <span className="txt-11-semibold overlay-chip-label">DESDE</span>
          <span className="txt-14-semibold overlay-chip-valor">1 ago 2026</span>
        </div>
        <div className="overlay-chip">
          <span className="txt-11-semibold overlay-chip-label">HASTA</span>
          <span className="txt-14-semibold overlay-chip-valor">30 ago 2026</span>
        </div>
      </div>

      <div className="overlay-monthnav">
        <button type="button" className="overlay-monthnav-flecha txt-overlay-nav" aria-label="Mes anterior">
          ‹
        </button>
        <span className="txt-14-semibold overlay-monthnav-mes">Agosto 2026</span>
        <button type="button" className="overlay-monthnav-flecha txt-overlay-nav" aria-label="Mes siguiente">
          ›
        </button>
      </div>

      <div className="overlay-weekdays">
        {DIAS_SEMANA.map((d, i) => (
          <span key={i} className="txt-11-semibold overlay-weekday">
            {d}
          </span>
        ))}
      </div>

      <div className="overlay-calendar">
        {SEMANAS.map((semana, si) => (
          <div key={si} className="overlay-week">
            {semana.map((dia, di) => {
              if (dia === null) return <span key={di} className="overlay-day" />
              const esExtremo = EXTREMOS.includes(dia)
              return (
                <span
                  key={di}
                  className={`overlay-day ${esExtremo ? 'overlay-day--sel' : 'overlay-day--rango'}`}
                >
                  <span
                    className={
                      esExtremo ? 'txt-13-semibold overlay-day-num' : 'txt-13-center overlay-day-num'
                    }
                  >
                    {dia}
                  </span>
                </span>
              )
            })}
          </div>
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

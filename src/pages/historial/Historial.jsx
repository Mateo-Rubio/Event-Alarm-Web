import { useState } from 'react'
import PageHead from '../../components/navegacion/PageHead.jsx'
import Tarjeta from '../../components/contenedores/Tarjeta.jsx'
import OverlayFiltro from '../../components/feedback/OverlayFiltro.jsx'
import OverlayRangoFechas from '../../components/feedback/OverlayRangoFechas.jsx'
import './Historial.css'

// W3.0 · Historial contextual · node 192:1715
// Cada registro conserva el disparador y el reto que la alarma tenía en ese
// momento. Datos hardcodeados tomados literalmente del frame de Figma.
const REGISTROS = [
  {
    fecha: '26 ago 2026 · 06:15 a. m.',
    alarma: 'Parcial de Cálculo',
    disparador: 'Ubicación',
    reto: 'Caminar',
    posposiciones: '1',
    resultado: 'Cumplida',
    clase: 'cumplida',
  },
  {
    fecha: '26 ago 2026 · 07:40 a. m.',
    alarma: 'Salida a la oficina',
    disparador: 'Clima',
    reto: 'Escanear QR',
    posposiciones: '2',
    resultado: 'Pospuesta',
    clase: 'pospuesta',
  },
  {
    fecha: '25 ago 2026 · 05:30 a. m.',
    alarma: 'Turno de domingo',
    disparador: 'Hora fija',
    reto: 'Caminar',
    posposiciones: '0',
    resultado: 'No sonó',
    clase: 'no-sono',
    resaltado: 'oscura',
  },
  {
    fechaEvento: { label: 'Por evento', texto: '24 ago 2026 · Sin hora fija' },
    alarma: 'Llegada al gimnasio',
    disparador: 'Ubicación',
    reto: 'Deslizar',
    posposiciones: '0',
    resultado: 'Cumplida',
    clase: 'cumplida',
    resaltado: 'gris',
  },
  {
    fecha: '24 ago 2026 · 06:00 a. m.',
    alarma: 'Rutina matutina',
    disparador: 'Hora fija',
    reto: 'Hablar',
    posposiciones: '1',
    resultado: 'Cumplida',
    clase: 'cumplida',
  },
  {
    fecha: '23 ago 2026 · 08:10 a. m.',
    alarma: 'Reunión de equipo',
    disparador: 'Calendario',
    reto: 'Escanear QR',
    posposiciones: '3',
    resultado: 'Pospuesta',
    clase: 'pospuesta',
  },
  {
    fecha: '23 ago 2026 · 06:15 a. m.',
    alarma: 'Clase de inglés',
    disparador: 'Dispositivo Bluetooth',
    reto: 'Caminar',
    posposiciones: '0',
    resultado: 'Cumplida',
    clase: 'cumplida',
  },
  {
    fecha: '22 ago 2026 · 05:45 a. m.',
    alarma: 'Salida temprana',
    disparador: 'Clima',
    reto: 'Caminar',
    posposiciones: '0',
    resultado: 'Cumplida',
    clase: 'cumplida',
  },
]

// Chevron 16x16 (ícono de select)
function Chevron() {
  return (
    <svg
      className="hist-select-chevron"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path
        d="M4 6l4 4 4-4"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export default function Historial() {
  // Solo un overlay abierto a la vez. null = ninguno.
  const [abierto, setAbierto] = useState(null)

  const toggle = (id) => setAbierto((prev) => (prev === id ? null : id))
  const cerrar = () => setAbierto(null)

  const filtros = [
    { id: 'fechas', etiqueta: 'Rango de fechas', valor: '1 ago – 30 ago 2026', ancho: 256 },
    { id: 'disparador', etiqueta: 'Disparador', valor: 'Todos', ancho: 224 },
    { id: 'reto', etiqueta: 'Reto', valor: 'Todos', ancho: 224 },
    { id: 'resultado', etiqueta: 'Resultado', valor: 'Todos', ancho: 160 },
  ]

  const renderOverlay = (id) => {
    switch (id) {
      case 'fechas':
        return <OverlayRangoFechas onCancelar={cerrar} onAplicar={cerrar} />
      case 'disparador':
        return (
          <OverlayFiltro
            titulo="Disparador"
            descripcion="Filtra por el tipo de disparador contextual"
            opciones={['Ubicación', 'Clima', 'Hora fija', 'Dispositivo Bluetooth']}
            onCancelar={cerrar}
            onAplicar={cerrar}
          />
        )
      case 'reto':
        return (
          <OverlayFiltro
            titulo="Reto"
            descripcion="Filtra por el tipo de reto de apagado"
            opciones={['Caminar', 'Escanear QR', 'Deslizar', 'Hablar']}
            onCancelar={cerrar}
            onAplicar={cerrar}
          />
        )
      case 'resultado':
        return (
          <OverlayFiltro
            titulo="Resultado"
            descripcion="Filtra por el resultado de la alarma"
            opciones={['Pospuesta', 'Cumplida']}
            onCancelar={cerrar}
            onAplicar={cerrar}
          />
        )
      default:
        return null
    }
  }

  return (
    <div className="historial">
      <PageHead
        titulo="Historial contextual"
        subtitulo="Cada registro conserva el disparador y el reto que tenía la alarma en ese momento."
      />

      {/* Card de filtros */}
      <Tarjeta className="hist-filtros">
        <div className="hist-filtros-fila">
          {filtros.map((f) => (
            <div className="hist-select-wrap" key={f.id}>
              <div
                className="hist-select"
                style={{ width: f.ancho }}
                onClick={() => toggle(f.id)}
                role="button"
                tabIndex={0}
                aria-haspopup="dialog"
                aria-expanded={abierto === f.id}
              >
                <span className="txt-cuerpo hist-select-valor">{f.valor}</span>
                <Chevron />
                <span className="txt-12 hist-select-etiqueta">{f.etiqueta}</span>
              </div>
              {abierto === f.id && (
                <div className="hist-overlay-pop">{renderOverlay(f.id)}</div>
              )}
            </div>
          ))}
          <button type="button" className="hist-aplicar txt-boton-roboto-medium">
            Aplicar
          </button>
        </div>
      </Tarjeta>

      {/* Card de tabla */}
      <Tarjeta className="hist-tabla">
        <div className="hist-grid hist-thead">
          <span className="txt-cabecera-tabla hist-th">Fecha y hora</span>
          <span className="txt-cabecera-tabla hist-th">Alarma</span>
          <span className="txt-cabecera-tabla hist-th">Disparador</span>
          <span className="txt-cabecera-tabla hist-th">Reto</span>
          <span className="txt-cabecera-tabla hist-th--posposiciones">Posposiciones</span>
          <span className="txt-cabecera-tabla hist-th--resultado">Resultado</span>
        </div>

        {REGISTROS.map((r, i) => (
          <div
            key={i}
            className={`hist-grid hist-fila${
              r.resaltado === 'oscura'
                ? ' hist-fila--resaltada-oscura'
                : r.resaltado === 'gris'
                  ? ' hist-fila--resaltada-gris'
                  : ''
            }`}
          >
            {r.fechaEvento ? (
              <span className="hist-por-evento">
                <span className="txt-etiqueta hist-por-evento-label">
                  {r.fechaEvento.label}
                </span>
                <span className="txt-13 hist-celda">{r.fechaEvento.texto}</span>
              </span>
            ) : (
              <span className="txt-13 hist-celda">{r.fecha}</span>
            )}
            <span className="txt-13 hist-celda">{r.alarma}</span>
            <span className="txt-13 hist-celda">{r.disparador}</span>
            <span className="txt-13 hist-celda">{r.reto}</span>
            <span className="txt-13 hist-celda hist-celda--num">{r.posposiciones}</span>
            <span className={`txt-13-medium hist-res--${r.clase}`}>{r.resultado}</span>
          </div>
        ))}
      </Tarjeta>

      {/* Footer: registros + paginación */}
      <div className="hist-footer">
        <span className="txt-12 hist-footer-texto">Mostrando 8 de 41 registros</span>
        <div className="hist-paginacion">
          <button type="button" className="hist-pag-btn hist-pag-btn--activo txt-14-medium">
            1
          </button>
          <button type="button" className="hist-pag-btn txt-14-center">
            2
          </button>
          <button type="button" className="hist-pag-btn txt-14-center">
            3
          </button>
          <span className="txt-cuerpo hist-pag-puntos">…</span>
          <button type="button" className="hist-pag-btn txt-14-center">
            6
          </button>
        </div>
      </div>

      {/* Capa para cerrar al hacer clic fuera del overlay */}
      {abierto && <div className="hist-overlay-backdrop" onClick={cerrar} />}
    </div>
  )
}

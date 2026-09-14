import { useEffect } from 'react'
import PageHead from '../../components/navegacion/PageHead.jsx'
import Segmentado from '../../components/acciones/Segmentado.jsx'
import Tarjeta from '../../components/contenedores/Tarjeta.jsx'
import lineas from '../../assets/resumen-lineas.svg'
import donut from '../../assets/resumen-donut.svg'
import './Resumen.css'

const kpis = [
  {
    etiqueta: 'Alarmas cumplidas',
    cifra: '86 %',
    nota: '+4 puntos frente al mes anterior',
  },
  {
    etiqueta: 'Posposiciones por alarma',
    cifra: '1,4',
    nota: 'Promedio del periodo',
    etiquetaGris: true,
  },
  {
    etiqueta: 'Retraso promedio',
    cifra: '9 min',
    nota: 'Entre el disparo y el apagado',
  },
  {
    etiqueta: 'Alarmas que no sonaron',
    cifra: '3',
    nota: 'Revisa el detalle en Historial',
  },
]

const ejeFechas = ['1 ago', '6 ago', '11 ago', '16 ago', '21 ago', '26 ago']

const leyenda = [
  { color: 'var(--color-verde)', texto: 'Caminar', valor: '52 %' },
  { color: 'var(--color-rosa)', texto: 'Escanear QR', valor: '24 %' },
  { color: 'var(--color-amarillo)', texto: 'Hablar', valor: '17 %' },
  { color: 'var(--color-morado)', texto: 'Deslizar', valor: '7 %' },
]

const filas = [
  {
    fecha: '26 ago 2026 · 06:15 a. m.',
    alarma: 'Parcial de Cálculo',
    disparador: 'Ubicación',
    reto: 'Caminar',
    resultado: 'Cumplida',
    resultadoColor: 'var(--color-verde)',
  },
  {
    fecha: '26 ago 2026 · 07:40 a. m.',
    alarma: 'Salida a la oficina',
    disparador: 'Clima',
    reto: 'Escanear QR',
    resultado: 'Pospuesta 2 veces',
    resultadoColor: 'var(--color-amarillo)',
    resultadoMedium: true,
  },
  {
    fecha: '25 ago 2026 · 05:30 a. m.',
    alarma: 'Turno de domingo',
    disparador: 'Hora fija',
    reto: 'Caminar',
    resultado: 'No sonó',
    resultadoColor: 'var(--color-rojo)',
    resultadoMedium: true,
    resaltada: true,
  },
]

export default function Resumen() {
  return (
    <div className="resumen">
      <PageHead
        titulo="Resumen"
        subtitulo="Últimos 30 días · 41 alarmas registradas"
        derecha={
          <Segmentado opciones={['7 días', '30 días', '90 días']} activoInicial={1} width={352} />
        }
      />

      <div className="resumen-kpis">
        {kpis.map((k) => (
          <Tarjeta key={k.etiqueta} className="kpi">
            <span
              className="txt-etiqueta kpi-etiqueta"
              style={k.etiquetaGris ? { color: 'var(--color-kpi-gris)' } : undefined}
            >
              {k.etiqueta}
            </span>
            <span className="txt-kpi-cifra kpi-cifra">{k.cifra}</span>
            <span className="txt-12 kpi-nota">{k.nota}</span>
          </Tarjeta>
        ))}
      </div>

      <div className="resumen-graficas">
        <Tarjeta className="grafica-lineas">
          <div className="grafica-cabecera">
            <h2 className="txt-h2">Cumplimiento por día</h2>
            <div className="grafica-leyenda-mini">
              <span className="leyenda-mini-item">
                <span className="leyenda-linea" style={{ background: 'var(--color-naranja)' }} />
                <span className="txt-12">Cumplidas</span>
              </span>
              <span className="leyenda-mini-item">
                <span className="leyenda-linea" style={{ background: 'var(--color-morado)' }} />
                <span className="txt-12">Pospuestas</span>
              </span>
            </div>
          </div>
          <div className="grafica-lienzo">
            <img src={lineas} alt="" className="grafica-lineas-img" />
            <div className="grafica-eje">
              {ejeFechas.map((f) => (
                <span key={f} className="txt-eje">
                  {f}
                </span>
              ))}
            </div>
          </div>
        </Tarjeta>

        <Tarjeta className="grafica-donut">
          <h2 className="txt-h2">Retos utilizados</h2>
          <div className="donut-lienzo">
            <img src={donut} alt="" width={160} height={160} />
          </div>
          <ul className="donut-leyenda">
            {leyenda.map((l) => (
              <li key={l.texto} className="donut-leyenda-item">
                <span className="donut-swatch" style={{ background: l.color }} />
                <span className="txt-12">{l.texto}</span>
                <span className="txt-12 donut-valor">{l.valor}</span>
              </li>
            ))}
          </ul>
        </Tarjeta>
      </div>

      <Tarjeta className="resumen-actividad">
        <div className="actividad-cabecera">
          <h2 className="txt-h2">Actividad reciente</h2>
          <button type="button" className="boton-fantasma txt-14-center">
            Ver todo el historial
          </button>
        </div>
        <div className="tabla">
          <div className="tabla-cabecera">
            <span className="txt-cabecera-tabla">Fecha y hora</span>
            <span className="txt-cabecera-tabla">Alarma</span>
            <span className="txt-cabecera-tabla">Disparador</span>
            <span className="txt-cabecera-tabla">Reto</span>
            <span className="txt-cabecera-tabla">Resultado</span>
          </div>
          {filas.map((f) => (
            <div
              key={f.fecha}
              className={`tabla-fila${f.resaltada ? ' tabla-fila--resaltada' : ''}`}
            >
              <span className="txt-13">{f.fecha}</span>
              <span className="txt-13">{f.alarma}</span>
              <span className="txt-13">{f.disparador}</span>
              <span className="txt-13">{f.reto}</span>
              <span
                className={f.resultadoMedium ? 'txt-13-medium' : 'txt-13'}
                style={{ color: f.resultadoColor }}
              >
                {f.resultado}
              </span>
            </div>
          ))}
        </div>
      </Tarjeta>
    </div>
  )
}

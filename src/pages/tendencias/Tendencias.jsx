import { useState } from 'react'
import PageHead from '../../components/navegacion/PageHead.jsx'
import Segmentado from '../../components/acciones/Segmentado.jsx'
import Tarjeta from '../../components/contenedores/Tarjeta.jsx'
import Tooltip from '../../components/feedback/Tooltip.jsx'
import lineas from '../../assets/tendencias-lineas.svg'
import './Tendencias.css'

const ejeFechas = ['1 ago', '6 ago', '11 ago', '16 ago', '21 ago', '26 ago']

// Zonas sensibles (hotspots) sobre la gráfica: 5 franjas iguales (20% cada una).
const hotspots = [
  {
    x: '0%',
    ancho: '20%',
    titulo: '3 ago · 06:15 a. m.',
    lineas: ['Disparador: Ubicación', 'Reto: Caminar', 'Retraso: 6 min'],
  },
  {
    x: '20%',
    ancho: '20%',
    titulo: '9 ago · 07:00 a. m.',
    lineas: ['Disparador: Clima', 'Reto: Escanear QR', 'Retraso: 11 min'],
  },
  {
    x: '40%',
    ancho: '20%',
    titulo: '15 ago · 05:30 a. m.',
    lineas: ['Disparador: Hora fija', 'Reto: Hablar', 'Retraso: 9 min'],
  },
  {
    x: '60%',
    ancho: '20%',
    titulo: '21 ago · 06:45 a. m.',
    lineas: ['Disparador: Calendario', 'Reto: Deslizar', 'Retraso: 14 min'],
  },
  {
    x: '80%',
    ancho: '20%',
    titulo: '26 ago · 06:15 a. m.',
    lineas: ['Disparador: Bluetooth', 'Reto: Caminar', 'Retraso: 4 min'],
  },
]

// Barras verticales: alturas en px, ancho 48, gap 12. Amarillo.
const barras = [
  { dia: 'lun', alto: 60 },
  { dia: 'mar', alto: 100 },
  { dia: 'mié', alto: 80 },
  { dia: 'jue', alto: 120 },
  { dia: 'vie', alto: 160 },
  { dia: 'sáb', alto: 40 },
  { dia: 'dom', alto: 20 },
]

// Barras horizontales: ancho del relleno en px (o 'fill'), color y valor.
const hbars = [
  { etiqueta: 'Ubicación', ancho: 'fill', color: 'var(--color-rojo)', valor: '4' },
  { etiqueta: 'Calendario', ancho: 114.42, color: 'var(--color-rojo)', valor: '2' },
  { etiqueta: 'Clima', ancho: 57.2, color: 'var(--color-rojo)', valor: '1' },
  { etiqueta: 'Bluetooth', ancho: 57.2, color: 'var(--color-rojo)', valor: '1' },
  { etiqueta: 'Hora fija', ancho: 0, color: 'var(--color-rojo)', valor: '0' },
]

export default function Tendencias() {
  const [activo, setActivo] = useState(null)

  return (
    <div className="tendencias">
      <PageHead
        titulo="Tendencias"
        subtitulo="Pasa el cursor sobre un punto para ver la configuración que tenía esa alarma."
        derecha={
          <Segmentado opciones={['Semana', 'Mes', 'Trimestre']} activoInicial={1} width={352} />
        }
      />

      <Tarjeta className="tendencias-lineas-card">
        <div className="tendencias-cabecera">
          <h2 className="txt-h2">Retraso promedio por día</h2>
          <span className="txt-12 tendencias-cabecera-nota">
            Minutos entre el disparo y el apagado
          </span>
        </div>
        <div className="tendencias-lienzo">
          <img src={lineas} alt="" className="tendencias-lineas-img" />
          <div className="tendencias-eje">
            {ejeFechas.map((f) => (
              <span key={f} className="txt-eje">
                {f}
              </span>
            ))}
          </div>
          <div className="tendencias-hotspots">
            {hotspots.map((h, i) => (
              <div
                key={h.titulo}
                className="hotspot"
                style={{ left: h.x, width: h.ancho }}
                onMouseEnter={() => setActivo(i)}
                onMouseLeave={() => setActivo(null)}
              >
                <Tooltip
                  titulo={h.titulo}
                  lineas={h.lineas}
                  visible={activo === i}
                  x="50%"
                />
              </div>
            ))}
          </div>
        </div>
      </Tarjeta>

      <div className="tendencias-fila">
        <Tarjeta className="tendencias-barras-card">
          <h2 className="txt-h2">Posposiciones por día de la semana</h2>
          <div className="tendencias-barras-lienzo">
            <div className="barras">
              {barras.map((b) => (
                <div key={b.dia} className="barra-col">
                  <div className="barra" style={{ height: b.alto }} />
                </div>
              ))}
            </div>
            <div className="barras-eje">
              {barras.map((b) => (
                <span key={b.dia} className="txt-eje-center barras-eje-item">
                  {b.dia}
                </span>
              ))}
            </div>
          </div>
        </Tarjeta>

        <Tarjeta className="tendencias-hbars-card">
          <h2 className="txt-h2">Fallas por disparador</h2>
          <div className="hbars">
            {hbars.map((h) => (
              <div key={h.etiqueta} className="hbar">
                <span className="txt-cuerpo hbar-etiqueta">{h.etiqueta}</span>
                <div className="hbar-pista">
                  <div
                    className="hbar-relleno"
                    style={{
                      background: h.color,
                      width: h.ancho === 'fill' ? '100%' : h.ancho,
                    }}
                  />
                </div>
                <span className="txt-14-right hbar-valor">{h.valor}</span>
              </div>
            ))}
          </div>
        </Tarjeta>
      </div>
    </div>
  )
}

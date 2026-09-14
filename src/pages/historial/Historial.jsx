import PageHead from '../../components/navegacion/PageHead.jsx'
import Tarjeta from '../../components/contenedores/Tarjeta.jsx'
import './Historial.css'

export default function Historial() {
  return (
    <div className="historial">
      <PageHead
        titulo="Historial"
        subtitulo="Registro completo de alarmas."
      />
      <Tarjeta className="historial-wip">
        <span className="historial-wip-insignia txt-etiqueta">En construcción</span>
        <h2 className="txt-h2 historial-wip-titulo">Work in progress</h2>
        <p className="txt-cuerpo historial-wip-texto">
          Esta pantalla todavía está en construcción.
        </p>
      </Tarjeta>
    </div>
  )
}

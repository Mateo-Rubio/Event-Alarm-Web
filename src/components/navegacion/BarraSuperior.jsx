import iconoCampana from '../../icons/campana_icon.png'
import './BarraSuperior.css'

export default function BarraSuperior() {
  return (
    <header className="topbar">
      <div className="topbar-marca">
        <div className="topbar-logo" aria-hidden="true">
          <img src={iconoCampana} className="topbar-logo-img" alt="" aria-hidden="true" />
        </div>
        <span className="txt-marca topbar-titulo">Alarma contextual</span>
      </div>
      <div className="topbar-derecha">
        <span className="txt-12 topbar-sync">Sincronizado hace 12 min</span>
        <span className="txt-cuerpo topbar-usuario">Camila R.</span>
        <div className="topbar-avatar" aria-hidden="true">
          <span className="txt-avatar-sm">CR</span>
        </div>
      </div>
    </header>
  )
}

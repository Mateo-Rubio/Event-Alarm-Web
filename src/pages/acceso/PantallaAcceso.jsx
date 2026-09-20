import { useNavigate } from 'react-router-dom'
import CampoAcceso from '../../components/entrada/CampoAcceso.jsx'
import iconoCampana from '../../icons/campana_icon.png'
import './Acceso.css'

// Pantalla de acceso compartida entre "Iniciar sesión" (192:1252) y
// "Crear cuenta" (192:1297). El control segmentado alterna entre ambas rutas
// (flujo de navegación permitido). Los campos son fachada visual.
export default function PantallaAcceso({
  modo, // 'login' | 'registro'
  heading,
  campos,
  textoBoton,
}) {
  const navigate = useNavigate()

  const tabs = [
    { texto: 'Iniciar sesión', to: '/acceso' },
    { texto: 'Crear cuenta', to: '/acceso/crear-cuenta' },
  ]
  const activo = modo === 'registro' ? 1 : 0

  return (
    <div className="acceso">
      <div className="acceso-tarjeta-wrap">
        <section className="acceso-tarjeta">
          <div className="acceso-logo-fila">
            <span className="acceso-logo" aria-hidden="true">
              <img src={iconoCampana} className="acceso-logo-img" alt="" aria-hidden="true" />
            </span>
          </div>

          <div className="acceso-heading">
            <h1 className="txt-h1 acceso-heading-texto">{heading}</h1>
          </div>

          <p className="txt-14-center acceso-parrafo">
            Consulta el historial y las tendencias de tus alarmas. Las alarmas se
            crean y editan desde la aplicación móvil.
          </p>

          <div className="acceso-segmentado-wrap">
            <div className="acceso-segmentado" role="tablist">
              {tabs.map((tab, i) => (
                <button
                  key={tab.to}
                  type="button"
                  role="tab"
                  aria-selected={i === activo}
                  className={`acceso-seg-btn${i === activo ? ' acceso-seg-btn--activo' : ''}${
                    i > 0 ? ' acceso-seg-btn--divisor' : ''
                  }`}
                  onClick={() => navigate(tab.to)}
                >
                  <span className={i === activo ? 'txt-14-medium' : 'txt-14-center'}>
                    {tab.texto}
                  </span>
                </button>
              ))}
            </div>
          </div>

          <div className="acceso-campos">
            {campos.map((campo) => (
              <CampoAcceso
                key={campo.etiqueta}
                etiqueta={campo.etiqueta}
                valor={campo.valor}
                conIcono={campo.conIcono}
              />
            ))}
          </div>

          <div className="acceso-boton-wrap">
            <button
              type="button"
              className="acceso-boton txt-boton-roboto-medium"
              onClick={() => navigate('/historial')}
            >
              {textoBoton}
            </button>
          </div>
        </section>

        <div className="acceso-nota-wrap">
          <p className="acceso-nota">
            Al continuar aceptas los Términos de servicio y la Política de
            privacidad.
          </p>
        </div>
      </div>
    </div>
  )
}

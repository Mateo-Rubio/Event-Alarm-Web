import { NavLink, useNavigate } from 'react-router-dom'
import iconoResumen from '../../icons/resumen_icon.png'
import iconoHistorial from '../../icons/historial_icon.png'
import iconoTendencias from '../../icons/tendencias_icon.png'
import iconoPerfil from '../../icons/user_icon.png'
import './MenuLateral.css'

const items = [
  { texto: 'Resumen', to: '/resumen', icono: iconoResumen, tipo: 'trazo' },
  { texto: 'Historial', to: '/historial', icono: iconoHistorial, tipo: 'trazo' },
  { texto: 'Tendencias', to: '/tendencias', icono: iconoTendencias, tipo: 'trazo' },
  { texto: 'Perfil', to: '/perfil', icono: iconoPerfil, tipo: 'imagen' },
]

export default function MenuLateral() {
  const navigate = useNavigate()

  return (
    <nav className="menu">
      <div className="menu-items">
        {items.map((item) => (
          <NavLink
            key={item.to}
            to={item.to}
            className={({ isActive }) =>
              `menu-item${isActive ? ' menu-item--activo' : ''}`
            }
          >
            {({ isActive }) => (
              <>
                {isActive && <span className="menu-acento" aria-hidden="true" />}
                <img
                  src={item.icono}
                  className={`menu-icono menu-icono--${item.tipo}`}
                  alt=""
                  aria-hidden="true"
                />
                <span className={isActive ? 'txt-menu-activo' : 'txt-menu'}>
                  {item.texto}
                </span>
              </>
            )}
          </NavLink>
        ))}
      </div>

      <div className="menu-pie">
        <div className="menu-dispositivo">
          <span className="txt-etiqueta menu-dispositivo-titulo">
            Dispositivo vinculado
          </span>
          <span className="txt-12 menu-dispositivo-detalle">
            Android · Última carga hoy 7:02 a. m.
          </span>
        </div>
        <button
          type="button"
          className="menu-logout"
          onClick={() => navigate('/acceso')}
        >
          <span className="txt-cuerpo">Cerrar sesión</span>
        </button>
      </div>
    </nav>
  )
}

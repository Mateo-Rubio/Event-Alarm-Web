import { Outlet, useLocation } from 'react-router-dom'
import BarraSuperior from './BarraSuperior.jsx'
import MenuLateral from './MenuLateral.jsx'
import './Layout.css'

export default function Layout() {
  const location = useLocation()

  return (
    <div className="frame">
      <div className="layout-container">
        <BarraSuperior />
        <div className="layout-cuerpo">
          <MenuLateral />
          <main className="layout-contenido" key={location.pathname}>
            <Outlet />
          </main>
        </div>
      </div>
    </div>
  )
}

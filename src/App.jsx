import { Routes, Route, Navigate } from 'react-router-dom'
import Layout from './components/navegacion/Layout.jsx'
import IniciarSesion from './pages/acceso/IniciarSesion.jsx'
import CrearCuenta from './pages/acceso/CrearCuenta.jsx'
import Resumen from './pages/resumen/Resumen.jsx'
import Historial from './pages/historial/Historial.jsx'
import Tendencias from './pages/tendencias/Tendencias.jsx'
import Perfil from './pages/perfil/Perfil.jsx'

export default function App() {
  return (
    <Routes>
      {/* Pantallas de acceso — página completa, sin menú lateral */}
      <Route path="/" element={<Navigate to="/acceso" replace />} />
      <Route path="/acceso" element={<IniciarSesion />} />
      <Route path="/acceso/crear-cuenta" element={<CrearCuenta />} />

      {/* Panel — con barra superior y menú lateral */}
      <Route element={<Layout />}>
        <Route path="/resumen" element={<Resumen />} />
        <Route path="/historial" element={<Historial />} />
        <Route path="/tendencias" element={<Tendencias />} />
        <Route path="/perfil" element={<Perfil />} />
      </Route>
    </Routes>
  )
}

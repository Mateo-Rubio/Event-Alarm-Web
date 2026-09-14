import { Routes, Route, Navigate } from 'react-router-dom'
import Layout from './components/navegacion/Layout.jsx'
import Resumen from './pages/resumen/Resumen.jsx'
import Historial from './pages/historial/Historial.jsx'
import Tendencias from './pages/tendencias/Tendencias.jsx'
import Perfil from './pages/perfil/Perfil.jsx'

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Navigate to="/resumen" replace />} />
        <Route path="/resumen" element={<Resumen />} />
        <Route path="/historial" element={<Historial />} />
        <Route path="/tendencias" element={<Tendencias />} />
        <Route path="/perfil" element={<Perfil />} />
      </Route>
    </Routes>
  )
}

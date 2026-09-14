import { useState } from 'react'
import './Segmentado.css'

export default function Segmentado({ opciones, activoInicial = 1, width }) {
  const [activo, setActivo] = useState(activoInicial)

  return (
    <div className="segmentado" style={width ? { width } : undefined} role="tablist">
      {opciones.map((op, i) => (
        <button
          key={op}
          type="button"
          role="tab"
          aria-selected={i === activo}
          className={`segmentado-btn${i === activo ? ' segmentado-btn--activo' : ''}${
            i > 0 ? ' segmentado-btn--divisor' : ''
          }`}
          onClick={() => setActivo(i)}
        >
          <span className={i === activo ? 'txt-14-medium' : 'txt-14-center'}>{op}</span>
        </button>
      ))}
    </div>
  )
}

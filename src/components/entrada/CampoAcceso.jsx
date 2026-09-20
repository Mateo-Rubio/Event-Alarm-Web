import './CampoAcceso.css'

// Campo de texto con etiqueta flotante y caja opcional a la derecha (ícono ojo
// de las contraseñas). Fachada visual: no captura ni envía datos.
export default function CampoAcceso({ etiqueta, valor, conIcono = false }) {
  return (
    <label className="campo-acceso">
      <span className="campo-acceso-caja">
        <span className="txt-cuerpo campo-acceso-valor">{valor}</span>
        {conIcono && <span className="campo-acceso-icono" aria-hidden="true" />}
      </span>
      <span className="txt-12 campo-acceso-etiqueta">{etiqueta}</span>
    </label>
  )
}

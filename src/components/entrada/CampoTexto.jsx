import './CampoTexto.css'

// Campo de fachada visual: replica el input con etiqueta flotante del diseño.
// No captura ni persiste datos (maqueta no funcional).
export default function CampoTexto({
  etiqueta,
  valor,
  deshabilitado = false,
  iconoDerecha = false,
  className = '',
  style,
}) {
  return (
    <div
      className={`campo${deshabilitado ? ' campo--deshabilitado' : ''} ${className}`}
      style={style}
    >
      <span className="txt-12 campo-etiqueta">{etiqueta}</span>
      <span className="txt-cuerpo campo-valor">{valor}</span>
      {iconoDerecha && <span className="campo-icono" aria-hidden="true" />}
    </div>
  )
}

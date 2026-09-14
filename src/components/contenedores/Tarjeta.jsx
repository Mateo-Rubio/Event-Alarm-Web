import './Tarjeta.css'

export default function Tarjeta({ children, className = '', style }) {
  return (
    <section className={`tarjeta ${className}`} style={style}>
      {children}
    </section>
  )
}

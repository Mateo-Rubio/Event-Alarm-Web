import './PageHead.css'

export default function PageHead({ titulo, subtitulo, derecha }) {
  return (
    <div className="pagehead">
      <div className="pagehead-texto">
        <h1 className="txt-h1">{titulo}</h1>
        <p className="txt-cuerpo pagehead-subtitulo">{subtitulo}</p>
      </div>
      {derecha && <div className="pagehead-derecha">{derecha}</div>}
    </div>
  )
}

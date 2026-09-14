import { useState } from 'react'
import PageHead from '../../components/navegacion/PageHead.jsx'
import Segmentado from '../../components/acciones/Segmentado.jsx'
import Tarjeta from '../../components/contenedores/Tarjeta.jsx'
import CampoTexto from '../../components/entrada/CampoTexto.jsx'
import './Perfil.css'

const zonas = ['(GMT-5) Bogotá', '(GMT-6) Ciudad de México', '(GMT-3) Buenos Aires']

export default function Perfil() {
  const [zonaAbierta, setZonaAbierta] = useState(false)
  const [zona, setZona] = useState(0)

  return (
    <div className="perfil">
      <PageHead
        titulo="Perfil"
        subtitulo="Estos datos se comparten con la aplicación móvil."
      />

      <div className="perfil-grid">
        {/* Columna principal */}
        <div className="perfil-col-principal">
          <Tarjeta className="perfil-card">
            <h2 className="txt-h2">Datos de la cuenta</h2>
            <div className="perfil-campos-fila">
              <CampoTexto etiqueta="Nombre" valor="Camila Rojas" className="campo-flex" />
              <CampoTexto
                etiqueta="Correo electrónico"
                valor="camila.rojas@universidad.edu.co"
                deshabilitado
                className="campo-flex"
              />
            </div>
            <p className="txt-12 perfil-nota">
              El correo no se puede cambiar porque vincula tu dispositivo.
            </p>
            <div className="perfil-acciones">
              <button type="button" className="boton boton--primario">
                <span className="txt-boton-roboto-medium">Guardar cambios</span>
              </button>
            </div>
          </Tarjeta>

          <Tarjeta className="perfil-card">
            <h2 className="txt-h2">Preferencias</h2>
            <div className="perfil-preferencias">
              <div className="select-envoltura campo-flex">
                <span className="txt-12 select-etiqueta">Zona horaria</span>
                <button
                  type="button"
                  className="select"
                  onClick={() => setZonaAbierta((v) => !v)}
                  aria-haspopup="listbox"
                  aria-expanded={zonaAbierta}
                >
                  <span className="txt-cuerpo select-valor">{zonas[zona]}</span>
                  <span className={`select-chevron${zonaAbierta ? ' select-chevron--abierto' : ''}`} aria-hidden="true" />
                </button>
                {zonaAbierta && (
                  <ul className="select-lista" role="listbox">
                    {zonas.map((z, i) => (
                      <li key={z} role="option" aria-selected={i === zona}>
                        <button
                          type="button"
                          className="select-opcion txt-cuerpo"
                          onClick={() => {
                            setZona(i)
                            setZonaAbierta(false)
                          }}
                        >
                          {z}
                        </button>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
              <Segmentado opciones={['12 horas', '24 horas']} activoInicial={0} width={329.37} />
            </div>
            <p className="txt-12 perfil-nota">
              El formato de hora se aplica en el panel y en la aplicación.
            </p>
          </Tarjeta>

          <Tarjeta className="perfil-card">
            <h2 className="txt-h2">Seguridad</h2>
            <div className="perfil-campos-fila">
              <CampoTexto
                etiqueta="Contraseña actual"
                valor="••••••••••"
                iconoDerecha
                className="campo-flex"
              />
              <CampoTexto
                etiqueta="Contraseña nueva"
                valor=""
                iconoDerecha
                className="campo-flex"
              />
            </div>
            <div className="perfil-acciones">
              <button type="button" className="boton boton--outline boton--ancho200">
                <span className="txt-boton-roboto">Cambiar contraseña</span>
              </button>
            </div>
          </Tarjeta>
        </div>

        {/* Columna lateral */}
        <div className="perfil-col-lateral">
          <Tarjeta className="perfil-card perfil-card-cuenta">
            <div className="perfil-avatar" aria-hidden="true">
              <span className="txt-avatar-lg">CR</span>
            </div>
            <span className="txt-marca perfil-avatar-nombre">Camila Rojas</span>
            <span className="txt-12 perfil-avatar-detalle">
              Cuenta creada el 12 de marzo de 2026
            </span>
            <span className="txt-12 perfil-avatar-detalle">41 alarmas registradas</span>
          </Tarjeta>

          <Tarjeta className="perfil-card">
            <h2 className="txt-h2">Dispositivo vinculado</h2>
            <span className="txt-cuerpo perfil-dispositivo-nombre">Android · Camila</span>
            <span className="txt-12 perfil-nota-simple">
              Última sincronización: hoy 7:02 a. m.
            </span>
            <div className="perfil-acciones">
              <button type="button" className="boton boton--outline boton--ancho-full">
                <span className="txt-boton-roboto">Desvincular</span>
              </button>
            </div>
          </Tarjeta>

          <Tarjeta className="perfil-card perfil-card-eliminar">
            <span className="perfil-acento-eliminar" aria-hidden="true" />
            <h2 className="txt-h2 perfil-eliminar-titulo">Eliminar cuenta</h2>
            <p className="txt-12 perfil-nota">
              Se borrarán tus alarmas y todo el historial. Esta acción no se puede deshacer.
            </p>
            <div className="perfil-acciones">
              <button type="button" className="boton boton--outline-oscuro boton--ancho-full">
                <span className="txt-14-medium perfil-eliminar-texto">Eliminar cuenta</span>
              </button>
            </div>
          </Tarjeta>
        </div>
      </div>
    </div>
  )
}

import PantallaAcceso from './PantallaAcceso.jsx'

// W1.0-a · Acceso — Iniciar sesión · node 192:1252
export default function IniciarSesion() {
  return (
    <PantallaAcceso
      modo="login"
      heading="Hola de nuevo!"
      textoBoton="Iniciar sesión"
      campos={[
        { etiqueta: 'Correo electrónico', valor: 'camila.rojas@universidad.edu.co' },
        { etiqueta: 'Contraseña', valor: '••••••••••', conIcono: true },
      ]}
    />
  )
}

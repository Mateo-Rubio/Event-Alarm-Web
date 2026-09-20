import PantallaAcceso from './PantallaAcceso.jsx'

// W1.0-a · Acceso — Crear cuenta · node 192:1297
export default function CrearCuenta() {
  return (
    <PantallaAcceso
      modo="registro"
      heading="Bienvenido!"
      textoBoton="Registrarme"
      campos={[
        { etiqueta: 'Correo electrónico', valor: 'camila.rojas@universidad.edu.co' },
        { etiqueta: 'Contraseña', valor: '••••••••••', conIcono: true },
        { etiqueta: 'Confirma tu contraseña', valor: '••••••••••', conIcono: true },
      ]}
    />
  )
}

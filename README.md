# Alarma contextual — Maqueta web

Maqueta de alta fidelidad (no funcional) del panel web de **Alarma contextual**,
construida con React y Vite. Reproduce tres pantallas del diseño:

- **Resumen** (`/resumen`): dashboard con KPIs, gráfica de cumplimiento por día,
  distribución de retos utilizados y tabla de actividad reciente.
- **Tendencias** (`/tendencias`): gráfica de retraso promedio con puntos
  interactivos, posposiciones por día de la semana y fallas por disparador.
- **Perfil** (`/perfil`): datos de la cuenta, preferencias, seguridad,
  dispositivo vinculado y eliminación de cuenta.

## Alcance

Es una maqueta visual e interactiva. No hay backend, ni captura o persistencia
de datos: los formularios, tablas y gráficas son fachada visual. Los estados de
interacción (hover, foco, apertura de menús, tooltips, control segmentado) viven
solo en memoria del componente y se reinician al recargar.

## Requisitos

- Node.js 18 o superior
- npm 9 o superior

## Instalación

```bash
npm install
```

## Desarrollo

Levanta el servidor de desarrollo con recarga en caliente:

```bash
npm run dev
```

La aplicación queda disponible en `http://localhost:5173`. La ruta raíz redirige
a `/resumen`.

## Build de producción

```bash
npm run build
```

El resultado se genera en `dist/`. Para previsualizarlo localmente:

```bash
npm run preview
```

## Estructura del proyecto

```
src/
  pages/
    resumen/       Pantalla Resumen (dashboard)
    tendencias/    Pantalla Tendencias
    perfil/        Pantalla Perfil
  components/
    acciones/      Segmentado
    entrada/       CampoTexto
    contenedores/  Tarjeta
    navegacion/    BarraSuperior, MenuLateral, Layout, PageHead
    feedback/      Tooltip
  styles/
    tokens.css     Variables de color, radios, espaciado y transiciones
    tipografia.css Estilos de texto (Manrope, Archivo, Roboto)
    base.css       Reset y estilos globales
  assets/          Gráficas exportadas en SVG
  App.jsx          Definición de rutas
  main.jsx         Punto de entrada
```

## Tecnologías

- React 18
- React Router DOM 6
- Vite 5
- CSS plano con variables de diseño

Las tipografías Manrope, Archivo y Roboto se cargan desde Google Fonts.

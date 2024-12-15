# Página de Inicio de la Fundación de Rescate Animal

## Descripción

Este proyecto es una página de inicio para una Fundación de Rescate Animal. Está construido usando Next.js y Tailwind CSS, proporcionando un diseño simple y responsivo para mostrar la misión, servicios y formas de involucrarse con la fundación.

## Características

- Diseño responsivo
- Información sobre la misión de la fundación
- Secciones para adopción, donación y voluntariado
- Información de contacto básica

## Requisitos Previos

Antes de comenzar, asegúrate de tener instalado lo siguiente:
- Node.js (versión 14 o posterior)
- npm (generalmente viene con Node.js)

## Instalación

1. Clona el repositorio:
   ```
   git clone https://github.com/jersonrm/disenoweb_animalandia.git
   ```

2. Navega al directorio del proyecto:
   ```
   cd disenoweb_animalandia
   ```

3. Instala las dependencias:
   ```
   npm install
   ```

## Ejecutando la Aplicación

Para ejecutar la aplicación en modo de desarrollo:

```
npm run dev
```

Abre [http://localhost:3001](http://localhost:3001) en tu navegador para ver la página.

Para validar JSON con datos de las mascotas:

Abre [http://localhost:3001/api/pets](http://localhost:3001/api/pets) en tu navegador para ver la página.

## Construyendo para Producción

### Despliegue en ambiente Local

Para crear una versión de producción:

```
npm run build
```

Para iniciar el servidor de producción:

```
npm start
```
### Despliegue en VERCEL

Sigue estos pasos para desplegar tu proyecto en Vercel:

1. Preparación del proyecto:
   - Asegúrate de que tu proyecto esté usando Git para control de versiones.
   - Haz commit de todos tus cambios: 
     ```
     git add .
     git commit -m "Preparar para despliegue"
     ```

2. Crea una cuenta en Vercel:
   - Ve a https://vercel.com/ y regístrate si aún no tienes una cuenta.
   - Puedes registrarte usando tu cuenta de GitHub, GitLab o Bitbucket para una integración más fácil.

3. Instala Vercel CLI (opcional, pero útil):
   - Abre tu terminal y ejecuta: `npm i -g vercel`

4. Configura las variables de entorno:
   - Crea un archivo `.env.local` en la raíz de tu proyecto si aún no lo tienes.
   - Añade las variables de entorno necesarias, por ejemplo:
     `NEXT_PUBLIC_API_URL=https://tu-api-url.com`

5. Despliega usando Vercel CLI:
   - En el directorio de tu proyecto, ejecuta: `vercel`
   - Sigue las indicaciones para iniciar sesión y configurar tu proyecto.
   - Cuando se te pregunte sobre las variables de entorno, puedes añadirlas ahora o hacerlo más tarde en el panel de control de Vercel.

6. Alternativamente, despliega a través del sitio web de Vercel:
   - Ve a https://vercel.com/new
   - Importa tu proyecto desde GitHub, GitLab o Bitbucket.
   - Configura los ajustes de tu proyecto:
     - Selecciona Next.js como preset de framework
     - Establece el directorio raíz si tu proyecto no está en la raíz del repositorio
     - Añade las variables de entorno de tu archivo `.env.local`

7. Finaliza el despliegue:
   - Vercel detectará automáticamente tu proyecto Next.js y aplicará la configuración de construcción apropiada.
   - Haz clic en "Deploy" y espera a que el proceso se complete.

8. Configura un dominio personalizado (opcional):
   - En el panel de control de tu proyecto en Vercel, ve a "Settings" > "Domains"
   - Añade tu dominio personalizado y sigue las instrucciones para configurar los registros DNS.

9. Monitorea tu despliegue:
   - Después del despliegue, Vercel te proporcionará una URL única para acceder a tu sitio.
   - Revisa la pestaña "Deployments" en tu panel de control de Vercel para ver los logs y métricas de rendimiento.

## Personalización

- Actualiza el contenido en `src/page.tsx` para que coincida con la información de tu fundación.
- Modifica los estilos en `src/globals.css` para cambiar el aspecto general.
- Ajusta el componente `Button` en `components/ui/Button.tsx` para estilos de botones personalizados.

## Contribuyendo

¡Las contribuciones son bienvenidas! No dudes en enviar un Pull Request.

## Licencia

Este proyecto está licenciado bajo la Licencia MIT - consulta el archivo LICENSE para más detalles.

## Contacto

Tu Nombre - jersonjesusr@gmail.com

Enlace del Proyecto: [https://github.com/jersonrm/disenoweb_animalandia](https://github.com/jersonrm/disenoweb_animalandia)

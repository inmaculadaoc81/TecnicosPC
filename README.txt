PCMADRID ONE PAGE

Dominio:
https://serviciopcmadrid.com.es/

Teléfono caja de información y botones:
+34 914 46 85 03

Diagnóstico:
GRATUITO

Equipos:
- Portátiles
- PC de sobremesa
- All-in-One
- Gaming
- Workstations
- Mini PC
- Equipos de oficina
- Principales marcas

Incluye:
- Logo e isotipo suministrados
- H1 enfocado en tiempo sin equipo + información/datos
- WhatsApp 24/365
- Recogida
- Atención telefónica
- Google Business
- YouTube
- Cal.com
- Formulario SMTP
- Chatbot n8n corregido
- Mapa
- SEO One Page
- Sección específica sobre datos

Variables SMTP compartidas en Vercel:
SMTP_HOST=cp7124.webempresa.eu
SMTP_PORT=465
SMTP_SECURE=true
SMTP_USER=soporte@kelatos.com
SMTP_PASS=[configurada únicamente en Vercel]
CONTACT_EMAIL=soporte@kelatos.com

El correo no aparece visible en la web; solo se utiliza en /api/contacto.

Google Analytics:
G-KHXWKJ1XDB

HISTORIAL: el repositorio era multipágina (20 páginas /modelos/ por
tipo de equipo y marca) y se convirtió a one-page; esas páginas
fueron eliminadas en commits anteriores. Como ya no existen en el
sitemap actual, se ha añadido middleware.mjs para redirigir (301)
cualquier URL antigua a la home, evitando 404 en enlaces indexados o
backlinks antiguos. Excluye /api/* y cualquier ruta con extensión de
archivo. Se añadió "@vercel/functions": "^2.0.3" a package.json como
dependencia de esta función.

REVISIÓN ADICIONAL (esta pasada):
- Ya estaba bien: banner de cookies, schema.org LocalBusiness, sección
  SEO, menú móvil, borde blanco del chat, api/contacto.js con SMTP +
  nodemailer, teléfono consistente. No se ha modificado ninguno de
  estos.
- Google Analytics: no existía. Añadido G-KHXWKJ1XDB.
- Meta robots: no existía. Añadido.
- .navcall: ya tenía white-space:nowrap en CSS, pero el texto seguía
  siendo largo ("Atención Telefónica 24 horas 365 días") y deformaba
  la píldora. Acortado a solo el número (mismo número,
  +34 914 46 85 03).
- H1 de portada reescrito, corto, directo y totalmente afirmativo
  (sin interrogación ni condicionales), sin forzar ninguna marca ya
  que es una tienda multimarca: "Tu ordenador no funciona. Aquí lo
  diagnosticamos hoy mismo." Tamaño del H1 aumentado: clamp(38-56px) →
  clamp(46-74px) en escritorio, 40px → 48px en móvil.

REVISIÓN (fixes estándar aplicados):
- Menú móvil: no existía botón de menú en móvil (.links se ocultaba a
  partir de 920px sin ninguna alternativa). Añadido botón .menu-btn +
  desplegable #mobileMenu con los mismos enlaces.
- Barra de menú de escritorio: reducido el espaciado/tamaño de fuente y
  separado el punto de cambio a menú móvil (.links/.menu-btn ahora
  cambian a 1100px) para evitar que el nuevo enlace "Guía" apriete los
  demás enlaces en anchos intermedios.
- Chatbot: el selector [class*="chat-window"] (tanto en CSS como en el
  script JS de reposicionamiento) coincidía también con
  chat-window-toggle, pisando su posición. Corregido añadiendo
  :not([class*="toggle"]) en ambos sitios (CSS y JS).
- Añadido borde blanco (border:1px solid #fff!important) al botón del
  chat, en CSS y en el script JS.
- Añadida sección de contenido SEO propio (#guia), enlazada en el menú de
  escritorio y en el menú móvil.
- Ya incluía datos schema.org LocalBusiness correctos; no se ha tocado.
- Dominio (serviciopcmadrid.com.es) coherente en canonical, og:url,
  robots.txt, sitemap.xml, README y JSON-LD; no se ha tocado.

REVISIÓN ADICIONAL (a petición del cliente, regla general de la familia):
- Quitada la pestaña/etiqueta rotada del hero (.hero-chip o
  .hero-tag) que sobresalía y se solapaba visualmente con la caja de
  información en anchos de tablet/escritorio medio (detectado con
  captura en vivo en AcerTech). Regla para toda la familia: no volver
  a añadir este tipo de elemento decorativo.

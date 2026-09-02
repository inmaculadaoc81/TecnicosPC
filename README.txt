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
  (Reescrito de nuevo más abajo, repo 31/48, para no repetir la
  plantilla "no funciona" usada en otros repos de la familia.)

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

REVISIÓN ADICIONAL (checklist unificado de la familia, a petición del cliente — repo 31/48):
- BUG REAL — enlace de Cal.com desactualizado. Actualizado a
  https://cal.com/kelatos/30min?embed=true&theme=light&attendeePhoneNumber=%2B34&overlayCalendar=true.
- Verificado: el correo soporte@kelatos.com no aparece visible.
- BUG REAL — el mensaje prellenado de WhatsApp decía "¡Hola Kelatos!".
  Corregido a "¡Hola PCMadrid!".
- BUG REAL — el menú móvil (#mobileMenu, estilo atributo hidden) no
  tenía ningún listener que lo cerrara al pulsar un enlace. Añadido el
  script estándar de la familia.
- Verificado: sin iconos ni imágenes con proporciones fijas
  incorrectas.
- Verificado: el H1 en móvil ya está en 48px.
- BUG REAL — botones del hero (.cta) con border-radius de 16px y sin
  estado hover. Aumentado a border-radius:999px; añadido
  filter:brightness(.88) en wa/pickup (colores sólidos) y relleno
  sólido con var(--navy) + texto blanco en el botón de teléfono
  (estilo contorno) al pasar el ratón.
- Verificado: este repo no usa el patrón de franja de insignias bajo
  el H1 (familia Dyson); no aplica la reubicación.
- BUG REAL — el H1 seguía usando la plantilla "Tu X no funciona. Aquí
  lo revisamos/diagnosticamos..." (regla de diversidad de H1 de la
  familia). Reescrito a "Diagnóstico gratuito para tu ordenador o
  portátil. Hoy mismo." (estructura distinta, sin repetir el patrón).
- BUG REAL — no existía la franja de aviso de servicio técnico
  independiente. Este repo es multimarca (repara equipos de "las
  principales marcas"), el mismo riesgo de confusión con servicio
  oficial que en los repos de marca concreta, así que se añade
  siguiendo la norma de la familia: "Somos un servicio técnico
  independiente. No vemos equipos en garantía." debajo del menú.

REVISIÓN ADICIONAL (nueva regla de menú móvil, a petición del cliente):
- BUG REAL — la franja de aviso de independencia estaba dentro de
  <header>. Movida fuera de <header>, como hermana justo después de
  él y antes del hero: sigue siendo la misma franja de ancho
  completo.
- Verificado: el header (.header{position:sticky;top:0}) ya se
  mantenía fijo/pegado arriba al hacer scroll; no requería cambios.
- Verificado de nuevo: el checklist de 7 puntos ya estaba aplicado de
  una pasada anterior; no requería cambios.

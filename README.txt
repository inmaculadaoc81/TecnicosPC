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
No se proporcionó código para esta web; no se ha añadido ninguno.

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

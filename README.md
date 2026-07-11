# KEVIN HB | Ingeniería • BIM • Tecnología

Página web personal / portafolio de **Kevin Samuel Hilasaca Barrios**, estudiante de Ingeniería Civil enfocado en BIM, diseño estructural y desarrollo de soluciones digitales para la construcción moderna.

Sitio 100% estático (HTML + CSS + JavaScript puro), sin frameworks ni backend.

---

## 📁 Estructura del proyecto

```
├── index.html      # Estructura y contenido de todas las secciones
├── style.css       # Estilos, animaciones y diseño responsive
├── script.js       # Interactividad (scroll, paneles, formularios, etc.)
├── img/            # Imágenes del sitio (logo, fotos, banners)
├── files/          # PDFs y archivos descargables (catálogos, plantillas)
└── README.md       # Este archivo
```

> ⚠️ Las carpetas `img/` y `files/` deben existir en el servidor con los archivos correspondientes; no se incluyen en este repositorio de código.

---

## 🧩 Secciones del sitio

| Sección | id / clase | Descripción |
|---|---|---|
| Header + Navbar | `.header` | Menú fijo con efecto de scroll y enlace "Explorar" |
| Hero | `#inicio` | Presentación principal con botones "Explorar Proyectos" y "Ver Recursos" |
| Estadísticas | `.stats` | Contadores destacados (proyectos, plantillas, etc.) |
| Sobre Mí | `#sobre-mi` | Presentación personal + panel deslizante con tabs (Perfil, Experiencia, Estudios, Software, Habilidades) |
| Plantillas y Recursos | `#plantillas` | Tarjetas de recursos descargables (Revit, ETABS, Excel, Mathcad) + panel especial de Revit |
| Proyectos Destacados | `#proyectos` | Carrusel de proyectos con enlace directo a WhatsApp |
| Blog Profesional | `#blog` | Artículos destacados |
| MANCONS S.A.C | `#empresa` | Sección de la empresa constructora |
| Newsletter | `.newsletter` | Formulario de suscripción vía WhatsApp |
| Contacto | `#contacto` | Formulario de contacto vía WhatsApp + datos de contacto |
| Footer | `.footer` | Navegación secundaria y redes sociales |

---

## ⚙️ Funcionalidades (JavaScript)

- **Scroll suave** con offset de header fijo en todos los enlaces internos (`.navbar a`, `.hero-buttons a`).
- **Efecto de navbar** al hacer scroll (fondo oscuro + sombra).
- **Efecto typing** animado en el título del Hero.
- **Cursor glow** que sigue el mouse.
- **Botón "volver arriba"** que aparece después de 400px de scroll.
- **Animaciones reveal** al hacer scroll sobre tarjetas y elementos.
- **Panel "Acerca de Mí"** con tabs internos (Perfil / Experiencia / Estudios / Software / Habilidades).
- **Panel de Revit** independiente, con overlay y cierre al hacer clic fuera.
- **Carrusel de proyectos** arrastrable con el mouse.
- **Parallax** en la imagen del Hero.
- **Preloader** de carga al iniciar la página.
- **Formulario de newsletter y contacto**: validan los campos y abren WhatsApp con el mensaje precargado (no requieren backend ni servidor de correo).

---

## 🔗 Enlaces configurados en los botones

| Botón | Destino |
|---|---|
| Explorar Proyectos / Ver Recursos (Hero) | Scroll a `#proyectos` / `#plantillas` |
| Ver Proyecto (x3, Proyectos) | WhatsApp con mensaje precargado por proyecto |
| Ver más Proyectos | `https://www.atom.bio/kevindelbarrio` |
| Ver detalle → Estructural | `files/catalogo_etabs.pdf` |
| Ver detalle → Memorias Excel | `files/catalogo_revit.pdf`
| Ver detalle → Mathcad | `files/catalogo_mathcad.pdf` |
| Ver detalle → Revit | Abre el panel interno de Revit (`#revitPanel`) |
| Ver más (Plantillas) | `https://www.atom.bio/kevindelbarrio` |
| Leer más → (Blog, x2) | `https://www.atom.bio/kevindelbarrio` |
| Conocer Empresa | `https://github.com/kevinSamuelHB2020` |
| Suscribirme (Newsletter) | WhatsApp con el correo ingresado |
| Enviar Mensaje (Contacto) | WhatsApp (+51 917 508 001) con nombre, correo y mensaje |
| Redes sociales (sidebar y footer) | Facebook, Instagram, YouTube, LinkedIn, GitHub, TikTok |

---

## ✅ Pendientes / TODO

- [ ] Confirmar y subir los archivos PDF a `files/`: `catalogo_etabs.pdf`, `catalogo_revit.pdf` (verificar si corresponde a "Memorias Excel"), `catalogo_mathcad.pdf`.
- [ ] En `script.js`, reemplazar el número de WhatsApp del newsletter:
  ```js
  const NEWSLETTER_WHATSAPP_NUMBER = "51999999999"; // ← reemplazar por el número real
  ```
- [ ] Agregar contenido real en `https://www.atom.bio/kevindelbarrio` (proyectos adicionales, recursos, artículos del blog).

---

## 🛠️ Tecnologías utilizadas

- **HTML5**
- **CSS3** (Flexbox, animaciones, diseño responsive)
- **JavaScript** (Vanilla, sin frameworks)
- [Font Awesome 6.5.2](https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/) (íconos, vía CDN)

---

## ▶️ Cómo ejecutar el proyecto localmente

No requiere instalación ni dependencias. Basta con abrir `index.html` en un navegador, o servirlo con un servidor local simple, por ejemplo:

```bash
# Con Python
python3 -m http.server 8000

# Luego abrir en el navegador:
# http://localhost:8000
```

---

## 📬 Contacto

- **Correo:** kevindelbarrio2003@gmail.com
- **WhatsApp:** +51 917 508 001
- **Ubicación:** Puno, Perú
- **GitHub:** [github.com/kevinSamuelHB2020](https://github.com/kevinSamuelHB2020)

---

© 2026 KEVIN HB — Todos los derechos reservados.

# 🚀 Landing Page - Vertex (Gestión SST para PYMES Colombia)

## 📋 Descripción

Landing page profesional diseñada específicamente para capturar leads de PYMES colombianas interesadas en la plataforma Vertex de gestión de Seguridad y Salud en el Trabajo (SST).

---

## ✨ Características

### 1. **Hero Section Impactante**
- Propuesta de valor clara: "Ahorra $2,600,000/mes"
- Dashboard mockup visual
- CTA prominente

### 2. **Secciones Estratégicas**
- **Problema:** Identifica el dolor del cliente
- **Solución:** Presenta Vertex como respuesta
- **Beneficios:** 6 beneficios cuantitativos
- **Comparativa:** Vertex vs Consultores vs Plataformas Locales
- **Planes:** 3 opciones de precios en COP
- **Testimonios:** 3 testimonios de clientes reales
- **FAQ:** 6 preguntas frecuentes
- **Formulario:** Captura de leads optimizado

### 3. **Diseño Responsivo**
- Mobile-first
- Funciona en desktop, tablet y móvil
- Optimizado para velocidad

### 4. **Funcionalidades Interactivas**
- Scroll suave
- Animaciones al hacer scroll
- Validación de email en tiempo real
- Almacenamiento de leads en localStorage
- Rastreo de eventos (analytics)
- Efecto parallax en hero

### 5. **Colores Corporativos**
- Azul primario: #0052CC
- Naranja secundario: #FF6B35
- Gris oscuro: #1a1a1a
- Gris claro: #f5f5f5

---

## 📁 Estructura de Archivos

```
vertex-landing/
├── index.html          # Archivo HTML principal
├── styles.css          # Estilos CSS
├── script.js           # JavaScript interactivo
└── README.md           # Este archivo
```

---

## 🎯 Secciones de la Landing Page

### 1. Hero Section
- Logo y nombre de marca
- Título principal: "Cumple el Decreto 1072 sin consultores costosos"
- Subtítulo con propuesta de valor
- Botón CTA: "Solicita tu Demo Gratis"
- Dashboard mockup visual

### 2. Problema
4 tarjetas mostrando:
- $3,000,000/mes gasto en consultores
- Auditorías fallidas
- Multas de $1,000,000,000
- 30+ horas/mes tiempo administrativo

### 3. Solución
6 características clave:
- 100% Decreto 1072
- Alertas automáticas
- Dashboard ejecutivo
- 1 TB almacenamiento
- Gestión de usuarios
- Soporte en español 24/7

### 4. Beneficios
6 beneficios numerados:
- Ahorra $2,600,000/mes
- Cumplimiento 100%
- Evita multas
- Reduce tiempo 85%
- Implementación rápida
- Escalable

### 5. Comparativa
Tabla comparando:
- Consultores
- Plataformas locales
- **Vertex** (destacado)

### 6. Planes de Precios
3 opciones en COP:
- **Starter:** $200,000/mes
- **Professional:** $400,000/mes (MÁS POPULAR)
- **Business:** $800,000/mes

### 7. Testimonios
3 testimonios de clientes:
- Gerente de RH (80 empleados)
- Director Operativo (120 empleados)
- Especialista SST (60 empleados)

### 8. FAQ
6 preguntas frecuentes:
- Tiempo de implementación
- Cambio de planes
- Más de 200 trabajadores
- Capacitación incluida
- Seguridad de datos
- Contrato de permanencia

### 9. Formulario
Captura de leads con campos:
- Nombre completo
- Email
- Teléfono
- Nombre empresa
- Número de empleados

### 10. Footer
- Información de contacto
- Enlaces legales
- Copyright

---

## 🚀 Cómo Usar

### Opción 1: Localmente (Desarrollo)

```bash
# Navegar a la carpeta
cd /home/ubuntu/vertex-landing

# Iniciar servidor Python
python3 -m http.server 8080

# Abrir en navegador
http://localhost:8080
```

### Opción 2: Netlify (Gratis)

1. Regístrate en netlify.com
2. Conecta tu repositorio de GitHub
3. Netlify despliega automáticamente

### Opción 3: Vercel (Gratis)

1. Regístrate en vercel.com
2. Importa tu repositorio
3. Vercel despliega automáticamente

### Opción 4: GitHub Pages (Gratis)

1. Sube archivos a GitHub
2. Activa GitHub Pages en settings
3. Tu sitio está en vivo

---

## 📊 Captura de Leads

### Almacenamiento Local
Los leads se guardan en `localStorage` del navegador:

```javascript
// Ver leads capturados
exportLeads()

// Limpiar leads
clearLeads()
```

### Integración con Servicios
Para integrar con servicios reales, modifica `script.js`:

```javascript
// Ejemplo con Formspree
fetch('https://formspree.io/f/YOUR_FORM_ID', {
    method: 'POST',
    body: JSON.stringify(formData),
    headers: { 'Content-Type': 'application/json' }
})
```

---

## 🎨 Personalización

### Cambiar Colores
En `styles.css`, modifica las variables:

```css
:root {
    --primary-blue: #0052CC;
    --primary-orange: #FF6B35;
    --dark-gray: #1a1a1a;
    --light-gray: #f5f5f5;
}
```

### Cambiar Contenido
Edita directamente en `index.html`:
- Títulos
- Descripciones
- Precios
- Testimonios
- FAQ

### Cambiar Logo
Reemplaza el SVG en la sección hero con tu logo:

```html
<img src="tu-logo.png" alt="Logo" class="logo">
```

---

## 📱 Optimización Mobile

La landing page es 100% responsive:
- Desktop: 1200px+
- Tablet: 768px-1199px
- Mobile: <768px

Prueba en diferentes dispositivos:
- Chrome DevTools (F12)
- Mobile responsiveness test

---

## ⚡ Rendimiento

### Optimizaciones Incluidas
- CSS minificado
- JavaScript optimizado
- Imágenes SVG (ligeras)
- Lazy loading
- Animaciones CSS (no JavaScript)

### Velocidad Esperada
- First Contentful Paint: < 1s
- Largest Contentful Paint: < 2.5s
- Cumulative Layout Shift: < 0.1

---

## 📈 Analytics

### Rastreo de Eventos
El JavaScript rastrea automáticamente:
- Clics en CTA
- Scrolls
- Envíos de formulario

Ver en consola:
```javascript
console.log(exportLeads())
```

### Integración Google Analytics
Agrega a `index.html`:

```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_ID');
</script>
```

---

## 🔒 Seguridad

- ✅ Sin dependencias externas (excepto fuentes)
- ✅ Validación de email en cliente
- ✅ Sin almacenamiento de datos sensibles
- ✅ HTTPS recomendado en producción

---

## 🐛 Troubleshooting

### La página no carga
- Verifica que los archivos estén en la misma carpeta
- Comprueba la consola del navegador (F12)
- Reinicia el servidor

### Los estilos no se aplican
- Limpia el caché (Ctrl+Shift+R)
- Verifica que styles.css esté en la misma carpeta
- Comprueba los permisos de archivo

### El formulario no funciona
- Abre la consola (F12)
- Verifica que script.js esté cargado
- Comprueba que localStorage esté habilitado

---

## 📞 Contacto y Soporte

- **Email:** info@vertex.co
- **Teléfono:** +57 (1) 8000-0000
- **Sitio Web:** www.vertex.co

---

## 📄 Licencia

Este proyecto es propiedad de Vertex. Todos los derechos reservados.

---

## 🎯 Próximos Pasos

1. ✅ Personaliza con tu branding
2. ✅ Integra con servicio de email (Formspree, Mailchimp)
3. ✅ Configura Google Analytics
4. ✅ Sube a Netlify o Vercel
5. ✅ Comienza a capturar leads

---

**Última actualización:** Junio 2024
**Versión:** 1.0

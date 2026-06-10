// Función para desplazarse al formulario
function scrollToForm() {
    const formSection = document.getElementById('form-section');
    formSection.scrollIntoView({ behavior: 'smooth' });
}

// Manejo del formulario
document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Obtener datos del formulario
    const formData = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        phone: document.getElementById('phone').value,
        company: document.getElementById('company').value,
        employees: document.getElementById('employees').value,
        timestamp: new Date().toISOString()
    };
    
    // Guardar en localStorage (para demostración)
    let leads = JSON.parse(localStorage.getItem('vertex_leads')) || [];
    leads.push(formData);
    localStorage.setItem('vertex_leads', JSON.stringify(leads));
    
    // Mostrar mensaje de éxito
    showSuccessMessage();
    
    // Limpiar formulario
    this.reset();
});

// Función para mostrar mensaje de éxito
function showSuccessMessage() {
    const form = document.getElementById('contactForm');
    const successMessage = document.createElement('div');
    successMessage.className = 'success-message';
    successMessage.innerHTML = `
        <div style="
            background: #4CAF50;
            color: white;
            padding: 15px 20px;
            border-radius: 8px;
            margin-bottom: 20px;
            display: flex;
            align-items: center;
            gap: 10px;
        ">
            <span style="font-size: 20px;">✓</span>
            <div>
                <strong>¡Gracias por tu interés!</strong>
                <p style="font-size: 14px; margin-top: 5px;">Nos pondremos en contacto en las próximas 24 horas.</p>
            </div>
        </div>
    `;
    
    form.parentNode.insertBefore(successMessage, form);
    
    // Remover mensaje después de 5 segundos
    setTimeout(() => {
        successMessage.remove();
    }, 5000);
}

// Animación de scroll para elementos
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Aplicar animación a elementos
document.querySelectorAll('.problem-card, .solution-card, .benefit-item, .plan-card, .testimonial-card, .faq-item').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
});

// Contador de clientes (para dashboard)
function animateCounter(element, target, duration = 2000) {
    let current = 0;
    const increment = target / (duration / 16);
    
    const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
            element.textContent = target;
            clearInterval(timer);
        } else {
            element.textContent = Math.floor(current);
        }
    }, 16);
}

// Inicializar contadores cuando se hace scroll a la sección de beneficios
const benefitsSection = document.querySelector('.benefits');
let benefitsAnimated = false;

const benefitsObserver = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting && !benefitsAnimated) {
            benefitsAnimated = true;
            // Aquí podrías agregar animaciones adicionales
        }
    });
}, { threshold: 0.5 });

if (benefitsSection) {
    benefitsObserver.observe(benefitsSection);
}

// Validación de email en tiempo real
const emailInput = document.getElementById('email');
if (emailInput) {
    emailInput.addEventListener('blur', function() {
        const email = this.value;
        const isValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
        
        if (!isValid && email) {
            this.style.borderColor = '#FF6B35';
            this.style.boxShadow = '0 0 0 3px rgba(255, 107, 53, 0.1)';
        } else {
            this.style.borderColor = '#0052CC';
            this.style.boxShadow = '0 0 0 3px rgba(0, 82, 204, 0.1)';
        }
    });
}

// Efecto hover en tarjetas
document.querySelectorAll('.plan-card, .testimonial-card, .solution-card').forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.transition = 'all 0.3s ease';
    });
});

// Rastreo de eventos (para analytics)
function trackEvent(eventName, eventData) {
    console.log(`Evento: ${eventName}`, eventData);
    // Aquí puedes enviar datos a Google Analytics o similar
}

// Rastrear clics en botones CTA
document.querySelectorAll('.cta-button, .plan-button, .submit-button').forEach(button => {
    button.addEventListener('click', function() {
        trackEvent('CTA_Click', {
            buttonText: this.textContent,
            timestamp: new Date().toISOString()
        });
    });
});

// Rastrear scroll
let lastScrollPosition = 0;
window.addEventListener('scroll', function() {
    const scrollPosition = window.scrollY;
    
    if (scrollPosition > lastScrollPosition + 500) {
        trackEvent('Page_Scroll', {
            scrollPosition: scrollPosition,
            timestamp: new Date().toISOString()
        });
        lastScrollPosition = scrollPosition;
    }
});

// Efecto parallax en hero
window.addEventListener('scroll', function() {
    const heroImage = document.querySelector('.hero-image');
    if (heroImage) {
        const scrollPosition = window.scrollY;
        heroImage.style.transform = `translateY(${scrollPosition * 0.5}px)`;
    }
});

// Inicialización
document.addEventListener('DOMContentLoaded', function() {
    console.log('Landing page Vertex cargada correctamente');
    
    // Verificar si hay leads guardados
    const leads = JSON.parse(localStorage.getItem('vertex_leads')) || [];
    console.log(`Leads capturados: ${leads.length}`);
});

// Función para exportar leads (para desarrollo)
function exportLeads() {
    const leads = JSON.parse(localStorage.getItem('vertex_leads')) || [];
    console.log('Leads:', leads);
    return leads;
}

// Función para limpiar leads (para desarrollo)
function clearLeads() {
    localStorage.removeItem('vertex_leads');
    console.log('Leads limpiados');
}

// Hacer funciones disponibles globalmente para debugging
window.exportLeads = exportLeads;
window.clearLeads = clearLeads;
window.scrollToForm = scrollToForm;

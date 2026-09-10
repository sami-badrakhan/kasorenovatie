// ===== Mobile Menu Toggle =====
document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.getElementById('hamburger');
    const navMenu = document.getElementById('navMenu');

    if (hamburger) {
        hamburger.addEventListener('click', function() {
            navMenu.classList.toggle('active');
            hamburger.classList.toggle('active');
        });

        // Close menu when a link is clicked
        const navLinks = navMenu.querySelectorAll('a');
        navLinks.forEach(link => {
            link.addEventListener('click', function() {
                navMenu.classList.remove('active');
                hamburger.classList.remove('active');
            });
        });
    }

    // Close menu when clicking outside
    document.addEventListener('click', function(event) {
        if (hamburger && !event.target.closest('.nav-container')) {
            navMenu.classList.remove('active');
            hamburger.classList.remove('active');
        }
    });
});

// ===== Active Navigation Link =====
document.addEventListener('DOMContentLoaded', function() {
    const currentLocation = location.pathname;
    const menuItems = document.querySelectorAll('.nav-menu a');

    menuItems.forEach(item => {
        if (item.getAttribute('href') === currentLocation) {
            item.classList.add('active');
        } else {
            item.classList.remove('active');
        }
    });
});

// ===== Contact Form Submission =====
const contactForm = document.getElementById('contactForm');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();

        // Get form data
        const formData = new FormData(this);
        const data = Object.fromEntries(formData);

        // Validate form
        if (!data.name || !data.email || !data.phone || !data.subject || !data.message) {
            showFormMessage('Vul alstublieft alle verplichte velden in', 'error');
            return;
        }

        // Validate email
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(data.email)) {
            showFormMessage('Vul alstublieft een geldig e-mailadres in', 'error');
            return;
        }

        // ===== FORMSPREE AJAX INTEGRATION =====
        // Form ID: mdeobgag
        const formspreeId = "mdeobgag";
        const submitButton = contactForm.querySelector('button[type="submit"]');
        
        // Disable button during submission
        submitButton.disabled = true;
        submitButton.textContent = '⏳ Verzenden...';

        // Send form data to Formspree via AJAX
        fetch(`https://formspree.io/f/${formspreeId}`, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                name: data.name,
                email: data.email,
                phone: data.phone,
                subject: data.subject,
                message: data.message
            })
        })
        .then(response => {
            if (response.ok) {
                // Success!
                showFormMessage('✅ Uw bericht is verzonden! Wij nemen zo snel mogelijk contact met u op.', 'success');
                
                // Reset form
                contactForm.reset();
                
                // Re-enable button
                submitButton.disabled = false;
                submitButton.textContent = 'Verstuur Bericht';
                
                console.log('✅ Form successfully submitted to Formspree');
            } else {
                throw new Error('Server response error');
            }
        })
        .catch(error => {
            console.error('❌ Form submission error:', error);
            showFormMessage('❌ Er is een fout opgetreden. Probeer alstublieft later opnieuw.', 'error');
            
            // Re-enable button on error
            submitButton.disabled = false;
            submitButton.textContent = 'Verstuur Bericht';
        });
    });
}

// ===== Show Form Message =====
function showFormMessage(message, type) {
    const messageDiv = document.getElementById('formMessage');
    if (messageDiv) {
        messageDiv.textContent = message;
        messageDiv.className = 'form-message ' + type;
        
        // Auto-hide after 5 seconds
        setTimeout(() => {
            messageDiv.textContent = '';
            messageDiv.className = 'form-message';
        }, 5000);
    }
}

// ===== Smooth Scroll for Anchor Links =====
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (href !== '#') {
            e.preventDefault();
            const target = document.querySelector(href);
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        }
    });
});

// ===== Scroll Animation - Fade In Elements =====
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observe service cards and other elements
document.addEventListener('DOMContentLoaded', function() {
    const elementsToObserve = document.querySelectorAll('.service-card, .reason, .portfolio-item, .testimonial, .faq-item');
    elementsToObserve.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
});

// ===== Counter Animation for Statistics =====
function animateCounter(element, target, duration = 2000) {
    let current = 0;
    const increment = target / (duration / 16);
    
    const updateCounter = () => {
        current += increment;
        if (current < target) {
            element.textContent = Math.floor(current) + '+';
            requestAnimationFrame(updateCounter);
        } else {
            element.textContent = target + '+';
        }
    };
    
    updateCounter();
}

// Observe stats and animate
const statsObserver = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting && !entry.target.dataset.animated) {
            const h3 = entry.target.querySelector('h3');
            if (h3) {
                const targetValue = parseInt(h3.textContent);
                animateCounter(h3, targetValue);
                entry.target.dataset.animated = 'true';
            }
            statsObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.5 });

document.addEventListener('DOMContentLoaded', function() {
    const stats = document.querySelectorAll('.stat');
    stats.forEach(stat => statsObserver.observe(stat));
});

// ===== Link Click Tracking =====
document.querySelectorAll('a[href="tel:"], a[href^="mailto:"]').forEach(link => {
    link.addEventListener('click', function(e) {
        console.log('Contact link clicked:', this.href);
    });
});

// ===== Page Load Animation =====
window.addEventListener('load', function() {
    document.body.style.opacity = '1';
});

document.addEventListener('DOMContentLoaded', function() {
    // Fade in body on page load
    if (document.body.style.opacity !== '1') {
        document.body.style.opacity = '0';
        document.body.style.transition = 'opacity 0.5s ease';
        setTimeout(() => {
            document.body.style.opacity = '1';
        }, 100);
    }
});

// ===== Contact Form - mailto Alternative =====
function createMailtoLink() {
    const form = document.getElementById('contactForm');
    if (form) {
        // Optional: Create mailto link as fallback
        // This can be used if you don't have backend support
        const createMailto = () => {
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const subject = document.getElementById('subject').value;
            const message = document.getElementById('message').value;
            
            const mailtoLink = `mailto:kasorenovatie@gmail.com?subject=Offerteaanvraag: ${subject}&body=Naam: ${name}%0A%0AE-mail: ${email}%0A%0ABericht:%0A${message}`;
            
            return mailtoLink;
        };
        
        // Uncomment to use mailto as fallback
        // window.location.href = createMailto();
    }
}

// ===== Print Styles =====
window.addEventListener('beforeprint', function() {
    console.log('Page is being printed');
});

// ===== Custom Scrollbar (Optional) =====
document.documentElement.style.scrollbarWidth = 'thin';
document.documentElement.style.scrollbarColor = '#FF7A3D #f1f1f1';

// ===== Error Handling =====
window.addEventListener('error', function(event) {
    console.error('Global error:', event.error);
});

// ===== Dark Mode Toggle (Optional for future) =====
function isDarkModeEnabled() {
    return window.matchMedia('(prefers-color-scheme: dark)').matches;
}

console.log('Dark mode enabled:', isDarkModeEnabled());

// ===== Performance Monitoring =====
if (window.performance && window.performance.timing) {
    window.addEventListener('load', function() {
        const perfData = window.performance.timing;
        const pageLoadTime = perfData.loadEventEnd - perfData.navigationStart;
        console.log('Page load time:', pageLoadTime + 'ms');
    });
}

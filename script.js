// ===========================================
// Asif and Salma Skin Care - Interactive JS
// ===========================================

// Wait for DOM to load
document.addEventListener('DOMContentLoaded', function () {

    // ===== Mobile Navigation Toggle =====
    const mobileToggle = document.getElementById('mobileToggle');
    const navMenu = document.getElementById('navMenu');

    if (mobileToggle && navMenu) {
        mobileToggle.addEventListener('click', function () {
            navMenu.classList.toggle('active');

            // Animate hamburger icon
            const spans = mobileToggle.querySelectorAll('span');
            if (navMenu.classList.contains('active')) {
                spans[0].style.transform = 'rotate(45deg) translateY(8px)';
                spans[1].style.opacity = '0';
                spans[2].style.transform = 'rotate(-45deg) translateY(-8px)';
            } else {
                spans[0].style.transform = 'none';
                spans[1].style.opacity = '1';
                spans[2].style.transform = 'none';
            }
        });

        // Close mobile menu when clicking on a link
        const navLinks = navMenu.querySelectorAll('a');
        navLinks.forEach(link => {
            link.addEventListener('click', function () {
                navMenu.classList.remove('active');
                const spans = mobileToggle.querySelectorAll('span');
                spans[0].style.transform = 'none';
                spans[1].style.opacity = '1';
                spans[2].style.transform = 'none';
            });
        });
    }

    // ===== Navbar Scroll Effect =====
    const navbar = document.querySelector('.navbar');
    if (navbar) {
        window.addEventListener('scroll', function () {
            if (window.scrollY > 50) {
                navbar.classList.add('scrolled');
            } else {
                navbar.classList.remove('scrolled');
            }
        });
    }

    // ===== Smooth Scroll for Anchor Links =====
    const smoothScrollLinks = document.querySelectorAll('a[href^="#"]');
    smoothScrollLinks.forEach(link => {
        link.addEventListener('click', function (e) {
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

    // ===== Scroll Animation for Cards =====
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function (entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    const animatedElements = document.querySelectorAll('.fade-in');
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });

    // ===== Appointment Form Handling =====
    const appointmentForm = document.getElementById('appointmentForm');
    if (appointmentForm) {
        // Set minimum date to today
        const dateInput = document.getElementById('date');
        if (dateInput) {
            const today = new Date().toISOString().split('T')[0];
            dateInput.setAttribute('min', today);
        }

        appointmentForm.addEventListener('submit', function (e) {
            e.preventDefault();

            // Get form values
            const fullName = document.getElementById('fullName').value;
            const phone = document.getElementById('phone').value;
            const whatsapp = document.getElementById('whatsapp').value;
            const doctor = document.getElementById('doctor').value;
            const treatment = document.getElementById('treatment').value;
            const date = document.getElementById('date').value;
            const time = document.getElementById('time').value;
            const notes = document.getElementById('notes').value;

            // Format date
            const formattedDate = new Date(date).toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric'
            });

            // Create WhatsApp message
            let message = `*Asif and Salma Skin Care - Appointment Request*%0A%0A`;
            message += `*Name:* ${fullName}%0A`;
            message += `*Phone:* ${phone}%0A`;
            message += `*WhatsApp:* ${whatsapp}%0A`;
            message += `*Doctor:* ${doctor}%0A`;
            message += `*Treatment:* ${treatment}%0A`;
            message += `*Preferred Date:* ${formattedDate}%0A`;
            message += `*Preferred Time:* ${time}%0A`;
            if (notes) {
                message += `*Additional Notes:* ${notes}%0A`;
            }
            message += `%0APlease confirm my appointment. Thank you!`;

            // Open WhatsApp with pre-filled message
            const whatsappUrl = `https://wa.me/923450731223?text=${message}`;
            window.open(whatsappUrl, '_blank');

            // Show success message
            const formMessage = document.getElementById('formMessage');
            if (formMessage) {
                formMessage.style.display = 'block';
                formMessage.innerHTML = `
                    <div style="background: #E8F5E9; border: 2px solid #4CAF50; border-radius: 12px; padding: 1.5rem; color: #2E7D32;">
                        <i class="fas fa-check-circle" style="font-size: 2rem; color: #4CAF50; margin-bottom: 0.5rem;"></i>
                        <h3 style="color: #2E7D32; margin-bottom: 0.5rem;">Request Submitted!</h3>
                        <p style="margin: 0;">
                            Your appointment request has been sent via WhatsApp. 
                            We will contact you shortly to confirm your appointment.
                        </p>
                    </div>
                `;

                // Reset form
                appointmentForm.reset();

                // Scroll to message
                formMessage.scrollIntoView({ behavior: 'smooth', block: 'center' });
            }
        });
    }

    // ===== Contact Form Handling =====
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function (e) {
            e.preventDefault();

            // Get form values
            const name = document.getElementById('contactName').value;
            const email = document.getElementById('contactEmail').value;
            const phone = document.getElementById('contactPhone').value;
            const subject = document.getElementById('contactSubject').value;
            const message = document.getElementById('contactMessage').value;

            // Create WhatsApp message
            let whatsappMsg = `*Asif and Salma Skin Care - Contact Form*%0A%0A`;
            whatsappMsg += `*Name:* ${name}%0A`;
            whatsappMsg += `*Email:* ${email}%0A`;
            whatsappMsg += `*Phone:* ${phone}%0A`;
            whatsappMsg += `*Subject:* ${subject}%0A`;
            whatsappMsg += `*Message:* ${message}`;

            // Open WhatsApp with pre-filled message
            const whatsappUrl = `https://wa.me/923450731223?text=${whatsappMsg}`;
            window.open(whatsappUrl, '_blank');

            // Show success message
            const contactFormMessage = document.getElementById('contactFormMessage');
            if (contactFormMessage) {
                contactFormMessage.style.display = 'block';
                contactFormMessage.innerHTML = `
                    <div style="background: #E8F5E9; border: 2px solid #4CAF50; border-radius: 12px; padding: 1.5rem; color: #2E7D32;">
                        <i class="fas fa-check-circle" style="font-size: 2rem; color: #4CAF50; margin-bottom: 0.5rem;"></i>
                        <h3 style="color: #2E7D32; margin-bottom: 0.5rem;">Message Sent!</h3>
                        <p style="margin: 0;">
                            Your message has been sent via WhatsApp. 
                            We'll get back to you as soon as possible.
                        </p>
                    </div>
                `;

                // Reset form
                contactForm.reset();

                // Scroll to message
                contactFormMessage.scrollIntoView({ behavior: 'smooth', block: 'center' });
            }
        });
    }

    // ===== Form Validation Enhancements =====
    const allInputs = document.querySelectorAll('.form-input, .form-select, .form-textarea');
    allInputs.forEach(input => {
        // Add focus effect
        input.addEventListener('focus', function () {
            this.style.borderColor = '#2196F3';
            this.style.boxShadow = '0 0 0 3px rgba(33, 150, 243, 0.1)';
        });

        input.addEventListener('blur', function () {
            if (!this.value) {
                this.style.borderColor = '#e0e0e0';
                this.style.boxShadow = 'none';
            }
        });

        // Real-time validation
        input.addEventListener('input', function () {
            if (this.validity.valid) {
                this.style.borderColor = '#4CAF50';
            } else {
                this.style.borderColor = '#e0e0e0';
            }
        });
    });

    // ===== Phone Number Formatting =====
    const phoneInputs = document.querySelectorAll('input[type="tel"]');
    phoneInputs.forEach(input => {
        input.addEventListener('input', function (e) {
            let value = this.value.replace(/\D/g, '');
            if (value.length > 11) {
                value = value.slice(0, 11);
            }
            this.value = value;
        });
    });

    // ===== Loading Animation for External Links =====
    const externalLinks = document.querySelectorAll('a[target="_blank"]');
    externalLinks.forEach(link => {
        link.addEventListener('click', function () {
            this.style.opacity = '0.7';
            setTimeout(() => {
                this.style.opacity = '1';
            }, 500);
        });
    });

    // ===== Back to Top Button (if needed) =====
    let backToTopBtn;
    if (window.innerHeight < document.body.scrollHeight - 1000) {
        backToTopBtn = document.createElement('button');
        backToTopBtn.innerHTML = '<i class="fas fa-arrow-up"></i>';
        backToTopBtn.style.cssText = `
            position: fixed;
            bottom: 100px;
            right: 30px;
            width: 50px;
            height: 50px;
            background: var(--primary-blue);
            color: white;
            border: none;
            border-radius: 50%;
            cursor: pointer;
            display: none;
            align-items: center;
            justify-content: center;
            font-size: 1.2rem;
            box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
            transition: all 0.3s ease;
            z-index: 998;
        `;
        backToTopBtn.setAttribute('aria-label', 'Back to top');
        document.body.appendChild(backToTopBtn);

        window.addEventListener('scroll', function () {
            if (window.scrollY > 500) {
                backToTopBtn.style.display = 'flex';
            } else {
                backToTopBtn.style.display = 'none';
            }
        });

        backToTopBtn.addEventListener('click', function () {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });

        backToTopBtn.addEventListener('mouseenter', function () {
            this.style.transform = 'scale(1.1)';
        });

        backToTopBtn.addEventListener('mouseleave', function () {
            this.style.transform = 'scale(1)';
        });
    }

    // ===== Console Welcome Message =====
    console.log('%c🏥 Asif and Salma Skin Care', 'font-size: 24px; font-weight: bold; color: #2196F3;');
    console.log('%cAdvanced Skin Care & Aesthetic Treatments', 'font-size: 14px; color: #666;');
    console.log('%cContact: 0345-0731223 | Location: DHA, Karachi', 'font-size: 12px; color: #999;');

    // ===== GSAP Animations =====
    if (typeof gsap !== 'undefined') {
        gsap.registerPlugin(ScrollTrigger);

        // Hero Content Animation
        gsap.from('.hero-content > *', {
            y: 30,
            opacity: 0,
            duration: 1,
            stagger: 0.2,
            ease: "power3.out"
        });

        // Hero Image Animation
        gsap.from('.hero-image', {
            x: 50,
            opacity: 0,
            duration: 1.2,
            ease: "power2.out",
            delay: 0.5
        });

        // Feature Cards Stagger
        gsap.from('.feature-card', {
            scrollTrigger: {
                trigger: '.features-grid',
                start: "top 80%"
            },
            y: 50,
            opacity: 0,
            duration: 0.8,
            stagger: 0.2,
            ease: "back.out(1.7)"
        });

        // Section Headers
        gsap.utils.toArray('.section-header').forEach(header => {
            gsap.from(header, {
                scrollTrigger: {
                    trigger: header,
                    start: "top 85%"
                },
                y: 30,
                opacity: 0,
                duration: 1,
                ease: "power2.out"
            });
        });

        // Treatment Cards
        gsap.from('.treatment-card', {
            scrollTrigger: {
                trigger: '.treatments-grid',
                start: "top 85%"
            },
            scale: 0.9,
            opacity: 0,
            duration: 0.6,
            stagger: 0.1,
            ease: "power1.out"
        });
    }
});

// ===== Performance Optimization =====
// Lazy load images if IntersectionObserver is supported
if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src || img.src;
                img.classList.add('loaded');
                observer.unobserve(img);
            }
        });
    });

    const lazyImages = document.querySelectorAll('img[loading="lazy"]');
    lazyImages.forEach(img => imageObserver.observe(img));
}

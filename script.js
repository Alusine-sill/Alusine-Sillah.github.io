// Get form elements
const contactForm = document.getElementById('contactForm');
const submitBtn = document.getElementById('submit-btn');
const successMsg = document.getElementById('success-message');
const errorMsg = document.getElementById('error-message');
const formFields = contactForm.querySelectorAll('input, textarea, .h-captcha, button:not(#submit-btn)');

// Hide success/error messages initially
successMsg.style.display = 'none';
errorMsg.style.display = 'none';

// Function to show form again after success
window.showFormAgain = function() {
    successMsg.style.display = 'none';
    contactForm.reset();
    // Reset hCaptcha if needed
    if (typeof hcaptcha !== 'undefined') {
        hcaptcha.reset();
    }
}

// Handle form submission
contactForm.addEventListener('submit', async function(e) {
    e.preventDefault();
    
    // Prepare form data
    const formData = new FormData(contactForm);
    
    // Show loading state
    submitBtn.textContent = 'Sending...';
    submitBtn.disabled = true;
    
    try {
        // Send to Web3Forms
        const response = await fetch('https://api.web3forms.com/submit', {
            method: 'POST',
            body: formData
        });
        
        const data = await response.json();
        
        if (data.success) {
            // Hide the form
            formFields.forEach(field => {
                field.style.display = 'none';
            });
            submitBtn.style.display = 'none';
            
            // Show success message
            successMsg.style.display = 'block';
            
            // Optional: Track in Google Analytics or just celebrate!
            console.log('Message sent successfully!');
        } else {
            // Show error message
            errorMsg.style.display = 'block';
            
            // Hide error after 5 seconds
            setTimeout(() => {
                errorMsg.style.display = 'none';
            }, 5000);
        }
    } catch (error) {
        // Show error message
        errorMsg.style.display = 'block';
        
        setTimeout(() => {
            errorMsg.style.display = 'none';
        }, 5000);
    } finally {
        // Reset button
        submitBtn.textContent = 'Send Message';
        submitBtn.disabled = false;
    }
});

// Mobile Navigation Toggle
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Close mobile menu when clicking a link
document.querySelectorAll('.nav-menu a').forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    });
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Sticky navigation background on scroll
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.background = 'rgba(255,255,255,0.95)';
        navbar.style.boxShadow = '0 2px 10px rgba(0,0,0,0.1)';
    } else {
        navbar.style.background = '#fff';
        navbar.style.boxShadow = '0 2px 10px rgba(0,0,0,0.1)';
    }
});

// Form submission handling (if using Formspree or similar)
const contactForm = document.getElementById('contactForm');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        // Optional: Add loading state or validation
        const submitBtn = this.querySelector('button[type="submit"]');
        submitBtn.textContent = 'Sending...';
        submitBtn.disabled = true;
    });
}

// Animation on scroll - simple fade in
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe all sections and cards
document.querySelectorAll('section, .education-card, .strength-card, .timeline-item').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
});

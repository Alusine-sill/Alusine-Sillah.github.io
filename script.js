
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
function showLoginSample() {
    const loginBox = document.getElementById("loginSample");
    
    // Create a styled sample credentials box
    const sampleHTML = `
        <div style="
            background-color: #f0f8ff;
            border: 2px solid #3498db;
            border-radius: 8px;
            padding: 15px;
            margin: 10px 0;
            font-family: Arial, sans-serif;
        ">
            <h4 style="margin-top:0; color:#2c3e50;">📋 Sample Login Credentials</h4>
            <p><strong>👤 Username:</strong> Teacher</p>
            <p><strong>🔑 Password:</strong> 123456</p>
            <p style="font-size:0.9em; color:#7f8c8d;">
                <em>Use these to test the demo version</em>
            </p>
            <button onclick="hideLoginSample()" style="
                background-color: #e74c3c;
                color: white;
                border: none;
                padding: 8px 15px;
                border-radius: 5px;
                cursor: pointer;
                font-size: 14px;
            ">
                ✕ Close
            </button>
        </div>
    `;
    
    loginBox.innerHTML = sampleHTML;
}

function hideLoginSample() {
    document.getElementById("loginSample").innerHTML = "";
}

// Optional: Add a button to show credentials
function toggleLoginSample() {
    const loginBox = document.getElementById("loginSample");
    
    // If empty, show sample; if content exists, hide it
    if (loginBox.innerHTML.trim() === "") {
        showLoginSample();
    } else {
        hideLoginSample();
    }
}

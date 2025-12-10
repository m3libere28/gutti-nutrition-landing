document.addEventListener('DOMContentLoaded', () => {
    // 1. Navigation Scroll Effect
    const navbar = document.getElementById('navbar');
    if (navbar) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 50) {
                navbar.classList.add('scrolled');
            } else {
                navbar.classList.remove('scrolled');
            }
        });
    }

    // 2. Mobile Menu Toggle
    const mobileBtn = document.getElementById('mobile-menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');
    const mobileLinks = document.querySelectorAll('.mobile-nav-link');

    if (mobileBtn && mobileMenu) {
        mobileBtn.addEventListener('click', () => {
            mobileBtn.classList.toggle('open');
            mobileMenu.classList.toggle('open');
            document.body.style.overflow = mobileMenu.classList.contains('open') ? 'hidden' : 'auto';
        });
    }

    if (mobileLinks) {
        mobileLinks.forEach(link => {
            link.addEventListener('click', () => {
                if (mobileBtn) mobileBtn.classList.remove('open');
                if (mobileMenu) mobileMenu.classList.remove('open');
                document.body.style.overflow = 'auto';
            });
        });
    }

    // 3. Reveal Animations (Intersection Observer)
    const observerOptions = {
        threshold: 0.1,
        rootMargin: "0px"
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
            }
        });
    }, observerOptions);

    document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

    // 4. Modal Logic (Privacy & Terms)
    const privacyModal = document.getElementById("privacy-modal");
    const privacyBtn = document.getElementById("privacy-link");
    // Use robust selector for close buttons inside modals
    const privacyClose = privacyModal ? privacyModal.querySelector('.close-btn') : null;

    const termsModal = document.getElementById("terms-modal");
    const termsBtn = document.getElementById("terms-link");
    // Some pages use 'close-btn-terms', others might reuse 'close-btn'. Check both.
    const termsClose = termsModal ? (termsModal.querySelector('.close-btn-terms') || termsModal.querySelector('.close-btn')) : null;

    // Privacy Modal
    if (privacyBtn && privacyModal) {
        privacyBtn.onclick = function (e) {
            e.preventDefault();
            privacyModal.style.display = "block";
        }
    }
    if (privacyClose && privacyModal) {
        privacyClose.onclick = function () {
            privacyModal.style.display = "none";
        }
    }

    // Terms Modal
    if (termsBtn && termsModal) {
        termsBtn.onclick = function (e) {
            e.preventDefault();
            termsModal.style.display = "block";
        }
    }
    if (termsClose && termsModal) {
        termsClose.onclick = function () {
            termsModal.style.display = "none";
        }
    }

    // Close on Outside Click (Both Modals)
    window.addEventListener('click', (event) => {
        if (privacyModal && event.target == privacyModal) {
            privacyModal.style.display = "none";
        }
        if (termsModal && event.target == termsModal) {
            termsModal.style.display = "none";
        }
    });

    // 5. Smooth Scroll for Anchor Links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            // Only if intended target exists on this page
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                e.preventDefault();
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });
});

// main.js - Global Logic (Mobile Menu, Modals)
document.addEventListener('DOMContentLoaded', () => {

    const disableResourcesNavLink = () => {
        const selectors = [
            '#navbar a.nav-link[href="resources.html"]',
            '#mobile-menu a.mobile-nav-link[href="resources.html"]',
        ];

        const links = document.querySelectorAll(selectors.join(','));
        links.forEach((link) => {
            link.setAttribute('aria-disabled', 'true');
            link.setAttribute('tabindex', '-1');
            link.style.pointerEvents = 'none';
            link.style.cursor = 'default';
            link.addEventListener('click', (e) => {
                e.preventDefault();
                e.stopPropagation();
            });
        });
    };
    disableResourcesNavLink();

    const navbar = document.getElementById('navbar');
    if (navbar) {
        const hero = document.querySelector('.hero');
        const getThreshold = () => {
            if (!hero) return 50;
            const threshold = hero.offsetHeight - navbar.offsetHeight;
            return Number.isFinite(threshold) ? Math.max(0, threshold) : 50;
        };

        let threshold = getThreshold();
        const updateNavbarScrolled = () => {
            navbar.classList.toggle('scrolled', window.scrollY > threshold);
        };

        window.addEventListener('scroll', updateNavbarScrolled, { passive: true });
        window.addEventListener('resize', () => {
            threshold = getThreshold();
            updateNavbarScrolled();
        });
        updateNavbarScrolled();
    }

    // 0. Splash Screen Logic (Session Check)
    const splashScreen = document.getElementById('splash-screen');
    if (sessionStorage.getItem('gutti_visited') === 'true') {
        if (splashScreen) splashScreen.style.display = 'none';
    }

    // 1. Mobile Menu Logic (Hamburger)
    const initMobileMenu = () => {
        const mobileBtn = document.getElementById('mobile-menu-btn');
        const mobileMenu = document.getElementById('mobile-menu');
        const mobileLinks = document.querySelectorAll('.mobile-nav-link');

        if (!mobileBtn || !mobileMenu) return;

        // Clone to remove old listeners (idempotent)
        const newBtn = mobileBtn.cloneNode(true);
        mobileBtn.parentNode.replaceChild(newBtn, mobileBtn);

        newBtn.addEventListener('click', (e) => {
            e.stopPropagation(); // Stop bubbling
            newBtn.classList.toggle('open');
            mobileMenu.classList.toggle('open');

            // Lock body scroll
            const isOpen = mobileMenu.classList.contains('open');
            document.body.style.overflow = isOpen ? 'hidden' : 'auto';
        });

        // Close on Link Click
        if (mobileLinks) {
            mobileLinks.forEach(link => {
                link.addEventListener('click', () => {
                    newBtn.classList.remove('open');
                    mobileMenu.classList.remove('open');
                    document.body.style.overflow = 'auto';
                });
            });
        }
    };

    initMobileMenu();

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

    // Medical Disclaimer Modal
    const disclaimerModal = document.getElementById("disclaimer-modal");
    const disclaimerBtn = document.getElementById("disclaimer-link");
    const disclaimerBtnFooter = document.getElementById("disclaimer-link-footer"); // if second link exists
    const disclaimerClose = disclaimerModal ? (disclaimerModal.querySelector('.close-btn-disclaimer') || disclaimerModal.querySelector('.close-btn')) : null;

    if (disclaimerModal) {
        if (disclaimerBtn) {
            disclaimerBtn.onclick = function (e) {
                e.preventDefault();
                disclaimerModal.style.display = "block";
            }
        }
        if (disclaimerBtnFooter) {
            disclaimerBtnFooter.onclick = function (e) {
                e.preventDefault();
                disclaimerModal.style.display = "block";
            }
        }
        if (disclaimerClose) {
            disclaimerClose.onclick = function () {
                disclaimerModal.style.display = "none";
            }
        }
    }

    // Close on Outside Click (All Modals)
    window.addEventListener('click', (event) => {
        if (privacyModal && event.target == privacyModal) {
            privacyModal.style.display = "none";
        }
        if (termsModal && event.target == termsModal) {
            termsModal.style.display = "none";
        }
        if (disclaimerModal && event.target == disclaimerModal) {
            disclaimerModal.style.display = "none";
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

document.addEventListener('DOMContentLoaded', () => {
    const PRACTICE_BETTER_BOOKINGS_URL = 'https://guttienutrition.practicebetter.io/#/693701654a4220bc75135fe0/bookings?step=services';

    const renameFreeEnergyAuditToFreeNutritionQuiz = () => {
        const fromText = 'Free Energy Audit';
        const toText = 'Free Nutrition Quiz';

        const textElements = document.querySelectorAll('a, button, span, div, p, h1, h2, h3, h4, h5, h6');
        textElements.forEach((el) => {
            if (el.childElementCount === 0 && el.textContent && el.textContent.trim() === fromText) {
                el.textContent = toText;
            }
        });

        const attrElements = document.querySelectorAll('[aria-label], [title], img[alt]');
        attrElements.forEach((el) => {
            ['aria-label', 'title', 'alt'].forEach((attr) => {
                const val = el.getAttribute(attr);
                if (val && val.includes(fromText)) {
                    el.setAttribute(attr, val.replaceAll(fromText, toText));
                }
            });
        });
    };
    renameFreeEnergyAuditToFreeNutritionQuiz();

    const redirectMailtoLinks = () => {
        const mailtoLinks = document.querySelectorAll('a[href^="mailto:"]');
        mailtoLinks.forEach((link) => {
            link.setAttribute('href', PRACTICE_BETTER_BOOKINGS_URL);
            if (!link.getAttribute('target')) {
                link.setAttribute('target', '_blank');
                link.setAttribute('rel', 'noopener noreferrer');
            }
        });
    };
    redirectMailtoLinks();

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
    // 2. Mobile Menu Toggle (Re-Engineered)
    const initMobileMenu = () => {
        const mobileBtn = document.getElementById('mobile-menu-btn');
        const mobileMenu = document.getElementById('mobile-menu');
        const mobileLinks = document.querySelectorAll('.mobile-nav-link');

        // Safety check
        if (!mobileBtn || !mobileMenu) return;

        // Clone element to remove old event listeners (Nuclear option to prevent double-toggles)
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

        // Close on Outside Click (Overlay itself acts as background? No, overlay is full screen)
        // If we want to close when clicking strictly outside links? 
        // Logic: The overlay IS the menu background. Clicking it usually does nothing or closes.
        // Let's leave it as explicit close button logic for now (clicking button again closes it).
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

// main.js - Global Logic (Mobile Menu, Modals)
document.addEventListener('DOMContentLoaded', () => {

    const PRACTICE_BETTER_BOOKINGS_URL = 'https://guttienutrition.practicebetter.io/#/693701654a4220bc75135fe0/bookings?step=services';

    const renameFreeEnergyAuditToFreeNutritionQuiz = () => {
        const fromText = 'Free Energy Audit';
        const toText = 'Free Nutrition Quiz';
        const fromTextRegex = /Free\s+Energy\s+Audit/g;

        const textElements = document.querySelectorAll('a, button, span, div, p, h1, h2, h3, h4, h5, h6');
        textElements.forEach((el) => {
            const normalizedText = (el.textContent || '').replace(/\s+/g, ' ').trim();
            if (el.childElementCount === 0 && normalizedText === fromText) {
                el.textContent = toText;
            }
        });

        const attrElements = document.querySelectorAll('[aria-label], [title], img[alt]');
        attrElements.forEach((el) => {
            ['aria-label', 'title', 'alt'].forEach((attr) => {
                const val = el.getAttribute(attr);
                if (val && fromTextRegex.test(val)) {
                    el.setAttribute(attr, val.replace(fromTextRegex, toText));
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

    const updateFooterLinks = () => {
        const footer = document.querySelector('footer');
        if (!footer) return;

        const links = footer.querySelectorAll('a');
        links.forEach((link) => {
            const text = (link.textContent || '').replace(/\s+/g, ' ').trim().toLowerCase();
            const href = (link.getAttribute('href') || '').trim();

            const isClientPortal = text === 'client portal' || href === 'https://my.practicebetter.io/' || href === 'https://my.practicebetter.io';
            if (isClientPortal) {
                link.setAttribute('href', PRACTICE_BETTER_BOOKINGS_URL);
                link.setAttribute('target', '_blank');
                link.setAttribute('rel', 'noopener noreferrer');
                const aria = link.getAttribute('aria-label');
                if (aria && aria.toLowerCase().includes('client portal')) {
                    link.setAttribute('aria-label', 'Book an appointment (Practice Better)');
                }
            }

            const isResources = href.endsWith('resources.html') || text === 'resources';
            if (isResources) {
                link.remove();
            }
        });
    };
    updateFooterLinks();

    const removeResourcesNavLink = () => {
        const selectors = [
            '#navbar a.nav-link[href="resources.html"]',
            '#navbar a.dropdown-item[href="resources.html"]',
            '#mobile-menu a.mobile-nav-link[href="resources.html"]',
        ];

        const links = document.querySelectorAll(selectors.join(','));
        links.forEach((link) => {
            link.remove();
        });
    };
    removeResourcesNavLink();

    const initEventsAndWorkshops = () => {
        const calendarRoot = document.getElementById('events-calendar');
        const monthLabel = document.getElementById('events-month');
        const prevBtn = document.getElementById('events-prev');
        const nextBtn = document.getElementById('events-next');
        const listRoot = document.getElementById('events-list');
        const selectedRoot = document.getElementById('events-selected');

        if (!calendarRoot || !monthLabel || !prevBtn || !nextBtn || !listRoot || !selectedRoot) return;

        const EVENTS = [
            {
                title: 'The Aligned Reset Workshop',
                date: '2026-02-15',
                time: '1:00 PM',
                location: 'Virtual',
                type: 'Workshop',
                description: 'A 3-hour virtual workshop designed to help you pause, recalibrate, and move into the year ahead with clarity, intention, and support.',
                ctaLabel: 'Register',
                ctaUrl: 'https://guttienutrition.practicebetter.io/#/693701654a4220bc75135fe0/bookings?step=course',
            },
        ];

        const pad2 = (n) => String(n).padStart(2, '0');
        const toKey = (d) => `${d.getFullYear()}-${pad2(d.getMonth() + 1)}-${pad2(d.getDate())}`;
        const parseLocalDate = (dateStr) => {
            const [y, m, d] = dateStr.split('-').map((x) => Number(x));
            return new Date(y, m - 1, d);
        };

        const byDateKey = EVENTS.reduce((acc, ev) => {
            if (!acc[ev.date]) acc[ev.date] = [];
            acc[ev.date].push(ev);
            return acc;
        }, {});

        const monthNames = [
            'January', 'February', 'March', 'April', 'May', 'June',
            'July', 'August', 'September', 'October', 'November', 'December',
        ];

        let currentMonth = new Date();
        currentMonth = new Date(currentMonth.getFullYear(), currentMonth.getMonth(), 1);
        let selectedDateKey = null;

        const renderSelected = (dateKey) => {
            selectedDateKey = dateKey;
            const items = byDateKey[dateKey] || [];
            const displayDate = parseLocalDate(dateKey);

            selectedRoot.innerHTML = '';

            const header = document.createElement('div');
            header.className = 'events-selected-header';
            header.textContent = `Selected: ${monthNames[displayDate.getMonth()]} ${displayDate.getDate()}, ${displayDate.getFullYear()}`;
            selectedRoot.appendChild(header);

            if (items.length === 0) {
                const empty = document.createElement('div');
                empty.className = 'events-empty';
                empty.textContent = 'No events scheduled for this day.';
                selectedRoot.appendChild(empty);
                return;
            }

            const stack = document.createElement('div');
            stack.className = 'events-selected-stack';
            items.forEach((ev) => {
                stack.appendChild(renderEventCard(ev, true));
            });
            selectedRoot.appendChild(stack);
        };

        const renderEventCard = (ev, compact = false) => {
            const card = document.createElement('div');
            card.className = compact ? 'events-item compact' : 'events-item';

            const top = document.createElement('div');
            top.className = 'events-item-top';

            const tag = document.createElement('div');
            tag.className = 'events-tag';
            tag.textContent = ev.type || 'Event';

            const date = parseLocalDate(ev.date);
            const meta = document.createElement('div');
            meta.className = 'events-meta';
            meta.textContent = `${monthNames[date.getMonth()].slice(0, 3)} ${date.getDate()} • ${ev.time || 'TBA'} • ${ev.location || 'TBA'}`;

            top.appendChild(tag);
            top.appendChild(meta);

            const title = document.createElement('div');
            title.className = 'events-title';
            title.textContent = ev.title;

            const desc = document.createElement('div');
            desc.className = 'events-desc';
            desc.textContent = ev.description || '';

            const actions = document.createElement('div');
            actions.className = 'events-actions';

            const cta = document.createElement('a');
            cta.className = 'btn btn-primary btn-liquid';
            cta.href = ev.ctaUrl || PRACTICE_BETTER_BOOKINGS_URL;
            cta.target = '_blank';
            cta.rel = 'noopener noreferrer';
            cta.textContent = ev.ctaLabel || 'Learn more';

            const viewDay = document.createElement('button');
            viewDay.type = 'button';
            viewDay.className = 'btn btn-secondary btn-liquid';
            viewDay.textContent = 'View day';
            viewDay.addEventListener('click', () => {
                const d = parseLocalDate(ev.date);
                currentMonth = new Date(d.getFullYear(), d.getMonth(), 1);
                renderCalendar();
                renderSelected(ev.date);
                document.getElementById('events-workshops')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
            });

            actions.appendChild(cta);
            actions.appendChild(viewDay);

            card.appendChild(top);
            card.appendChild(title);
            if (ev.description) card.appendChild(desc);
            if (!compact) card.appendChild(actions);

            return card;
        };

        const renderUpcoming = () => {
            const now = new Date();
            const todayKey = toKey(now);

            const upcoming = [...EVENTS]
                .filter((ev) => ev.date >= todayKey)
                .sort((a, b) => (a.date === b.date ? (a.time || '').localeCompare(b.time || '') : a.date.localeCompare(b.date)));

            listRoot.innerHTML = '';

            if (upcoming.length === 0) {
                const empty = document.createElement('div');
                empty.className = 'events-empty';
                empty.textContent = 'New events coming soon.';
                listRoot.appendChild(empty);
                return;
            }

            upcoming.forEach((ev) => {
                listRoot.appendChild(renderEventCard(ev));
            });
        };

        const renderCalendar = () => {
            calendarRoot.innerHTML = '';
            monthLabel.textContent = `${monthNames[currentMonth.getMonth()]} ${currentMonth.getFullYear()}`;

            const firstDay = new Date(currentMonth.getFullYear(), currentMonth.getMonth(), 1);
            const startDow = firstDay.getDay();
            const daysInMonth = new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1, 0).getDate();

            for (let i = 0; i < startDow; i += 1) {
                const pad = document.createElement('div');
                pad.className = 'events-day pad';
                calendarRoot.appendChild(pad);
            }

            for (let day = 1; day <= daysInMonth; day += 1) {
                const d = new Date(currentMonth.getFullYear(), currentMonth.getMonth(), day);
                const key = toKey(d);
                const hasEvents = Boolean(byDateKey[key] && byDateKey[key].length);

                const cell = document.createElement('button');
                cell.type = 'button';
                cell.className = 'events-day';
                if (hasEvents) cell.classList.add('has-events');
                if (key === selectedDateKey) cell.classList.add('selected');

                cell.setAttribute('aria-label', hasEvents ? `View events for ${key}` : `No events for ${key}`);
                cell.innerHTML = `<span class="events-day-num">${day}</span>${hasEvents ? '<span class="events-dot" aria-hidden="true"></span>' : ''}`;

                cell.addEventListener('click', () => {
                    renderSelected(key);
                    renderCalendar();
                });

                calendarRoot.appendChild(cell);
            }
        };

        prevBtn.addEventListener('click', () => {
            currentMonth = new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1, 1);
            renderCalendar();
        });

        nextBtn.addEventListener('click', () => {
            currentMonth = new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1, 1);
            renderCalendar();
        });

        renderUpcoming();

        const nextEvent = [...EVENTS].sort((a, b) => a.date.localeCompare(b.date))[0];
        if (nextEvent && byDateKey[nextEvent.date]) {
            renderSelected(nextEvent.date);
            const d = parseLocalDate(nextEvent.date);
            currentMonth = new Date(d.getFullYear(), d.getMonth(), 1);
        }
        renderCalendar();
    };
    initEventsAndWorkshops();

    const navbar = document.getElementById('navbar');
    if (navbar) {
        const hero = document.querySelector('.hero');
        const isHomePage = (() => {
            const path = (window.location.pathname || '').toLowerCase();
            return path === '/' || path.endsWith('/index.html');
        })();

        const getThreshold = () => {
            if (!isHomePage) return 50;
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

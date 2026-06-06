document.addEventListener('DOMContentLoaded', () => {
    initNav();
    initMobileNav();
    initScrollReveal();
    initClipReveal();
    initWordReveal();
    initCounters();
    initScrollProgress();
    initHeroParallax();
    initQuoteModal();
    initFormInteractions();
});

// ─── Sticky nav shadow on scroll ──────────────────────────────────────────────
function initNav() {
    const nav = document.getElementById('main-nav');
    if (!nav) return;
    const onScroll = () => nav.classList.toggle('nav-scrolled', window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
}

// ─── Mobile nav drawer ────────────────────────────────────────────────────────
function initMobileNav() {
    const nav = document.querySelector('nav');
    if (!nav) return;

    let mobBtn = document.getElementById('mobile-menu-btn');
    if (!mobBtn) {
        mobBtn = document.createElement('button');
        mobBtn.id = 'mobile-menu-btn';
        mobBtn.setAttribute('aria-label', 'Open menu');
        mobBtn.className = 'md:hidden flex flex-col justify-center items-center gap-[5px] w-10 h-10 cursor-pointer';
        mobBtn.innerHTML = `
            <span class="w-6 h-0.5 bg-on-surface transition-all duration-300 origin-center"></span>
            <span class="w-6 h-0.5 bg-on-surface transition-all duration-300"></span>
            <span class="w-6 h-0.5 bg-on-surface transition-all duration-300 origin-center"></span>`;
        nav.appendChild(mobBtn);
    }

    let mobDrawer = document.getElementById('mobile-drawer');
    if (!mobDrawer) {
        mobDrawer = document.createElement('div');
        mobDrawer.id = 'mobile-drawer';
        mobDrawer.className = 'fixed inset-0 top-20 bg-white z-40 flex flex-col px-6 py-10 gap-6 translate-x-full transition-transform duration-300 ease-in-out';
        const links = Array.from(document.querySelectorAll('nav a')).map(a => {
            return `<a href="${a.getAttribute('href')}" class="text-2xl font-bold font-display text-on-surface hover:text-primary transition-colors py-2">${a.textContent.trim()}</a>`;
        }).join('');
        mobDrawer.innerHTML = `
            <div class="flex flex-col gap-2">${links}</div>
            <button class="mt-auto w-full bg-secondary text-white font-bold py-4 uppercase tracking-widest text-sm hover:bg-[#C44420] transition-colors mobile-quote-trigger cursor-pointer">
                GET A QUOTE
            </button>`;
        document.body.appendChild(mobDrawer);
    }

    let isOpen = false;
    const openDrawer = () => {
        isOpen = true;
        mobDrawer.classList.remove('translate-x-full');
        document.body.style.overflow = 'hidden';
        mobBtn.children[0].classList.add('rotate-45', 'translate-y-[7px]');
        mobBtn.children[1].classList.add('opacity-0');
        mobBtn.children[2].classList.add('-rotate-45', '-translate-y-[7px]');
    };
    const closeDrawer = () => {
        isOpen = false;
        mobDrawer.classList.add('translate-x-full');
        document.body.style.overflow = '';
        mobBtn.children[0].classList.remove('rotate-45', 'translate-y-[7px]');
        mobBtn.children[1].classList.remove('opacity-0');
        mobBtn.children[2].classList.remove('-rotate-45', '-translate-y-[7px]');
    };

    mobBtn.addEventListener('click', () => isOpen ? closeDrawer() : openDrawer());
    mobDrawer.addEventListener('click', e => { if (e.target.tagName === 'A') closeDrawer(); });
    document.addEventListener('keydown', e => { if (e.key === 'Escape' && isOpen) closeDrawer(); });
    window.addEventListener('resize', () => { if (window.innerWidth >= 768 && isOpen) closeDrawer(); });
}

// ─── Scroll-triggered reveal ──────────────────────────────────────────────────
function initScrollReveal() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (!entry.isIntersecting) return;
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
        });
    }, { threshold: 0.1, rootMargin: '0px 0px -48px 0px' });

    document.querySelectorAll('[data-reveal]').forEach(el => observer.observe(el));
}

// ─── Animated number counters ─────────────────────────────────────────────────
function initCounters() {
    const counters = document.querySelectorAll('[data-count]');
    if (!counters.length) return;

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (!entry.isIntersecting) return;
            const el = entry.target;
            const raw = el.dataset.count;
            const isPercent = raw.includes('%');
            const isWord = isNaN(parseFloat(raw));
            if (isWord) return;
            const target = parseFloat(raw);
            const duration = 1600;
            let startTs = null;
            const tick = (ts) => {
                if (!startTs) startTs = ts;
                const progress = Math.min((ts - startTs) / duration, 1);
                const eased = 1 - Math.pow(1 - progress, 4);
                const value = Math.floor(eased * target);
                el.textContent = isPercent ? value + '%' : value;
                if (progress < 1) requestAnimationFrame(tick);
                else el.textContent = raw;
            };
            requestAnimationFrame(tick);
            observer.unobserve(el);
        });
    }, { threshold: 0.5 });

    counters.forEach(el => observer.observe(el));
}

// ─── Quote modal ──────────────────────────────────────────────────────────────
function initQuoteModal() {
    let modal = document.getElementById('quote-modal');
    if (!modal) {
        modal = document.createElement('div');
        modal.id = 'quote-modal';
        modal.className = 'fixed inset-0 z-[100] flex items-center justify-center bg-black/60 hidden opacity-0 transition-opacity duration-300 px-5';
        modal.innerHTML = `
            <div id="quote-modal-inner" class="bg-white w-full max-w-lg p-8 relative transform scale-95 transition-transform duration-300">
                <button id="close-quote-modal" aria-label="Close" class="absolute top-5 right-5 text-on-surface/40 hover:text-on-surface transition-colors cursor-pointer">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="square" stroke-linejoin="miter" d="M6 18L18 6M6 6l12 12"/></svg>
                </button>
                <p class="text-xs font-bold text-secondary uppercase tracking-[0.2em] mb-2">Keren Petroleum</p>
                <h3 class="text-2xl font-bold font-display text-on-surface mb-6">Request a Supply Quote</h3>
                <form id="modal-quote-form" class="space-y-4">
                    <div class="grid grid-cols-2 gap-4">
                        <div class="space-y-1">
                            <label class="text-xs font-bold uppercase tracking-widest text-on-surface/50">Full Name</label>
                            <input type="text" required placeholder="John Doe" class="w-full border border-gray-200 focus:border-primary focus:ring-0 px-4 py-3 text-sm bg-white text-on-surface outline-none transition-colors">
                        </div>
                        <div class="space-y-1">
                            <label class="text-xs font-bold uppercase tracking-widest text-on-surface/50">Corporate Email</label>
                            <input type="email" required placeholder="j.doe@company.com" class="w-full border border-gray-200 focus:border-primary focus:ring-0 px-4 py-3 text-sm bg-white text-on-surface outline-none transition-colors">
                        </div>
                    </div>
                    <div class="space-y-1">
                        <label class="text-xs font-bold uppercase tracking-widest text-on-surface/50">Company</label>
                        <input type="text" required placeholder="Acme Corp" class="w-full border border-gray-200 focus:border-primary focus:ring-0 px-4 py-3 text-sm bg-white text-on-surface outline-none transition-colors">
                    </div>
                    <div class="grid grid-cols-2 gap-4">
                        <div class="space-y-1">
                            <label class="text-xs font-bold uppercase tracking-widest text-on-surface/50">Fuel Product</label>
                            <select required class="w-full border border-gray-200 focus:border-primary focus:ring-0 px-4 py-3 text-sm bg-white text-on-surface outline-none transition-colors">
                                <option value="" disabled selected>Select fuel</option>
                                <option>Diesel 50ppm</option>
                                <option>Diesel 500ppm</option>
                                <option>Heavy Fuel Oil (HFO)</option>
                                <option>Jet A-1 Aviation Fuel</option>
                            </select>
                        </div>
                        <div class="space-y-1">
                            <label class="text-xs font-bold uppercase tracking-widest text-on-surface/50">Monthly Volume</label>
                            <select required class="w-full border border-gray-200 focus:border-primary focus:ring-0 px-4 py-3 text-sm bg-white text-on-surface outline-none transition-colors">
                                <option value="" disabled selected>Select range</option>
                                <option>10,000 – 50,000 L</option>
                                <option>50,000 – 200,000 L</option>
                                <option>200,000 L +</option>
                            </select>
                        </div>
                    </div>
                    <button type="submit" class="w-full bg-secondary text-white font-bold py-4 uppercase tracking-widest text-sm hover:bg-[#C44420] transition-colors mt-2 cursor-pointer">
                        Submit Inquiry
                    </button>
                </form>
            </div>`;
        document.body.appendChild(modal);
    }

    const inner = modal.querySelector('#quote-modal-inner');
    const closeBtn = modal.querySelector('#close-quote-modal');
    const form = modal.querySelector('#modal-quote-form');

    const open = () => {
        modal.classList.remove('hidden');
        setTimeout(() => {
            modal.classList.remove('opacity-0');
            modal.classList.add('opacity-100');
            inner.classList.remove('scale-95');
            inner.classList.add('scale-100');
        }, 10);
    };
    const close = () => {
        modal.classList.remove('opacity-100');
        modal.classList.add('opacity-0');
        inner.classList.remove('scale-100');
        inner.classList.add('scale-95');
        setTimeout(() => modal.classList.add('hidden'), 300);
    };

    document.querySelectorAll('.quote-trigger, .mobile-quote-trigger').forEach(btn => {
        btn.addEventListener('click', e => { e.preventDefault(); open(); });
    });

    closeBtn.addEventListener('click', close);
    modal.addEventListener('click', e => { if (e.target === modal) close(); });
    document.addEventListener('keydown', e => { if (e.key === 'Escape') close(); });

    form.addEventListener('submit', e => {
        e.preventDefault();
        alert('Quote request submitted. Our procurement desk will contact you within 2 business hours.');
        form.reset();
        close();
    });
}

// ─── Scroll progress bar ──────────────────────────────────────────────────────
function initScrollProgress() {
    const bar = document.createElement('div');
    bar.id = 'scroll-progress';
    document.body.prepend(bar);
    const update = () => {
        const max = document.documentElement.scrollHeight - window.innerHeight;
        bar.style.width = max > 0 ? ((window.scrollY / max) * 100) + '%' : '0%';
    };
    window.addEventListener('scroll', update, { passive: true });
    update();
}

// ─── Word-by-word blur/fade reveal ───────────────────────────────────────────
function initWordReveal() {
    const els = document.querySelectorAll('[data-word-reveal]');
    if (!els.length) return;

    els.forEach(el => {
        const baseDelay = parseInt(el.dataset.delay || 0);
        const tokens = el.innerHTML.split(/(<br\s*\/?>|\s+)/gi);
        el.innerHTML = '';
        let wordIndex = 0;
        tokens.forEach(token => {
            if (/^<br/i.test(token)) {
                el.appendChild(document.createElement('br'));
            } else if (/^\s+$/.test(token)) {
                el.appendChild(document.createTextNode(' '));
            } else if (token.length) {
                const span = document.createElement('span');
                span.className = 'word-unit';
                span.innerHTML = token;
                span.style.transitionDelay = (baseDelay + wordIndex * 70) + 'ms';
                el.appendChild(span);
                wordIndex++;
            }
        });
    });

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (!entry.isIntersecting) return;
            entry.target.querySelectorAll('.word-unit').forEach(w => w.classList.add('visible'));
            observer.unobserve(entry.target);
        });
    }, { threshold: 0.1 });

    els.forEach(el => observer.observe(el));
}

// ─── Clip-path image wipe reveal ─────────────────────────────────────────────
function initClipReveal() {
    const els = document.querySelectorAll('[data-clip-reveal]');
    if (!els.length) return;

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (!entry.isIntersecting) return;
            entry.target.classList.add('is-clipped');
            observer.unobserve(entry.target);
        });
    }, { threshold: 0.15 });

    els.forEach(el => observer.observe(el));
}

// ─── Hero parallax ────────────────────────────────────────────────────────────
function initHeroParallax() {
    const bg = document.getElementById('hero-bg');
    if (!bg) return;
    const onScroll = () => {
        if (window.scrollY > window.innerHeight) return;
        bg.style.transform = `translateY(${window.scrollY * 0.22}px)`;
    };
    window.addEventListener('scroll', onScroll, { passive: true });
}

// ─── Form label highlight ─────────────────────────────────────────────────────
function initFormInteractions() {
    document.querySelectorAll('input, select, textarea').forEach(input => {
        const label = input.closest('.space-y-1, .form-field')?.querySelector('label');
        if (!label) return;
        input.addEventListener('focus', () => label.classList.add('text-primary'));
        input.addEventListener('blur', () => label.classList.remove('text-primary'));
    });
}

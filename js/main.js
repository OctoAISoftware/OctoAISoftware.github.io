// ===== OCTO AI - JavaScript Vanilla =====

// DOM Content Loaded
document.addEventListener('DOMContentLoaded', function() {
    console.log('OCTO AI site loaded - A inteligência que respira');

    // Inicializar funcionalidades
    initSmoothScroll();
    initScrollAnimations();
    initParticleEffects();
    initServiceCardInteractions();
    initNavbarEffects();
    initVideoBackground();
    initDynamicCopyright();
    initDynamicDates();
    initMouseTrail();
    initGSAPAnimations();
    initInteractive3DElements();
    initMagneticButtons();
    initOctoFont();
});

// ===== SMOOTH SCROLL NAVIGATION =====
function initSmoothScroll() {
    const navLinks = document.querySelectorAll('.nav-link[href^="#"]');
    const scrollIndicator = document.querySelector('.scroll-indicator');

    // Smooth scroll para links de navegação
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);

            if (targetSection) {
                const offsetTop = targetSection.offsetTop - 80; // Ajuste para navbar fixa

                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Scroll indicator click
    if (scrollIndicator) {
        scrollIndicator.addEventListener('click', function() {
            const sobreSection = document.querySelector('#sobre');
            if (sobreSection) {
                const offsetTop = sobreSection.offsetTop - 80;
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    }
}

// ===== SCROLL ANIMATIONS =====
function initScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-in');
            }
        });
    }, observerOptions);

    // Observar elementos para animação
    const animateElements = document.querySelectorAll(
        '.servico-card, .sobre-content, .contato-content, .section-header'
    );

    animateElements.forEach(element => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(30px)';
        element.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(element);
    });

    // Adicionar classe CSS para animação
    const style = document.createElement('style');
    style.textContent = `
        .animate-in {
            opacity: 1 !important;
            transform: translateY(0) !important;
        }
    `;
    document.head.appendChild(style);
}

// ===== PARTICLE EFFECTS =====
function initParticleEffects() {
    const heroSection = document.querySelector('.hero-section');
    const floatingParticles = document.querySelector('.floating-particles');

    if (!heroSection || !floatingParticles) return;

    // Mouse move parallax effect
    heroSection.addEventListener('mousemove', function(e) {
        const rect = heroSection.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        const centerX = rect.width / 2;
        const centerY = rect.height / 2;

        const moveX = (x - centerX) / centerX;
        const moveY = (y - centerY) / centerY;

        floatingParticles.style.transform = `translate(${moveX * 20}px, ${moveY * 20}px) rotate(${moveX * 5}deg)`;
    });

    // Adicionar partículas dinâmicas
    createDynamicParticles();
}

function createDynamicParticles() {
    const particlesContainer = document.querySelector('.floating-particles');
    if (!particlesContainer) return;

    const particles = [];
    const particleCount = 20;

    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.className = 'dynamic-particle';

        // Posição aleatória
        particle.style.left = Math.random() * 100 + '%';
        particle.style.top = Math.random() * 100 + '%';

        // Tamanho aleatório
        const size = Math.random() * 4 + 2;
        particle.style.width = size + 'px';
        particle.style.height = size + 'px';

        // Cor aleatória da paleta
        const colors = ['#8b5cf6', '#a855f7', '#00d4ff', '#7c3aed'];
        particle.style.background = colors[Math.floor(Math.random() * colors.length)];

        // Animação
        particle.style.animation = `float ${Math.random() * 10 + 10}s ease-in-out infinite`;

        particlesContainer.appendChild(particle);
        particles.push(particle);
    }

    // Adicionar CSS para partículas
    const style = document.createElement('style');
    style.textContent = `
        .dynamic-particle {
            position: absolute;
            border-radius: 50%;
            opacity: 0.6;
            pointer-events: none;
        }

        @keyframes float {
            0%, 100% { transform: translateY(0px) rotate(0deg); opacity: 0.6; }
            25% { transform: translateY(-20px) rotate(90deg); opacity: 1; }
            50% { transform: translateY(-10px) rotate(180deg); opacity: 0.8; }
            75% { transform: translateY(-30px) rotate(270deg); opacity: 0.9; }
        }
    `;
    document.head.appendChild(style);
}

// ===== SERVICE CARD INTERACTIONS =====
function initServiceCardInteractions() {
    const serviceCards = document.querySelectorAll('.servico-card');

    serviceCards.forEach((card, index) => {
        // Hover effect com delay escalonado
        card.addEventListener('mouseenter', function() {
            // Adicionar glow effect
            this.style.boxShadow = '0 0 40px rgba(139, 92, 246, 0.4)';

            // Animar outros cards para longe
            serviceCards.forEach((otherCard, otherIndex) => {
                if (otherCard !== card) {
                    const delay = Math.abs(index - otherIndex) * 100;
                    setTimeout(() => {
                        otherCard.style.transform = 'scale(0.95) translateY(10px)';
                        otherCard.style.opacity = '0.7';
                    }, delay);
                }
            });
        });

        card.addEventListener('mouseleave', function() {
            // Remover glow effect
            this.style.boxShadow = '';

            // Restaurar outros cards
            serviceCards.forEach(otherCard => {
                if (otherCard !== card) {
                    otherCard.style.transform = '';
                    otherCard.style.opacity = '';
                }
            });
        });

        // Click effect
        card.addEventListener('click', function() {
            this.style.transform = 'scale(0.98)';
            setTimeout(() => {
                this.style.transform = '';
            }, 150);
        });
    });
}

// ===== NAVBAR EFFECTS =====
function initNavbarEffects() {
    const navbar = document.querySelector('.navbar');
    let lastScrollTop = 0;

    window.addEventListener('scroll', function() {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

        // Adicionar/remover classe scrolled
        if (scrollTop > 100) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }

        // Esconder navbar no scroll down, mostrar no scroll up
        if (scrollTop > lastScrollTop && scrollTop > 200) {
            navbar.style.transform = 'translateY(-100%)';
        } else {
            navbar.style.transform = 'translateY(0)';
        }

        lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
    });

    // Adicionar CSS para navbar scrolled
    const style = document.createElement('style');
    style.textContent = `
        .navbar.scrolled {
            background: rgba(0, 0, 0, 0.98);
            box-shadow: 0 0 20px rgba(139, 92, 246, 0.1);
        }
    `;
    document.head.appendChild(style);
}


// ===== UTILITY FUNCTIONS =====

// Debounce function para otimizar performance
function debounce(func, wait, immediate) {
    let timeout;
    return function executedFunction() {
        const context = this;
        const args = arguments;
        const later = function() {
            timeout = null;
            if (!immediate) func.apply(context, args);
        };
        const callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
        if (callNow) func.apply(context, args);
    };
}

// Throttle function para scroll events
function throttle(func, limit) {
    let inThrottle;
    return function() {
        const args = arguments;
        const context = this;
        if (!inThrottle) {
            func.apply(context, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    };
}

// ===== PERFORMANCE MONITORING =====
// Log de performance para debug
window.addEventListener('load', function() {
    setTimeout(() => {
        const perfData = performance.getEntriesByType('navigation')[0];
        console.log('OCTO AI - Performance Metrics:');
        console.log(`DOM Content Loaded: ${perfData.domContentLoadedEventEnd}ms`);
        console.log(`Full Load: ${perfData.loadEventEnd}ms`);
        console.log('Site ready - A inteligência que respira está ativa');
    }, 1000);
});

// ===== ERROR HANDLING =====
window.addEventListener('error', function(e) {
    console.error('OCTO AI Error:', e.error);
});

// ===== DYNAMIC COPYRIGHT =====
function initDynamicCopyright() {
    const currentYearElement = document.getElementById('current-year');

    if (!currentYearElement) {
        console.warn('Elemento current-year não encontrado');
        return;
    }

    // Função para obter o ano atual em São Paulo, Brasil
    function getCurrentYearSaoPaulo() {
        try {
            // Criar uma data no timezone de São Paulo
            const saoPauloTime = new Date().toLocaleString("en-US", {
                timeZone: "America/Sao_Paulo"
            });

            // Converter para objeto Date
            const saoPauloDate = new Date(saoPauloTime);

            // Extrair o ano
            const currentYear = saoPauloDate.getFullYear();

            console.log(`Ano atual em São Paulo: ${currentYear}`);
            return currentYear;

        } catch (error) {
            console.warn('Erro ao obter ano de São Paulo:', error);
            // Fallback para o ano local
            return new Date().getFullYear();
        }
    }

    // Obter e definir o ano atual
    const currentYear = getCurrentYearSaoPaulo();
    currentYearElement.textContent = currentYear;

    // Opcional: atualizar a cada hora (por segurança)
    setInterval(() => {
        const newYear = getCurrentYearSaoPaulo();
        if (newYear !== parseInt(currentYearElement.textContent)) {
            currentYearElement.textContent = newYear;
            console.log(`Copyright atualizado para: ${newYear}`);
        }
    }, 3600000); // 1 hora em milissegundos
}


// ===== MOUSE TRAIL EFFECTS =====
function initMouseTrail() {
    const trailContainer = document.createElement('div');
    trailContainer.id = 'mouse-trail';
    trailContainer.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        pointer-events: none;
        z-index: 9999;
        overflow: hidden;
    `;
    document.body.appendChild(trailContainer);

    const particles = [];
    const maxParticles = 25;
    const particleSize = 4;

    // Inicializar posição do mouse
    let mouseX = 0;
    let mouseY = 0;

    // Criar partículas iniciais
    for (let i = 0; i < maxParticles; i++) {
        createTrailParticle();
    }

    // Mouse move handler

    document.addEventListener('mousemove', function(e) {
        mouseX = e.clientX;
        mouseY = e.clientY;

        // Criar nova partícula ocasionalmente
        if (Math.random() < 0.3) {
            createTrailParticle();
        }
    });

    function createTrailParticle() {
        const particle = document.createElement('div');
        particle.className = 'trail-particle';

        // Posição inicial aleatória próxima ao cursor
        const offsetX = (Math.random() - 0.5) * 20;
        const offsetY = (Math.random() - 0.5) * 20;

        particle.style.cssText = `
            position: absolute;
            width: ${particleSize}px;
            height: ${particleSize}px;
            background: radial-gradient(circle, #8b5cf6 0%, #00d4ff 50%, transparent 100%);
            border-radius: 50%;
            pointer-events: none;
            box-shadow: 0 0 10px rgba(139, 92, 246, 0.6);
            left: ${mouseX + offsetX}px;
            top: ${mouseY + offsetY}px;
            opacity: 0;
        `;

        trailContainer.appendChild(particle);
        particles.push(particle);

        // Animar partícula
        animateParticle(particle);
    }

    function animateParticle(particle) {
        let life = 0;
        const maxLife = 60; // frames

        function update() {
            life++;

            if (life >= maxLife) {
                particle.remove();
                particles.splice(particles.indexOf(particle), 1);
                return;
            }

            // Fade out
            const opacity = Math.max(0, 1 - (life / maxLife));
            particle.style.opacity = opacity;

            // Movimento suave em direção ao cursor
            const currentX = parseFloat(particle.style.left);
            const currentY = parseFloat(particle.style.top);
            const targetX = mouseX + (Math.random() - 0.5) * 10;
            const targetY = mouseY + (Math.random() - 0.5) * 10;

            const newX = currentX + (targetX - currentX) * 0.1;
            const newY = currentY + (targetY - currentY) * 0.1;

            particle.style.left = newX + 'px';
            particle.style.top = newY + 'px';

            requestAnimationFrame(update);
        }

        update();
    }

    // Remover partículas antigas para performance
    setInterval(() => {
        if (particles.length > maxParticles) {
            const oldParticle = particles.shift();
            if (oldParticle && oldParticle.parentNode) {
                oldParticle.remove();
            }
        }
    }, 100);
}

// ===== GSAP ANIMATIONS =====
function initGSAPAnimations() {
    // Verificar se GSAP está carregado
    if (typeof gsap === 'undefined') {
        console.warn('GSAP não carregado');
        return;
    }

    // Hero title typewriter effect
    const heroTitle = document.querySelector('.hero-title');
    if (heroTitle) {
        const originalText = heroTitle.innerHTML;
        heroTitle.innerHTML = '';

        // Split text into characters for typewriter effect
        const chars = originalText.split('');
        chars.forEach((char, index) => {
            const span = document.createElement('span');
            span.textContent = char;
            span.style.opacity = '0';
            span.style.display = 'inline-block';
            span.style.transform = 'translateY(20px)';
            heroTitle.appendChild(span);

            gsap.to(span, {
                opacity: 1,
                y: 0,
                duration: 0.1,
                delay: index * 0.05,
                ease: "power2.out"
            });
        });
    }

    // Enhanced scroll animations
    if (typeof ScrollTrigger !== 'undefined') {
        gsap.registerPlugin(ScrollTrigger);
    } else {
        console.warn('ScrollTrigger plugin not loaded');
    }

    // Service cards stagger animation
    const serviceCards = document.querySelectorAll('.servico-card');
    if (serviceCards.length > 0) {
        gsap.from(serviceCards, {
            scrollTrigger: {
                trigger: '.servicos-section',
                start: 'top 80%',
                end: 'bottom 20%',
                toggleActions: 'play none none reverse'
            },
            y: 50,
            opacity: 0,
            duration: 0.8,
            stagger: 0.2,
            ease: "power3.out"
        });
    }

    // Floating particles animation
    gsap.to('.floating-particles', {
        rotation: 360,
        duration: 20,
        repeat: -1,
        ease: "none"
    });

    // Button magnetic effect
    const buttons = document.querySelectorAll('.btn');
    buttons.forEach(button => {
        button.addEventListener('mouseenter', function(e) {
            const rect = button.getBoundingClientRect();
            const centerX = rect.left + rect.width / 2;
            const centerY = rect.top + rect.height / 2;

            gsap.to(button, {
                duration: 0.3,
                scale: 1.05,
                ease: "power2.out"
            });
        });

        button.addEventListener('mouseleave', function(e) {
            gsap.to(button, {
                duration: 0.3,
                scale: 1,
                ease: "power2.out"
            });
        });
    });

    // Navbar background animation on scroll
    gsap.to('.navbar', {
        scrollTrigger: {
            trigger: 'body',
            start: 'top -100px',
            end: 'top -50px',
            toggleActions: 'play none none reverse'
        },
        backgroundColor: 'rgba(0, 0, 0, 0.95)',
        backdropFilter: 'blur(10px)',
        duration: 0.3
    });

    console.log('GSAP animations initialized');
}


// ===== INTERACTIVE 3D ELEMENTS =====
function initInteractive3DElements() {
    const cards = document.querySelectorAll('.servico-card');

    cards.forEach(card => {
        card.addEventListener('mousemove', function(e) {
            const rect = card.getBoundingClientRect();
            const centerX = rect.left + rect.width / 2;
            const centerY = rect.top + rect.height / 2;

            const mouseX = e.clientX - centerX;
            const mouseY = e.clientY - centerY;

            const rotateX = (mouseY / rect.height) * 20; // Max 20 degrees
            const rotateY = (mouseX / rect.width) * -20; // Max -20 degrees

            card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateZ(20px)`;

            // Ajustar brilho baseado na distância do centro
            const distance = Math.sqrt(mouseX * mouseX + mouseY * mouseY);
            const maxDistance = Math.sqrt(rect.width * rect.width / 4 + rect.height * rect.height / 4);
            const intensity = Math.max(0, 1 - distance / maxDistance);

            card.style.boxShadow = `0 0 ${20 + intensity * 30}px rgba(139, 92, 246, ${0.3 + intensity * 0.4})`;
        });

        card.addEventListener('mouseleave', function() {
            // Reset to original position
            card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) translateZ(0px)';
            card.style.boxShadow = '';
        });

        // Adicionar efeito de profundidade inicial
        card.style.transition = 'transform 0.1s ease-out, box-shadow 0.1s ease-out';
    });

    console.log(`3D interactive elements initialized for ${cards.length} cards`);
}

// ===== MAGNETIC BUTTONS =====
function initMagneticButtons() {
    const magneticButtons = document.querySelectorAll('.btn-cta-primary, .btn-cta-secondary, .theme-toggle');

    magneticButtons.forEach(button => {
        let isHovering = false;

        button.addEventListener('mouseenter', function() {
            isHovering = true;
        });

        button.addEventListener('mouseleave', function() {
            isHovering = false;
            // Reset button position
            gsap.to(button, {
                x: 0,
                y: 0,
                duration: 0.5,
                ease: "elastic.out(1, 0.3)"
            });
        });

        document.addEventListener('mousemove', function(e) {
            if (!isHovering) return;

            const rect = button.getBoundingClientRect();
            const centerX = rect.left + rect.width / 2;
            const centerY = rect.top + rect.height / 2;

            const mouseX = e.clientX;
            const mouseY = e.clientY;

            const deltaX = mouseX - centerX;
            const deltaY = mouseY - centerY;

            // Limitar o movimento máximo
            const maxDistance = 30;
            const distance = Math.sqrt(deltaX * deltaX + deltaY * deltaY);
            const limitedDistance = Math.min(distance, maxDistance);

            if (distance > 0) {
                const moveX = (deltaX / distance) * limitedDistance * 0.3;
                const moveY = (deltaY / distance) * limitedDistance * 0.3;

                gsap.to(button, {
                    x: moveX,
                    y: moveY,
                    duration: 0.3,
                    ease: "power2.out"
                });
            }
        });
    });

    console.log(`Magnetic buttons initialized for ${magneticButtons.length} buttons`);
}

// ===== OCTO FONT APPLICATION =====
function initOctoFont() {

    // Função para envolver "OCTO" com span.font-octo
    function applyOctoFont() {
        // Procurar APENAS elementos de texto que devem ter formatação
        const textElements = document.querySelectorAll('h1, h2, h3, h4, h5, h6, p, span, strong, em, a, button');

        textElements.forEach(element => {
            // Verificar se o elemento é visível (não hidden, display none, etc.)
            const computedStyle = window.getComputedStyle(element);
            const isVisible = computedStyle.display !== 'none' &&
                             computedStyle.visibility !== 'hidden' &&
                             computedStyle.opacity !== '0';

            if (!isVisible) return;

            // Excluir elementos que são containers ou mídia
            if (element.tagName === 'DIV' && !element.textContent.trim()) return;
            if (element.tagName === 'VIDEO' || element.tagName === 'IMG' || element.tagName === 'SOURCE') return;

            const originalContent = element.innerHTML || element.textContent || '';

            // Regex para encontrar APENAS a palavra "OCTO" como palavra completa (case insensitive)
            const octoRegex = /\bOCTO\b/gi;

            // Verificar se o elemento já foi processado (contém span.font-octo)
            const alreadyProcessed = originalContent.includes('font-octo');

            // Verificar se contém "OCTO" como texto visível (não em URLs ou atributos)
            const visibleText = element.textContent || '';
            const hasOctoInText = /\bOCTO\b/i.test(visibleText);

            if (hasOctoInText && !alreadyProcessed) {
                // Substituir "OCTO" por "<span class="font-octo">OCTO</span>"
                const newContent = originalContent.replace(octoRegex, '<span class="font-octo">$&</span>');

                // Só aplicar se houver mudança
                if (newContent !== originalContent) {
                    element.innerHTML = newContent;
                    console.log('Applied Gordita Black font to OCTO in:', element.textContent.trim().substring(0, 50) + '...');
                }
            }
        });
    }

    // Aplicar fonte imediatamente
    applyOctoFont();

    console.log('OCTO font application initialized');
}

// ===== DYNAMIC DATES =====
function initDynamicDates() {
    // Função para formatar data em português brasileiro
    function formatDateBR(date) {
        return date.toLocaleDateString('pt-BR', {
            day: '2-digit',
            month: '2-digit',
            year: 'numeric'
        });
    }

    // Obter data atual em São Paulo
    function getCurrentDateSaoPaulo() {
        try {
            const saoPauloTime = new Date().toLocaleString("en-US", {
                timeZone: "America/Sao_Paulo"
            });
            return new Date(saoPauloTime);
        } catch (error) {
            console.warn('Erro ao obter data de São Paulo:', error);
            return new Date(); // Fallback para data local
        }
    }

    const currentDate = getCurrentDateSaoPaulo();
    const formattedDate = formatDateBR(currentDate);

    // Atualizar data de vigência nos termos
    const dataVigenciaElement = document.getElementById('data-vigencia');
    if (dataVigenciaElement) {
        dataVigenciaElement.textContent = formattedDate;
    }

    // Atualizar última atualização nos termos
    const ultimaAtualizacaoElement = document.getElementById('ultima-atualizacao');
    if (ultimaAtualizacaoElement) {
        ultimaAtualizacaoElement.textContent = formattedDate;
    }

    // Atualizar data de vigência na política de privacidade
    const dataVigenciaPrivacidadeElement = document.getElementById('data-vigencia-privacidade');
    if (dataVigenciaPrivacidadeElement) {
        dataVigenciaPrivacidadeElement.textContent = formattedDate;
    }

    // Atualizar última atualização na política de privacidade
    const ultimaAtualizacaoPrivacidadeElement = document.getElementById('ultima-atualizacao-privacidade');
    if (ultimaAtualizacaoPrivacidadeElement) {
        ultimaAtualizacaoPrivacidadeElement.textContent = formattedDate;
    }

    console.log(`Datas atualizadas para: ${formattedDate}`);
}

// ===== VIDEO BACKGROUND =====
function initVideoBackground() {
    const heroVideo = document.querySelector('.hero-video');

    if (!heroVideo) {
        console.warn('Vídeo de background não encontrado');
        return;
    }

    // Garantir que o vídeo esteja mutado (requerimento para autoplay)
    heroVideo.muted = true;

    // Definir velocidade do vídeo (28% mais lento = 72% da velocidade normal)
    heroVideo.playbackRate = 0.68;

    // Tentar reproduzir o vídeo
    heroVideo.play().catch(function(error) {
        console.warn('Erro ao reproduzir vídeo de background:', error);
        // Fallback: esconder o vídeo se houver erro
        heroVideo.style.display = 'none';
    });

    // Listener para quando o vídeo terminar
    heroVideo.addEventListener('ended', function() {
        console.log('Vídeo de background terminou');
        // Opcional: reiniciar o vídeo manualmente se necessário
        // this.play();
    });

    // Pausar/reproduzir com base na visibilidade da página
    document.addEventListener('visibilitychange', function() {
        if (document.hidden) {
            heroVideo.pause();
        } else {
            heroVideo.play().catch(function(error) {
                console.warn('Erro ao retomar vídeo:', error);
            });
        }
    });
}

// ===== FEATURE FLAGS =====
// Sistema simples de feature flags para futuras funcionalidades
const FEATURES = {
    particles: true,
    animations: true,
    interactions: true,
    videoBackground: true
};

// Função para verificar se uma feature está habilitada
function isFeatureEnabled(feature) {
    return FEATURES[feature] === true;
}

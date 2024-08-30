gsap.registerPlugin(ScrollTrigger);

// Animación de la barra de progreso
gsap.to('.progress-bar', {
    width: '100%',
    ease: 'none',
    scrollTrigger: {
        trigger: 'body',
        start: 'top top',
        end: 'bottom bottom',
        scrub: 0.3
    }
});

// Actualizar navegación activa
const sections = document.querySelectorAll('.section');
const navItems = document.querySelectorAll('.progress-nav li');

sections.forEach((section, index) => {
    ScrollTrigger.create({
        trigger: section,
        start: 'top center',
        end: 'bottom center',
        onEnter: () => setActiveNav(index),
        onEnterBack: () => setActiveNav(index)
    });
});

function setActiveNav(index) {
    navItems.forEach(item => item.classList.remove('active'));
    navItems[index].classList.add('active');
}

// Animaciones para cada sección
gsap.from('#inicio h1, #inicio p', {
    opacity: 0,
    y: 50,
    duration: 1,
    stagger: 0.3,
    scrollTrigger: {
        trigger: '#inicio',
        start: 'top center'
    }
});

// Animación mejorada para los servicios
gsap.from('.service-item', {
    opacity: 0,
    y: 50,
    duration: 0.8,
    stagger: 0.2,
    scrollTrigger: {
        trigger: '#servicios',
        start: 'top 80%',
        end: 'bottom 20%',
        toggleActions: 'play none none none'
    }
});

// Animación para los proyectos
gsap.from('.project-item', {
    opacity: 0,
    x: -100,
    stagger: 0.3,
    duration: 1,
    scrollTrigger: {
        trigger: '#proyectos',
        start: 'top center'
    }
});

// Animación para el formulario de contacto
gsap.from('#contacto form', {
    opacity: 0,
    scale: 0.8,
    duration: 1,
    scrollTrigger: {
        trigger: '#contacto',
        start: 'top center'
    }
});

// Navegación suave al hacer clic en los elementos de la barra de progreso
navItems.forEach(item => {
    item.addEventListener('click', () => {
        const targetSection = document.getElementById(item.dataset.section);
        window.scrollTo({
            top: targetSection.offsetTop - 60,
            behavior: 'smooth'
        });
    });
});

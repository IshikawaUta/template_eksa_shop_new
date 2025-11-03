document.addEventListener('DOMContentLoaded', () => {
    const revealElements = document.querySelectorAll('.scroll-reveal');

    const observerOptions = {
        root: null,
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate__animated', 'animate__fadeInUp');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    revealElements.forEach(el => {
        observer.observe(el);
    });
});

function formatNumber(number) {
    return number.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}

function updateNumbers() {
    const balanceNumber = parseFloat(document.getElementById('balance-number').textContent.replace(/,/g, ''));
    const newBalance = balanceNumber + (Math.random() - 0.5) * 100;
    document.getElementById('balance-number').textContent = formatNumber(newBalance);
    document.getElementById('expenses-number').textContent = formatNumber(newBalance);

    const paidProjectNumber = parseInt(document.getElementById('paid-project-number').textContent.replace(/,/g, ''));
    const newPaidProject = paidProjectNumber + (Math.random() - 0.5) * 50;
    document.getElementById('paid-project-number').textContent = parseInt(newPaidProject).toLocaleString();

    const cardBalanceNumber = parseFloat(document.getElementById('card-balance-number').textContent.replace(/,/g, ''));
    const newCardBalance = cardBalanceNumber + (Math.random() - 0.5) * 50;
    document.getElementById('card-balance-number').textContent = formatNumber(newCardBalance);
}

const heroCards = document.querySelectorAll('.hero-card-left, .hero-card-right, .hero-card-bottom-left, .hero-card-top-right');
const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const intervalId = setInterval(updateNumbers, 1000);
            observer.unobserve(entry.target);
            
        }
    });
});

heroCards.forEach(card => observer.observe(card));

document.addEventListener('DOMContentLoaded', () => {
    const cursor = document.querySelector('.custom-cursor');
    const interactiveElements = document.querySelectorAll('a, button, .card');

    document.addEventListener('mousemove', (e) => {
        if (cursor) {
            cursor.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0)`;
        }

        const trail = document.createElement('div');
        trail.classList.add('cursor-trail');
        document.body.appendChild(trail);

        trail.style.left = `${e.clientX}px`;
        trail.style.top = `${e.clientY}px`;

        trail.addEventListener('animationend', () => {
            trail.remove();
        });
    });

    if (cursor) {
        interactiveElements.forEach(el => {
            el.addEventListener('mouseenter', () => {
                cursor.style.transform = `translate(-50%, -50%) scale(2)`;
                cursor.style.backgroundColor = '#21c0b3';
            });

            el.addEventListener('mouseleave', () => {
                cursor.style.transform = `translate(-50%, -50%) scale(1)`;
                cursor.style.backgroundColor = 'transparent';
            });
        });
    }
});
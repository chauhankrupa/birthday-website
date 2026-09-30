const themeBtn = document.querySelector('.theme-btn');

if (themeBtn) {
    themeBtn.addEventListener('click', () => {
        document.body.classList.toggle('dark');
        themeBtn.textContent = document.body.classList.contains('dark') ? '☀️' : '🌙';
    });
}

function startJourney() {
    const section = document.getElementById('journey');
    if (section) {
        section.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }

    const giftBox = document.querySelector('.gift-box');
    if (giftBox) {
        giftBox.classList.remove('pulse');
        void giftBox.offsetWidth;
        giftBox.classList.add('pulse');
    }
}

function showMessage() {
    const message = 'Ticket punched! You are my favorite person, my safest route, and my happiest destination. Happy Birthday to the person who drives straight into my heart. I love you ❤️🚌';
    const wishMessage = document.getElementById('wish-message');

    if (wishMessage) {
        wishMessage.textContent = message;
    }
}
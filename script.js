const themeBtn = document.querySelector('.theme-btn');
const languageButtons = document.querySelectorAll('.language-btn');
let currentLanguage = 'en';

const translations = {
    en: {
        navHome: 'Home',
        navJourney: 'Our Journey',
        navMemories: 'Memories',
        navTreats: 'Sweet',
        navLetter: 'Love Letter',
        navSurprise: 'Surprise',
        openingKicker: 'A LITTLE BIRTHDAY SURPRISE',
        openingTitle: 'For my wonderful Krunal',
        openingMessage: 'Getting your surprise ready...',
        promptTitle: 'Play a love song?',
        promptMessage: 'Would you like to play a Gujarati love song while you explore this birthday surprise?',
        promptYes: '♫ Yes, play music',
        promptNo: 'Maybe later',
        playerStatus: 'NOW PLAYING',
        playerSongTitle: 'Your song',
        playerNote: 'A love song for Krunal',
        eyebrow: 'A birthday route made for Krunal',
        heroTitle: 'Happy Birthday <span>Krunal</span><span class="hero-emoji">🧿</span> 🎉',
        heroSubtitle: 'Your kindness makes every road brighter. Today, this whole route is yours. 🚌',
        startRoute: '🚌 Start Birthday Route',
        readLetter: "Read Your Bebu's Letter",
        busLabel: 'Birthday Route',
        bestDriverTitle: 'Best driver ever',
        bestDriverText: 'You handle every route with patience, care, and a smile that makes every passenger happy.',
        journeyTitle: 'Our Journey',
        favoriteRouteTitle: 'My favorite route',
        favoriteRouteText: 'No matter where the bus goes, my favorite destination will always be wherever you are.',
        passengerTitle: 'Passenger for life',
        passengerText: 'I will happily sit beside you through every stop, every turn, and every adventure ahead.',
        memoriesTitle: 'Memories',
        memoryOne: 'Your uniform, your smile, and your kind heart 🚌',
        memoryTwo: 'Every bus stop becomes special when I see you 🌙',
        memoryThree: 'The way you make every journey feel safe 💖',
        memoryFour: 'My favorite seat is always beside you 🫶',
        memoryFooter: 'My favorite route is always with you',
        treatsTitle: 'Sweet Treats',
        treatsSubtitle: 'Because my sweetheart deserves chocolates 🍫',
        milkChocolateTitle: 'Milk Chocolate',
        milkChocolateText: 'For every sweet smile you give me.',
        birthdayBoxTitle: 'Birthday Box',
        birthdayBoxText: 'A special box for my special sweet person.',
        sweetBitesTitle: 'Sweet Bites',
        sweetBitesText: 'Little treats for my favorite person.',
        letterTitle: 'Love Letter',
        letterSubtitle: 'To my favorite sweetheart',
        letterParagraphOne: 'Happy Birthday to the coolest sweetheart. Today we are celebrating your passion, your hard work, your kind heart, and the way you make every journey feel special.',
        letterParagraphTwo: 'I hope this year brings you smooth roads, green signals, peaceful shifts, warm memories, and all the happiness you deserve. May every wish of yours come true and every route lead you closer to your dreams.',
        letterParagraphThree: 'You are my favorite sweetheart, my safe place, and my forever travel partner. I am so proud of you, and I will always be your most loyal passenger on this beautiful journey called life.',
        letterSignoff: 'Your forever passenger, always 🚌',
        surpriseTitle: 'Next stop: Birthday Surprise ✨',
        surpriseText: 'Show your special birthday ticket to reveal a message from your favorite passenger.',
        ticketButton: 'Punch My Birthday Ticket',
        footer: 'Made with all my love ❤️',
        ticketMessage: 'Ticket punched! You are my favorite person, my safest route, and my happiest destination. Happy Birthday to the person who drives straight into my heart. I love you ❤️🚌'
    },
    gu: {
        navHome: 'ઘર',
        navJourney: 'આપણી સફર',
        navMemories: 'યાદો',
        navTreats: 'મીઠાઈ',
        navLetter: 'પ્રેમપત્ર',
        navSurprise: 'સરપ્રાઇઝ',
        openingKicker: 'જન્મદિવસનું એક નાનકડું સરપ્રાઇઝ',
        openingTitle: 'મારા વહાલા કૃણાલ માટે',
        openingMessage: 'તારું સરપ્રાઇઝ તૈયાર થઈ રહ્યું છે...',
        promptTitle: 'પ્રેમ ગીત વગાડવું છે?',
        promptMessage: 'આ જન્મદિવસનું સરપ્રાઇઝ જોતી વખતે ગુજરાતી પ્રેમ ગીત સાંભળવું છે?',
        promptYes: '♫ હા, ગીત વગાડો',
        promptNo: 'હમણાં નહીં',
        playerStatus: 'હાલમાં વાગી રહ્યું છે',
        playerSongTitle: 'તમારું ગીત',
        playerNote: 'કૃણાલ માટે એક પ્રેમ ગીત',
        eyebrow: 'કૃણાલ માટે ખાસ જન્મદિવસની સફર',
        heroTitle: 'જન્મદિવસની શુભેચ્છાઓ <span>કૃણાલ</span><span class="hero-emoji">🧿</span> 🎉',
        heroSubtitle: 'તારી દયાથી દરેક રસ્તો સુંદર બને છે. આજે આ આખી સફર તારી છે. 🚌',
        startRoute: '🚌 જન્મદિવસની સફર શરૂ કરો',
        readLetter: 'તમારા બેબુનો પત્ર વાંચો',
        busLabel: 'જન્મદિવસની સફર',
        bestDriverTitle: 'સૌથી સારા ડ્રાઇવર',
        bestDriverText: 'તમે ધીરજ, કાળજી અને સુંદર સ્મિત સાથે દરેક રસ્તે બસ ચલાવો છો અને દરેક મુસાફરને ખુશ કરો છો.',
        journeyTitle: 'આપણી સફર',
        favoriteRouteTitle: 'મારી મનપસંદ સફર',
        favoriteRouteText: 'બસ ગમે ત્યાં જાય, મારી મનપસંદ મંઝિલ હંમેશાં તારી સાથે જ છે.',
        passengerTitle: 'જીવનભરનો સાથી મુસાફર',
        passengerText: 'દરેક સ્ટોપ, દરેક વળાંક અને આવનારા દરેક સાહસમાં હું ખુશીથી તારી બાજુમાં બેસીશ.',
        memoriesTitle: 'યાદો',
        memoryOne: 'તારો યુનિફોર્મ, તારું સ્મિત અને તારું દયાળુ દિલ 🚌',
        memoryTwo: 'તને જોઉં ત્યારે દરેક બસ સ્ટોપ ખાસ બની જાય છે 🌙',
        memoryThree: 'તારી સાથે દરેક સફર સુરક્ષિત લાગે છે 💖',
        memoryFour: 'મારી મનપસંદ બેઠક હંમેશાં તારી બાજુમાં છે 🫶',
        memoryFooter: 'મારી મનપસંદ સફર હંમેશાં તારી સાથે છે',
        treatsTitle: 'મીઠી ભેટો',
        treatsSubtitle: 'મારા વહાલાને ચોકલેટ તો મળવી જ જોઈએ 🍫',
        milkChocolateTitle: 'મિલ્ક ચોકલેટ',
        milkChocolateText: 'તારા દરેક મીઠા સ્મિત માટે.',
        birthdayBoxTitle: 'જન્મદિવસની ભેટ',
        birthdayBoxText: 'મારા ખાસ વહાલા માટે એક ખાસ ભેટ.',
        sweetBitesTitle: 'મીઠી વાનગીઓ',
        sweetBitesText: 'મારા મનપસંદ વ્યક્તિ માટે નાની નાની મીઠી ભેટો.',
        letterTitle: 'પ્રેમપત્ર',
        letterSubtitle: 'મારા સૌથી વહાલા માટે',
        letterParagraphOne: 'મારા સૌથી સરસ વહાલાને જન્મદિવસની ખૂબ ખૂબ શુભેચ્છાઓ. આજે આપણે તારા ઉત્સાહ, તારી મહેનત, તારા દયાળુ દિલ અને દરેક સફરને ખાસ બનાવવાની તારી આવડતની ઉજવણી કરીએ છીએ.',
        letterParagraphTwo: 'આવતું વર્ષ તારા માટે સરળ રસ્તા, લીલી સિગ્નલો, શાંતિભરી ડ્યૂટી, સુંદર યાદો અને તને લાયક બધી ખુશીઓ લઈને આવે. તારી દરેક ઇચ્છા પૂરી થાય અને દરેક રસ્તો તને તારા સપનાઓની નજીક લઈ જાય.',
        letterParagraphThree: 'તું મારો સૌથી વહાલો છે, મારી સુરક્ષિત જગ્યા છે અને જીવનની સફરનો મારો કાયમી સાથી છે. મને તારા પર ખૂબ ગર્વ છે. જીવનની આ સુંદર સફરમાં હું હંમેશાં તારો સૌથી વફાદાર મુસાફર રહીશ.',
        letterSignoff: 'હંમેશાં તારો, જીવનભરનો મુસાફર 🚌',
        surpriseTitle: 'આગળનું સ્ટોપ: જન્મદિવસનું સરપ્રાઇઝ ✨',
        surpriseText: 'તારા મનપસંદ મુસાફરનો સંદેશ વાંચવા માટે તારી ખાસ જન્મદિવસની ટિકિટ બતાવ.',
        ticketButton: 'મારી જન્મદિવસની ટિકિટ પંચ કરો',
        footer: 'મારા પૂરા પ્રેમ સાથે ❤️',
        ticketMessage: 'ટિકિટ પંચ થઈ ગઈ! તું મારી મનપસંદ વ્યક્તિ, મારી સૌથી સુરક્ષિત સફર અને મારી સૌથી ખુશીની મંઝિલ છે. મારા દિલ સુધી સીધા પહોંચનારને જન્મદિવસની ખૂબ ખૂબ શુભેચ્છાઓ. હું તને ખૂબ પ્રેમ કરું છું ❤️🚌'
    }
};

languageButtons.forEach((languageButton) => {
    languageButton.addEventListener('click', () => {
        currentLanguage = currentLanguage === 'en' ? 'gu' : 'en';
        document.documentElement.lang = currentLanguage;

        document.querySelectorAll('[data-i18n]').forEach((element) => {
            const key = element.dataset.i18n;
            element.innerHTML = translations[currentLanguage][key];
        });

        languageButtons.forEach((button) => {
            button.textContent = currentLanguage === 'en' ? 'T' : 'E';
            button.setAttribute('aria-label', currentLanguage === 'en' ? 'Translate page to Gujarati' : 'Translate page to English');
            button.setAttribute('aria-pressed', String(currentLanguage === 'gu'));
        });
        document.title = currentLanguage === 'en' ? 'Happy Birthday Krunal 🚌' : 'જન્મદિવસની શુભેચ્છાઓ, કૃણાલ 🚌';
    });
});

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

    const birthdayScene = document.querySelector('.birthday-scene');
    if (birthdayScene) {
        birthdayScene.classList.remove('pulse');
        void birthdayScene.offsetWidth;
        birthdayScene.classList.add('pulse');
    }
}

function showMessage() {
    const wishMessage = document.getElementById('wish-message');

    if (wishMessage) {
        wishMessage.textContent = translations[currentLanguage].ticketMessage;
    }
}

const openingScreen = document.getElementById('openingScreen');
const openingSpinner = document.querySelector('.opening-spinner');
const musicPrompt = document.getElementById('musicPrompt');
const floatingMusic = document.getElementById('floatingMusic');
const birthdaySong = document.getElementById('birthdaySong');
const replayMusicButton = document.getElementById('replayMusicButton');

function showMusicPrompt() {
    if (musicPrompt.hidden === false) {
        return;
    }

    openingScreen.hidden = true;
    musicPrompt.hidden = false;
    document.body.classList.add('music-prompt-open');
    document.getElementById('playMusicButton').focus();
}

openingSpinner.addEventListener('animationend', showMusicPrompt, { once: true });
window.setTimeout(showMusicPrompt, 3200);

function enterBirthdayPage(playMusic) {
    musicPrompt.hidden = true;
    document.body.classList.remove('music-prompt-open');
    document.body.classList.add('site-open');

    if (playMusic) {
        playBirthdaySong();
    }
}

function playBirthdaySong() {
    floatingMusic.hidden = false;
    birthdaySong.currentTime = 0;
    birthdaySong.play();
}

document.getElementById('playMusicButton').addEventListener('click', () => enterBirthdayPage(true));
document.getElementById('skipMusicButton').addEventListener('click', () => enterBirthdayPage(false));
replayMusicButton.addEventListener('click', playBirthdaySong);
document.getElementById('closeMusicButton').addEventListener('click', () => {
    birthdaySong.pause();
    birthdaySong.currentTime = 0;
    floatingMusic.hidden = true;
});
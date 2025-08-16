// Zodiac data
const zodiacData = [
    {
        id: 1,
        arabic_name: "حمل",
        arabic_transliteration: "Haml",
        english_name: "Aries",
        symbol: "♈",
        quality: "Forbearance and Patience",
        description: "Those influenced by this star sign are attributed with forbearance, patience and tolerance. They fulfill the obligations and rights of others.",
        spiritual_example: "Imam Muʿizz AS demonstrated this when he patiently heard and responded to each person's questions without showing any sign of being vexed, treating each interaction as if it was for their benefit.",
        parenting_advice: "Parents should exercise forbearance and restraint, patiently hearing children's questions without being annoyed or resorting to harsh discipline.",
        karbala_connection: "Imam Husain AS refusing to attack the Kufans when their numbers were small, saying 'They are my revered grandfather's ummah! How can I begin a battle with them?'"
    },
    {
        id: 2,
        arabic_name: "ثور",
        arabic_transliteration: "Thawr",
        english_name: "Taurus",
        symbol: "♉",
        quality: "Hard Work and Dedication",
        description: "People influenced by it tend to be hardworking and dedicated to their tasks. The stars take the form of a sitting ox.",
        spiritual_example: "Syedna Abdeali Saifuddin RA instilled hard work in students of Darse Saifee by ensuring they undertook menial tasks like gathering firewood and winnowing wheat.",
        parenting_advice: "Children should be encouraged to work hard instead of spending time on their phones. They should learn vital life skills and become independent.",
        karbala_connection: "Imam carried every slain companion back to the camp borne upon his own two shoulders, working tirelessly whether the action was large or small."
    },
    {
        id: 3,
        arabic_name: "جوزاء",
        arabic_transliteration: "Jawzaa",
        english_name: "Gemini",
        symbol: "♊",
        quality: "Multifaceted Nature",
        description: "Its stars form the outline of a man and woman. Those influenced by this constellation are multifaceted individuals with diverse traits, possessing both a trait and its opposite as dictated by situations.",
        spiritual_example: "Imam Hasan AS demonstrated this when he was strict over a small amount of money to prevent wrongdoing, but generous when someone genuinely sought his help.",
        parenting_advice: "Parents should know when to be firm and when to be gentle with their children, depending on what each situation requires.",
        karbala_connection: "Despite being covered in wounds, Imam Husain AS with his scything gaze caused those coming to slay him to turn and run in fear."
    },
    {
        id: 4,
        arabic_name: "سرطان",
        arabic_transliteration: "Sarataan",
        english_name: "Cancer",
        symbol: "♋",
        quality: "Loyalty",
        description: "Those born under this influence are loyal in their undertakings. Loyalty entails staying true to one's word, standing by loved ones, and protecting them from harm.",
        spiritual_example: "Imam Husain's AS childhood pledge to Rasul Allah SAW to repay a debt, which he fulfilled by going to Karbala and seeking shahadat.",
        parenting_advice: "Instill loyalty in children towards their transactions, jamaat, friends, families, countries, and most importantly towards Wali Allah AS.",
        karbala_connection: "Maulana Abbas AS reached the Furat River, took not a drop for himself, and gave both his arms trying to bring back the water skin to camp."
    },
    {
        id: 5,
        arabic_name: "أسد",
        arabic_transliteration: "Asad",
        english_name: "Leo",
        symbol: "♌",
        quality: "Confidence and Bravery",
        description: "Named after a lion, those born under its influence are graced with confidence. The height of bravery is seen in overcoming one's nafs (evil-inciting soul).",
        spiritual_example: "Amirul Mumineen AS spared his opponent who spat on his face because killing him then would have been out of anger rather than for Allah.",
        parenting_advice: "Teach children to struggle against negative impulses, always overcoming anger and negative character traits to ensure pure intentions.",
        karbala_connection: "Imam Husain AS chose whom to cut down and whom to let be in battle, demonstrating true courage and control even in the heat of combat."
    },
    {
        id: 6,
        arabic_name: "سنبلة",
        arabic_transliteration: "Sunbula",
        english_name: "Virgo",
        symbol: "♍",
        quality: "Practicality and Prosperity",
        description: "Imparts practicality and analytical ability. Takes the form of a maiden carrying harvested wheat, signifying prosperity. True prosperity lies in recognizing Allah's blessings.",
        spiritual_example: "The height of prosperity is shedding tears in remembrance of Imam Husain AS even during times of happiness, recognizing him as the source of our prosperity.",
        parenting_advice: "Parents should be most proud when their children attend majalis of Imam Husain AS and weep in his remembrance.",
        karbala_connection: "Holding a wedding ceremony amidst the pain and torment of Aashura, showing prosperity even in the darkest moments."
    },
    {
        id: 7,
        arabic_name: "ميزان",
        arabic_transliteration: "Meezan",
        english_name: "Libra",
        symbol: "♎",
        quality: "Justice and Fairness",
        description: "Takes the shape of a scale, symbolizing fairness and justice. True fairness means giving precedence to others even when one is also deserving.",
        spiritual_example: "Syedi Shaikh Adam QR gave precedence to his own student, recognizing his worth above personal claim.",
        parenting_advice: "Nurture gratitude in children so they appreciate Allah's blessings rather than envying others, fostering inner peace.",
        karbala_connection: "Imam Husain AS forgave Hurr AS and gave him permission to be the first to go into battle, to become the first of the shuhadaa."
    },
    {
        id: 8,
        arabic_name: "عقرب",
        arabic_transliteration: "ʿAqrab",
        english_name: "Scorpio",
        symbol: "♏",
        quality: "Strategic Planning",
        description: "Symbolizes strategic foresight and precision in planning. True planning accounts for every detail, anticipates obstacles, and adapts when needed.",
        spiritual_example: "Imam Muʿizz AS's persistent planning for conquering Faas, demonstrating that true planning rests on tawakkul (trust in Allah).",
        parenting_advice: "Students should plan for exams well in advance, and those memorizing Quran should follow structured routines. Planning for ʿAshara is equally essential.",
        karbala_connection: "Instruction given to the haram to wear double clothing, yet knowing even that wouldn't be sufficient, entrusting their care to Imam Ali Zain al-Abideen AS."
    },
    {
        id: 9,
        arabic_name: "قوس",
        arabic_transliteration: "Qaws",
        english_name: "Sagittarius",
        symbol: "♐",
        quality: "Focus and Precision",
        description: "Named after the archer, depicted as a centaur drawing a bow. Requires intense focus and the ability to direct all attention toward a single aim.",
        spiritual_example: "Syedi Dawood bhaisaheb QR, an accomplished archer, would miss his target in the presence of the Dai because his true focus was maintaining sanctity and humility.",
        parenting_advice: "Cultivate focus in children through namaz, which demands physical and spiritual orientation toward the qibla, disciplining minds and hearts.",
        karbala_connection: "As Shimr drew his blade upon Imam Husain's AS throat, Imam AS remained focused on completing his final sajda."
    },
    {
        id: 10,
        arabic_name: "جدي",
        arabic_transliteration: "Jady",
        english_name: "Capricorn",
        symbol: "♑",
        quality: "Reconciliation",
        description: "Represents reconciliation and sensitivity. Those born under this sign are caring and prone to reconciliation based on empathy.",
        spiritual_example: "Imam Ali Zain al-Abideen AS's response to insults: 'If what you say about me is true, may Allah forgive me. If it is not, may Allah forgive you.'",
        parenting_advice: "Parents should refrain from quarrelling, especially in front of children, as they are deeply sensitive to such conflicts.",
        karbala_connection: "An Imam whose entire cohort had been slain was still ready to give the enemy the waters of paradise for one sip of water for his six-month-old son."
    },
    {
        id: 11,
        arabic_name: "دلو",
        arabic_transliteration: "Dalw",
        english_name: "Aquarius",
        symbol: "♒",
        quality: "Mercy and Influence",
        description: "Resembles a person pouring water from a bucket. Those possessing these qualities are merciful, helpful, and able to positively influence others.",
        spiritual_example: "Imam Husain AS influenced a man destined to have no children to be blessed with seven children through his blessed presence.",
        parenting_advice: "Parents should positively influence their children, shielding them from harm and using Lisan al-Dawat as a potent tool.",
        karbala_connection: "Imam Husain AS was the beneficence of the water drawer, whose mercy encompasses all those who weep upon him."
    },
    {
        id: 12,
        arabic_name: "حوت",
        arabic_transliteration: "Hoot",
        english_name: "Pisces",
        symbol: "♓",
        quality: "Perceptiveness and Confidentiality",
        description: "Described as a large fish that swims effortlessly without sound. Those influenced by this sign are perceptive and keep secrets well.",
        spiritual_example: "Imam al-Muʿizz AS kept the confidential matters of Imam al-Mansoor AS so well that he would say it's as if he never knew them.",
        parenting_advice: "Foster confidentiality in children by not openly discussing others' shortcomings at home, teaching them to practice discretion.",
        karbala_connection: "The intelligent understanding and perceptiveness in knowing it was time to hide the wracking pain of countless wounds while maintaining strength."
    }
];

// DOM Elements
let mainPage, signDetail, zodiacCards, backBtn;
let detailSymbol, detailArabic, detailTransliteration, detailEnglish;
let detailQuality, detailDescription, detailExample, detailParenting, detailKarbala;

// Current state
let currentView = 'main'; // 'main' or 'detail'

// Initialize the application
document.addEventListener('DOMContentLoaded', function() {
    console.log('DOM loaded, initializing application...');
    // Add a small delay to ensure all elements are fully rendered
    setTimeout(() => {
        initializeDOMElements();
        initializeEventListeners();
        setupAccessibility();
        addAnimations();
    }, 100);
});

function initializeDOMElements() {
    console.log('Initializing DOM elements...');
    
    // Main elements
    mainPage = document.getElementById('main-page');
    signDetail = document.getElementById('sign-detail');
    zodiacCards = document.querySelectorAll('.zodiac-card');
    backBtn = document.querySelector('.back-btn');

    // Detail view elements
    detailSymbol = document.getElementById('detail-symbol');
    detailArabic = document.getElementById('detail-arabic');
    detailTransliteration = document.getElementById('detail-transliteration');
    detailEnglish = document.getElementById('detail-english');
    detailQuality = document.getElementById('detail-quality');
    detailDescription = document.getElementById('detail-description');
    detailExample = document.getElementById('detail-example');
    detailParenting = document.getElementById('detail-parenting');
    detailKarbala = document.getElementById('detail-karbala');

    console.log('DOM elements found:', {
        mainPage: !!mainPage,
        signDetail: !!signDetail,
        zodiacCardsCount: zodiacCards.length,
        backBtn: !!backBtn,
        detailElements: {
            symbol: !!detailSymbol,
            arabic: !!detailArabic,
            transliteration: !!detailTransliteration,
            english: !!detailEnglish,
            quality: !!detailQuality,
            description: !!detailDescription,
            example: !!detailExample,
            parenting: !!detailParenting,
            karbala: !!detailKarbala
        }
    });

    // Verify essential elements exist
    if (!mainPage || !signDetail) {
        console.error('Essential DOM elements not found');
        return false;
    }
    
    console.log('DOM elements initialized successfully');
    return true;
}

function initializeEventListeners() {
    console.log('Setting up event listeners...');
    
    // Zodiac card clicks
    zodiacCards.forEach((card, index) => {
        // Remove any existing event listeners first
        const newCard = card.cloneNode(true);
        card.parentNode.replaceChild(newCard, card);
        
        // Add click event listener
        newCard.addEventListener('click', function(e) {
            e.preventDefault();
            e.stopPropagation();
            console.log(`Zodiac card ${index} clicked`);
            showSignDetail(index);
        });
        
        // Keyboard navigation for cards
        newCard.addEventListener('keydown', function(e) {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                console.log(`Zodiac card ${index} activated via keyboard`);
                showSignDetail(index);
            }
        });
    });

    // Update the zodiacCards NodeList after replacing elements
    zodiacCards = document.querySelectorAll('.zodiac-card');

    // Back button - Multiple approaches for maximum compatibility
    if (backBtn) {
        console.log('Setting up back button event listener');
        
        // Remove any existing event listeners by cloning
        const newBackBtn = backBtn.cloneNode(true);
        backBtn.parentNode.replaceChild(newBackBtn, backBtn);
        backBtn = newBackBtn;
        
        // Add event listeners to the new button
        backBtn.addEventListener('click', handleBackButtonClick);
        backBtn.addEventListener('mousedown', handleBackButtonClick);
        backBtn.addEventListener('keydown', function(e) {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                handleBackButtonClick(e);
            }
        });
        
        console.log('Back button event listeners attached');
    } else {
        console.error('Back button not found!');
    }

    // Global keyboard navigation
    document.addEventListener('keydown', function(e) {
        if (currentView === 'detail' && e.key === 'Escape') {
            e.preventDefault();
            console.log('Escape key pressed, returning to main page');
            showMainPage();
        }
    });

    console.log('Event listeners set up successfully');
}

function handleBackButtonClick(e) {
    e.preventDefault();
    e.stopPropagation();
    console.log('Back button triggered, showing main page');
    showMainPage();
    return false;
}

function setupAccessibility() {
    // Make zodiac cards focusable and add ARIA labels
    zodiacCards.forEach((card, index) => {
        card.setAttribute('tabindex', '0');
        card.setAttribute('role', 'button');
        
        const englishName = card.querySelector('.english-name').textContent;
        const quality = card.querySelector('.quality').textContent;
        card.setAttribute('aria-label', `View details for ${englishName} - ${quality}`);
    });

    // Create live region for screen reader announcements
    if (!document.getElementById('live-region')) {
        const liveRegion = document.createElement('div');
        liveRegion.id = 'live-region';
        liveRegion.setAttribute('aria-live', 'polite');
        liveRegion.setAttribute('aria-atomic', 'true');
        liveRegion.className = 'sr-only';
        document.body.appendChild(liveRegion);
    }
}

function showSignDetail(index) {
    if (index < 0 || index >= zodiacData.length) {
        console.error('Invalid sign index:', index);
        return;
    }
    
    const sign = zodiacData[index];
    currentView = 'detail';
    
    console.log(`Showing detail for: ${sign.english_name}`);
    
    // Populate detail view
    if (detailSymbol) detailSymbol.textContent = sign.symbol;
    if (detailArabic) detailArabic.textContent = sign.arabic_name;
    if (detailTransliteration) detailTransliteration.textContent = sign.arabic_transliteration;
    if (detailEnglish) detailEnglish.textContent = sign.english_name;
    if (detailQuality) detailQuality.textContent = sign.quality;
    if (detailDescription) detailDescription.textContent = sign.description;
    if (detailExample) detailExample.textContent = sign.spiritual_example;
    if (detailParenting) detailParenting.textContent = sign.parenting_advice;
    if (detailKarbala) detailKarbala.textContent = sign.karbala_connection;

    // Hide main page and show detail view
    if (mainPage) {
        mainPage.classList.add('hidden');
        console.log('Main page hidden');
    }
    
    if (signDetail) {
        signDetail.classList.remove('hidden');
        signDetail.style.display = 'block';
        console.log('Detail view shown');
    }
    
    // Scroll to top and focus management
    window.scrollTo({ top: 0, behavior: 'instant' });
    
    // Focus on back button after a short delay
    setTimeout(() => {
        if (backBtn && backBtn.focus) {
            backBtn.focus();
            console.log('Focus set on back button');
        }
    }, 200);

    // Announce to screen readers
    announceViewChange(sign);
}

function showMainPage() {
    currentView = 'main';
    console.log('Returning to main page');
    
    // Hide detail view and show main page
    if (signDetail) {
        signDetail.classList.add('hidden');
        signDetail.style.display = 'none';
        console.log('Detail view hidden');
    }
    
    if (mainPage) {
        mainPage.classList.remove('hidden');
        mainPage.style.display = 'block';
        console.log('Main page shown');
    }

    // Scroll to top immediately
    window.scrollTo({ top: 0, behavior: 'instant' });
    console.log('Scrolled to top of main page');

    // Announce to screen readers
    const liveRegion = document.getElementById('live-region');
    if (liveRegion) {
        liveRegion.textContent = 'Returned to main page showing all zodiac signs';
    }
}

function announceViewChange(sign) {
    const liveRegion = document.getElementById('live-region');
    if (liveRegion && sign) {
        const announcement = `Now viewing ${sign.english_name}, ${sign.arabic_transliteration}. Spiritual quality: ${sign.quality}`;
        liveRegion.textContent = announcement;
    }
}

function addAnimations() {
    // Intersection Observer for staggered card animations
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                setTimeout(() => {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }, index * 100);
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    });

    // Initially hide cards for animation
    zodiacCards.forEach((card) => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        card.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
        observer.observe(card);
    });
}

// Utility functions
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Handle window resize for responsive behavior
window.addEventListener('resize', debounce(() => {
    // Ensure proper layout after resize
    if (currentView === 'detail') {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }
}, 250));

// Export for potential testing or debugging
window.FalakAlBuruj = {
    showSignDetail,
    showMainPage,
    zodiacData,
    currentView: () => currentView
};
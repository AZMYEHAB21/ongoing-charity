// Data for Surahs (Sample Content)
const quranData = {
    fatiha: `بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ (1)
الْحَمْدُ لِلَّهِ رَبِّ الْعَالَمِينَ (2) الرَّحْمَٰنِ الرَّحِيمِ (3) مَالِكِ يَوْمِ الدِّينِ (4) إِيَّاكَ نَعْبُدُ وَإِيَّاكَ نَسْتَعِينُ (5) اهْدِنَا الصِّرَاطَ الْمُسْتَقِيمَ (6) صِرَاطَ الَّذِينَ أَنْعَمْتَ عَلَيْهِمْ غَيْرِ الْمَغْضُوبِ عَلَيْهِمْ وَلَا الضَّالِّينَ (7)`,

    yasin: `يس (1) وَالْقُرْآنِ الْحَكِيمِ (2) إِنَّكَ لَمِنَ الْمُرْسَلِينَ (3) عَلَىٰ صِرَاطٍ مُّسْتَقِيمٍ (4) تَنزِيلَ الْعَزِيزِ الرَّحِيمِ (5) لِتُنذِرَ قَوْمًا مَّا أُنذِرَ آبَاؤُهُمْ فَهُمْ غَافِلُونَ (6)... (تكملة السورة)`,

    mulk: `تَبَارَكَ الَّذِي بِيَدِهِ الْمُلْكُ وَهُوَ عَلَىٰ كُلِّ شَيْءٍ قَدِيرٌ (1) الَّذِي خَلَقَ الْمَوْتَ وَالْحَيَاةَ لِيَبْلُوَكُمْ أَيُّكُمْ أَحْسَنُ عَمَلًا ۚ وَهُوَ الْعَزِيزُ الْغَفُورُ (2)... (تكملة السورة)`,

    kahf: `الْحَمْدُ لِلَّهِ الَّذِي أَنزَلَ عَلَىٰ عَبْدِهِ الْكِتَابَ وَلَمْ يَجْعَل لَّهُ عِوَجًا ۜ (1) قَيِّمًا لِّيُنذِرَ بَأْسًا شَدِيدًا مِّن لَّدُنْهُ... (تكملة السورة)`,

    rahman: `الرَّحْمَٰنُ (1) عَلَّمَ الْقُرْآنَ (2) خَلَقَ الْإِنسَانَ (3) عَلَّمَهُ الْبَيَانَ (4)...`
};

// Audio Mapping (Mishary Alafasy)
const audioUrls = {
    fatiha: "https://server8.mp3quran.net/afs/001.mp3",
    yasin: "https://server8.mp3quran.net/afs/036.mp3",
    mulk: "https://server8.mp3quran.net/afs/067.mp3",
    kahf: "https://server8.mp3quran.net/afs/018.mp3",
    rahman: "https://server8.mp3quran.net/afs/055.mp3"
};

// DOM Elements
const surahSelect = document.getElementById('surah-select');
const readBtn = document.getElementById('read-btn');
const quranDisplay = document.getElementById('quran-display');
const surahTitle = document.getElementById('surah-title');
const surahText = document.getElementById('surah-text');
const audioPlayer = document.getElementById('quran-player');

// Quran Reader Logic
readBtn.addEventListener('click', () => {
    const selected = surahSelect.value;
    if (selected && quranData[selected]) {
        // Set Text
        surahTitle.innerText = surahSelect.options[surahSelect.selectedIndex].text;
        surahText.innerText = quranData[selected];

        // Set Audio
        if (audioUrls[selected]) {
            audioPlayer.src = audioUrls[selected];
            audioPlayer.load();
            // Optional: Auto-play
            // audioPlayer.play().catch(e => console.log("Auto-play prevented")); 
        }

        quranDisplay.classList.remove('hidden');
        quranDisplay.scrollIntoView({ behavior: 'smooth' });
    } else {
        alert('الرجاء اختيار سورة');
    }
});

function showNotification(msg) {
    alert(msg); // Can be replaced with a nicer custom toast
}

// Athkar Tabs
const tabBtns = document.querySelectorAll('.tab-btn');
const tabContents = document.querySelectorAll('.tab-content');

tabBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        // Remove active class from all
        tabBtns.forEach(b => b.classList.remove('active'));
        tabContents.forEach(c => c.classList.remove('active'));

        // Add active to current
        btn.classList.add('active');
        document.getElementById(btn.dataset.target).classList.add('active');
    });
});

// Tasbeeh Counter
let count = 0;
const countDisplay = document.getElementById('counter-value');
const countBtn = document.getElementById('count-btn');
const resetBtn = document.getElementById('reset-btn');
const presetBtns = document.querySelectorAll('.preset-btn');

countBtn.addEventListener('click', () => {
    count++;
    countDisplay.innerText = count;

    // Animation effect
    countDisplay.style.transform = "scale(1.2)";
    setTimeout(() => countDisplay.style.transform = "scale(1)", 100);
});

resetBtn.addEventListener('click', () => {
    if (confirm('هل تريد تصفير العداد؟')) {
        count = 0;
        countDisplay.innerText = 0;
    }
});

presetBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        presetBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        countBtn.innerText = btn.dataset.text;
        count = 0;
        countDisplay.innerText = 0;
    });
});

// Dua Slider
const duaCards = document.querySelectorAll('.dua-card');
const prevDuaBtn = document.getElementById('prev-dua');
const nextDuaBtn = document.getElementById('next-dua');
const shareDuaBtn = document.getElementById('share-dua');
let currentDuaIndex = 0;

function showDua(index) {
    duaCards.forEach(card => card.classList.remove('active'));
    duaCards[index].classList.add('active');
}

nextDuaBtn.addEventListener('click', () => {
    currentDuaIndex = (currentDuaIndex + 1) % duaCards.length;
    showDua(currentDuaIndex);
});

prevDuaBtn.addEventListener('click', () => {
    currentDuaIndex = (currentDuaIndex - 1 + duaCards.length) % duaCards.length;
    showDua(currentDuaIndex);
});

shareDuaBtn.addEventListener('click', () => {
    const text = duaCards[currentDuaIndex].innerText;
    if (navigator.share) {
        navigator.share({
            title: 'دعاء للمتوفى',
            text: text,
            url: window.location.href
        });
    } else {
        navigator.clipboard.writeText(text);
        alert('تم نسخ الدعاء إلى الحافظة');
    }
});

// Mobile Navbar Toggle
const mobileToggle = document.querySelector('.mobile-toggle');
const navLinks = document.querySelector('.nav-links');

mobileToggle.addEventListener('click', () => {
    navLinks.classList.toggle('mobile-active');
});

// Scroll Progress Bar
window.addEventListener('scroll', () => {
    const wintop = document.documentElement.scrollTop;
    const docheight = document.documentElement.scrollHeight;
    const winheight = document.documentElement.clientHeight;
    const scrolled = (wintop / (docheight - winheight)) * 100;
    document.getElementById('scroll-progress').style.width = scrolled + '%';
});
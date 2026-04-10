console.log('%cWang Mengyao - Personal Homepage', 'background-color: #6c63ff; color: white; font-size: 18px; font-weight: bold; padding: 8px 16px; border-radius: 4px;');

document.addEventListener('contextmenu', function(event) {
  event.preventDefault();
});

/* ===== i18n Translation System ===== */
var currentLang = 'zh'; // default Chinese

var translations = {
    en: {
        // Left sidebar
        location: "Qinhuangdao, China",
        school_short: "Northeastern University (QHD)",
        tag_cs: "Computer Science",
        tag_rank: "Rank 4/196",
        tag_postgrad: "Postgrad Candidate",
        future: "Future",
        future_plan: "Pursuing Master's / Ph.D.",
        edu_time: "2023.09 – Present",
        edu_school: "NEU · Computer Science & Technology",

        // Header
        welcome: 'Hello, I\'m <span class="gradientText">Mengyao Wang</span>',
        desc1: '🎓 Northeastern University · <span class="purpleText">Computer Science & Technology</span>',
        desc2: '📚 Rank <span class="purpleText textBackground">4/196</span>, GPA <span class="purpleText textBackground">4.2/5</span>, Actively exploring research directions',

        // Tab buttons
        tab_edu: "Education",
        tab_research: "Research",
        tab_awards: "Awards",

        // Tab 1 - Education
        title_edu: "Education",
        school_name: "Northeastern University (Qinhuangdao Campus)",
        edu_detail: '<span class="highlight-text">2023.09 – Present</span> &nbsp;|&nbsp; Computer Science & Technology (B.S.)',
        gpa: "<strong>GPA:</strong> 4.2 / 5",
        rank: "<strong>Major Ranking:</strong> 4 / 196",
        postgrad: "<strong>Postgrad:</strong> Qualified for recommendation-based admission",
        about_me: "About Me",
        about_text: "I am Mengyao Wang, majoring in Computer Science & Technology at Northeastern University (Qinhuangdao). I actively participated in research projects and academic competitions, winning the National Scholarship and multiple provincial/national awards. I also serve as Vice Director of the Alumni Service Center, demonstrating strong organizational skills. Passionate about AI and Computer Vision.",

        // Skills
        title_skills: "Skills",
        skill_lang: "Programming",
        skill_dl: "Deep Learning",
        skill_tools: "Tools & Platforms",
        english_level: "English Proficiency",
        cet6: "CET-6 Passed",
        cet4: "CET-4 Passed",

        // Tab 2 - Research
        title_research: "Research Projects",
        proj1_title: "NIPT Timing & Fetal Anomaly Detection",
        proj1_time: "<strong>Duration:</strong> Sep 2025",
        proj1_bg: "<strong>Background:</strong> Built a fetal Y-chromosome concentration dynamic model based on real NIPT data from high-BMI pregnant women, to develop personalized testing time plans for different BMI groups",
        proj1_contrib: "<strong>Key Contributions:</strong><ul><li>Built a GAM-based dynamic prediction model to quantify BMI's impact on concentration changes</li><li>Developed personalized stratified testing plans, dividing high-BMI population into 5 risk intervals</li><li>Validated and optimized strategy robustness, eliminating random error interference</li></ul>",

        proj2_title: "Web-Supervised Fine-Grained Image Recognition",
        proj2_time: "<strong>Duration:</strong> Sep 2025 – Nov 2025",
        proj2_bg: "<strong>Background:</strong> Dataset sourced from WebFG-400 and WebINat-5000, facing triple challenges of label noise, class imbalance, and small inter-class differences",
        proj2_contrib: "<strong>Key Contributions:</strong><ul><li>Model Selection: Compared ResNet, ViT, and Swin Transformer; validated Swin-Base-384 as optimal</li><li>Web-400 Training: Used AugMix + JSD Loss against noise; LA & CB Loss for long-tail distribution; EMA for weight stabilization</li><li>Results: WebFG-400 Top-1 80.82%, WebINat-5000 58.70%, Mean 69.76%</li><li>Won National 3rd Prize at 2025 AIC Global Campus AI Algorithm Elite Competition</li></ul>",

        // Competitions
        title_competitions: "Competitions",
        comp1_name: "China Innovation Methods Competition",
        comp1_award: "Provincial 1st Prize | Jul 2024",
        comp2_name: '"Challenge Cup" Academic Science Competition',
        comp2_award: "Provincial 1st Prize | Jul 2025",
        comp3_name: "National Math Modeling Competition",
        comp3_award: "Provincial 2nd Prize | Sep 2025",
        comp4_name: "Global Campus AI Algorithm Elite Competition",
        comp4_award: "National 3rd Prize | Dec 2025",

        // Tab 3 - Awards
        title_honors: "Honors & Awards",
        scholarships: "Scholarships",
        award_national: '🏆 <strong>National Scholarship</strong> (2023-2024)',
        award_second: "🎓 University 2nd-Class Scholarship (2023-2024 Fall)",
        award_innovation: "💡 Innovation & Entrepreneurship Scholarship (2024)",
        honors_title: "Honors",
        honor1: '⭐ University "Merit Student" (2023-2024)',
        honor2: "🌟 Outstanding League Cadre Model (2024)",
        honor3: '👥 Summer Social Practice "Advanced Team" Member',
        honor4: '✨ Social Practice "Outstanding Individual"',
        cert_gallery: "Certificate Gallery",
        cert_national: "National Scholarship",
        cert_second: "2nd-Class Scholarship",
        cert_innovation: "Innovation Scholarship",
        cert_triz: "TRIZ Provincial 1st Prize",
        cert_challenge: "Challenge Cup Provincial 1st",
        cert_merit: "Merit Student",
        cert_cadre: "Outstanding Cadre Model",
        cert_team: "Advanced Team",
        cert_individual: "Outstanding Individual",

        // Student Work
        title_student_work: "Student Leadership",
        work1_title: "Vice Director, Alumni Service Center",
        work1_time: "<strong>Duration:</strong> Sep 2025 – Present",
        work1_duty: "<strong>Responsibilities:</strong><ul><li>Assist the director in organizing departmental operations</li><li>Plan and organize alumni homecoming events</li><li>Promote the alumni mentorship program</li></ul>",
        work2_title: "Secretary Dept. Head, Alumni Service Center",
        work2_time: "<strong>Duration:</strong> Sep 2024 – Jul 2025",
        work2_duty: "<strong>Responsibilities:</strong><ul><li>Managed end-of-semester evaluation for the department</li><li>Arranged and managed daily duty schedules</li><li>Prepared student transcripts</li><li>Participated in alumni lectures and wrote meeting notes</li></ul>",

        // Volunteer
        title_volunteer: "Volunteer Work",
        vol_title: "Social Practice Activities",
        vol1: '<strong>"Go to the Countryside" Social Practice (Jul 2024)</strong><ul><li>Duration: One week</li><li>Activities: Visited villages under the guidance of NEU resident officials for field research</li><li>Achievement: Awarded "Advanced Team" at college level</li></ul>',
        vol2: "<strong>Cloud Teaching</strong> - Provided online teaching support for students in remote areas",
        vol3: "<strong>Career Fairs</strong> - Assisted in organizing campus recruitment events",
        vol4: "<strong>Winter Break Campus Talks</strong> - Returned to high school to share university experience",

        // Footer
        footer: "© 2025 Mengyao Wang &nbsp;&nbsp;|&nbsp;&nbsp; Northeastern University · Computer Science & Technology"
    }
};

// Store original Chinese content
var zhContent = {};

function initI18n() {
    var elements = document.querySelectorAll('[data-i18n]');
    elements.forEach(function(el) {
        var key = el.getAttribute('data-i18n');
        var isHtml = el.getAttribute('data-i18n-html');
        if (isHtml) {
            zhContent[key] = el.innerHTML;
        } else {
            zhContent[key] = el.textContent;
        }
    });
}

function switchLanguage(lang) {
    currentLang = lang;
    var elements = document.querySelectorAll('[data-i18n]');
    elements.forEach(function(el) {
        var key = el.getAttribute('data-i18n');
        var isHtml = el.getAttribute('data-i18n-html');
        var text;
        if (lang === 'en' && translations.en[key]) {
            text = translations.en[key];
        } else {
            text = zhContent[key];
        }
        if (text !== undefined) {
            if (isHtml) {
                el.innerHTML = text;
            } else {
                el.textContent = text;
            }
        }
    });
    // Update page title
    if (lang === 'en') {
        document.title = "Mengyao Wang | NEU · Computer Science";
    } else {
        document.title = "王梦瑶 | 东北大学 · 计算机科学与技术";
    }
    // Save preference
    setCookie("langState", lang, 365);
}


/* ===== Tab switching ===== */
function openTab(tabName) {
    var tabContents = document.getElementsByClassName('tab-content');
    for (var i = 0; i < tabContents.length; i++) {
        tabContents[i].classList.remove('content-active');
    }
    var tabButtons = document.getElementsByClassName('tab-button');
    for (var i = 0; i < tabButtons.length; i++) {
        tabButtons[i].classList.remove('but-active');
    }
    document.getElementById(tabName).classList.add('content-active');
    event.target.classList.add('but-active');
}


/* ===== Utility functions ===== */
function toggleClass(selector, className) {
    var elements = document.querySelectorAll(selector);
    elements.forEach(function (element) {
        element.classList.toggle(className);
    });
}

function PopUp(imageURL) {
    var popupMainElement = document.querySelector(".pop-up-img");
    if (imageURL) {
        popupMainElement.src = imageURL;
    }
    toggleClass(".pop-up-main", "active");
    toggleClass(".pop-up", "active");
    toggleClass(".pop-up-close", "active");
}

function playSound(soundUrl) {
    var audio = new Audio(soundUrl);
    audio.play().catch(function(e) { console.error("Sound error:", e); });
}

function left() {
    toggleClass(".left-main", "left-main-open");
    toggleClass(".left", "left-open");
}

function setCookie(name, value, days) {
    var expires = "";
    if (days) {
        var date = new Date();
        date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
        expires = "; expires=" + date.toUTCString();
    }
    document.cookie = name + "=" + value + expires + "; path=/";
}

function getCookie(name) {
    var nameEQ = name + "=";
    var cookies = document.cookie.split(';');
    for (var i = 0; i < cookies.length; i++) {
        var cookie = cookies[i];
        while (cookie.charAt(0) == ' ') {
            cookie = cookie.substring(1, cookie.length);
        }
        if (cookie.indexOf(nameEQ) == 0) {
            return cookie.substring(nameEQ.length, cookie.length);
        }
    }
    return null;
}


/* ===== Theme (auto dark mode by time) ===== */
function setupAutoTheme() {
    var themeState = getCookie("themeState") || "Light";
    var htmlTag = document.querySelector('html');
    var svgItems = document.getElementsByTagName("svg");
    var tanChiShe = document.getElementById("tanChiShe");

    function changeSvg(color) {
        for (var i = 0; i < svgItems.length; i++) {
            var paths = svgItems[i].getElementsByTagName("path");
            for (var j = 0; j < paths.length; j++) {
                paths[j].setAttribute("fill", color);
            }
        }
    }

    function changeTheme(theme) {
        if (theme == "Dark") {
            changeSvg("#ffffff");
            if (tanChiShe) tanChiShe.src = "./static/svg/snake-Dark.svg";
            htmlTag.dataset.theme = 'dark';
        } else {
            changeSvg("#000000");
            if (tanChiShe) tanChiShe.src = "./static/svg/snake-Light.svg";
            htmlTag.dataset.theme = '';
        }
        setCookie("themeState", theme, 365);
    }

    // Auto dark mode at night
    var currentHour = new Date().getHours();
    if (currentHour >= 20 || currentHour < 6) {
        themeState = "Dark";
    }
    changeTheme(themeState);
}


/* ===== DOMContentLoaded ===== */
document.addEventListener('DOMContentLoaded', function () {

    // Initialize i18n system
    initI18n();

    // Setup auto theme
    setupAutoTheme();

    // Setup language switch
    var switchCheckbox = document.getElementById('myonoffswitch');
    var savedLang = getCookie("langState") || "zh";

    if (savedLang === "en") {
        switchCheckbox.checked = false;
        switchLanguage("en");
    } else {
        switchCheckbox.checked = true;
        switchLanguage("zh");
    }

    switchCheckbox.addEventListener('change', function () {
        if (currentLang === "zh") {
            switchLanguage("en");
        } else {
            switchLanguage("zh");
        }
    });

    // Tab button sound effects
    document.querySelectorAll('.tab-button').forEach(function(button) {
        button.addEventListener('click', function() {
            playSound('../static/soundeffects/click.mp3');
        });
    });

    // Fade-in effect
    var projectItems = document.querySelectorAll(".projectItem");
    function checkProjectItems() {
        for (var i = 0; i < projectItems.length; i++) {
            var projectItem = projectItems[i];
            var projectItemTop = projectItem.getBoundingClientRect().top;
            if (projectItemTop < window.innerHeight * 1.2) {
                // projectItem.classList.add("fade-in-visible");
            }
        }
    }
    window.addEventListener("scroll", checkProjectItems);
    window.addEventListener("resize", checkProjectItems);
});

// FAQ Toggle Function
function toggleFAQ(element) {
    var faqItem = element.parentElement;
    var isActive = faqItem.classList.contains('active');

    playSound('../static/soundeffects/collapsible_open.mp3');

    if (isActive) {
        faqItem.classList.remove('active');
    }
    if (!isActive) {
        faqItem.classList.add('active');
    }
}

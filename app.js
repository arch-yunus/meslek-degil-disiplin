// 📚 DISCIPLINE DATA
const disciplinesData = [
    {
        id: "matematik",
        title: "Matematik ve İstatistik",
        category: "sayisal",
        categoryText: "Formel & Sayısal",
        icon: "📐",
        aiSafety: 95,
        why: "Dünya veriden ibarettir ve yapay zekanın beyni tamamen istatistiktir. İstatistik ve matematik bilen biri, sadece sayıları değil, olasılıkları, yapıları ve geleceği okur. Tüm veri biliminin, finansal modellemenin ve kuantum hesaplamanın ana kökü burasıdır.",
        adaptation: [
            "<strong>Dün:</strong> Sigorta aktüeri veya finans analisti olurdunuz.",
            "<strong>Bugün:</strong> Veri Bilimcisi veya Algoritmik Ticaret Uzmanı olursunuz.",
            "<strong>Yarın:</strong> Yapay Zeka Model Mimarı veya Biyoenformatik Modelleme Uzmanı olabilirsiniz."
        ],
        toolkit: ["Veri Analitiği", "Olasılık Hesaplama", "Lineer Cebir", "R/Python", "Problem Çözme"]
    },
    {
        id: "ekonomi",
        title: "Ekonomi ve İktisat",
        category: "sosyal",
        categoryText: "Sosyal & Beşeri",
        icon: "📉",
        aiSafety: 85,
        why: "Ekonomi, kısıtlı kaynakların nasıl dağıtılacağını ve insan davranışlarının teşviklerle nasıl değiştiğini inceler. Sadece para değil, sistem bilimidir. İşletme gibi dar değildir, makro bir vizyon ve pazar dinamiklerini anlama yeteneği sunar.",
        adaptation: [
            "<strong>Dün:</strong> Bankacı veya hazine uzmanı olurdunuz.",
            "<strong>Bugün:</strong> Risk Analisti veya Finansal Teknolojiler (Fintech) Yöneticisi olursunuz.",
            "<strong>Yarın:</strong> Yapay Zeka Ajan Ekonomisi Mimarı veya Kripto Varlık Ekonomisti olabilirsiniz."
        ],
        toolkit: ["Sistem Analizi", "Makro/Mikro Teori", "Oyun Teorisi", "Ekonometri", "Veri Analizi"]
    },
    {
        id: "psikoloji",
        title: "Psikoloji",
        category: "sosyal",
        categoryText: "Sosyal & Beşeri",
        icon: "🧠",
        aiSafety: 90,
        why: "Makineler ne kadar zeki olursa olsun, son kullanıcı ve karar verici her zaman insandır. İnsan davranışını, bilişsel süreçleri, algıyı ve zihinsel zaafları anlayan bir kişi her dönemde ve her yeni teknolojide kendine yer bulacaktır.",
        adaptation: [
            "<strong>Dün:</strong> Rehberlik öğretmeni veya klinik psikolog olurdunuz.",
            "<strong>Bugün:</strong> Kullanıcı Deneyimi (UX) Araştırmacısı veya İK Stratejisti olursunuz.",
            "<strong>Yarın:</strong> İnsan-Bilgisayar Etkileşimi Tasarımcısı veya AI Bilişsel Modelleme Danışmanı olabilirsiniz."
        ],
        toolkit: ["İnsan Davranışı Analizi", "Bilişsel Bilimler", "Görüşme Teknikleri", "Kullanıcı Deneyimi (UX)", "İstatistik"]
    },
    {
        id: "felsefe",
        title: "Felsefe",
        category: "sosyal",
        categoryText: "Sosyal & Beşeri",
        icon: "🏛️",
        aiSafety: 95,
        why: "Kod yazmayı yapay zeka üstlenirken, makinelere 'Hangi soruyu sormalıyız?' ve 'Kararlarımızda etik sınırlar ne olmalıdır?' sorularını soracak olanlar felsefecilerdir. Mantık, felsefenin alt dalıdır ve doğru düşünme yollarını kurgular.",
        adaptation: [
            "<strong>Dün:</strong> Akademisyen veya kütüphaneci olurdunuz.",
            "<strong>Bugün:</strong> Yapay Zeka Etik Kurulu Yöneticisi veya Prompt Mühendisi olursunuz.",
            "<strong>Yarın:</strong> Yapay Zeka Hizalama (Alignment) Uzmanı veya Bilişsel Bilim Felsefecisi olabilirsiniz."
        ],
        toolkit: ["Mantıksal Akıl Yürütme", "Etik Teori", "Epistemoloji", "Metin Analizi", "Prompt Tasarımı"]
    },
    {
        id: "temelbilim",
        title: "Temel Bilimler (Fizik/Biyoloji/Kimya)",
        category: "doga",
        categoryText: "Doğa & Temel Bilimler",
        icon: "🔬",
        aiSafety: 90,
        why: "Evrenin çalışma yasalarını öğretir. Olaylara en temel ilkelerden (first principles) yaklaşmayı sağlayan en zorlu zihinsel antrenmandır. Doğanın dilini anlayanlar, en radikal inovasyonları yaratanlardır.",
        adaptation: [
            "<strong>Dün:</strong> Laboratuvar teknisyeni veya öğretmen olurdunuz.",
            "<strong>Bugün:</strong> Nanoteknoloji Araştırmacısı veya Veri Analisti olursunuz.",
            "<strong>Yarın:</strong> Kuantum Hesaplama Fizikçisi veya Sentetik Biyoloji (CRISPR) Kodlayıcısı olabilirsiniz."
        ],
        toolkit: ["Deney Tasarımı", "Veri Modelleme", "İlk Prensiplerle Düşünme", "Analitik Çözümleme", "Simülasyon"]
    },
    {
        id: "bilgisayar",
        title: "Bilgisayar Bilimleri",
        category: "sayisal",
        categoryText: "Formel & Sayısal",
        icon: "💻",
        aiSafety: 85,
        why: "Bilgisayar bilimleri sadece güncel dillerde kod yazmak değil; algoritmik düşünme, veri yapısı tasarımı, hesaplama kuramı ve karmaşık sistemleri soyutlama sanatıdır. Teknolojinin yapı taşlarını anlamanızı sağlar.",
        adaptation: [
            "<strong>Dün:</strong> Veritabanı yöneticisi veya masaüstü yazılımcısı olurdunuz.",
            "<strong>Bugün:</strong> Bulut Çözümleri Mimarı veya Devops Mühendisi olursunuz.",
            "<strong>Yarın:</strong> Kuantum Algoritma Geliştiricisi veya Yapay Zeka Hizalama (Alignment) Araştırmacısı olabilirsiniz."
        ],
        toolkit: ["Algoritma Tasarımı", "Veri Yapıları", "Hesaplama Karmaşıklığı", "Sistem Mimarisi", "Yazılım Kuramı"]
    },
    {
        id: "sosyoloji",
        title: "Sosyoloji ve Antropoloji",
        category: "sosyal",
        categoryText: "Sosyal & Beşeri",
        icon: "🌍",
        aiSafety: 80,
        why: "Toplumların, kültürlerin ve dijital ağların nasıl organize olduğunu inceler. Yapay zeka toplum yapısını değiştirdikçe, bu değişimleri analiz etmek ve insan gruplarını yönetmek kritik hale gelmektedir.",
        adaptation: [
            "<strong>Dün:</strong> Sosyal araştırmacı veya kamu danışmanı olurdunuz.",
            "<strong>Bugün:</strong> Sosyal Ağ Analisti veya Kullanıcı Deneyimi Araştırmacısı olursunuz.",
            "<strong>Yarın:</strong> DAO (Merkeziyetsiz Otonom Topluluk) Mimarı veya Dijital Kültür Antropoloğu olabilirsiniz."
        ],
        toolkit: ["Sosyal Ağ Analizi", "Nitel/Nicel Araştırma", "Kültürel Analiz", "Veri Madenciliği", "Saha Çalışması"]
    },
    {
        id: "dilbilim",
        title: "Dilbilim (Linguistics)",
        category: "sosyal",
        categoryText: "Sosyal & Beşeri",
        icon: "🗣️",
        aiSafety: 90,
        why: "Dilbilim, insan dilinin matematiksel, bilişsel ve yapısal formunu inceler. Büyük Dil Modellerinin (LLM'ler) dünyayı yönettiği bu çağda, dilin semantiğini ve kurallarını bilmek en büyük güçlerdendir.",
        adaptation: [
            "<strong>Dün:</strong> Çevirmen veya dil öğretmeni olurdunuz.",
            "<strong>Bugün:</strong> Doğal Dil İşleme (NLP) Uzmanı veya Prompt Tasarımcısı olursunuz.",
            "<strong>Yarın:</strong> Bilişsel Yapay Zeka Dil Modelleme Uzmanı veya AI Semantik Tasarımcısı olabilirsiniz."
        ],
        toolkit: ["Semantik Analiz", "Doğal Dil İşleme (NLP)", "Fonetik", "Sentaks", "Kavramsal Modelleme"]
    },
    {
        id: "hukukkurami",
        title: "Hukuk Kuramı ve Felsefesi",
        category: "sosyal",
        categoryText: "Sosyal & Beşeri",
        icon: "⚖️",
        aiSafety: 85,
        why: "Kanun ezberlemek gibi dar mesleki işler otonomlaşırken, sistem inşası, etik kurallar, hak ve adalet felsefesi gibi temel hukuk kuramı kalıcı bir güçtür. Kuralların nasıl tasarlanacağını öğretir.",
        adaptation: [
            "<strong>Dün:</strong> Klasik dava avukatı veya noter olurdunuz.",
            "<strong>Bugün:</strong> KVKK / Veri Koruma Uyum Danışmanı olursunuz.",
            "<strong>Yarın:</strong> Akıllı Kontrat Denetçisi veya Yapay Zeka Regülasyon Politikacısı olabilirsiniz."
        ],
        toolkit: ["Mantıksal Analiz", "Etik Kurallar", "Sözleşme Tasarımı", "Uyuşmazlık Çözümü", "Regülasyon"]
    }
];

// 🛠️ YATAY BECERİLER HAFUZU
const horizontalSkills = [
    "Python ile Veri Analizi", "İleri Düzey İngilizce", "Kullanıcı Deneyimi (UX)",
    "Prompt Tasarımı", "Temel Tasarım İlkeleri", "SQL & Veritabanı",
    "Dijital Pazarlama", "Proje Yönetimi (Agile)", "Topluluk Yönetimi",
    "Sunum ve İkna Becerileri", "İş Geliştirme", "Finansal Okuryazarlık",
    "Video Kurgu & Montaj", "Mobil Uygulama Geliştirme", "Temel Siber Güvenlik"
];

// 📊 QUIZ QUESTIONS
const quizQuestions = [
    {
        question: "1. Tercih etmeyi düşündüğünüz bölümün / mesleğin ders müfredatı ağırlıklı olarak neye odaklanıyor?",
        options: [
            { text: "Zamanla değişmeyen evrensel kuralları, teori ve metodolojileri kavramaya.", score: { sustain: 15, flex: 10, ai: 10 } },
            { text: "Güncel sektörel uygulamaları, piyasa standart iş süreçlerini öğrenmeye.", score: { sustain: 8, flex: 7, ai: 6 } },
            { text: "Spesifik bir yazılımın/aracın kullanımını öğrenmeye veya çok güncel geçici trendlere.", score: { sustain: 2, flex: 2, ai: 1 } }
        ]
    },
    {
        question: "2. Bu alandan mezun olduğunuzda, başka bir sektöre veya iş alanına geçmek isterseniz kazandığınız beceriler ne kadar taşınabilir olur?",
        options: [
            { text: "Çok kolay; veri analizi, insan davranışı veya sistem kurma becerilerim her sektörde geçerlidir.", score: { sustain: 10, flex: 15, ai: 10 } },
            { text: "Kısmen; yakın veya benzer yan sektörlerde kendime yer bulabilirim.", score: { sustain: 7, flex: 8, ai: 7 } },
            { text: "Çok zor; sadece o sektöre özel teknik bilgi ve prosedürler içerir, başka yerde işe yaramaz.", score: { sustain: 1, flex: 2, ai: 2 } }
        ]
    },
    {
        question: "3. Bu alandaki başlangıç seviyesindeki günlük görevlerin yapay zeka araçları tarafından otomatikleştirilme ihtimali nedir?",
        options: [
            { text: "Çok düşük; derin mantıksal kurgular, etik kararlar veya karmaşık insani etkileşimler içeriyor.", score: { sustain: 10, flex: 10, ai: 15 } },
            { text: "Orta; rapor yazımı, temel kodlama veya veri analizini AI yapabilir ama yönlendirme bana kalır.", score: { sustain: 7, flex: 7, ai: 8 } },
            { text: "Çok yüksek; rutin veri girişleri, şablon sözleşmeler, basit dosya takipleri veya manuel raporlamalara dayanıyor.", score: { sustain: 2, flex: 2, ai: 2 } }
        ]
    },
    {
        question: "4. Bu alanın tarihsel varlığı ve gelecekteki ömrü hakkında ne düşünüyorsunuz?",
        options: [
            { text: "Yüzyıllardır vardı, gelecekte de insanlık var oldukça şekil değiştirerek var olmaya devam edecek.", score: { sustain: 15, flex: 10, ai: 10 } },
            { text: "Son 10-20 yılda teknolojiyle popülerleşti, önümüzdeki yıllarda ciddi değişime uğrayabilir.", score: { sustain: 8, flex: 7, ai: 6 } },
            { text: "Son birkaç yılda popüler olan, dönemsel trendlere veya belirli platformlara bağımlı bir alan.", score: { sustain: 2, flex: 2, ai: 1 } }
        ]
    },
    {
        question: "5. Bu eğitimi tamamladığınızda heybenizde kalacak en değerli yetkinlik ne olacaktır?",
        options: [
            { text: "Karmaşık problemleri en temel doğrularına indirgeyip sıfırdan çözebilme zihniyeti (İlk Prensipler).", score: { sustain: 15, flex: 15, ai: 10 } },
            { text: "Bir organizasyonu yönetme, süreçleri koordine etme ve planlama yeteneği.", score: { sustain: 8, flex: 8, ai: 8 } },
            { text: "Belirli programları iyi düzeyde kullanabilme veya operasyonel süreçleri taklit etme.", score: { sustain: 2, flex: 2, ai: 2 } }
        ]
    },
    {
        question: "6. Çalışmayı hedeflediğiniz ana sektör çökerse veya tamamen yapay zeka kontrolüne geçerse ne yaparsınız?",
        options: [
            { text: "Sorun değil; altyapımdaki temel bilim/düşünce disipliniyle yepyeni bir sektöre hızla adapte olurum.", score: { sustain: 10, flex: 15, ai: 15 } },
            { text: "Zorlanırım ancak yönetim veya koordinasyon becerilerimle yan sektörlere geçiş yaparım.", score: { sustain: 7, flex: 8, ai: 7 } },
            { text: "Ciddi kriz yaşarım; yetkinliklerim o sektöre ve oradaki araçlara sıkı sıkıya bağlı.", score: { sustain: 1, flex: 2, ai: 2 } }
        ]
    },
    {
        question: "7. Bu bölümü tercih etmenizdeki temel itici güç (motivasyon) nedir?",
        options: [
            { text: "Bu alana karşı büyük bir entelektüel merak ve tutku duyuyorum, uğraşırken zamanı unutuyorum.", score: { sustain: 10, flex: 10, ai: 10 } },
            { text: "Gelecekte geniş kariyer olanakları sunması ve esnek bir zemin hazırlaması.", score: { sustain: 7, flex: 7, ai: 7 } },
            { text: "Puanım buraya yettiği için veya şu an piyasada popüler/garanti iş olarak görüldüğü için.", score: { sustain: 2, flex: 2, ai: 2 } }
        ]
    }
];

// STATE MANAGEMENT
let activeSection = "katalog-sec";
let currentQuizStep = 0; // 0: landing, 1-7: questions, 8: result
let quizAnswers = [];
let targetDeptName = "";
let customHorizontalSkills = [...horizontalSkills];
let selectedBuilderCore = "Matematik ve İstatistik";
let selectedBuilderSkills = ["Python ile Veri Analizi", "İleri Düzey İngilizce"];
let checklistItems = [];

// DOM ELEMENTS
const navLinks = document.querySelectorAll(".nav-link");
const sections = document.querySelectorAll(".app-section");
const disciplinesContainer = document.getElementById("disciplines-container");
const filterBtns = document.querySelectorAll(".filter-btn");

// MODAL ELEMENTS
const modal = document.getElementById("discipline-modal");
const modalCloseBtn = document.getElementById("modal-close-btn");
const modalTitle = document.getElementById("modal-title");
const modalCategory = document.getElementById("modal-category");
const modalWhy = document.getElementById("modal-why");
const modalAdaptationList = document.getElementById("modal-adaptation-list");
const modalToolkitTags = document.getElementById("modal-toolkit-tags");
const modalAiProgress = document.getElementById("modal-ai-progress");
const modalAiScore = document.getElementById("modal-ai-score");

// QUIZ ELEMENTS
const startQuizBtn = document.getElementById("start-quiz-btn");
const deptInput = document.getElementById("dept-input");
const deptError = document.getElementById("dept-error");
const quizLanding = document.getElementById("quiz-landing");
const quizQuestionContainer = document.getElementById("quiz-question-container");
const quizResult = document.getElementById("quiz-result");
const questionText = document.getElementById("question-text");
const optionsContainer = document.getElementById("options-container");
const questionCounter = document.getElementById("question-counter");
const quizProgressIndicator = document.getElementById("quiz-progress-indicator");
const quizPrevBtn = document.getElementById("quiz-prev-btn");
const restartQuizBtn = document.getElementById("restart-quiz-btn");
const transferToBuilderBtn = document.getElementById("transfer-to-builder-btn");

const resultScore = document.getElementById("result-score");
const resultStatusBadge = document.getElementById("result-status-badge");
const resultTitle = document.getElementById("result-title");
const valSustain = document.getElementById("val-sustain");
const barSustain = document.getElementById("bar-sustain");
const valFlex = document.getElementById("val-flex");
const barFlex = document.getElementById("bar-flex");
const valImmunity = document.getElementById("val-immunity");
const barImmunity = document.getElementById("bar-immunity");
const resultAdviceText = document.getElementById("result-advice-text");

// T-BUILDER ELEMENTS
const tCoreSelect = document.getElementById("t-core-select");
const skillsSelectorContainer = document.getElementById("skills-selector-container");
const customSkillInput = document.getElementById("custom-skill-input");
const addCustomSkillBtn = document.getElementById("add-custom-skill-btn");
const tPreviewCoreTitle = document.getElementById("t-preview-core-title");
const tPreviewSkillsContainer = document.getElementById("t-preview-skills-container");
const exportProfileBtn = document.getElementById("export-profile-btn");

// CHECKLIST ELEMENTS
const checklistItemInput = document.getElementById("checklist-item-input");
const addChecklistItemBtn = document.getElementById("add-checklist-item-btn");
const checklistItemsContainer = document.getElementById("checklist-items-container");
const checklistEmpty = document.getElementById("checklist-empty");

// TOAST
const toast = document.getElementById("toast-notification");

// --- INITIALIZATION ---
window.addEventListener("DOMContentLoaded", () => {
    initApp();
});

function initApp() {
    renderDisciplines("all");
    initNavigation();
    initQuiz();
    initTBuilder();
    initChecklist();
}

// --- NAVIGATION ---
function initNavigation() {
    navLinks.forEach(link => {
        link.addEventListener("click", (e) => {
            e.preventDefault();
            const targetId = link.getAttribute("data-target");
            showSection(targetId);
        });
    });
}

function showSection(sectionId) {
    sections.forEach(sec => {
        sec.classList.remove("active");
    });
    
    const targetSec = document.getElementById(sectionId);
    if (targetSec) {
        targetSec.classList.add("active");
    }

    navLinks.forEach(link => {
        link.classList.remove("active");
        if (link.getAttribute("data-target") === sectionId) {
            link.classList.add("active");
        }
    });

    activeSection = sectionId;
}

// --- CATALOG RENDERING & FILTERING ---
function renderDisciplines(filter) {
    disciplinesContainer.innerHTML = "";
    
    const filteredData = filter === "all" 
        ? disciplinesData 
        : disciplinesData.filter(d => d.category === filter);

    filteredData.forEach(disc => {
        const card = document.createElement("div");
        card.className = "card discipline-card";
        card.innerHTML = `
            <div class="discipline-card-header">
                <span class="discipline-icon">${disc.icon}</span>
                <span class="discipline-badge">${disc.categoryText}</span>
            </div>
            <h3>${disc.title}</h3>
            <p>${disc.why}</p>
            <div class="discipline-card-footer">
                <span class="discipline-ai-tag">
                    <span class="discipline-ai-dot"></span>
                    AI Dayanımı: %${disc.aiSafety}
                </span>
                <span class="read-more-text">Detayları Gör →</span>
            </div>
        `;

        card.addEventListener("click", () => openDisciplineModal(disc));
        disciplinesContainer.appendChild(card);
    });
}

// Filter button events
filterBtns.forEach(btn => {
    btn.addEventListener("click", () => {
        filterBtns.forEach(b => b.classList.remove("active"));
        btn.classList.add("active");
        const filterVal = btn.getAttribute("data-filter");
        renderDisciplines(filterVal);
    });
});

// Modal Actions
function openDisciplineModal(disc) {
    modalTitle.textContent = disc.title;
    modalCategory.textContent = disc.categoryText;
    modalWhy.textContent = disc.why;
    modalAiScore.textContent = `%${disc.aiSafety}`;
    modalAiProgress.style.width = `${disc.aiSafety}%`;

    // Render adaptation scenarios
    modalAdaptationList.innerHTML = "";
    disc.adaptation.forEach(scenario => {
        const li = document.createElement("li");
        li.innerHTML = scenario;
        modalAdaptationList.appendChild(li);
    });

    // Render toolkit tags
    modalToolkitTags.innerHTML = "";
    disc.toolkit.forEach(tool => {
        const tag = document.createElement("span");
        tag.className = "skill-tag";
        tag.textContent = tool;
        modalToolkitTags.appendChild(tag);
    });

    modal.classList.add("active");
}

modalCloseBtn.addEventListener("click", () => {
    modal.classList.remove("active");
});

modal.addEventListener("click", (e) => {
    if (e.target === modal) {
        modal.classList.remove("active");
    }
});

// --- BÖLÜM DEĞERLENDİRME QUIZ ---
function initQuiz() {
    startQuizBtn.addEventListener("click", startQuiz);
    quizPrevBtn.addEventListener("click", prevQuestion);
    restartQuizBtn.addEventListener("click", () => {
        resetQuiz();
        showSection("degerlendirme-sec");
    });

    transferToBuilderBtn.addEventListener("click", () => {
        // Find matching core discipline
        const closestDiscipline = findClosestCoreDiscipline(targetDeptName);
        tCoreSelect.value = closestDiscipline;
        selectedBuilderCore = closestDiscipline;
        updateTBuilderPreview();
        showSection("t-builder-sec");
        showToast(`'${closestDiscipline}' temel disiplini ile T-Builder kuruldu!`);
    });
}

function startQuiz() {
    const val = deptInput.value.trim();
    if (!val) {
        deptError.style.display = "block";
        return;
    }
    deptError.style.display = "none";
    targetDeptName = val;
    currentQuizStep = 1;
    quizAnswers = [];
    
    quizLanding.classList.remove("active");
    quizQuestionContainer.classList.add("active");
    
    loadQuestion();
}

function loadQuestion() {
    const qIndex = currentQuizStep - 1;
    const qData = quizQuestions[qIndex];
    
    // Set text & counter
    questionText.textContent = qData.question;
    questionCounter.textContent = `Soru ${currentQuizStep} / ${quizQuestions.length}`;
    
    // Progress
    const progressPercent = (currentQuizStep / quizQuestions.length) * 100;
    quizProgressIndicator.style.width = `${progressPercent}%`;
    
    // Back navigation visibility
    quizPrevBtn.style.visibility = currentQuizStep > 1 ? "visible" : "hidden";
    
    // Load options
    optionsContainer.innerHTML = "";
    qData.options.forEach((opt, idx) => {
        const optionBtn = document.createElement("button");
        optionBtn.className = "option-btn";
        if (quizAnswers[qIndex] === idx) {
            optionBtn.classList.add("selected");
        }

        const optionIndexLetter = String.fromCharCode(65 + idx); // A, B, C...
        optionBtn.innerHTML = `
            <span class="option-index">${optionIndexLetter}</span>
            <span>${opt.text}</span>
        `;
        
        optionBtn.addEventListener("click", () => {
            selectOption(idx);
        });
        optionsContainer.appendChild(optionBtn);
    });
}

function selectOption(optIndex) {
    const qIndex = currentQuizStep - 1;
    quizAnswers[qIndex] = optIndex;
    
    // Mark as selected visually
    const buttons = optionsContainer.querySelectorAll(".option-btn");
    buttons.forEach((btn, i) => {
        if (i === optIndex) btn.classList.add("selected");
        else btn.classList.remove("selected");
    });
    
    // Proceed to next question with a slight delay
    setTimeout(() => {
        if (currentQuizStep < quizQuestions.length) {
            currentQuizStep++;
            loadQuestion();
        } else {
            calculateAndShowResult();
        }
    }, 250);
}

function prevQuestion() {
    if (currentQuizStep > 1) {
        currentQuizStep--;
        loadQuestion();
    }
}

function calculateAndShowResult() {
    let totalSustain = 0;
    let totalFlex = 0;
    let totalAi = 0;

    // Sum scores
    quizAnswers.forEach((answerIdx, qIdx) => {
        const score = quizQuestions[qIdx].options[answerIdx].score;
        totalSustain += score.sustain;
        totalFlex += score.flex;
        totalAi += score.ai;
    });

    // Max potential sums
    const maxSustain = 90; // (15*6 + 10*1) = 100 for each dimension
    const maxFlex = 90;
    const maxAi = 90;

    const sustainPercent = Math.min(Math.round((totalSustain / maxSustain) * 100), 100);
    const flexPercent = Math.min(Math.round((totalFlex / maxFlex) * 100), 100);
    const aiPercent = Math.min(Math.round((totalAi / maxAi) * 100), 100);

    // Calculate aggregated overall score out of 100
    const aggregateScore = Math.round((sustainPercent + flexPercent + aiPercent) / 3);

    // Render results view
    resultScore.textContent = aggregateScore;
    resultTitle.textContent = `Yapay Zeka Karar Matrisi: ${targetDeptName}`;

    // Bars
    valSustain.textContent = `%${sustainPercent}`;
    barSustain.style.width = `${sustainPercent}%`;
    valFlex.textContent = `%${flexPercent}`;
    barFlex.style.width = `${flexPercent}%`;
    valImmunity.textContent = `%${aiPercent}`;
    barImmunity.style.width = `${aiPercent}%`;

    // Status Badge & Custom Advice text
    let status = "";
    let advice = "";
    let badgeClass = "";

    if (aggregateScore >= 80) {
        status = "Geleceğe Dayanıklı Temel";
        badgeClass = "result-badge-high";
        advice = `<strong>${targetDeptName}</strong> analizi sonucunda geleceğin belirsizliğine karşı üst seviyede bir 'temel disiplin' altyapısı sergilediği görülmüştür. Bu alan, sadece bugünün mesleki pratiklerini değil, geleceğin problem çözme modellerini barındırır. Yapay zeka ile entegrasyonu son derece kolaydır. T-Tipi kariyer kurgulayarak kendinize ek yatay beceriler (dil, yazılım, tasarım vb.) kattığınızda, her dönem vazgeçilmez bir lider olabilirsiniz.`;
    } else if (aggregateScore >= 50) {
        status = "Dengeli Bölüm";
        badgeClass = "result-badge-medium";
        advice = `<strong>${targetDeptName}</strong>, sektörel geçerliliği olan fakat yapay zeka dalgalanmalarından ve otomasyondan etkilenebilecek dengeli bir seviyededir. Eğitiminiz boyunca sadece ders kitaplarındaki operasyonel süreçleri öğrenmekle yetinmemelisiniz. Bölümün temel mantığını (örneğin işletme ise kaynak yönetimi ve oyun teorisi; mühendislik ise tasarım felsefesi) kavramaya çalışın ve kendinizi hızla T-Tipi bir profil haline getirecek araçlarla donatın.`;
    } else {
        status = "Kritik Derecede Dar Meslek";
        badgeClass = "result-badge-low";
        advice = `<strong>${targetDeptName}</strong> analizi, bu seçimin rutin görevlere dayalı, esnekliği düşük ve yapay zeka tarafından doğrudan ikame edilebilecek 'dar bir meslek' olma riski taşıdığını göstermektedir. Bu bölümü tercih edecekseniz dahi, buradaki teoriyi 'araç kutusu' olarak görüp en kısa sürede matematik, sosyoloji veya bilgisayar bilimleri gibi köklü bir disiplinle çaprazlama (çift anadal / yan dal veya bağımsız projelerle) yapmanızı tavsiye ederiz.`;
    }

    // Set styling of badge
    resultStatusBadge.className = `result-badge ${badgeClass}`;
    resultStatusBadge.textContent = status;
    resultAdviceText.innerHTML = advice;

    // View switch
    quizQuestionContainer.classList.remove("active");
    quizResult.classList.add("active");
}

function findClosestCoreDiscipline(dept) {
    const dLower = dept.toLowerCase();
    
    if (dLower.includes("matematik") || dLower.includes("istatistik") || dLower.includes("veri") || dLower.includes("analit")) {
        return "Matematik ve İstatistik";
    }
    if (dLower.includes("ekonomi") || dLower.includes("iktisat") || dLower.includes("maliye") || dLower.includes("finans") || dLower.includes("isletme")) {
        return "Ekonomi ve İktisat";
    }
    if (dLower.includes("psikoloji") || dLower.includes("pdr") || dLower.includes("rehberlik") || dLower.includes("insan")) {
        return "Psikoloji";
    }
    if (dLower.includes("felsefe") || dLower.includes("mantik") || dLower.includes("etik")) {
        return "Felsefe";
    }
    if (dLower.includes("fizik") || dLower.includes("kimya") || dLower.includes("biyoloji") || dLower.includes("genet")) {
        return "Temel Bilimler (Fizik/Biyoloji)";
    }
    if (dLower.includes("bilgisayar") || dLower.includes("yazilim") || dLower.includes("kod") || dLower.includes("yapay zek") || dLower.includes("bt")) {
        return "Bilgisayar Bilimleri";
    }
    if (dLower.includes("sosyoloji") || dLower.includes("antropoloji") || dLower.includes("toplum") || dLower.includes("kultur")) {
        return "Sosyoloji ve Antropoloji";
    }
    if (dLower.includes("dil") || dLower.includes("linguistic") || dLower.includes("turkce") || dLower.includes("edebiyat") || dLower.includes("ingiliz")) {
        return "Dilbilim";
    }
    if (dLower.includes("hukuk") || dLower.includes("adalet") || dLower.includes("avukat") || dLower.includes("hak")) {
        return "Hukuk Kuramı ve Felsefesi";
    }
    // Default fallback
    return "Bilgisayar Bilimleri";
}

function resetQuiz() {
    deptInput.value = "";
    deptError.style.display = "none";
    quizLanding.classList.add("active");
    quizQuestionContainer.classList.remove("active");
    quizResult.classList.remove("active");
    currentQuizStep = 0;
}

// --- T-TIPI KARİYER BUILDER ---
function initTBuilder() {
    // Populate Core Select dropdown
    tCoreSelect.addEventListener("change", (e) => {
        selectedBuilderCore = e.target.value;
        updateTBuilderPreview();
    });

    // Populate skills checkboxes
    renderSkillsCheckboxes();

    // Add custom skill
    addCustomSkillBtn.addEventListener("click", () => {
        const val = customSkillInput.value.trim();
        if (val && !customHorizontalSkills.includes(val)) {
            customHorizontalSkills.push(val);
            renderSkillsCheckboxes();
            
            // Auto check it
            selectedBuilderSkills.push(val);
            const checkboxes = skillsSelectorContainer.querySelectorAll("input");
            checkboxes.forEach(cb => {
                if (cb.value === val) cb.checked = true;
            });

            customSkillInput.value = "";
            updateTBuilderPreview();
            showToast(`'${val}' yatay becerisi listeye eklendi!`);
        }
    });

    exportProfileBtn.addEventListener("click", () => {
        const textToCopy = `Kariyer Tasarımım:\n\nDikey Derinlik (Temel Disiplin): ${selectedBuilderCore}\nYatay Beceriler: ${selectedBuilderSkills.join(", ")}\n\nBu kariyer profili "Meslek Değil Disiplin" rehberi kullanılarak kurgulanmıştır.`;
        navigator.clipboard.writeText(textToCopy).then(() => {
            showToast("Kariyer profiliniz panoya kopyalandı!");
        });
    });

    updateTBuilderPreview();
}

function renderSkillsCheckboxes() {
    skillsSelectorContainer.innerHTML = "";
    customHorizontalSkills.forEach(skill => {
        const label = document.createElement("label");
        label.className = "checkbox-label";
        
        const isChecked = selectedBuilderSkills.includes(skill);
        label.innerHTML = `
            <input type="checkbox" value="${skill}" ${isChecked ? "checked" : ""}>
            <span>${skill}</span>
        `;
        
        const input = label.querySelector("input");
        input.addEventListener("change", (e) => {
            if (e.target.checked) {
                if (selectedBuilderSkills.length >= 5) {
                    e.target.checked = false;
                    showToast("En fazla 5 adet yatay beceri seçebilirsiniz!");
                    return;
                }
                selectedBuilderSkills.push(skill);
            } else {
                selectedBuilderSkills = selectedBuilderSkills.filter(s => s !== skill);
            }
            updateTBuilderPreview();
        });

        skillsSelectorContainer.appendChild(label);
    });
}

function updateTBuilderPreview() {
    tPreviewCoreTitle.textContent = selectedBuilderCore;
    
    // Find matching emoji
    const matchedDisc = disciplinesData.find(d => d.title === selectedBuilderCore || selectedBuilderCore.startsWith(d.title.substring(0, 8)));
    const stemIcon = document.querySelector(".t-stem-icon");
    if (stemIcon && matchedDisc) {
        stemIcon.textContent = matchedDisc.icon;
    }

    // Render horizontal skill tags
    tPreviewSkillsContainer.innerHTML = "";
    if (selectedBuilderSkills.length === 0) {
        tPreviewSkillsContainer.innerHTML = `<span class="t-skill-tag" style="background: rgba(255,255,255,0.05); border-style: dashed;">Henüz Beceri Seçilmedi</span>`;
    } else {
        selectedBuilderSkills.forEach(skill => {
            const span = document.createElement("span");
            span.className = "t-skill-tag";
            span.textContent = skill;
            tPreviewSkillsContainer.appendChild(span);
        });
    }
}

// --- TERCİH LİSTEM MATRİSİ ---
function initChecklist() {
    // Load from localstorage if exists
    const saved = localStorage.getItem("meslek_disiplin_checklist");
    if (saved) {
        try {
            checklistItems = JSON.parse(saved);
        } catch(e) {
            checklistItems = [];
        }
    }

    renderChecklist();

    addChecklistItemBtn.addEventListener("click", () => {
        const val = checklistItemInput.value.trim();
        if (!val) return;

        const newItem = {
            id: Date.now(),
            name: val,
            sustain: false,
            flex: false,
            passion: false
        };

        checklistItems.push(newItem);
        saveChecklist();
        renderChecklist();
        checklistItemInput.value = "";
    });

    checklistItemInput.addEventListener("keypress", (e) => {
        if (e.key === "Enter") {
            addChecklistItemBtn.click();
        }
    });
}

function saveChecklist() {
    localStorage.setItem("meslek_disiplin_checklist", JSON.stringify(checklistItems));
}

function renderChecklist() {
    checklistItemsContainer.innerHTML = "";
    
    if (checklistItems.length === 0) {
        checklistEmpty.style.display = "block";
        return;
    }
    
    checklistEmpty.style.display = "none";

    checklistItems.forEach(item => {
        const row = document.createElement("tr");
        
        // Calculate score
        let score = 0;
        if (item.sustain) score += 35;
        if (item.flex) score += 35;
        if (item.passion) score += 30;

        let scoreClass = "low";
        if (score >= 70) scoreClass = "high";
        else if (score >= 35) scoreClass = "medium";

        row.innerHTML = `
            <td><strong>${item.name}</strong></td>
            <td class="center"><input type="checkbox" class="checklist-check check-sustain" ${item.sustain ? "checked" : ""}></td>
            <td class="center"><input type="checkbox" class="checklist-check check-flex" ${item.flex ? "checked" : ""}></td>
            <td class="center"><input type="checkbox" class="checklist-check check-passion" ${item.passion ? "checked" : ""}></td>
            <td class="center"><span class="checklist-score ${scoreClass}">%${score}</span></td>
            <td class="center"><button class="delete-checklist-btn">&times;</button></td>
        `;

        // Attach events
        row.querySelector(".check-sustain").addEventListener("change", (e) => {
            item.sustain = e.target.checked;
            saveAndRefreshRow(item);
        });

        row.querySelector(".check-flex").addEventListener("change", (e) => {
            item.flex = e.target.checked;
            saveAndRefreshRow(item);
        });

        row.querySelector(".check-passion").addEventListener("change", (e) => {
            item.passion = e.target.checked;
            saveAndRefreshRow(item);
        });

        row.querySelector(".delete-checklist-btn").addEventListener("click", () => {
            checklistItems = checklistItems.filter(i => i.id !== item.id);
            saveChecklist();
            renderChecklist();
        });

        checklistItemsContainer.appendChild(row);
    });
}

function saveAndRefreshRow(item) {
    saveChecklist();
    renderChecklist();
}

// --- UTILITIES ---
function showToast(msg) {
    toast.textContent = msg;
    toast.classList.add("show");
    
    setTimeout(() => {
        toast.classList.remove("show");
    }, 2500);
}

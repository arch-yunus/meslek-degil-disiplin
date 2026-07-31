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
    },
    {
        id: "sanattasarim",
        title: "Sanat & Tasarım Kuramı (Estetik ve Görsel İletişim)",
        category: "sosyal",
        categoryText: "Sosyal & Beşeri",
        icon: "🎨",
        aiSafety: 90,
        why: "Yapay zeka araçları otomatik olarak görsel üretebilir, ancak insan-merkezli tasarım, estetik algısı, mekansal ve görsel sembolizm ve duygusal hikayecilik her çağda insanların zihnini etkileyen zamansız bir disiplindir.",
        adaptation: [
            "<strong>Dün:</strong> Klasik grafiker, desinatör veya ressam olurdunuz.",
            "<strong>Bugün:</strong> Kullanıcı Deneyimi (UX) Tasarımcısı veya Kreatif Direktör olursunuz.",
            "<strong>Yarın:</strong> Yapay Zeka Sanat Kuratörü veya Sanal Evren (Metaverse) Mekan Mimarı olabilirsiniz."
        ],
        toolkit: ["Estetik Kuramı", "Görsel Hikayecilik", "Tasarım Odaklı Düşünme (Design Thinking)", "Kullanıcı Deneyimi (UX)", "İletişim Semiyotiği"]
    },
    {
        id: "tarihpolitika",
        title: "Tarih ve Siyaset Bilimi",
        category: "sosyal",
        categoryText: "Sosyal & Beşeri",
        icon: "📜",
        aiSafety: 85,
        why: "Tarih döngüler halinde ilerler ve siyaset bilimleri güç ve kaynak dağılımının kurallarını belirler. İnsan sistemlerinin nasıl kurulduğunu, çöktüğünü ve dönüştüğünü anlamak, en büyük makro stratejik araçtır.",
        adaptation: [
            "<strong>Dün:</strong> Arşivci, tarih öğretmeni veya kamu memuru olurdunuz.",
            "<strong>Bugün:</strong> Kamu Politikaları Danışmanı veya Stratejik Jeopolitik Risk Analisti olursunuz.",
            "<strong>Yarın:</strong> Blockchain/DAO Yönetişim Mimarı veya Yapay Zeka Regülasyon ve Toplum Stratejisti olabilirsiniz."
        ],
        toolkit: ["Sistemik Analiz", "Tarihsel Döngüler", "Siyaset Kuramı", "Jeopolitik Strateji", "Kamu Politikaları"]
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
let quizHistory = [];

// DOM ELEMENTS
const navLinks = document.querySelectorAll(".nav-link");
const sections = document.querySelectorAll(".app-section");
const disciplinesContainer = document.getElementById("disciplines-container");
const filterBtns = document.querySelectorAll(".filter-btn");

// NEW DOM ELEMENTS FOR EXTENDED FEATURES
const quizHistoryCard = document.getElementById("quiz-history-card");
const historyGrid = document.getElementById("history-grid");
const clearHistoryBtn = document.getElementById("clear-history-btn");
const historyCompareAction = document.getElementById("history-compare-action");
const compareSelectedBtn = document.getElementById("compare-selected-btn");
const comparisonModal = document.getElementById("comparison-modal");
const comparisonModalCloseBtn = document.getElementById("comparison-modal-close-btn");
const comparisonModalBody = document.getElementById("comparison-modal-body");

const tSynergyContent = document.getElementById("t-synergy-content");

const checklistAnalysisPanel = document.getElementById("checklist-analysis-panel");
const statAvgScore = document.getElementById("stat-avg-score");
const statAvgSustain = document.getElementById("stat-avg-sustain");
const statAvgFlex = document.getElementById("stat-avg-flex");
const analysisFeedbackText = document.getElementById("analysis-feedback-text");
const analysisRecommendedSkills = document.getElementById("analysis-recommended-skills");

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
    initQuizHistory();
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

    // Save to history
    saveQuizToHistory(targetDeptName, aggregateScore, sustainPercent, flexPercent, aiPercent);

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
    if (dLower.includes("sanat") || dLower.includes("tasarim") || dLower.includes("dizayn") || dLower.includes("resim") || dLower.includes("gorsel") || dLower.includes("kreatif")) {
        return "Sanat & Tasarım Kuramı (Estetik ve Görsel İletişim)";
    }
    if (dLower.includes("tarih") || dLower.includes("siyaset") || dLower.includes("politika") || dLower.includes("kamu")) {
        return "Tarih ve Siyaset Bilimi";
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

    // Dynamic career synergy evaluation
    updateSynergyAnalysis();
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
        updateChecklistAnalysis();
        return;
    }
    
    checklistEmpty.style.display = "none";

    checklistItems.forEach((item, idx) => {
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
            <td class="center">
                <div style="display: flex; flex-direction: column; gap: 2px; align-items: center; justify-content: center;">
                    <button class="move-up-btn" style="background: transparent; border: none; color: var(--text-muted); cursor: pointer; font-size: 0.75rem; padding: 2px 6px;" title="Yukarı Taşı">▲</button>
                    <button class="move-down-btn" style="background: transparent; border: none; color: var(--text-muted); cursor: pointer; font-size: 0.75rem; padding: 2px 6px;" title="Aşağı Taşı">▼</button>
                </div>
            </td>
            <td><strong>${item.name}</strong></td>
            <td class="center"><input type="checkbox" class="checklist-check check-sustain" ${item.sustain ? "checked" : ""}></td>
            <td class="center"><input type="checkbox" class="checklist-check check-flex" ${item.flex ? "checked" : ""}></td>
            <td class="center"><input type="checkbox" class="checklist-check check-passion" ${item.passion ? "checked" : ""}></td>
            <td class="center"><span class="checklist-score ${scoreClass}">%${score}</span></td>
            <td class="center"><button class="delete-checklist-btn">&times;</button></td>
        `;

        // Attach events
        row.querySelector(".move-up-btn").addEventListener("click", () => {
            moveChecklistItem(item.id, -1);
        });

        row.querySelector(".move-down-btn").addEventListener("click", () => {
            moveChecklistItem(item.id, 1);
        });

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

    updateChecklistAnalysis();
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

// ==========================================
//   EXTENDED FEATURES & ANALYSIS SYSTEM
// ==========================================

// --- QUIZ HISTORY & COMPARISON ---
function initQuizHistory() {
    const saved = localStorage.getItem("meslek_disiplin_quiz_history");
    if (saved) {
        try {
            quizHistory = JSON.parse(saved);
        } catch(e) {
            quizHistory = [];
        }
    }
    renderQuizHistory();
    
    clearHistoryBtn.addEventListener("click", () => {
        quizHistory = [];
        localStorage.removeItem("meslek_disiplin_quiz_history");
        renderQuizHistory();
    });

    compareSelectedBtn.addEventListener("click", compareSelectedDepartments);
    
    comparisonModalCloseBtn.addEventListener("click", () => {
        comparisonModal.classList.remove("active");
    });
    
    comparisonModal.addEventListener("click", (e) => {
        if (e.target === comparisonModal) {
            comparisonModal.classList.remove("active");
        }
    });
}

function saveQuizToHistory(deptName, aggregate, sustain, flex, ai) {
    quizHistory = quizHistory.filter(h => h.name.toLowerCase() !== deptName.toLowerCase());
    
    quizHistory.unshift({
        id: Date.now(),
        name: deptName,
        score: aggregate,
        sustain: sustain,
        flex: flex,
        ai: ai,
        date: new Date().toLocaleDateString("tr-TR")
    });
    
    if (quizHistory.length > 10) {
        quizHistory.pop();
    }
    
    localStorage.setItem("meslek_disiplin_quiz_history", JSON.stringify(quizHistory));
    renderQuizHistory();
}

function renderQuizHistory() {
    historyGrid.innerHTML = "";
    
    if (quizHistory.length === 0) {
        quizHistoryCard.style.display = "none";
        historyCompareAction.style.display = "none";
        return;
    }
    
    quizHistoryCard.style.display = "block";
    historyCompareAction.style.display = quizHistory.length >= 2 ? "block" : "none";
    
    quizHistory.forEach(item => {
        const card = document.createElement("div");
        card.className = "card history-item-card";
        card.style.padding = "20px";
        card.style.background = "rgba(255, 255, 255, 0.02)";
        card.style.position = "relative";
        card.style.display = "flex";
        card.style.flexDirection = "column";
        card.style.gap = "12px";
        card.style.border = "1px solid var(--border-color)";
        card.style.borderRadius = "var(--radius-md)";
        card.style.cursor = "pointer";
        
        let scoreClass = "low";
        if (item.score >= 80) scoreClass = "high";
        else if (item.score >= 50) scoreClass = "medium";
        
        card.innerHTML = `
            <div style="display: flex; justify-content: space-between; align-items: flex-start; gap: 8px;">
                <label class="checkbox-label" style="font-weight: 700; color: #ffffff; cursor: pointer;">
                    <input type="checkbox" class="compare-checkbox" value="${item.id}" style="width: 18px; height: 18px;">
                    <span>${item.name}</span>
                </label>
                <button class="delete-history-btn" data-id="${item.id}" style="background: transparent; border: none; color: var(--text-muted); cursor: pointer; font-size: 1.1rem;">&times;</button>
            </div>
            
            <div style="display: flex; align-items: center; justify-content: space-between; margin-top: 4px;">
                <span class="checklist-score ${scoreClass}" style="font-size: 1.4rem;">%${item.score}</span>
                <span style="font-size: 0.75rem; color: var(--text-muted);">${item.date}</span>
            </div>

            <div style="display: flex; flex-direction: column; gap: 4px; font-size: 0.75rem; color: var(--text-muted); border-top: 1px solid rgba(255,255,255,0.05); padding-top: 8px;">
                <div style="display: flex; justify-content: space-between;">
                    <span>Sürdürülebilirlik:</span>
                    <span style="color: #ffffff; font-weight: 600;">%${item.sustain}</span>
                </div>
                <div style="display: flex; justify-content: space-between;">
                    <span>Esneklik:</span>
                    <span style="color: #ffffff; font-weight: 600;">%${item.flex}</span>
                </div>
                <div style="display: flex; justify-content: space-between;">
                    <span>AI Bağışıklığı:</span>
                    <span style="color: #ffffff; font-weight: 600;">%${item.ai}</span>
                </div>
            </div>
        `;
        
        card.querySelector(".delete-history-btn").addEventListener("click", (e) => {
            e.stopPropagation();
            const id = parseInt(e.target.getAttribute("data-id"));
            quizHistory = quizHistory.filter(h => h.id !== id);
            localStorage.setItem("meslek_disiplin_quiz_history", JSON.stringify(quizHistory));
            renderQuizHistory();
        });

        card.addEventListener("click", (e) => {
            if (e.target.tagName !== "INPUT" && e.target.tagName !== "BUTTON") {
                const cb = card.querySelector(".compare-checkbox");
                cb.checked = !cb.checked;
            }
        });

        historyGrid.appendChild(card);
    });
}

function compareSelectedDepartments() {
    const checkedCheckboxes = historyGrid.querySelectorAll(".compare-checkbox:checked");
    if (checkedCheckboxes.length < 2) {
        showToast("Karşılaştırmak için en az 2 bölüm seçmelisiniz!");
        return;
    }
    
    const selectedIds = Array.from(checkedCheckboxes).map(cb => parseInt(cb.value));
    const itemsToCompare = quizHistory.filter(h => selectedIds.includes(h.id));
    
    comparisonModalBody.innerHTML = "";
    
    const container = document.createElement("div");
    container.style.display = "flex";
    container.style.flexDirection = "column";
    container.style.gap = "28px";
    
    const compGrid = document.createElement("div");
    compGrid.style.display = "grid";
    compGrid.style.gridTemplateColumns = `repeat(${itemsToCompare.length}, 1fr)`;
    compGrid.style.gap = "20px";
    compGrid.style.overflowX = "auto";
    
    if (window.innerWidth < 768) {
        compGrid.style.gridTemplateColumns = "1fr";
    }

    itemsToCompare.forEach(item => {
        const col = document.createElement("div");
        col.className = "card";
        col.style.background = "rgba(255, 255, 255, 0.02)";
        col.style.border = "1px solid var(--border-color)";
        col.style.padding = "24px";
        
        let scoreClass = "low";
        if (item.score >= 80) scoreClass = "high";
        else if (item.score >= 50) scoreClass = "medium";

        col.innerHTML = `
            <h4 style="font-size: 1.25rem; font-weight: 800; border-bottom: 1px solid var(--border-color); padding-bottom: 12px; margin-bottom: 16px; min-height: 50px;">${item.name}</h4>
            
            <div style="text-align: center; margin-bottom: 24px;">
                <span class="checklist-score ${scoreClass}" style="font-size: 2.2rem; display: block;">%${item.score}</span>
                <span style="font-size: 0.8rem; color: var(--text-muted);">Ortalama Güvenlik Skoru</span>
            </div>
            
            <div class="result-breakdown" style="gap: 16px; display: flex; flex-direction: column;">
                <div class="breakdown-item" style="display: flex; flex-direction: column; gap: 6px;">
                    <div class="breakdown-label" style="display: flex; justify-content: space-between; font-size: 0.85rem;">
                        <span>Sürdürülebilirlik</span>
                        <span>%${item.sustain}</span>
                    </div>
                    <div class="progress-bar" style="width: 100%; height: 6px; background: rgba(255,255,255,0.05); border-radius: 100px; overflow: hidden;">
                        <div class="progress" style="width: ${item.sustain}%; height: 100%; background: var(--gradient-accent);"></div>
                    </div>
                </div>
                <div class="breakdown-item" style="display: flex; flex-direction: column; gap: 6px;">
                    <div class="breakdown-label" style="display: flex; justify-content: space-between; font-size: 0.85rem;">
                        <span>Kariyer Esnekliği</span>
                        <span>%${item.flex}</span>
                    </div>
                    <div class="progress-bar" style="width: 100%; height: 6px; background: rgba(255,255,255,0.05); border-radius: 100px; overflow: hidden;">
                        <div class="progress" style="width: ${item.flex}%; height: 100%; background: var(--gradient-accent);"></div>
                    </div>
                </div>
                <div class="breakdown-item" style="display: flex; flex-direction: column; gap: 6px;">
                    <div class="breakdown-label" style="display: flex; justify-content: space-between; font-size: 0.85rem;">
                        <span>AI Bağışıklığı</span>
                        <span>%${item.ai}</span>
                    </div>
                    <div class="progress-bar" style="width: 100%; height: 6px; background: rgba(255,255,255,0.05); border-radius: 100px; overflow: hidden;">
                        <div class="progress" style="width: ${item.ai}%; height: 100%; background: var(--gradient-accent);"></div>
                    </div>
                </div>
            </div>
        `;
        compGrid.appendChild(col);
    });
    
    container.appendChild(compGrid);
    
    const summary = document.createElement("div");
    summary.className = "card";
    summary.style.background = "rgba(139, 92, 246, 0.05)";
    summary.style.border = "1px solid rgba(139, 92, 246, 0.2)";
    summary.style.padding = "24px";
    
    const sorted = [...itemsToCompare].sort((a,b) => b.score - a.score);
    summary.innerHTML = `
        <h4 style="color: #a78bfa; margin-bottom: 10px; font-weight: 700; font-size: 1.1rem;">💡 Asistan Karşılaştırma Analizi</h4>
        <p style="font-size: 0.95rem; line-height: 1.6; color: var(--text-muted); margin: 0;">
            Seçtiğiniz ${itemsToCompare.length} alan arasında yapılan karşılaştırmaya göre, geleceğe en dayanıklı ve esnek seçenek <strong>%${sorted[0].score}</strong> skor ile <strong>${sorted[0].name}</strong> olarak öne çıkmaktadır. 
            ${sorted[0].score >= 80 ? "Bu alan güçlü bir disiplin temelidir." : "Bu alanı seçseniz dahi yan becerilerle desteklemeniz kritiktir."} 
            En düşük skora sahip olan <strong>${sorted[sorted.length - 1].name} (%${sorted[sorted.length - 1].score})</strong> ise daha dar bir mesleki odak barındırmaktadır.
        </p>
    `;
    container.appendChild(summary);
    
    comparisonModalBody.appendChild(container);
    comparisonModal.classList.add("active");
}

// --- T-BUILDER CAREER SYNERGY SYSTEM ---
const synergyDb = {
    "Matematik ve İstatistik": [
        {
            required: ["Python ile Veri Analizi", "SQL & Veritabanı"],
            role: "Veri Bilimci (Data Scientist)",
            desc: "Matematiksel altyapınızı veri analizi ve veritabanı sorgulama becerileriyle birleştirerek veri odaklı kararlar üreten kilit aktör olursunuz."
        },
        {
            required: ["Finansal Okuryazarlık"],
            role: "Kantitatif Finans Analisti (Quant)",
            desc: "İstatistiksel modelleme yeteneğinizi piyasa okuryazarlığıyla birleştirerek risk modelleri ve algoritmik ticaret stratejileri geliştirirsiniz."
        },
        {
            required: ["Prompt Tasarımı", "İleri Düzey İngilizce"],
            role: "Yapay Zeka Hizalama ve Veri Stratejisti",
            desc: "Matematiksel mantığı yapay zekaya yön verme becerisiyle birleştirip karmaşık modellerin doğruluğunu optimize edersiniz."
        }
    ],
    "Ekonomi ve İktisat": [
        {
            required: ["Python ile Veri Analizi", "Finansal Okuryazarlık"],
            role: "Ekonometrist & Finans Teknolojileri (Fintech) Uzmanı",
            desc: "Ekonomi teorisini veri madenciliği ve finansal araçlarla birleştirerek fintech girişimlerinde yeni nesil finans modelleri kurgularsınız."
        },
        {
            required: ["Dijital Pazarlama", "Proje Yönetimi (Agile)"],
            role: "Büyüme Stratejisti (Growth Hacker / Product Manager)",
            desc: "Teşvik mekanizmaları ve pazar dinamiklerini Agile süreçlerle yöneterek ürünlerin pazar uyumunu hızlandırırsınız."
        }
    ],
    "Psikoloji": [
        {
            required: ["Kullanıcı Deneyimi (UX)", "Temel Tasarım İlkeleri"],
            role: "Bilişsel UX Tasarımcısı & Ürün Deneyim Yöneticisi",
            desc: "İnsan zihninin algı sınırlarını ve davranış kalıplarını arayüz tasarımlarına dönüştürerek kusursuz ürün deneyimleri yaratırsınız."
        },
        {
            required: ["Prompt Tasarımı", "İleri Düzey İngilizce"],
            role: "İnsan-AI Etkileşimi (HCI) Araştırmacısı",
            desc: "İnsan psikolojisi bilgisini yapay zekanın dil işleme yeteneğiyle harmanlayıp sohbet botlarının insansı ve empati kurabilen etkileşimler yapmasını sağlarsınız."
        }
    ],
    "Felsefe": [
        {
            required: ["Prompt Tasarımı", "İleri Düzey İngilizce"],
            role: "Prompt Mimarı & Yapay Zeka Hizalama Mühendisi",
            desc: "Mantıksal akıl yürütme ve dil analiz becerilerini AI modellerini yönlendirmekte kullanarak yapay zekadan en yüksek verimi alırsınız."
        },
        {
            required: ["Temel Siber Güvenlik", "Proje Yönetimi (Agile)"],
            role: "Teknoloji Etiği ve Uyumluluk Yöneticisi",
            desc: "Etik ve mantık teorilerini dijital güvenlik politikalarıyla entegre ederek organizasyonun teknolojik risklerini yönetirsiniz."
        }
    ],
    "Bilgisayar Bilimleri": [
        {
            required: ["Temel Siber Güvenlik", "SQL & Veritabanı"],
            role: "Bulut Güvenliği ve Altyapı Mimarı",
            desc: "Algoritmik sistemlerinizi veri tabanı ve ağ güvenliği bilgisiyle birleştirerek güvenli, ölçeklenebilir bulut sistemleri tasarlarsınız."
        },
        {
            required: ["Kullanıcı Deneyimi (UX)", "Proje Yönetimi (Agile)"],
            role: "Teknik Ürün Yöneticisi (Technical PM)",
            desc: "Yazılım geliştirme mantığını kullanıcı odaklı yaklaşım ve Agile yönetimiyle birleştirerek geliştirici takımlarla iş birliği yaparsınız."
        }
    ],
    "Sosyoloji ve Antropoloji": [
        {
            required: ["Python ile Veri Analizi", "Topluluk Yönetimi"],
            role: "Hesaplamalı Sosyal Bilimci & Ağ Analisti",
            desc: "Toplumsal davranış kalıplarını veri bilimiyle inceleyerek dijital platformlardaki insan etkileşim ağlarını analiz edersiniz."
        },
        {
            required: ["Topluluk Yönetimi", "Dijital Pazarlama"],
            role: "Kripto/DAO Topluluk Yöneticisi & Sosyal Tasarımcı",
            desc: "Kültür ve topluluk örgütlenme kurallarını kullanarak merkeziyetsiz toplulukları (DAO) kurgular ve yönetirsiniz."
        }
    ],
    "Dilbilim": [
        {
            required: ["Prompt Tasarımı", "Python ile Veri Analizi"],
            role: "NLP (Doğal Dil İşleme) Semantik Analisti",
            desc: "Dilin matematiksel ve anlamsal kurallarını kodlama ve AI modelleriyle birleştirip NLP projelerinde yer alırsınız."
        }
    ],
    "Sanat & Tasarım Kuramı (Estetik ve Görsel İletişim)": [
        {
            required: ["Kullanıcı Deneyimi (UX)", "Temel Tasarım İlkeleri"],
            role: "Kreatif Ürün Tasarımcısı (Product Designer)",
            desc: "Estetik ilkeleri modern arayüz tasarımı ve kullanıcı davranışı analiziyle harmanlayarak dijital ürünler tasarlarsınız."
        },
        {
            required: ["Video Kurgu & Montaj", "Dijital Pazarlama"],
            role: "Multimedya İçerik Mimarı & Kreatif Yönetmen",
            desc: "Görsel hikayeciliği modern pazarlama dinamikleri ve video kurgu becerileriyle birleştirerek viral kampanyalar yönetirsiniz."
        }
    ],
    "Tarih ve Siyaset Bilimi": [
        {
            required: ["Finansal Okuryazarlık", "İleri Düzey İngilizce"],
            role: "Küresel Risk ve Jeopolitik Analist",
            desc: "Tarihsel ve siyasi dinamikleri küresel finans okuryazarlığıyla birleştirerek şirketlerin global pazarlardaki adımlarını planlarsınız."
        }
    ]
};

const generalSynergies = {
    "Matematik ve İstatistik": {
        role: "Veri Odaklı Model Analisti",
        desc: "Seçtiğiniz yatay becerileri veri ve analiz gücünüzle birleştirerek karar süreçlerini optimize eden analitik roller üstlenebilirsiniz."
    },
    "Ekonomi ve İktisat": {
        role: "Stratejik Kaynak Planlayıcısı",
        desc: "Sistem ve pazar bilginizi yatay becerilerinizle birleştirip operasyonel verimlilik ve büyüme rollerinde çalışabilirsiniz."
    },
    "Psikoloji": {
        role: "Davranışsal İletişim Uzmanı",
        desc: "İnsan davranışlarını anlama yeteneğinizi seçtiğiniz pratik becerilerle harmanlayıp kullanıcı veya çalışan odaklı rollerde fark yaratırsınız."
    },
    "Felsefe": {
        role: "Kavramsal Sistem Tasarımcısı",
        desc: "Mantık kurma ve kavram analiz yeteneklerinizi seçtiğiniz teknik becerilerle birleştirip üst düzey yönetim ve koordinasyon rolleri üstlenebilirsiniz."
    },
    "Temel Bilimler (Fizik/Biyoloji)": {
        role: "Ar-Ge ve Simülasyon Analisti",
        desc: "Zorlu problem çözme yeteneğinizi yatay becerilerinizle birleştirip yenilikçi laboratuvar ve teknoloji projelerinde yer alabilirsiniz."
    },
    "Bilgisayar Bilimleri": {
        role: "Dijital Çözüm Mimarı",
        desc: "Yazılım and sistem mantığınızı seçtiğiniz yatay becerilerle zenginleştirip teknoloji odaklı karmaşık projeleri yönetirsiniz."
    },
    "Sosyoloji ve Antropoloji": {
        role: "Kültür ve Organizasyon Stratejisti",
        desc: "Grup dinamiklerini anlama yetinizi yatay becerilerinizle birleştirip topluluk ve organizasyon yapılandırmasında rol alırsınız."
    },
    "Dilbilim": {
        role: "İletişim ve Anlam Yapılandırıcısı",
        desc: "Semantik ve kurallı düşünme yeteneğinizi seçtiğiniz yatay becerilerle birleştirip yapay zeka veya dijital içerik alanlarında yer bulursunuz."
    },
    "Hukuk Kuramı ve Felsefesi": {
        role: "Sistem ve Kural Denetçisi",
        desc: "Kural koyucu ve sistem kurucu bakış açınızı yatay becerilerinizle birleştirerek dijital çağın regülasyon ve uyumluluk süreçlerini yönetirsiniz."
    },
    "Sanat & Tasarım Kuramı (Estetik ve Görsel İletişim)": {
        role: "Yaratıcı Arayüz Stratejisti",
        desc: "Estetik algınızı ve görsel iletişim yeteneğinizi yatay becerilerinizle birleştirip kullanıcıların dikkatini çeken deneyimler üretirsiniz."
    },
    "Tarih ve Siyaset Bilimi": {
        role: "Makro Strateji Uzmanı",
        desc: "Sistem ve iktidar analiz gücünüzü seçtiğiniz yatay becerilerle birleştirerek uzun vadeli stratejiler kurgularsınız."
    }
};

function updateSynergyAnalysis() {
    tSynergyContent.innerHTML = "";
    
    const specificRules = synergyDb[selectedBuilderCore] || [];
    const matchedRoles = [];
    
    specificRules.forEach(rule => {
        const hasAllSkills = rule.required.every(skill => selectedBuilderSkills.includes(skill));
        if (hasAllSkills) {
            matchedRoles.push(rule);
        }
    });
    
    if (matchedRoles.length > 0) {
        matchedRoles.forEach(role => {
            const card = document.createElement("div");
            card.style.background = "rgba(16, 185, 129, 0.05)";
            card.style.border = "1px solid rgba(16, 185, 129, 0.2)";
            card.style.borderRadius = "var(--radius-sm)";
            card.style.padding = "16px";
            card.style.marginBottom = "12px";
            card.style.animation = "scaleIn 0.3s ease";
            
            card.innerHTML = `
                <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 6px;">
                    <span style="font-weight: 700; color: var(--secondary); font-size: 0.95rem;">${role.role}</span>
                    <span class="result-badge" style="background: rgba(16,185,129,0.1); color: var(--secondary); border: 1px solid rgba(16,185,129,0.2); font-size: 0.7rem; padding: 2px 6px; border-radius: 4px; text-transform: uppercase; font-weight:700;">Sinerji Eşleşmesi</span>
                </div>
                <p style="font-size: 0.85rem; color: var(--text-muted); line-height: 1.5; margin: 0;">${role.desc}</p>
                <div style="margin-top: 8px; font-size: 0.75rem; color: var(--text-muted);">Gerekenler: <span style="color: #ffffff;">${role.required.join(" + ")}</span></div>
            `;
            tSynergyContent.appendChild(card);
        });
    } else {
        const fallback = generalSynergies[selectedBuilderCore] || {
            role: "Çok Yönlü Uzman",
            desc: "Seçtiğiniz yatay becerileri bu temel disiplinle harmanlayarak, kendinizi esnek ve yeni çağın gereklerine hazır hale getirebilirsiniz."
        };
        
        const card = document.createElement("div");
        card.style.background = "rgba(255, 255, 255, 0.02)";
        card.style.border = "1px solid var(--border-color)";
        card.style.borderRadius = "var(--radius-sm)";
        card.style.padding = "16px";
        card.style.animation = "scaleIn 0.3s ease";
        
        card.innerHTML = `
            <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 6px;">
                <span style="font-weight: 700; color: #ffffff; font-size: 0.95rem;">${fallback.role}</span>
                <span class="result-badge" style="background: rgba(255,255,255,0.05); color: var(--text-muted); border: 1px solid var(--border-color); font-size: 0.7rem; padding: 2px 6px; border-radius: 4px; text-transform: uppercase; font-weight:700;">Genel Sinerji</span>
            </div>
            <p style="font-size: 0.85rem; color: var(--text-muted); line-height: 1.5; margin: 0;">${fallback.desc}</p>
            <p style="font-size: 0.75rem; color: #a78bfa; margin-top: 8px; font-weight: 500; margin: 8px 0 0 0;">💡 İpucu: Listeden başka yatay beceriler ekleyerek özel sinerji eşleşmelerini tetikleyin!</p>
        `;
        tSynergyContent.appendChild(card);
    }
}

// --- CHECKLIST REORDERING & SMART ASSISTANT ---
function moveChecklistItem(id, direction) {
    const idx = checklistItems.findIndex(item => item.id === id);
    if (idx === -1) return;
    
    const newIdx = idx + direction;
    if (newIdx < 0 || newIdx >= checklistItems.length) return;
    
    const temp = checklistItems[idx];
    checklistItems[idx] = checklistItems[newIdx];
    checklistItems[newIdx] = temp;
    
    saveChecklist();
    renderChecklist();
}

function updateChecklistAnalysis() {
    if (checklistItems.length === 0) {
        checklistAnalysisPanel.style.display = "none";
        return;
    }
    
    checklistAnalysisPanel.style.display = "block";
    
    let totalScore = 0;
    let sustainCount = 0;
    let flexCount = 0;
    
    checklistItems.forEach(item => {
        let itemScore = 0;
        if (item.sustain) {
            itemScore += 35;
            sustainCount++;
        }
        if (item.flex) {
            itemScore += 35;
            flexCount++;
        }
        if (item.passion) {
            itemScore += 30;
        }
        totalScore += itemScore;
    });
    
    const avgScore = Math.round(totalScore / checklistItems.length);
    const sustainPercent = Math.round((sustainCount / checklistItems.length) * 100);
    const flexPercent = Math.round((flexCount / checklistItems.length) * 100);
    
    statAvgScore.textContent = `%${avgScore}`;
    statAvgSustain.textContent = `%${sustainPercent}`;
    statAvgFlex.textContent = `%${flexPercent}`;
    
    setStatColor(statAvgScore, avgScore);
    setStatColor(statAvgSustain, sustainPercent);
    setStatColor(statAvgFlex, flexPercent);
    
    let feedback = "";
    if (avgScore >= 75) {
        feedback = "Mükemmel dengeli bir tercih listesi! Listenizdeki bölümler genel olarak yapay zeka karşısında dayanıklı, esnek ve başka sektörlere taşınabilir nitelikte temel disiplinlerden oluşuyor. Kariyerinizi kurgularken sağlam bir zemindesiniz.";
    } else if (avgScore >= 45) {
        feedback = "Listeniz dengeli bir dağılıma sahip. Hem esnek disiplinler hem de bazı dar kapsamlı alanlar barındırıyor. Dar alanları seçerken onların mesleki rutinlerini yapay zeka araçlarıyla nasıl zenginleştirebileceğinizi mutlaka araştırın.";
    } else {
        feedback = "⚠️ Listenizdeki bölümler ağırlıklı olarak yapay zekanın otomatize etmeye en meyilli olduğu, rutin odaklı veya düşük esneklikteki 'dar meslekleri' barındırıyor. Bu bölümleri seçecekseniz bile, T-Builder sayfamıza giderek kendinizi Python, İngilizce, Agile gibi yatay becerilerle mutlaka desteklemeli ve donatmalısınız.";
    }
    
    analysisFeedbackText.innerHTML = feedback;
    
    analysisRecommendedSkills.innerHTML = "";
    
    const suggested = new Set();
    checklistItems.forEach(item => {
        const nameLower = item.name.toLowerCase();
        if (nameLower.includes("matematik") || nameLower.includes("istatistik") || nameLower.includes("yazilim") || nameLower.includes("bilgisayar") || nameLower.includes("kod")) {
            suggested.add("Python ile Veri Analizi");
            suggested.add("SQL & Veritabanı");
            suggested.add("Proje Yönetimi (Agile)");
        } else if (nameLower.includes("tasarim") || nameLower.includes("sanat") || nameLower.includes("mimarlik") || nameLower.includes("grafik")) {
            suggested.add("Kullanıcı Deneyimi (UX)");
            suggested.add("Temel Tasarım İlkeleri");
            suggested.add("Video Kurgu & Montaj");
        } else {
            suggested.add("İleri Düzey İngilizce");
            suggested.add("Prompt Tasarımı");
            suggested.add("Sunum ve İkna Becerileri");
        }
    });
    
    if (suggested.size === 0) {
        suggested.add("İleri Düzey İngilizce");
        suggested.add("Prompt Tasarımı");
    }
    
    Array.from(suggested).slice(0, 4).forEach(skill => {
        const span = document.createElement("span");
        span.className = "skill-tag";
        span.style.background = "rgba(139, 92, 246, 0.1)";
        span.style.color = "#a78bfa";
        span.style.border = "1px solid rgba(139, 92, 246, 0.2)";
        span.textContent = skill;
        analysisRecommendedSkills.appendChild(span);
    });
}

function setStatColor(element, score) {
    element.className = "stat-num";
    if (score >= 75) {
        element.style.color = "var(--secondary)";
    } else if (score >= 45) {
        element.style.color = "#f59e0b";
    } else {
        element.style.color = "#ef4444";
    }
}

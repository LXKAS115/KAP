// ==========================================
// BASE DE DONNÉES DES QUESTIONS (THÈME : PLANTES)
// ==========================================
const questionCatalog = {
    botanique: [
        { question: "Quel est l'organe principal de la photosynthèse ?", options: ["La racine", "La tige", "La feuille", "La fleur"], correctAnswer: 2, explanation: "Les feuilles contiennent la chlorophylle nécessaire à la transformation de la lumière." },
        { question: "Comment appelle-t-on une plante qui perd ses feuilles en hiver ?", options: ["Persistante", "Caduque", "Vivace", "Annuelle"], correctAnswer: 1, explanation: "Les plantes caduques entrent en repos végétatif en perdant leur feuillage." },
        { question: "Le xylème transporte quel type de sève ?", options: ["Sève élaborée", "Sève brute", "Sève sucrée", "Sève descendante"], correctAnswer: 1, explanation: "Le xylème conduit l'eau et les minéraux des racines vers le haut." },
        { question: "Quelle famille de plantes fixe l'azote dans le sol ?", options: ["Rosacées", "Fabacées (Légumineuses)", "Astéracées", "Poacées"], correctAnswer: 1, explanation: "Elles possèdent des nodosités symbiotiques sur leurs racines." },
        { question: "Qu'est-ce qu'un rhizome ?", options: ["Une racine verticale", "Une tige souterraine horizontale", "Un parasite", "Une fleur"], correctAnswer: 1, explanation: "Le rhizome permet la survie et la multiplication (ex: Iris, Bambou)." },
        { question: "Comment s'appelle l'organe femelle d'une fleur ?", options: ["L'étamine", "Le sépale", "Le pistil", "Le pétale"], correctAnswer: 2, explanation: "Le pistil reçoit le pollen pour la fécondation." },
        { question: "La sève élaborée circule dans quel tissu ?", options: ["Le phloème", "Le xylème", "Le parenchyme", "Le liège"], correctAnswer: 0, explanation: "Le phloème distribue les sucres produits par les feuilles." },
        { question: "Qu'est-ce qu'une plante monoïque ?", options: ["Fleurs mâles et femelles sur le même pied", "Sexes séparés sur deux pieds", "Sans fleurs", "Plante aquatique"], correctAnswer: 0, explanation: "Le maïs est un exemple de plante monoïque." },
        { question: "Quel est le rôle des stomates ?", options: ["Absorber l'eau", "Échanges gazeux et transpiration", "Produire des graines", "Soutenir la tige"], correctAnswer: 1, explanation: "Ils sont situés principalement sous les feuilles." },
        { question: "Une plante halophile aime particulièrement...", options: ["L'ombre", "Le sel", "Le calcaire", "Le froid"], correctAnswer: 1, explanation: "On les trouve souvent en bord de mer." },
        { question: "Qu'est-ce que l'ovule devient après fécondation ?", options: ["Un fruit", "Une graine", "Un pétale", "Une racine"], correctAnswer: 1, explanation: "L'ovule devient graine, l'ovaire devient fruit." },
        { question: "Le phototropisme est la réaction d'une plante à...", options: ["L'eau", "La gravité", "La lumière", "Le toucher"], correctAnswer: 2, explanation: "La plante s'oriente vers la source lumineuse." },
        { question: "Les Gymnospermes sont caractérisés par :", options: ["Des graines nues", "Des fleurs colorées", "L'absence de racines", "Des fruits charnus"], correctAnswer: 0, explanation: "Le sapin est un Gymnosperme." },
        { question: "Le pH idéal pour une plante acidophile est :", options: ["Entre 4.5 et 5.5", "7.0", "Entre 8 et 9", "14"], correctAnswer: 0, explanation: "Elles aiment les sols acides (Terre de bruyère)." },
        { question: "Qu'est-ce que la dormance ?", options: ["Une maladie", "Un état de vie ralentie", "La floraison", "La mort de la plante"], correctAnswer: 1, explanation: "C'est une protection contre les mauvaises conditions." }
    ],
    entretien: [
        { question: "Quel outil utilise-t-on pour tailler les branches mortes de gros diamètre ?", options: ["Sécateur", "Échenilloir", "Coupe-branche (ébrancheur)", "Cisaille"], correctAnswer: 2, explanation: "Les bras longs démultiplient la force." },
        { question: "Le scarificateur permet d'éliminer :", options: ["Les insectes", "Le feutrage et la mousse du gazon", "Les feuilles mortes", "Les mauvaises herbes"], correctAnswer: 1, explanation: "Il griffe le sol pour l'aérer." },
        { question: "Quelle est la règle d'or pour la taille des arbustes à fleurs ?", options: ["Tailler en hiver", "Tailler après la floraison", "Tailler avant la floraison", "Ne jamais tailler"], correctAnswer: 1, explanation: "Pour ne pas couper les futurs boutons floraux." },
        { question: "Le 'paillage' organique sert à :", options: ["Décorer", "Nourrir le sol et garder l'humidité", "Attirer les oiseaux", "Tuer la plante"], correctAnswer: 1, explanation: "Il limite aussi la pousse des adventices." },
        { question: "Que signifie 'élaguer' ?", options: ["Planter des arbres", "Couper des branches d'arbres", "Arroser en pluie", "Mettre de l'engrais"], correctAnswer: 1, explanation: "Cela sert à sécuriser ou orienter la croissance." },
        { question: "L'arrosage au goutte-à-goutte est apprécié car :", options: ["Il est joli", "Il économise l'eau et cible les racines", "Il mouille les feuilles", "Il fait du bruit"], correctAnswer: 1, explanation: "C'est la méthode la plus efficiente." },
        { question: "Un sécateur 'by-pass' (lames croisantes) est utilisé pour :", options: ["Le bois mort", "Le bois vert", "La pierre", "Le fer"], correctAnswer: 1, explanation: "Il fait une coupe franche sans écraser les tissus." },
        { question: "La taille de formation se pratique sur :", options: ["Les vieux arbres", "Les jeunes sujets", "Les fleurs fanées", "Les racines"], correctAnswer: 1, explanation: "Elle donne la structure future de la plante." },
        { question: "Le terme 'adventice' désigne :", options: ["Une plante rare", "Une mauvaise herbe", "Un engrais", "Un outil"], correctAnswer: 1, explanation: "C'est une plante qui pousse là où on ne veut pas." },
        { question: "Qu'est-ce que le terreautage ?", options: ["Enlever la terre", "Apporter une fine couche de terreau sur un gazon", "Planter en pot", "Arroser beaucoup"], correctAnswer: 1, explanation: "Cela régénère la pelouse." }
    ],
    pepiniere: [
        { question: "Qu'est-ce que le 'chignonage' ?", options: ["Une coiffure", "Les racines qui tournent en rond dans le pot", "Une maladie des feuilles", "Le greffage"], correctAnswer: 1, explanation: "Cela arrive quand la plante reste trop longtemps en pot." },
        { question: "Le bouturage est une multiplication...", options: ["Sexuée", "Végétative (Asexuée)", "Par graines", "Par pollinisation"], correctAnswer: 1, explanation: "On obtient un clone de la plante mère." },
        { question: "La 'stratification' des graines consiste à :", options: ["Les écraser", "Les soumettre au froid pour lever la dormance", "Les peindre", "Les cuire"], correctAnswer: 1, explanation: "Cela simule l'hiver pour déclencher la germination." },
        { question: "Un plant 'en motte' est vendu avec :", options: ["Un pot en plastique", "Sa terre d'origine entourée d'une tontine", "Racines nues", "Dans de l'eau"], correctAnswer: 1, explanation: "Souvent utilisé pour les gros arbres." },
        { question: "Le substrat de culture 'perlite' sert à :", options: ["Nourrir la plante", "Alléger et aérer le mélange", "Colorer la terre", "Tuer les champignons"], correctAnswer: 1, explanation: "C'est une roche volcanique expansée." },
        { question: "Le 'repiquage' intervient après :", options: ["La récolte", "Le semis", "La vente", "La taille"], correctAnswer: 1, explanation: "On transfère les jeunes plantules vers un pot individuel." },
        { question: "Une serre multitunnel est idéale pour :", options: ["La production à grande échelle", "Le jardinage de balcon", "Garder une seule plante", "Ranger les outils"], correctAnswer: 0, explanation: "Elle permet de couvrir de grandes surfaces." },
        { question: "Le porte-greffe apporte :", options: ["Les fruits", "La vigueur et la résistance au sol", "La couleur des fleurs", "Le parfum"], correctAnswer: 1, explanation: "C'est la partie inférieure de la greffe." }
    ],
    vente: [
        { question: "Que signifie le sigle 'NPK' sur un engrais ?", options: ["Nature-Plante-Karaté", "Azote-Phosphore-Potassium", "Nickel-Plomb-Krypton", "Nouvelle-Plante-Kit"], correctAnswer: 1, explanation: "Ce sont les 3 nutriments principaux." },
        { question: "Un client veut une plante fleurie pour un intérieur sombre :", options: ["Spathiphyllum", "Géranium", "Lavande", "Pétunia"], correctAnswer: 0, explanation: "Le Spathiphyllum tolère bien le manque de lumière." },
        { question: "Comment reconnaître un excès d'eau ?", options: ["Feuilles sèches", "Feuilles jaunies et tiges molles", "Feuilles bleues", "Croissance rapide"], correctAnswer: 1, explanation: "Les racines pourrissent par manque d'oxygène." },
        { question: "La terre de bruyère est utilisée pour :", options: ["Les cactus", "Les hortensias et azalées", "Le gazon", "Les oliviers"], correctAnswer: 1, explanation: "Elle est acide et légère." },
        { question: "Le nom de genre dans 'Rosa canina' est :", options: ["Rosa", "Canina", "Les deux", "Aucun"], correctAnswer: 0, explanation: "Le premier mot est le Genre, le second l'Espèce." }
    ],
    paysagisme: [
        { question: "Quelle est la largeur minimale d'une allée pour deux personnes ?", options: ["40 cm", "80 cm", "120 cm", "300 cm"], correctAnswer: 2, explanation: "C'est la norme pour une circulation confortable." },
        { question: "L'exposition 'Adret' désigne :", options: ["Le versant à l'ombre", "Le versant au soleil", "Le sommet", "Le fond de la vallée"], correctAnswer: 1, explanation: "En montagne, c'est le côté exposé au sud." },
        { question: "Un plan de masse représente le jardin vu :", options: ["De face", "De profil", "De dessus", "En 3D"], correctAnswer: 2, explanation: "C'est une vue aérienne à l'échelle." },
        { question: "Le 'point focal' dans un jardin sert à :", options: ["Arroser", "Attirer l'œil sur un élément précis", "Cacher le voisin", "Mesurer la terre"], correctAnswer: 1, explanation: "Une statue, un bel arbre ou une fontaine." }
    ],
    fleuristerie: [
        { question: "Pourquoi recoupe-t-on les tiges en biseau ?", options: ["Pour faire joli", "Pour augmenter la surface d'absorption d'eau", "Pour qu'elles tiennent debout", "Pour enlever les épines"], correctAnswer: 1, explanation: "Cela prolonge la durée de vie du bouquet." },
        { question: "Qu'est-ce que le 'mousse florale' ?", options: ["Une plante parasite", "Un support pour piquer les fleurs", "Une maladie", "Un engrais"], correctAnswer: 1, explanation: "Elle retient l'eau pour les compositions." },
        { question: "Laquelle est une fleur de bulbe ?", options: ["Tulipe", "Rose", "Marguerite", "Lilas"], correctAnswer: 0, explanation: "La tulipe pousse à partir d'un bulbe." },
        { question: "Un bouquet 'rond' se travaille avec la technique :", options: ["De l'empilement", "De la vrille (spirale)", "Du collage", "Du tressage"], correctAnswer: 1, explanation: "Toutes les tiges tournent dans le même sens." }
    ]
};

// ==========================================
// LOGIQUE DE L'APPLICATION
// ==========================================

// Variables globales
let currentQuestions = [];
let currentQuestionIndex = 0;
let score = 0;
let userAnswers = [];
let traineeData = {};
let timerInterval;
let timeElapsed = 0; // En secondes

// Sélecteurs DOM
const DOM = {
    themeToggle: document.getElementById('theme-toggle'),
    screens: {
        welcome: document.getElementById('screen-welcome'),
        quiz: document.getElementById('screen-quiz'),
        result: document.getElementById('screen-result')
    },
    form: document.getElementById('trainee-form'),
    quiz: {
        questionText: document.getElementById('question-text'),
        optionsContainer: document.getElementById('options-container'),
        btnNext: document.getElementById('btn-next'),
        counter: document.getElementById('question-counter'),
        progressBar: document.getElementById('progress-bar'),
        timer: document.getElementById('timer')
    },
    result: {
        feedbackName: document.getElementById('trainee-feedback-name'),
        scoreDisplay: document.getElementById('final-score'),
        totalDisplay: document.getElementById('total-questions'),
        message: document.getElementById('result-message'),
        correctionContainer: document.getElementById('detailed-correction'),
        btnExport: document.getElementById('btn-export'),
        btnRestart: document.getElementById('btn-restart')
    }
};

// Initialisation
function initApp() {
    setupEventListeners();
    checkTheme();
}

// Gestion des Événements
function setupEventListeners() {
    DOM.themeToggle.addEventListener('click', toggleTheme);
    DOM.form.addEventListener('submit', handleStartQuiz);
    DOM.quiz.btnNext.addEventListener('click', handleNextQuestion);
    DOM.result.btnRestart.addEventListener('click', resetApp);
    DOM.result.btnExport.addEventListener('click', exportResults);
}

// Gestion du Thème (Clair/Sombre)
function toggleTheme() {
    const html = document.documentElement;
    const currentTheme = html.getAttribute('data-theme');
    const newTheme = currentTheme === 'light' ? 'dark' : 'light';
    html.setAttribute('data-theme', newTheme);
}

function checkTheme() {
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
        document.documentElement.setAttribute('data-theme', 'dark');
    }
}

// Démarrer le Quiz
function handleStartQuiz(e) {
    e.preventDefault();
    
    // 1. Récupérer les secteurs sélectionnés
    const selectedSectors = Array.from(document.querySelectorAll('input[name="sector"]:checked'))
                                 .map(cb => cb.value);
    
    if (selectedSectors.length === 0) {
        alert("Veuillez choisir au moins un secteur !");
        return;
    }

    // 2. Fusionner les questions des secteurs choisis
    currentQuestions = [];
    selectedSectors.forEach(sector => {
        currentQuestions = currentQuestions.concat(questionCatalog[sector]);
    });

    // 3. Mélanger les questions (Optionnel mais recommandé)
    currentQuestions.sort(() => Math.random() - 0.5);

    // ... reste du code pour lancer le quiz ...
    currentQuestionIndex = 0;
    score = 0;
    userAnswers = [];
    timeElapsed = 0;
    switchScreen('quiz');
    startTimer();
    loadQuestion();
}

// Naviguer entre les écrans
function switchScreen(screenName) {
    Object.values(DOM.screens).forEach(screen => screen.classList.remove('active'));
    DOM.screens[screenName].classList.add('active');
}

// Chronomètre
function startTimer() {
    clearInterval(timerInterval);
    timerInterval = setInterval(() => {
        timeElapsed++;
        const minutes = Math.floor(timeElapsed / 60).toString().padStart(2, '0');
        const seconds = (timeElapsed % 60).toString().padStart(2, '0');
        DOM.quiz.timer.textContent = `${minutes}:${seconds}`;
    }, 1000);
}

// Charger une question
function loadQuestion() {
    const q = currentQuestions[currentQuestionIndex];
    DOM.quiz.questionText.textContent = q.question;
    DOM.quiz.counter.textContent = `Question ${currentQuestionIndex + 1} / ${currentQuestions.length}`;
    
    // Mettre à jour la barre de progression
    const progressPercent = ((currentQuestionIndex) / currentQuestions.length) * 100;
    DOM.quiz.progressBar.style.width = `${progressPercent}%`;

    // Générer les options
    DOM.quiz.optionsContainer.innerHTML = '';
    DOM.quiz.btnNext.disabled = true;

    q.options.forEach((option, index) => {
        const btn = document.createElement('button');
        btn.className = 'option-btn';
        btn.textContent = option;
        btn.addEventListener('click', () => selectOption(index, btn));
        DOM.quiz.optionsContainer.appendChild(btn);
    });
}

// Sélectionner une option
function selectOption(selectedIndex, buttonElement) {
    // Désactiver tous les boutons
    const buttons = DOM.quiz.optionsContainer.querySelectorAll('.option-btn');
    buttons.forEach(btn => {
        btn.classList.remove('selected');
        btn.disabled = true; // Empêche de changer de réponse
    });

    // Mettre en évidence la sélection
    buttonElement.classList.add('selected');
    
    const q = currentQuestions[currentQuestionIndex];
    const isCorrect = selectedIndex === q.correctAnswer;

    // Enregistrer la réponse
    userAnswers.push({
        questionId: q.id,
        questionText: q.question,
        selectedOption: selectedIndex,
        selectedText: q.options[selectedIndex],
        correctOption: q.correctAnswer,
        correctText: q.options[q.correctAnswer],
        isCorrect: isCorrect,
        explanation: q.explanation
    });

    // Indiquer visuellement si c'est bon ou mauvais (Mode entrainement)
    if (isCorrect) {
        buttonElement.classList.add('correct');
        score++;
    } else {
        buttonElement.classList.add('wrong');
        buttons[q.correctAnswer].classList.add('correct');
    }

    DOM.quiz.btnNext.disabled = false;
}

// Passer à la question suivante ou terminer
function handleNextQuestion() {
    currentQuestionIndex++;
    
    if (currentQuestionIndex < currentQuestions.length) {
        loadQuestion();
    } else {
        endQuiz();
    }
}

// Fin du Quiz
function endQuiz() {
    clearInterval(timerInterval);
    
    // Mettre à jour la barre de progression à 100%
    DOM.quiz.progressBar.style.width = `100%`;

    setTimeout(() => {
        generateResults();
        switchScreen('result');
    }, 500);
}

function setupAntiCheat() {
    document.addEventListener("visibilitychange", () => {
        if (document.hidden && currentQuestions.length > 0) {
            // Affiche l'alerte rouge
            const overlay = document.getElementById('warning-overlay');
            overlay.style.display = 'flex';
            
            // On la cache après 3 secondes
            setTimeout(() => { 
                overlay.style.display = 'none'; 
            }, 3000);
        }
    });
}

function saveProgress() {
    const dataToSave = {
        name: document.getElementById('trainee-name').value,
        index: currentQuestionIndex,
        score: score,
        answers: userAnswers,
        sectors: Array.from(document.querySelectorAll('input[name="sector"]:checked')).map(cb => cb.value)
    };
    localStorage.setItem('evaluation_backup', JSON.stringify(dataToSave));
}

// À appeler au chargement de la page (init)
function checkResume() {
    const backup = localStorage.getItem('evaluation_backup');
    if (backup) {
        const confirmResume = confirm("Une session précédente a été trouvée. Voulez-vous reprendre ?");
        if (confirmResume) {
            const data = JSON.parse(backup);
            // Recharger les données et sauter à la question actuelle
            // (Logique de reprise...)
        }
    }
}

let questionCountdown;
function startQuestionTimer() {
    let timeLeft = 30; // 30 secondes par question
    document.getElementById('question-timer').textContent = timeLeft;
    
    clearInterval(questionCountdown);
    questionCountdown = setInterval(() => {
        timeLeft--;
        document.getElementById('question-timer').textContent = timeLeft;
        
        if (timeLeft <= 0) {
            clearInterval(questionCountdown);
            handleTimeOut(); // Fonction à créer pour passer à la suite en cas d'échec
        }
    }, 1000);
}

// Générer et afficher les résultats
function generateResults() {
    DOM.result.feedbackName.textContent = `Merci ${traineeData.name} (Dépt. ${traineeData.department}). Voici votre bilan :`;
    
    // Animation du score (Cercle CSS)
    const percentage = Math.round((score / currentQuestions.length) * 100);
    const circle = document.querySelector('.score-circle');
    circle.style.background = `conic-gradient(var(--primary-color) ${percentage}%, var(--border-color) 0%)`;
    
    DOM.result.scoreDisplay.textContent = score;
    DOM.result.totalDisplay.textContent = currentQuestions.length;

    // Message personnalisé
    if (percentage === 100) {
        DOM.result.message.textContent = "Parfait ! Vous maîtrisez tous les concepts.";
        DOM.result.message.style.color = "var(--success-color)";
    } else if (percentage >= 60) {
        DOM.result.message.textContent = "Bon travail, mais quelques révisions sont nécessaires.";
        DOM.result.message.style.color = "var(--primary-color)";
    } else {
        DOM.result.message.textContent = "Insuffisant. Il est recommandé de revoir les règles de l'entreprise.";
        DOM.result.message.style.color = "var(--error-color)";
    }

    // Générer la correction détaillée
    DOM.result.correctionContainer.innerHTML = '<h3>Correction détaillée :</h3>';
    
    userAnswers.forEach((ans, index) => {
        const item = document.createElement('div');
        item.className = `correction-item ${ans.isCorrect ? 'is-correct' : 'is-wrong'}`;
        
        item.innerHTML = `
            <div class="correction-q">Q${index + 1}: ${ans.questionText}</div>
            <div class="correction-a">
                <strong>Votre réponse :</strong> <span style="color: ${ans.isCorrect ? 'var(--success-color)' : 'var(--error-color)'}">${ans.selectedText}</span>
            </div>
            ${!ans.isCorrect ? `<div class="correction-a"><strong>Bonne réponse :</strong> ${ans.correctText}</div>` : ''}
            <div class="correction-exp">${ans.explanation}</div>
        `;
        
        DOM.result.correctionContainer.appendChild(item);
    });
}

function generateRevisionSheet() {
    let html = "<h3>📚 Tes axes de progression :</h3><ul>";
    
    // On parcourt les réponses du stagiaire
    state.answers.forEach(ans => {
        if (!ans.success) {
            // On ajoute le conseil spécifique à la question ratée
            html += `<li><strong>${ans.theme} :</strong> ${ans.advice}</li>`;
        }
    });
    
    html += "</ul>";
    document.getElementById('revision-zone').innerHTML = html;
}

// Exporter les résultats (Téléchargement d'un fichier)
// Cela compense l'absence de base de données backend
function exportResults() {
    const finalData = {
        trainee: traineeData,
        quizStats: {
            score: score,
            total: currentQuestions.length,
            timeElapsedSeconds: timeElapsed
        },
        details: userAnswers
    };

    const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(finalData, null, 2));
    const downloadAnchorNode = document.createElement('a');
    downloadAnchorNode.setAttribute("href", dataStr);
    downloadAnchorNode.setAttribute("download", `evaluation_${traineeData.name.replace(/\s+/g, '_')}.json`);
    document.body.appendChild(downloadAnchorNode);
    downloadAnchorNode.click();
    downloadAnchorNode.remove();
}

// Réinitialiser l'application
function resetApp() {
    DOM.form.reset();
    switchScreen('welcome');
}

// Lancer l'initialisation au chargement
document.addEventListener('DOMContentLoaded', initApp);

// --- LOGIQUE DU CHANGEMENT DE THÈME ---
const themeToggle = document.getElementById('theme-toggle');
const htmlElement = document.documentElement;

themeToggle.addEventListener('click', () => {
    // On regarde le thème actuel
    const currentTheme = htmlElement.getAttribute('data-theme');
    
    // On bascule
    if (currentTheme === 'light') {
        htmlElement.setAttribute('data-theme', 'dark');
        // Optionnel : on enregistre le choix pour la prochaine fois
        localStorage.setItem('user-theme', 'dark');
    } else {
        htmlElement.setAttribute('data-theme', 'light');
        localStorage.setItem('user-theme', 'light');
    }
});

// --- AU CHARGEMENT : APPLIQUER LE THÈME SAUVEGARDÉ ---
const savedTheme = localStorage.getItem('user-theme');
if (savedTheme) {
    htmlElement.setAttribute('data-theme', savedTheme);
}

document.addEventListener("DOMContentLoaded", () => {
    const bg = document.querySelector(".background");

    if (bg) {
        document.addEventListener("mousemove", (e) => {
            const x = e.clientX;
            const y = e.clientY;

            bg.style.background = `
                radial-gradient(circle at ${x}px ${y}px, rgba(0,150,255,0.6), transparent 40%),
                radial-gradient(circle at ${x/2}px ${y/2}px, rgba(0,50,255,0.3), transparent 50%),
                #000
            `;
        });
    }
});

async function sendScoreToServer() {
    if (!currentUser) return;

    const data = {
        user: currentUser.email,
        score: score,
        total: currentQuestions.length,
        time: timeElapsed
    };

    await fetch("/save-score", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
    });
}

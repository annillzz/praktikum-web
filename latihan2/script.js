const questions = [
    { question: "Apa tag utama dalam HTML?", options: ["<head>", "<body>", "<html>", "<title>"], correct: 2 },
    { question: "Apa fungsi CSS?", options: ["Mengatur tampilan", "Membuat struktur", "Membuat interaksi", "Menyimpan data"], correct: 0 },
    { question: "Apa ekstensi file JavaScript?", options: [".js", ".html", ".css", ".json"], correct: 0 },
    { question: "Bootstrap digunakan untuk?", options: ["Frontend", "Backend", "Database", "Server"], correct: 0 },
    { question: "Apa ibu kota Indonesia?", options: ["Jakarta", "Surabaya", "Bandung", "Medan"], correct: 0 },
    { question: "Apa makanan khas Padang?", options: ["Rendang", "Pempek", "Gudeg", "Soto Betawi"], correct: 0 },
    { question: "Tari Saman berasal dari daerah mana?", options: ["Aceh", "Bali", "Jawa Tengah", "Sulawesi Selatan"], correct: 0 },
    { question: "Apa rumah adat dari Jawa Tengah?", options: ["Joglo", "Gadang", "Honai", "Limas"], correct: 0 },
    { question: "Gunung tertinggi di Indonesia adalah?", options: ["Gunung Semeru", "Gunung Kerinci", "Gunung Rinjani", "Puncak Jaya"], correct: 3 },
    { question: "Pulau Komodo terletak di provinsi?", options: ["Bali", "NTT", "NTB", "Sulawesi Selatan"], correct: 1 },
    { question: "Apa lagu nasional Indonesia?", options: ["Indonesia Raya", "Rayuan Pulau Kelapa", "Garuda Pancasila", "Tanah Airku"], correct: 0 },
    { question: "Apa nama kesenian wayang dari Jawa?", options: ["Wayang Golek", "Wayang Kulit", "Wayang Orang", "Semua benar"], correct: 3 },
    { question: "Apa senjata tradisional dari Sunda?", options: ["Keris", "Rencong", "Kujang", "Mandau"], correct: 2 },
    { question: "Festival budaya terbesar di Bali adalah?", options: ["Galungan", "Nyepi", "Kuningan", "Ogoh-Ogoh"], correct: 1 },
    { question: "Makanan khas Betawi yang terkenal adalah?", options: ["Ketoprak", "Pempek", "Lumpia", "Soto Banjar"], correct: 0 },
    { question: "Dimana Candi Borobudur berada?", options: ["Jawa Barat", "Jawa Timur", "Jawa Tengah", "Bali"], correct: 2 },
    { question: "Apa alat musik tradisional dari Minangkabau?", options: ["Angklung", "Gamelan", "Saluang", "Kolintang"], correct: 2 },
    { question: "Apa nama batik khas Yogyakarta?", options: ["Parang", "Mega Mendung", "Truntum", "Sidomukti"], correct: 0 },
    { question: "Apa alat musik dari Sulawesi Selatan?", options: ["Sasando", "Gambus", "Keso-Keso", "Gong"], correct: 2 },
    { question: "Apa julukan untuk Kota Surabaya?", options: ["Kota Pahlawan", "Kota Gudeg", "Kota Kembang", "Kota Batik"], correct: 0 },
    { question: "Dimana Danau Toba berada?", options: ["Sumatera Barat", "Sumatera Selatan", "Sumatera Utara", "Riau"], correct: 2 }
];

let currentIndex = 0;
let score = 0;
const questionContainer = document.getElementById('question-container');
const optionsContainer = document.getElementById('options-container');
const nextButton = document.getElementById('next-btn');
const scoreContainer = document.getElementById('score');
const correctAnswerContainer = document.getElementById('correct-answer');

function loadQuestion() {
    if (currentIndex >= questions.length) {
        questionContainer.innerHTML = `<h4>Kuis Selesai!</h4>`;
        optionsContainer.innerHTML = `<p>Skor Anda: ${score} / ${questions.length}</p>`;
        nextButton.style.display = 'none';
        correctAnswerContainer.innerHTML = '';
        return;
    }

    const question = questions[currentIndex];
    questionContainer.innerHTML = `<h4>${question.question}</h4>`;
    optionsContainer.innerHTML = '';
    correctAnswerContainer.innerHTML = '';

    question.options.forEach((option, index) => {
        const button = document.createElement('button');
        button.classList.add('btn', 'btn-outline-primary', 'btn-option');
        button.innerText = option;
        button.onclick = () => checkAnswer(index);
        optionsContainer.appendChild(button);
    });
}

function checkAnswer(selectedIndex) {
    const buttons = document.querySelectorAll('.btn-option');
    buttons.forEach((btn, index) => {
        if (index === questions[currentIndex].correct) {
            btn.classList.add('correct');
        } else if (index === selectedIndex) {
            btn.classList.add('incorrect');
        }
        btn.disabled = true;
    });

    if (selectedIndex === questions[currentIndex].correct) {
        score++;
    }
    scoreContainer.innerText = `Skor: ${score}`;
    correctAnswerContainer.innerHTML = `Jawaban benar: ${questions[currentIndex].options[questions[currentIndex].correct]}`;
}

nextButton.addEventListener('click', () => {
    currentIndex++;
    loadQuestion();
});

loadQuestion();

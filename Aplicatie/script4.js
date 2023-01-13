const quizData = [
    {
        question: "Ce este un algoritm?",
        a: "O problema de rezolvat cu ajutorul calculatorului",
        b: "Un set de pasi, repetati pentru a gasi rezultatul",
        c: "O materie de liceu",
        d: "N-am auzit niciodata de acest cuvant",
        correct: "b",
    },
    {
        question: "Ce putem afirma atunci cand clasa B mosteneste clasa A?",
        a: "Clasa A ia toate campurile si metodele clasei B",
        b: "Clasa B ia toate metodele si campurile clasei A",
        c: "Clasa B devine o copie a clasei A",
        d: "N-am auzit niciodata de clase",
        correct: "b",
    },
    {
        question: "Care sunt functiile principale ale unui server?",
        a: "Gestioneaza request-urile si serveste resursele statice",
        b: "Ne ajuta sa ne jucam pe Internet",
        c: "Este un computer care ruleaza 24/7",
        d: "N-am auzit niciodata de server",
        correct: "a",
    },
    {
        question: "Ce serviciu este potrivit pentru a gestiona cod intr-o echipa?",
        a: "Maven",
        b: "Cucumber",
        c: "GitHub",
        d: "Foaia de hartie si pixul",
        correct: "c",
    },

    {
        question:"Care este Package Manager-ul limbajului Python?",
        a: "pip",
        b: "py",
        c: "apt",
        d: "dhl",
        correct: "a",
    },
];
const quiz= document.getElementById('quiz')
const answerEls = document.querySelectorAll('.answer')
const questionEl = document.getElementById('question')
const a_text = document.getElementById('a_text')
const b_text = document.getElementById('b_text')
const c_text = document.getElementById('c_text')
const d_text = document.getElementById('d_text')
const submitBtn = document.getElementById('submit')
let currentQuiz = 0
let score = 0
loadQuiz()
function loadQuiz() {
    deselectAnswers()
    const currentQuizData = quizData[currentQuiz]
    questionEl.innerText = currentQuizData.question
    a_text.innerText = currentQuizData.a
    b_text.innerText = currentQuizData.b
    c_text.innerText = currentQuizData.c
    d_text.innerText = currentQuizData.d
}
function deselectAnswers() {
    answerEls.forEach(answerEl => answerEl.checked = false)
}
function getSelected() {
    let answer
    answerEls.forEach(answerEl => {
        if(answerEl.checked) {
            answer = answerEl.id
        }
    })
    return answer
}
submitBtn.addEventListener('click', () => {
    const answer = getSelected()
    if(answer) {
       if(answer === quizData[currentQuiz].correct) {
           score++
       }
       currentQuiz++
       if(currentQuiz < quizData.length) {
           loadQuiz()
       } else {
           quiz.innerHTML = `
           <h2>You answered ${score}/${quizData.length} questions correctly</h2>
           <button onclick="location.reload()">Reload</button>
           `
       }
    }
})

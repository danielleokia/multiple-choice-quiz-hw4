var questions = [
    {
        numb: 1,
        question : "Which of the following is correct about features of JavaScript?",
        answerA : "Javascript is a lightweight interpreted programming language ",
        answerB : "Javascript is designed for creating network-centric applications",
        answerC : "Both of the above",
        correct : "C"
    },
    {
        numb: 2,
        question : "What does HTML stand for?",
        answerA : "Hypertect Markup Language",
        answerB : "Hyperlinks and text Languages",
        answerC : "Home tool Markup Lnguage",
        correct : "A"
    },
    {
        numb: 3,
        question : "Which of the following is correct about features of JavaScript?",
        answera : "Wrong",
        answerb: "Wrong",
        answerc: "Correct",
    },
    {
        numb: 4,
        question : "Which of the following is correct about features of JavaScript?",
        answera : "Wrong",
        answerb: "Wrong",
        answerc: "Correct",
    },
    {
        numb: 5,
        question : "Which of the following is correct about features of JavaScript?",
        answera : "Wrong",
        answerb: "Wrong",
        answerc: "Correct",
    },
]

//selecting all required elements
const startQuiz = document.querySelector("#start-button")
const quizBox = document.querySelector("#quiz-box")
const results = document.querySelector("#gameover")
const answers = document.querySelector("#answer-choices")
const timer = document.querySelector("#timer")

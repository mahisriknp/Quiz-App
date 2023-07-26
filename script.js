const quizData = [{
    question: "What does HTML stand for?",
    a: "Hypertext Markup Language",
    b: "Hypertext Markdown Language",
    c: "Hyperloop Machine Language",
    d: "Helicopters Terminals Motorboats Lamborginis",
    correct: "a",
}, 
{
    question: "Which HTML tag is used to define an internal style sheet?",
    a: "css",
    b: "text/style",
    c: "style",
    d: "script",
    correct: "c",
},
{
    question: "What does CSS stand for?",
    a: "Central Style Sheets",
    b: "Cars SUVs Sailboats ",
    c: "Cascading Simple Sheets",
    d: "Cascading Style Sheets",
    correct: "d",
}, 
{
    question: "Which type of language is Javascript?",
    a: "Programming",
    b: "Markup",
    c: "Scripting",
    d: "none of the above",
    correct: "c",
},
{
    question: "The latest HTML standard is?",
    a: "HTML 4.0",
    b: "HTML 5.0",
    c: "XML",
    d: "SGML",
    correct: "b",
},
{
    question: "Full form of W3C is _____________?",
    a: "World Wide Web Consortium",
    b: "World Wide Web Community",
    c: "World wide Website Community",
    d: "none of the above",
    correct: "a",
},
{
    question: " When is the body tag used?",
    a: "after HEAD tag",
    b: "after EM tag",
    c: "after TITLE tag",
    d: "after FORM tag",
    correct: "a",
},
{
    question: " How many sizes of headers are available in HTML by default?",
    a: "5",
    b: "2",
    c: "3",
    d: "6",
    correct: "d",
},
{
    question: "How can we change the background color of an element?",
    a: "color",
    b: "background-color",
    c: "Both a and b",
    d: "none of the above",
    correct: "b",
},
{
    question: "In how many ways can CSS be written in?",
    a: "2",
    b: "1",
    c: "3",
    d: "4",
    correct: "c",
},
 ];
const quiz = document.getElementById("quiz");
const answerElements = document.querySelectorAll(".answer");
const questionElement = document.getElementById("question");
const option1_text = document.getElementById("option1_text");
const option2_text = document.getElementById("option2_text");
const option3_text = document.getElementById("option3_text");
const option4_text = document.getElementById("option4_text");
const submitButton = document.getElementById("submit");
let currentQuiz = 0;
let score = 0;
const deselectAnswers = () => {
    answerElements.forEach((answer) => (answer.checked = false));
};
const getSelected = () => {
    let answer;
    answerElements.forEach((answerElement) => {
        if (answerElement.checked) answer = answerElement.id;
    });
    return answer;
};
const loadQuiz = () => {
    deselectAnswers();
    const currentQuizData = quizData[currentQuiz];
    questionElement.innerText = currentQuizData.question;
    option1_text.innerText = currentQuizData.a;
    option2_text.innerText = currentQuizData.b;
    option3_text.innerText = currentQuizData.c;
    option4_text.innerText = currentQuizData.d;
};
loadQuiz();
submitButton.addEventListener("click", () => {
    const answer = getSelected();
    if (answer) {
        if (answer === quizData[currentQuiz].correct) score++;
        currentQuiz++;
        if (currentQuiz < quizData.length) loadQuiz();
        else {
            quiz.innerHTML = ` <h2>You answered ${score}/${quizData.length} questions correctly</h2> 
                <button onclick="history.go(0)">Play Again</button> `
        }
    }
});
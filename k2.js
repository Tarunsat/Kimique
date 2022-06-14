const quizData = [
    {
        question: "Location where in the proposal happened?",
        a: "In the hostel room",
        b: "Next to the lake",
        c: "In Draco's place",
        d: "In the E-block toilet",
        correct: "d",
    },
    {
        question: "What is the red U shaped fat vessel in the hand called in this picture?",
        a: "DPA",
        b: "Ulnar artery",
        c: "SPA",
        d: "Radial artery",
        correct: "a",
    },
    {
        question: "What does HTML stand for?",
        a: "Hypertext Markup Language",
        b: "Hypertext Markdown Language",
        c: "Hyperloop Machine Language",
        d: "Helicopters Terminals Motorboats Lamborginis",
        correct: "a",
    },
    {
        question: "Who's heart have you stolen?",
        a: "Tharun Sathish",
        b: "Tarun Satish",
        c: "Tharun Satheesh",
        d: "Tarun Satheesh",
        correct: "d",
    },
    {
        question: "Choose a body part in the image above",
        a: "",
        b: "",
        c: "",
        d: "",
        correct: "",
    },
    {
        question: "What type of bone is the humerus?",
        a: "Long bone",
        b: "Irregular bone",
        c: "Sesamoid bone",
        d: "Flat bone",
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

let key=0;
let currentQuiz = 0
let score = 0


loadQuiz(4);
function loadQuiz(i) {

    deselectAnswers()

    const currentQuizData = quizData[i]

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

function shlongquestion()
{
    alert("Hey, what're you clicking on XD");
}

function heartquestion()
{
    currentQuiz=3;
    loadQuiz(3);
}

function handquestion()
{
    currentQuiz=1;
    loadQuiz(1);
}
function humerusquestion()
{
    currentQuiz=5;
    loadQuiz(5);
}
function femurquestion()
{
    currentQuiz=0;
    loadQuiz(0);
}
if(key==2)
    {
        window.open("splash2.html").focus();
    }



submitBtn.addEventListener('click', () => {
    const answer = getSelected()
    if(answer) {
       if(answer === quizData[currentQuiz].correct) {
           score++
           loadQuiz(4);
       }

       

       else {
        alert("Try Again");
                     loadQuiz(4);
       }
    }
    if(score==2 && score>0)
         {
             key++;
             window.open("splash.html").focus();
       }
    if(score==4)
    {
        window.open("splash2.html").focus();
    }
})
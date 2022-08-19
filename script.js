const quizData =[
    {
        question : "What is the most used Programming Language in 2022?",
        a : "Python",
        b : "JavaScript",
        c : "Java",
        d : "C++",
        correct : "b"
    },
    {
        question : "Who is Prime Minister of India?",
        a : "Narendra Modi",
        b : "Rahul Gandhi(papu)",
        c : "Yogi Adityanath",
        d : "Amit Shah",
        correct : "a"
    },
    {
        question : "Where was the electricity supply first introduced in India?",
        a : "Mahanadi",
        b : "Godawari",
        c : "Cauvery",
        d : "Krishna",
        correct : "c"
    },
    {
        question : "Which state has the largest area?",
        a : "Maharashtra",
        b : "Madhya Pradesh",
        c : "Uttar Pradesh",
        d : "Rajasthan",
        correct : "d"
    },
    {
       question : "As you go down into a well, your weight?",
        a : "increases slightly" ,
        b : "decreases slightly",
        c : "remains exactly the same",
        d : "None of the above",
        correct : "b"
   },
   {
       question : "What are the types of activity within demand management?",
       a : "Activity based, Business activity patterns and user profiles",
       b : "Analytical based, Shaping user behaviou",
       c : "Activity based, Access Management",
       d : "Analytical based, Business activity patterns and user profile",
       correct : "a"
   }
];

const answerEl = document.querySelectorAll(".answer");
const questionElement = document.getElementById("question");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const submitBtn = document.getElementById("submitBtn");
const quiz = document.getElementById("quiz");
let currentQuestion = 0;
let score = 0;
loadQuiz();

function loadQuiz(){
    deselectedAnswer();
    const currentQuestionData = quizData[currentQuestion];

    questionElement.innerText = currentQuestionData.question;
    a_text.innerText = currentQuestionData.a;
    b_text.innerText = currentQuestionData.b;
    c_text.innerText = currentQuestionData.c;
    d_text.innerText = currentQuestionData.d;
}

function getSelected(){

    let answer = undefined;

    answerEl.forEach(answerEl => {
        if(answerEl.checked){
            answer = answerEl.id;
        }
    });
    return answer;
}

function deselectedAnswer(){
    answerEl.forEach((item) =>{
        item.checked = false;
    })
}

submitBtn.addEventListener("click", () => {

    const answer = getSelected();
    if(answer){
        if(answer === quizData[currentQuestion].correct){
            score++;
        }
    currentQuestion++;
    if(currentQuestion < quizData.length){
        loadQuiz();
    }
    else {
        quiz.innerHTML = `<h1>You answered correctly at ${score}/${quizData.length} questions.</h1>
                         <button onClick="location.reload()">Reload</button>`;
    }
}
});




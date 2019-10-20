// select all elements
const start = document.getElementById("start");
const quiz = document.getElementById("quiz");
const question = document.getElementById("question");
const qImg = document.getElementById("qImg");
const choiceA = document.getElementById("A");
const choiceB = document.getElementById("B");
const choiceC = document.getElementById("C");
const choiceD = document.getElementById("D");
const choiceE = document.getElementById("E");
const counter = document.getElementById("counter");
const timeGauge = document.getElementById("timeGauge");
const progress = document.getElementById("progress");
const scoreDiv = document.getElementById("scoreContainer");

// create our questions
let questions = [
    {
        question : "A เป็นลูกชายของ C ; C กับ Q เป็นพี่สาว/น้องสาวกัน ; Z เป็นแม่ของ Q และ P เป็นบุตรของ Z ข้อใดต่อไปนี้เป็นจริง",
        imgSrc : "img/testq3.png",
        choiceA : "P เป็นพ่อของ A",
        choiceB : "P เป็นพี่ชาย/น้องชาย ของ C",
        choiceC : "A เป็นลูกชายของ Z",
        choiceD : "Q เป็นพี่สาว/น้องสาวของ A",
        choiceE : "ไม่มีคำตอบที่ถูก",
        correct : "B"
    },
    {
        question : "ไอหมอนี้แม่งใคร ?",
        imgSrc : "img/testq.png",
        choiceA : "ไอบัง",
        choiceB : "ไอจวยหัวเค",
        choiceC : "พี่ไอซ์สุดเทพ",
        choiceD : "ไอบัง",
        choiceE : "ไอบัง",
        correct : "A"
    },{
        question : "ไอนี้ล่ะ ?",
        imgSrc : "img/testq2.png",
        choiceA : "ไอเชี่ยบัง",
        choiceB : "โอมไง",
        choiceC : "ตินโต",
        choiceD : "ไอบัง",
        choiceE : "ไอบัง",
        correct : "C"
    },{
        question : "สุดท้ายล่ะไอนี้ใคร",
        imgSrc : "img/testq3.png",
        choiceA : "ตินโต",
        choiceB : "จวยหัวเค",
        choiceC : "ไอบังอีกอ่ะ",
        choiceD : "ไอบัง",
        choiceE : "ไอบัง",
        correct : "B"
    }
];

// create some variables

const lastQuestion = questions.length - 1;
let runningQuestion = 0;
let count = 0;
const questionTime = 120; // 60s
const gaugeWidth = 11; // 150px
const gaugeUnit = gaugeWidth / questionTime;
let TIMER;
let score = 0;

// render a question
function renderQuestion(){
    let q = questions[runningQuestion];
    
    question.innerHTML = "<p>"+ q.question +"</p>";
    qImg.innerHTML = "<img src="+ q.imgSrc +">";
    choiceA.innerHTML = q.choiceA;
    choiceB.innerHTML = q.choiceB;
    choiceC.innerHTML = q.choiceC;
    choiceD.innerHTML = q.choiceD;
    choiceE.innerHTML = q.choiceE;
}

start.addEventListener("click",startQuiz);

// start quiz
function startQuiz(){
    start.style.display = "none";
    renderQuestion();
    quiz.style.display = "block";
    renderProgress();
    renderCounter();
    TIMER = setInterval(renderCounter,1000); // 1000ms = 1s
}

// render progress
function renderProgress(){
    for(let qIndex = 0; qIndex <= lastQuestion; qIndex++){
        progress.innerHTML += "<div class='prog' id="+ qIndex +"></div>";
    }
}

// counter render

function renderCounter(){
    if(count <= questionTime){
        counter.innerHTML = count;
        timeGauge.style.width = count * gaugeUnit + "vw";
        count++
    }else{
        count = 0;
        // change progress color to red
        answerIsWrong();
        if(runningQuestion < lastQuestion){
            runningQuestion++;
            renderQuestion();
        }else{
            // end the quiz and show the score
            clearInterval(TIMER);
            scoreRender();
        }
    }
}

// checkAnwer

function checkAnswer(answer){
    if( answer == questions[runningQuestion].correct){
        // answer is correct
        score++;
        // change progress color to green
        answerIsCorrect();
    }else{
        // answer is wrong
        // change progress color to red
        answerIsWrong();
    }
    count = 0;
    if(runningQuestion < lastQuestion){
        runningQuestion++;
        renderQuestion();
    }else{
        // end the quiz and show the score
        clearInterval(TIMER);
        scoreRender();
    }
}

// answer is correct
function answerIsCorrect(){
    document.getElementById(runningQuestion).style.backgroundColor = "#0f0";
}

// answer is Wrong
function answerIsWrong(){
    document.getElementById(runningQuestion).style.backgroundColor = "#f00";
}

// score render
function scoreRender(){
    scoreDiv.style.display = "block";
    
    // calculate the amount of question percent answered by the user
    const scorePerCent = Math.round(100 * score/questions.length);
    
    // choose the image based on the scorePerCent
    // size of pic 59x59
    let style_img = "style='width: 5vw; height: 10vh;'"
    let img = (scorePerCent >= 80) ? "img/smile_face.png" :
              (scorePerCent >= 60) ? "img/ok_face.png" :
              (scorePerCent >= 40) ? "img/ok_face.png" :
              (scorePerCent >= 20) ? "img/bad_face.png" :
              "img/bad_face.png";
    
    scoreDiv.innerHTML = "<img src="+ img + " " + style_img + ">";
    scoreDiv.innerHTML += "<p>"+ scorePerCent +"%</p>";
    scoreDiv.innerHTML += "<a href='../Page/Decomposition.html' id='back'>Back</a>";
    scoreDiv.innerHTML += "<a href='result/logic_result.html' id='result'>Result</a>";
}
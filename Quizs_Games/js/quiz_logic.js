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
        imgSrc : "img/test.png",
        choiceA : "P เป็นพ่อของ A",
        choiceB : "P เป็นพี่ชาย/น้องชาย ของ C",
        choiceC : "A เป็นลูกชายของ Z",
        choiceD : "Q เป็นพี่สาว/น้องสาวของ A",
        choiceE : "ไม่มีคำตอบที่ถูก",
        correct : "B"
    },
    {
        question : "ให้ดู pattern ดังต่อไปนี้และ เลขคู่ใดดังต่อไปนี้คือเลขถัดไป ? <br> <b>7 9 66 12 14 66 17</b>",
        imgSrc : "img/test.png",
        choiceA : "19 66",
        choiceB : "66 19",
        choiceC : "19 22",
        choiceD : "20 66",
        choiceE : "66 20",
        correct : "A"
    },{
        question : "1, 2, 6, 24, ?, 720",
        imgSrc : "img/test.png",
        choiceA : "100",
        choiceB : "104",
        choiceC : "108",
        choiceD : "120",
        choiceE : "134",
        correct : "D"
    },{
        question : "5760, 960, ?, 48, 16, 8",
        imgSrc : "img/test.png",
        choiceA : "120",
        choiceB : "160",
        choiceC : "192",
        choiceD : "240",
        choiceE : "274",
        correct : "C"
    },{
        question : "16, 24, 48, 120, 360, 1260, ?",
        imgSrc : "img/test.png",
        choiceA : "3780",
        choiceB : "4725",
        choiceC : "5355",
        choiceD : "5252",
        choiceE : "5040",
        correct : "E"
    },{
        question : "(7*7)^3 ÷ (49*7)^3 * (2401)^2 = 7x",
        imgSrc : "img/test.png",
        choiceA : "5",
        choiceB : "6",
        choiceC : "4",
        choiceD : "8",
        choiceE : "3",
        correct : "A"
    },{
        question : "23% of 1840 + 24% of 1260 = ?",
        imgSrc : "img/test.png",
        choiceA : "733",
        choiceB : "724",
        choiceC : "725.6",
        choiceD : "734.5",
        choiceE : "736.3",
        correct : "C"
    },{
        question : "(9.96)^3 – (25.9)^2 + (2.9)^5 = ?",
        imgSrc : "img/test.png",
        choiceA : "80",
        choiceB : "88",
        choiceC : "81",
        choiceD : "90",
        choiceE : "97",
        correct : "C"
    },{
        question : "จงเรียงคำที่ให้ไว้ด้านล่างตามลำดับที่มีความหมาย <br> 1.Leaves <br> 2.Branch <br> 3.Flower <br> 4.Tree <br> 5.Fruit",
        imgSrc : "img/test.png",
        choiceA : "4,3,1,2,5",
        choiceB : "4,3,2,1,5",
        choiceC : "4,2,5,3,1",
        choiceD : "4,2,3,1,5",
        choiceE : "4,2,1,3,5",
        correct : "E"
    }
];

// create some variables

const lastQuestion = questions.length - 1;
let runningQuestion = 0;
let count = 0;
const questionTime = 120; // 60s
const gaugeWidth = 20; // 150px
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
        timeGauge.style.width = count * gaugeUnit + "vmin";
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
    
    // scoreDiv.innerHTML = "<img src="+ img + " " + style_img + ">";
    scoreDiv.innerHTML = "<img src="+ img + ">";
    scoreDiv.innerHTML += "<p>"+ scorePerCent +"%</p>";
    scoreDiv.innerHTML += "<a href='../Page/Decomposition.html' id='back'>กลับสู่หน้าหลัก</a>";
    scoreDiv.innerHTML += "<a href='result/logic_result.html' id='result'>เฉลยคำตอบ</a>";
}
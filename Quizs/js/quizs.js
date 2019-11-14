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
var status = 0;
var ft = 0;
var delay = 4000;

// create our questions
let questions = [{
        question: "อะไรคือความหมายของ Computational Thinking ?",
        imgSrc: "https://cdn.dribbble.com/users/720555/screenshots/3974885/bumblebee.gif",
        checkImg: "0",
        choiceA: "บอกวิธีการใช้ให้กับคอมพิวเตอร์",
        choiceB: "คิดให้เหมือนคอมพิวเตอร์ ในเลขฐานสอง",
        choiceC: "ใช้เทคนิคและวิธีการเพื่อช่วยในการแก้ปัญหา",
        choiceD: "ใช้เพื่อเกิดความเข้าใจให้เหมือนกับคอมพิวเตอร์",
        choiceE: "ไม่มีคำตอบที่ถูกต้อง",
        correct: "A"
    }, {
        question: "ปัญหาซับซ้อนคืออะไร",
        imgSrc: "https://cdn.dribbble.com/users/1195051/screenshots/5027342/osquay_dribbble_01.gif",
        checkImg: "0",
        choiceA: "เป็นปัญหาที่ยากจะแก้ไข",
        choiceB: "เป็นปัญหาที่ยากจะเข้าใจ",
        choiceC: "เป็นปัญหาที่ยากเกินไปที่จะทำได้",
        choiceD: "เป็นปัญหาที่ยากจะแก้ไขและยากที่จะเข้าใจ",
        choiceE: "ไม่มีคำตอบที่ถูกต้อง",
        correct: "D"
    }, {
        question: "อะไรคือความหมายของ Pattern Recognition ?",
        imgSrc: "https://theultralinx.com/.image/c_limit%2Ccs_srgb%2Cq_auto:good%2Cw_700/MTMyNjI4MDgwODc4NTM2NzE0/questionmark-dribbblegif.webp",
        checkImg: "0",
        choiceA: "การทำแบบทีละขั้นตอนเพื่อแก้ไขปัญหา",
        choiceB: "มองหาความคล้ายคลึงกันของปัญหาและสามารถลดเวลาในการแก้ปัญหาได้",
        choiceC: "การแบ่งระบบออกเป็นส่วนย่อยๆ ซึ่งง่ายต่อการเข้าใจโปรแกรม",
        choiceD: "มองแค่ส่วนที่จำเป็นของปัญหาและนำมาวิเคราะห์แก้ไข",
        choiceE: "ไม่มีคำตอบที่ถูกต้อง",
        correct: "B"
    }, {
        question: "ข้อใดต่อไปนี้เป็นตัวอย่างของ Computational Thinking",
        imgSrc: "https://theultralinx.com/.image/c_limit%2Ccs_srgb%2Cq_auto:good%2Cw_700/MTMyNjI4MDgwODc4NDcxMTc4/dribbble_problem-solvedgif.webp",
        checkImg: "0",
        choiceA: "เมื่อจะไปพบเพื่อนจะต้องเดินไปรอบๆ จนกว่าจะเจอพวกเขา",
        choiceB: "เมื่อจะไปพบเพื่อน จึงถามความคิดเห็นของผู้ปกครองเพื่อที่จะวางแผนไปพบพวกเขา",
        choiceC: "วางแผนเส้นทางของคุณเพื่อที่จะไปพบเพื่อน",
        choiceD: "ข้อ B และ ข้อ C ถูกต้อง",
        choiceE: "ข้อ A และ ข้อ B ถูกต้อง",
        correct: "C"
    }, {
        question: "อะไรคือความหมายของ Decomposition ?",
        imgSrc: "https://theultralinx.com/.image/c_limit%2Ccs_srgb%2Cq_auto:good%2Cw_400/MTMyNjI4MDgwODc4NjAyMjUw/watch-out____dribbble_sgif.webp",
        checkImg: "0",
        choiceA: "มองหาความคล้ายคลึงกันของปัญหาและสามารถลดเวลาในการแก้ปัญหาได้",
        choiceB: "การแบ่งระบบออกเป็นส่วนย่อยๆ ซึ่งง่ายต่อการเข้าใจโปรแกรม",
        choiceC: "มองแค่ส่วนที่จำเป็นของปัญหาและนำมาวิเคราะห์แก้ไข",
        choiceD: "การทำแบบทีละขั้นตอนเพื่อแก้ไขปัญหา",
        choiceE: "ไม่มีคำตอบที่ถูกต้อง",
        correct: "B"
    }, {
        question: "Computational Thinking มี 3 เสาหลัก ยกเว้นข้อใด",
        imgSrc: "https://cdn.dribbble.com/users/825103/screenshots/2691903/bulb-animated.gif",
        checkImg: "0",
        choiceA: "Abstraction",
        choiceB: "Automation",
        choiceC: "Coding",
        choiceD: "Analysis",
        choiceE: "ไม่มีคำตอบที่ถูกต้อง",
        correct: "C"
    }, {
        question: "ข้อใดคือความหมายของ Algorithm ?",
        imgSrc: "https://cdn.dribbble.com/users/31826/screenshots/3271059/question-by-toondra-studio.gif",
        checkImg: "0",
        choiceA: "มองแค่ส่วนที่จำเป็นของปัญหาและนำมาวิเคราะห์แก้ไข",
        choiceB: "การแบ่งระบบออกเป็นส่วนย่อยๆ ซึ่งง่ายต่อการเข้าใจโปรแกรม",
        choiceC: "มองหาความคล้ายคลึงกันของปัญหาและสามารถลดเวลาในการแก้ปัญหาได้",
        choiceD: "การทำแบบทีละขั้นตอนเพื่อแก้ไขปัญหา",
        choiceE: "ไม่มีคำตอบที่ถูกต้อง",
        correct: "D"
    },
    {
        question: "เทคนิคของใดของ Computational Thinking ที่มีวิธีการคิดแบบแบ่งปัญหาออกเป็นส่วนย่อยๆ",
        imgSrc: "https://cdn.dribbble.com/users/729829/screenshots/1973412/animation.gif",
        checkImg: "0",
        choiceA: "Decomposition",
        choiceB: "Abstraction",
        choiceC: "Algorithms",
        choiceD: "Pattern Regonition",
        choiceE: "ไม่มีคำตอบที่ถูกต้อง",
        correct: "A"
    },{
        question: "ข้อใดคือความหมายของ Abstraction ?",
        imgSrc: "https://cdn.dribbble.com/users/187497/screenshots/1612072/brain-dribs.gif",
        checkImg: "0",
        choiceA: "การแบ่งระบบออกเป็นส่วนย่อยๆ ซึ่งง่ายต่อการเข้าใจโปรแกรม",
        choiceB: "มองแค่ส่วนที่จำเป็นของปัญหาและนำมาวิเคราะห์แก้ไข",
        choiceC: "การทำแบบทีละขั้นตอนเพื่อแก้ไขปัญหา",
        choiceD: "มองหาความคล้ายคลึงกันของปัญหาและสามารถลดเวลาในการแก้ปัญหาได้",
        choiceE: "ไม่มีคำตอบที่ถูกต้อง",
        correct: "B"
    }
];

let choice = [{
        choices: "A"
    },{
        choices: "B"
    },{
        choices: "C"
    },{
        choices: "D"
    },{
        choices: "E"
    }
];

// create some variables

const lastQuestion = questions.length - 1;
let runningQuestion = 0;
let runningChoices = 0;
let count = 0;
const questionTime = 60; // 60s
const gaugeWidth = 20; // 150px
const gaugeUnit = gaugeWidth / questionTime;
let TIMER;
let score = 0;
var correct_choice = questions[runningQuestion].correct

// render a question
function renderQuestion() {
    let q = questions[runningQuestion];
        question.innerHTML = "<div class='qdiv'><p>" + q.question + "</p></div>";
        // qImg.innerHTML = "<img src=" + q.imgSrc + ">";
        if (questions[runningQuestion].checkImg == "0"){
            choiceA.innerHTML = q.choiceA;
            choiceB.innerHTML = q.choiceB;
            choiceC.innerHTML = q.choiceC;
            choiceD.innerHTML = q.choiceD;
            choiceE.innerHTML = q.choiceE;
        } else if (questions[runningQuestion].checkImg == "1"){
            choiceA.innerHTML = "<img id='mA' src=" + q.choiceA + ">";
            choiceB.innerHTML = "<img id='mB' src=" + q.choiceB + ">";
            choiceC.innerHTML = "<img id='mC' src=" + q.choiceC + ">";
            choiceD.innerHTML = "<img id='mD' src=" + q.choiceD + ">";
            choiceE.innerHTML = "<img id='mE' src=" + q.choiceE + ">";
        }
        status = 0;
}

start.addEventListener("click", startQuiz);

// start quiz
function startQuiz() {
    start.style.display = "none";
    renderQuestion();
    quiz.style.display = "block";
    document.getElementById("topic").style.display = "none";
    document.getElementById("help").style.display = "none";
    renderProgress();
    renderCounter();
    TIMER = setInterval(renderCounter, 1000); // 1000ms = 1s
}

// render progress
function renderProgress() {
    for (let qIndex = 0; qIndex <= lastQuestion; qIndex++) {
        progress.innerHTML += "<div class='prog' id=" + qIndex + "></div>";
    }
}

// counter render

function renderCounter() {
        if (count <= questionTime) {
            counter.innerHTML = count;
            timeGauge.style.width = count * gaugeUnit + "vmin";
            count++
        } else {
            count = 0;
            // change progress color to red
            answerIsWrong();
            if (runningQuestion < lastQuestion) {
                runningQuestion++;
                renderQuestion();
            } else {
                // end the quiz and show the score
                clearInterval(TIMER);
                scoreRender();
            }
        }
    } 
// checkAnwer

function checkAnswer(answer) {
    if (status == 0){
        if (answer == questions[runningQuestion].correct) {
            if (answer == 'A'){
                choiceA.style.background = "#8bef80";
                choiceB.style.background = "#ce3e52";
                choiceC.style.background = "#ce3e52";
                choiceD.style.background = "#ce3e52";
                choiceE.style.background = "#ce3e52";
            }else if (answer == 'B'){
                choiceA.style.background = "#ce3e52";
                choiceB.style.background = "#8bef80";
                choiceC.style.background = "#ce3e52";
                choiceD.style.background = "#ce3e52";
                choiceE.style.background = "#ce3e52";
            }else if (answer == 'C'){
                choiceA.style.background = "#ce3e52";
                choiceB.style.background = "#ce3e52";
                choiceC.style.background = "#8bef80";
                choiceD.style.background = "#ce3e52";
                choiceE.style.background = "#ce3e52";
            }else if (answer == 'D'){
                choiceA.style.background = "#ce3e52";
                choiceB.style.background = "#ce3e52";
                choiceC.style.background = "#ce3e52";
                choiceD.style.background = "#8bef80";
                choiceE.style.background = "#ce3e52";
            }else if (answer == 'E'){
                choiceA.style.background = "#ce3e52";
                choiceB.style.background = "#ce3e52";
                choiceC.style.background = "#ce3e52";
                choiceD.style.background = "#ce3e52";
                choiceE.style.background = "#8bef80";
            }
            // answer is correct
            score++;
            // change progress color to green
            answerIsCorrect();
            status = 1;
        } else {
            var i;
            for (i = 0; i < 5; i++){
                if (choice[i].choices == questions[runningQuestion].correct){
                    document.getElementById(choice[i].choices).style.backgroundColor = "8bef80";
                } else{
                    document.getElementById(choice[i].choices).style.backgroundColor = "ce3e52";
                }
            };
            // answer is wrong
            // change progress color to red
            answerIsWrong();
            status = 1;
        }
        if (runningQuestion < lastQuestion) {
            runningQuestion++;
            clearInterval(TIMER);
            setTimeout(renderQuestion, 1500);
            setTimeout(function() {
                TIMER = setInterval(renderCounter, 1000);
                count = 0;
            }, 500);
            setTimeout(resetcolor, 1500);
            
        } else {
            // end the quiz and show the score
            clearInterval(TIMER);
            scoreRender();
        }
    }  
}

// answer is correct
function answerIsCorrect() {
    document.getElementById(runningQuestion).style.backgroundColor = "#8bef80";
}

// answer is Wrong
function answerIsWrong() {
    document.getElementById(runningQuestion).style.backgroundColor = "#ce3e52";
}

// score render
function scoreRender() {
    status = 1;
    scoreDiv.style.display = "block";

    // calculate the amount of question percent answered by the user
    const scorePerCent = Math.round(100 * score / questions.length);

    // choose the image based on the scorePerCent
    // size of pic 59x59
    let style_img = "style='width: 200; height: 200;'"
    let img = (scorePerCent >= 80) ? "img/smile_face.png" :
        (scorePerCent >= 60) ? "img/ok_face.png" :
        (scorePerCent >= 40) ? "img/ok_face.png" :
        (scorePerCent >= 20) ? "img/bad_face.png" :
        "img/bad_face.png";

    // scoreDiv.innerHTML = "<img src="+ img + " " + style_img + ">";
    scoreDiv.innerHTML = "<img src=" + img + ">";
    scoreDiv.innerHTML += "<p>" + scorePerCent + "%</p>";
    scoreDiv.innerHTML += "<a style='text-decoration:none; color:black;'href='../index.html' id='back'>กลับสู่หน้าหลัก</a>";
    scoreDiv.innerHTML += "<a style='text-decoration:none; color:black;' href='quizs.html' id='result'>เล่นใหม่อีกครั้ง</a>";
}

function resetcolor(){
    document.getElementById("A").style.backgroundColor = "#ffffff";
    document.getElementById("B").style.backgroundColor = "#ffffff";
    document.getElementById("C").style.backgroundColor = "#ffffff";
    document.getElementById("D").style.backgroundColor = "#ffffff";
    document.getElementById("E").style.backgroundColor = "#ffffff";
}
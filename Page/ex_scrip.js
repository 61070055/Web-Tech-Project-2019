const progress = document.getElementById("progress");
const panel = document.getElementById("middle");
var runner = 0;
var status = 0;

questions = [{
    correct: "B"
}, {
    correct: "C"
}, {
    correct: ""
}, {
    correct: ""
}, {
    correct: ""
}, {
    correct: ""
}, {
    correct: ""
}, {
    correct: ""
}
];


    for (let qIndex = 0; qIndex <= 7; qIndex++) {
        progress.innerHTML += "<div class='prog' id=" + qIndex + "></div>";
        document.getElementById(runner).style.backgroundColor = "#8bef80"
    }

function checkAnswer(answer) {
    if (status == 0){
        if (answer == questions[runner].correct){
            answeriscorrect();
            status = 1;
        } else {
            answerisincorrect();
            status = 1;
        }
    }   
}

function answeriscorrect() {
    document.getElementById("true").style.display = "inline";
    window.location.href("exercise_2.html");
}

function answerisincorrect() {
    document.getElementById("false").style.display = "inline";
}

function true_false() {
    document.getElementById("true").style.display = "none";
    document.getElementById("false").style.display = "none";
    status = 0;
}

const progress = document.getElementById("progress");
const panel = document.getElementById("middle");
let runner = 0;

    for (let qIndex = 0; qIndex <= 6; qIndex++) {
        progress.innerHTML += "<div class='prog' id=" + qIndex + "></div>";
    }

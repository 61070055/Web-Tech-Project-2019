const progress = document.getElementById("progress");
let runner = 0;

    for (let qIndex = 0; qIndex <= 7; qIndex++) {
        progress.innerHTML += "<div class='prog' id=" + qIndex + "></div>";
    }

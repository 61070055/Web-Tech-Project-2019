const progress = document.getElementById("progress");


    for (let qIndex = 0; qIndex <= 7; qIndex++) {
        progress.innerHTML += "<div class='prog' id=" + qIndex + "></div>";
    }

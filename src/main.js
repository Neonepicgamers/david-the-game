const tickRate = 1000 / 30;
let score = 0;

let homelessperson = new Building('homeless Person', 0.1, 15, 'buyHomelessperson');
let dingus = new Building('dingus (kidnap)', 5, 200, 'buydingus');
let realsurgeon = new Building('a totally real surgeon, that is a surgeon', 15, 500, 'buyrealsurgeon');
let davidclone = new Building('the younger david clone, likes ice cream', 50, 1000, 'buydavidclone');

function incScore() {
    score += homelessperson.cps;
    score += dingus.cps;
    score += realsurgeon.cps;
    score += davidclone.cps;
}

function scorePlusPlus() {
    score++;
}

function updateButtons() {
    homelessperson.buttonState();
    dingus.buttonState();
    realsurgeon.buttonState();
    davidclone.buttonState();
}

function updatePage() {
    incScore();
    updateButtons();
    document.getElementById('score').innerHTML =
        '$' + Math.floor(score).toLocaleString();
}

setInterval(updatePage, tickRate);
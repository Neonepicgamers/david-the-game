const tickRate = 1000 / 30;
let clickStrength = 1;
let score = 0;

let homelessperson = new Building('Homeless Person', 0.1, 15);
let dingus = new Building('Dingus', 5, 200);
let realsurgeon = new Building('Real Surgeon', 15, 500);
let davidclone = new Building('David Clone', 50, 1000);

let whip1 = new Whip('Whip I', 200, homelessperson);

function scorePlusPlus() {
    score+= clickStrength;
}

function incScore() {
    score += homelessperson.cps;
    score += dingus.cps;
    score += realsurgeon.cps;
    score += davidclone.cps;
}

function updateButtons() {
    homelessperson.buttonState();
    dingus.buttonState();
    realsurgeon.buttonState();
    davidclone.buttonState();
    whip1.buttonState();
}

function updatePage() {
    incScore();
    updateButtons();
    document.getElementById('score').innerHTML =
        '$' + Math.floor(score).toLocaleString();
}

setInterval(updatePage, tickRate);
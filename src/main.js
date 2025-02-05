const tickRate = 1000 / 30;
let clickStrength = 1;
let score = 999999999999999999;

let homelessperson = new Building('Homeless Person', 0.1, 15, "../media/imgs/homeless.jpg");
let dingus = new Building('Dingus', 1, 100, "../media/imgs/dingus.jpg");
let realsurgeon = new Building('Real Surgeon', 8, 1100, "../media/imgs/surgeon.png");
let davidclone = new Building('David Clone', 47, 12000, "../media/imgs/davidcln.jpg");
let sawnick = new Building('Sawnick', 260, 130000, "../media/imgs/sawnick.gif");
let ourpleguy = new Building('Ourple Guy', 1400, 14000000, "../media/imgs/ourpguy.gif");

let whip1 = new Whip('Whip I', 100, homelessperson);

function scorePlusPlus() {
    score+= clickStrength;
}

function incScore() {
    score += homelessperson.cps;
    score += dingus.cps;
    score += realsurgeon.cps;
    score += davidclone.cps;
    score += sawnick.cps;
    score += ourpleguy.cps;
}

function updateButtons() {
    homelessperson.buttonState();
    dingus.buttonState();
    realsurgeon.buttonState();
    davidclone.buttonState();
    sawnick.buttonState();
    ourpleguy.buttonState();
    whip1.buttonState();
}

function updatePage() {
    incScore();
    updateButtons();
    document.getElementById('score').innerHTML =
        '$' + Math.floor(score).toLocaleString();
}

setInterval(updatePage, tickRate);
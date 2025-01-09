const tickRate = 1000 / 30;
let money = 0;

let homelessperson = new Building('Homeless Person', 0.1, 15, 'buyhomelessperson');

function incMoney() {
    money += homelessperson.cps;
}

function moneyPlusPlus(){
    money++;
    document.getElementById('money').innerHTML = money;
    incMoney();
}


function updatePage() {
    incScore();
    document.getElementById('money').innerHTML = "$" + Math.floor(money).toLocaleString();
}

setInterval(updatePage, tickRate);
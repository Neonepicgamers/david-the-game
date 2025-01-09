class Building {
    constructor(buildingName, baseCps, baseCost, buttonId) {
        this.buildingName = buildingName;
        this.baseCps = baseCps / (1000 / tickRate);
        this.cost = baseCost;
        this.buttonId = buttonId;
        this.amountOwned = 0;
        this.cps = 0;
        this.visible = true; // change to false srtuy 380uyq3ms90h i6yj m8r9 fgnj9cncmgnc8 djmbn89 ejm5rt89 4u5 54
    }

    purchase(){
        score -= this.cost;
        this.amountOwned++;
        this.cps = this.baseCps * this.amountOwned;
        this.cost = Math.ceil(this.cost * 1.15 ** this.amountOwned);
    }
}
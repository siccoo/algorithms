function maxStockProfit(pricesArr) {
    let maxProfit = -1;
    let buyPrice = 0;
    let sellPrice = 0;

    let changeBuyPrice = true;

    for (let i = 0; i < pricesArr.length; i++) {
        buyPrice = pricesArr[i];
        sellPrice = pricesArr[i + 1];
    }
}
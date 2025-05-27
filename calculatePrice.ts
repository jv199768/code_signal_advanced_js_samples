function calculatePrice(quantity, price) {
    let discount = 5;
    return quantity * price - discount;
}

let totalApplesPrice = calculatePrice(quantityApples, priceApple);
let totalBananasPrice = calculatePrice(quantityBananas, priceBanana);

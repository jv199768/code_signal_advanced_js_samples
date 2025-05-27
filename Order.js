// Monolithic code with high dependencies
class Order {
    constructor(items, prices, discountRate, taxRate) {
        this.items = items;
        this.prices = prices;
        this.discountRate = discountRate;
        this.taxRate = taxRate;
    }

    calculateTotal() {
        let total = this.prices.reduce((sum, price) => sum + price, 0);
        total -= total * this.discountRate;
        total += total * this.taxRate;
        return total;
    }
    
    printOrderSummary() {
        const total = this.calculateTotal();
        console.log(`Order Summary: Items: ${this.items}, Total after tax and discount: $${total.toFixed(2)}`);
    }
}

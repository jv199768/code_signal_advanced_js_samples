function processOrder(order) {
    console.log("Processing order...");
    if (order.isValid()) {
        console.log("Order is valid");
        if (order.paymentType === "credit_card") {
            processCreditCardPayment(order);
            sendOrderConfirmationEmail(order);
        } else if (order.paymentType === "paypal") {
            processPaypalPayment(order);
            sendOrderConfirmationEmail(order);
        } else if (order.paymentType === "bank_transfer") {
            processBankTransferPayment(order);
            sendOrderConfirmationEmail(order);
        } else {
            console.log("Unsupported payment type");
            return false;
        }
        console.log("Order processed successfully!");
        return true;
    } else {
        console.log("Invalid order");
        return false;
    }
}

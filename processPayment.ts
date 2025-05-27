function processPayment(paymentType, order) {
    if (paymentType === "credit_card") {
        processCreditCardPayment(order);
    } else if (paymentType === "paypal") {
        processPaypalPayment(order);
    } else if (paymentType === "bank_transfer") {
        processBankTransferPayment(order);
    } else {
        console.log("Unsupported payment type");
        return false;
    }
    return true;
}

function processOrder(order) {
    console.log("Processing order...");
    if (!order.isValid()) {
        console.log("Invalid order");
        return false;
    }
    
    if (processPayment(order.paymentType, order)) {
        sendOrderConfirmationEmail(order);
        console.log("Order processed successfully!");
        return true;
    } else {
        return false;
    }
}

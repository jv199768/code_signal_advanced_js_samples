// Function to simulate printer queue
function printDocuments(docQueue) {
    while (docQueue.length > 0) {
        let doc = docQueue.shift();
        console.log(`Printing document: ${doc}`);
    }
    console.log("No more documents in the queue.");
}

// Create a queue and add documents
let printerQueue = [];
printerQueue.push("Document1.pdf");
printerQueue.push("Document2.pdf");
printerQueue.push("Document3.pdf");

// Process the printer queue
printDocuments(printerQueue);
// Output:
// Printing document: Document1.pdf
// Printing document: Document2.pdf
// Printing document: Document3.pdf
// No more documents in the queue.

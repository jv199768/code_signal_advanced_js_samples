class AbstractClassExample {
    constructor() {
        if (this.constructor === AbstractClassExample) {
            throw new Error("Cannot instantiate abstract class");
        }
    }

    // This method is waiting to be overridden
    doSomething() {
        throw new Error("Abstract method must be overridden");
    }
}

// Attempting to instantiate will raise an error
// let instance = new AbstractClassExample(); // Will throw an error

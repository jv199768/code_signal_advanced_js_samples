class Engine {
    start() {
        console.log("Engine starts");  // Engine start message
    }

    stop() {
        console.log("Engine stops");   // Engine stop message
    }
}

class Wheels {
    rotate() {
        console.log("Wheels rotate");  // Wheel rotation message
    }
}

class Seats {
    adjust(position) {
        console.log(`Seats adjusted to position ${position}`); // Seat adjustment message
    }
}

class Car {
    constructor() {
        this.engine = new Engine();
        this.wheels = new Wheels();
        this.seats = new Seats();
    }

    start() {
        this.engine.start();  // Call to start engine
        this.seats.adjust('upright');  // Adjust seat position
        this.wheels.rotate();  // Get wheels rolling
    }
}

const myCar = new Car();
myCar.start();  // Begin car functions

/*
Prints:
Engine starts
Seats adjusted to position upright
Wheels rotate
*/

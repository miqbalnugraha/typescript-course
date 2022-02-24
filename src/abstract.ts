abstract class Vehicle {
    abstract wheels: number;

    start(): void {
        console.log("bruummm...");
    }
}

class Car extends Vehicle {
    wheels: number = 4;
}
class Bike extends Vehicle {
    wheels: number = 2;
}

let mulai = new Bike();
console.log(mulai.wheels);
mulai.start();
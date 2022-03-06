class Vehicle {
    static SPEED_LIMIT = 120;
    constructor(maker, model) {
        this.maker = maker;
        this.model = model;
    }
    static show () {
        console.log('static method');
        console.log(this.SPEED_LIMIT);
        return 'finished';
    }
}

console.log(Vehicle);

console.log(Vehicle.SPEED_LIMIT);

console.log(Vehicle.show());

let vehicle_obj1 = new Vehicle('Proton', 'Saga');

console.log(vehicle_obj1);
console.log(vehicle_obj1.SPEED_LIMIT); //undefined. static property cannot use instalce to visit.
//console.log(vehicle_obj1.show());  //static method cannot use instance to call.
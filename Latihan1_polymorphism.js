class Vehicle {
    move() {
        console.log("Kendaraan Bergerak");
    }
}

class Car extends Vehicle {
    move(){
        console.log("Mobil berjalan di jalan raya");
    }
}

class Boat extends Vehicle {
    move(){
        console.log("Kapal berlayar di laut");
    }
}

const boat = new Boat();
boat.move();

const car = new Car();
car.move();

const vehicle = new Vehicle();
vehicle.move();


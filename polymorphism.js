class Animal {
    speak() {
        console.log("Animal make a sound");
    }
}

class Dog extends Animal {
    // overidding
    speak(){
        console.log("Dog sound Like Guk Guk");;
    }
}

class Cat extends Animal {
    // overidding
    speak(){
        console.log("Cat sound Like meow meow");
    }
}

const dog = new Dog();
dog.speak();
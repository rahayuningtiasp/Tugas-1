class Enemys {
  constructor(name) {
    this.name = name;
    this.speed = 2;
    this.attack = 5;
    this.health = 100;
    this.defend = 2;
  }

  attackEnemy() {
    console.log(`enemy attack!, attack = ${this.attack}`);
  }

  walk() {
    console.log(`enemy walk, speed = ${this.speed}`);
  }

  dash() {
    console.log("enemy dash, speed = 5");
  }

  getInformation() {
    console.log(
      `${this.name} memiliki speed=${this.speed}, attack=${this.attack}, health=${this.health}, dan defend=${this.defend}`
    );
  }
}

const enemy1 = new Enemys("Rani");
enemy1.attackEnemy();     
enemy1.walk();            
enemy1.dash();            
enemy1.getInformation();  

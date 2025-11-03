class Employee {
    constructor(){
    this.baseSalary = 50000;
    }
    calculateSalary() {} 
}

class FullTimeEmployee extends Employee {
    calculateSalary() {
      console.log(`Gaji karyawan tetap adalah ${this.baseSalary}`);
    }
}

class PartTimeEmployee extends Employee {
    // Polymorphism Overloading, karena ada penambahan parameter baru, totalHours
    calculateSalary(totalHours) {
        this.baseSalary = 50000;
        this.totalSalary = this.baseSalary * totalHours;
        console.log(
        `Gaji karyawan part time adalah total jam kerja/bulan${totalHours}, dengan gaji per jam ${this.baseSalary}, maka gaji bulan ini adalah ${this.totalSalary}`
        );
    }
}

const partTime = new PartTimeEmployee();
partTime.calculateSalary(40);
    
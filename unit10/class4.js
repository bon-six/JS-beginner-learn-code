class Person {
    constructor(name,age) {
        this.name = name;
        this.age = age;
    }
    disp() {
        console.log('hi from Person class.')
    }
}

class Man extends Person {
    static gender = 'Male';

    static show() {
        console.log('class Man show. My gender is ', this.gender);
    }
    disp() {
        console.log(`this is a man. name ${this.name}, age ${this.age}`);
    }
}

class Woman extends Person {
    static gender = 'Female';
    static show() {
        console.log('class Woman show. My gender is ', this.gender);
    }
    disp() {
        console.log(`this is a woman. name ${this.name}, age ${this.age}`);

        super.disp();  //use super call to base class method
    }
}

Woman.show();
let woman_1 = new Woman('Mary', 32);
//woman_1.show();
woman_1.disp();

Man.show();
let man_1 = new Man('John', 30);
//man_1.show();
man_1.disp();

console.log(woman_1 instanceof Woman);
console.log(woman_1 instanceof Person);

class Student {
    constructor(rno,fname,lname){
       this.rno = rno;
       this.fname = fname;
       this.lname = lname;
       console.log('inside constructor');
    }
    /**
     * @param {number} newRollno
     */
    set rollno(newRollno){
       console.log("inside setter");
       this.rno = newRollno;
    }
    /**
     * @param {string} newName
     */
    set ['first name'](newName) {
        console.log('another setter')
        this.fname = newName;
    }

    get fullName(){
        console.log('inside getter');
        return this.fname + ' - ' + this.lname;
    }

    get ['full'+' '+'name'](){
        console.log('another getter');
        return this.fname + '---' + this.lname;
    }
}
let s1 = new Student(101,'Tom','Hanks');
console.log(s1);
//setter is called
s1.rollno = 201;
console.log(s1);
expr = 'first'+' '+'name';
s1[expr] = 'Jimmy';
console.log(s1);

console.log(s1.fullName);
console.log(s1['full name']);
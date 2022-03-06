let obj1 = {name: 'John', addr : 'Someplace, Jalan ABC, Kuala Lumpur', age : 18};

console.log(obj1);
console.log(typeof obj1);
console.log(obj1 instanceof Object);
console.log(obj1.name);
console.log(obj1['name']);

let obj2 = {name : 'John',
            addr : 'Someplace, Jalan ABC, Kuala Lumpur', 
            age : 18};
console.log(obj1==obj2);
console.log(obj1.name==obj2.name);
console.log(obj1.addr==obj2.addr);
console.log(obj1.age==obj2.age);

obj2 = obj1;
console.log(obj1==obj2);

obj1.salary = 5000;
console.log(obj1);
console.log(obj2);
console.log(obj1==obj2);

obj2['2nd name'] = 'Smith';
console.log(obj2);
console.log(obj2['2nd name']);
//following is not a valid way.
//console.log(obj2.2nd name)

let obj3 = {'name': 'John',
            'addr': 'Someplace, Jalan ABC, Kuala Lumpur',
            'age': 18, 
            '2nd name': 'Smith'};
console.log(obj3);

let person1 = {
    'first': 'Tom',
    'last': 'Hanks',
    'func 1': function() {return 'Hello from func 1. \nYou just called func 1.'},
    func1: function() {return 'another method func1'}
}
console.log(person1.last);
console.log(person1['func 1']());
console.log(person1.func1());

// object property initializer
let firstName = 'ABC', lastName='XYZ'
let company1 = {
   firstName,
   lastName
}
console.log(company1)
console.log(company1.firstName)
console.log(company1.lastName)


// computed property
let suffix = 'Name'
let company2 = {
   ['first'+suffix]:'ABC2',
   ['last'+suffix]:'XYZ2'
}
console.log(company2)
console.log(company2['firstName'])
console.log(company2['lastName'])


//concise method
let company3 = {
   ['first'+suffix]:'ABC3',
   ['last'+suffix]:'XYZ3',
   get_full_name() {
       return this.firstName + ' ' + this.lastName;
   }
}
console.log(company3.get_full_name());
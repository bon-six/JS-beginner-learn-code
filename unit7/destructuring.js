
console.log(Math.PI);
console.log(Math.E);

let [a,b,c,...values] = [1,2,3,4,5,6,7];
console.log(a);
console.log(b);
console.log(c);
console.log(values);
console.log(Math.max(a,b,c));

let {id,name,...rest} = {id:36, name: 'John', room:'Year 12 - 1', favorite:'football'};
console.log(id);
console.log(name);
console.log(rest);

let person1 = {name:'Smith', room:'Year 6', grade:'A'};
let {name:student1_name, room, grade:student1_grade} = person1;
console.log(student1_name);
console.log(room);
console.log(student1_grade);

({name} = person1);
console.log(name);

let emp = {
    id:101,
    address:{
       city:'Mumbai',
       pin:1234
    }
 };
 let {address:{city, pin}} = emp;
 console.log(city);
 console.log(pin);
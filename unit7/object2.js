
function Car() { 
    this.make = "Ford" 
    this.model = "F123" 
}  
let obj4 = new Car(); 
console.log(obj4);
console.log(obj4.make);
console.log(obj4.model);

//obj5 is independant with obj4. only initially have same property value
let obj5 = Object.create(obj4);
console.log(obj5);
console.log(obj5.make)
obj5['make']='Proton';
console.log(obj5);
console.log(obj5.make);
console.log(obj5.model);
console.log(obj4);
console.log(obj4.make);

//obj1 and obj4 is same object, change one will reflect same change in another.
let obj1={'a':1};
let obj2={'b':2};
let obj3={'c':3};
obj4=Object.assign(obj1,obj2,obj3);
console.log(obj4);
console.log(obj1);
obj4.a=10;
console.log(obj4);
console.log(obj1);
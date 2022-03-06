
class Polygon { 
    constructor(height, width) { 
       this.height = height; 
       this.width = width; 
    } 

    expand(ratio) {
        this.height *= ratio;
        this.width *= ratio;
    }

    show() {
        console.log(`My height is: ${this.height}`);
        console.log(`My width is: ${this.width}`);
    }
}


let poly_obj1 = new Polygon(24, 13);
poly_obj1.show();
poly_obj1.expand(2);
poly_obj1.show();

poly_obj1.color = 'red'; //create new attributes
console.log(poly_obj1);
delete poly_obj1.height; //remove attributes
console.log(poly_obj1);
poly_obj1['height'] = 32;
console.log(poly_obj1);


let Polygon2 = class {
    constructor(height, width) { 
        this.height = height; 
        this.width = width; 
     } 
 
     expand(ratio) {
         this.height *= ratio;
         this.width *= ratio;
     }
 
     show() {
         console.log(`My height is: ${this.height}`);
         console.log(`My width is: ${this.width}`);
     }
};

let poly_obj2 = new Polygon2(30,20);
poly_obj2.show();
console.log(poly_obj2);
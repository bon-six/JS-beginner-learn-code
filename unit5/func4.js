
func_a = function(a,b) {
    return a*Math.E**b;
}

let x = func_a(2,3);
console.log(x)

let registry = {};

func_register = function(a, b) {
    console.log(`for event ${a}, registered callback ${b}`);
    registry[a] = b;
}

func_register('move', function(direction){
    console.log(`moving to direction ${direction}`)
});

registry['move']('east');
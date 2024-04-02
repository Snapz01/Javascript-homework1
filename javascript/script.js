//1.
console.log("Bernadette had a boat");

//2.
let vehicle = "boat";
console.log("Bernadette had a " + vehicle);

//3.
let balance;
let cost;

balance = 1500;
cost = 200;
result = balance - cost;

console.log("Your new balance is " + result + "kr");

//4.
let radius;
radius = 14;
console.log("circle area = ", radius * radius * Math.PI);

//5
const position1 = (x, y, z) => {
    return { x, y, z };
}

let something1 = position1(22, 15, 55); 
console.log(something1);


const position2 = (z, x, text) => {
    return { z, x, text };
}

let something2 = position2(22, 15, "text");
console.log(something2);

const position3 = (z, x, text) => {
    return { z, x, text };
}

let something3 = position3(44, 25, "text");
console.log(something3);
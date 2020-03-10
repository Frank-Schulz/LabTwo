// create variables
let a = 3;
let b = 8;
let c = 1;
let d = 6;

let x = 0

// function to find the square root of the input
function square (x) {
    return (x * x) * x
}

square = (y => (y * y) * y);

// calling the function and finding the sum of the numbers
x = (square(a) + square(b) + square(c) + square(d));

y = (square(a) + square(b) + square(c) + square(d));


// Logging the sum
console.log(x);

console.log(y);
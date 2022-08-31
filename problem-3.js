// problem - 3.1
const arrow = (a) => a / 5;
const result = arrow(10);
console.log(result);

// problem - 3.2
function check(a, b){
    const sum1 = a + 2;
    const sum2 = b + 2;
    const total = sum1 + sum2;
    const multiply = total * 2;
    console.log(multiply);
}
check(6, 3);

// Using arrow function
const twoPara = (a, b) => ((a + 2) + (b + 2)) * 2;
console.log(twoPara(6, 3))

// problem - 3.3
const threeParameter = (x, y, z) => x * y* z;
const values = threeParameter(2, 3, 4);
console.log(values);
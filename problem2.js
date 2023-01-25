function exponentiation(x, n) {
    if(n === 0) return 1;
    return x * exponentiation(x, n -1);
}

console.log(exponentiation(2, 3));
console.log(exponentiation(2, 12));
console.log(exponentiation(7, 2));
console.log(exponentiation(9, 3));
console.log(exponentiation(22, 5));
console.log(exponentiation(1996, 0));
console.log(exponentiation(4213, -3));

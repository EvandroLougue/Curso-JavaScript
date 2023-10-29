let a = 'A';
let b = 'B';
let c = 'C';


console.log(a, b, c);

[a, b, c] = [1, 2, 3];

console.log(a, b, c); 

const numeros = [10, 20, 30];
[a, b, c] = numeros;

console.log(a, b, c)

// ...rest / ...spread

const numeros100 = [1000, 2000, 3000, 4000, 5000, 6000, 7000, 8000, 9000];
console.log(numeros100);
const [um, dois, tres, quatro, ...resto] = numeros100;
console.log(um, dois, tres, quatro)
console.log(resto);

const arrays = [
    [1,2,3],
    [4,5,6],
    [7,8,9]
]

console.log(arrays[1][2]);
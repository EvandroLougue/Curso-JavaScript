//let num1 = 1500.875456443456546; //number
//let num2 = 2.5; //number

//console.log(num1.toString() + num2);
//num1 = num1.toString();
//console.log(typeof(num1));
//console.log(num1.toString(2));
//console.log(num1.toFixed(2));
//console.log(Number.isInteger(num1));

//let temp = num1 * 'Olá';
//console.log(temp); //NaN
//console.log(Number.isNaN(temp)); //true

let num1 = 0.7;
let num2 = 0.1;
num1 += num2; // num1 = num1 + num2 total 0.8
num1 += num2; // 0.9
num1 += num2; // 1.0
num1 += num2; // 1.1
num1 += num2; // 1.2
num1 += num2; // 1.3
num1 += num2; // 1.4
num1 += num2; // 1.5
num1 += num2; // 1.6
num1 += num2; // 1.7
num1 += num2; // 1.8
num1 += num2; // 1.9
//num1 += num2; // 2.0
//num1 += num2; // 2.1
//num1 = parseFloat(num1.toFixed(2)); //arredonda
num1 = ((num1 * 100 + num2 * 100) / 100 ) // somar casas decimais com precisão
console.log(num1);
console.log(Number.isInteger(num1));
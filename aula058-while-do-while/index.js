let controle = 0;

while (controle < 5) {
    controle++
    console.log(controle)
}

function random(min,max) {
    const r = Math.random() * (max - min) + min;
    return Math.floor(r);
}
const min = 1;
const max = 50;

let rand = random(1, 50);
/*
while (rand !== 10) { // checagem no início
    rand = random(min, max);
    console.log(rand);
}
*/
do {
    rand = random(min, max);
    console.log(rand);  // checagem no final
} while (rand!== 20);
//const tresHoras = 60 * 60 * 3 * 1000;
//const umDia = 60 * 60 * 24 * 1000;
//const data = new Date(0 + tresHoras + umDia);
//const data = new Date(2019, 2, 25, 17, 25, 55);

/*
const data = new Date ();
console.log('Dia', data.getDate()); // dia do mês
console.log(data.getDay()); // sunday = 0 até saturday = 6
console.log(data.getFullYear());
console.log(data.getMonth()); // janeiro = 0 --- dezembro = 11
console.log(data.getHours());
console.log(data.getMinutes());
console.log(data.getSeconds());
console.log(data.getTime()); // o tempo decorrido em milisegundos desde a data ZERO, pode ser traduzido ao contrário vida 'new Date (milisegundos)'
console.log(data.getMilliseconds());

console.log(data.toString());
*/
function zeroEsq(num) {
   return num >= 10 ? num : `0${num}`; 
}

function formataData(data) {
    const dia = zeroEsq(data.getDate());
    const mes = zeroEsq(data.getMonth()+1);
    const ano = zeroEsq(data.getFullYear());
    const hora = zeroEsq(data.getHours());
    const minuto = zeroEsq(data.getMinutes());
    const segundo = zeroEsq(data.getSeconds());
    return `${dia}/${mes}/${ano} - ${hora}:${minuto}:${segundo}`
}

const data = new Date();
const dataBrasil = formataData(data);
console.log(dataBrasil);
const data = new Date();
let diaSemana;
let mes;

const diaMes = data.getDate();

const semana = data.getDay();
const nmes = data.getMonth()+1;
const ano = data.getFullYear();

const hora = zeroEsq(data.getHours());
const minuto = zeroEsq(data.getMinutes());
const segundo = data.getSeconds();

function zeroEsq(num) {
    return num >= 10 ? num : `0${num}`; 
 }

switch (semana) {
    case 0:
        diaSemana = 'Domingo';
        break;
    case 1:
        diaSemana = 'Segunda-Feira'
        break;
    case 2:
        diaSemana = 'Terça-Feira'
        break;
    case 3:
        diaSemana = 'Quarta-Feira'
        break;
    case 4:
        diaSemana = 'Quinta-Feira'
        break;
    case 5:
        diaSemana = 'Sexta-Feira'
        break;
    case 6: 
        diaSemana = 'Sábado';
        break;
    default:
        diaSemana = ' ';
}

    switch (nmes) {
        case 1:
            mes = 'Janeiro';
            break;
        case 2: 
            mes = 'Fevereiro';
            break;
        case 3:
            mes = 'Março';
            break;
        case 4:
            mes = 'Abril';
            break;
        case 5:
            mes = 'Maio';
            break;
        case 6: 
            mes = 'Junho';
            break;
        case 7:
            mes = 'Julho';
            break;
        case 8:
            mes = 'Agosto';
            break;
        case 9:
            mes = 'Setembro';
            break;
        case 10:
            mes = 'Outubro';
            break;
        case 11:
            mes = 'Novembro';
            break;
        case 12:
            mes = 'Dezembro';
            break;
        default:
            mes = ' ';
    }

    


console.log(mes);

document.querySelector('.container > h1').innerHTML = `Hoje é ${diaSemana}, dia ${diaMes} de ${mes} de ${ano}. Horário: ${hora}:${minuto}`
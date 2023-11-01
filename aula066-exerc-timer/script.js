function getTimeSeconds(segundos) {
    const data = new Date(segundos * 1000);
    return data.toLocaleTimeString('pt-BR', {
        hour12: false,
        timeZone: 'GMT'
    });
}
/*
function getTimeHours(horas) {
    const data = new Date(horas * 1000 * 60 * 60 * 3);
    return data.toLocaleTimeString('pt-BR', {
        hour12: false,
        timeZone: 'GMT'
    });
}
*/
const relogio = document.querySelector('.relogio');
const iniciar = document.querySelector('.iniciar');
const pausar = document.querySelector('.pausar');
const zerar = document.querySelector('.zerar');
let segundos = 0;
let timer;

document.addEventListener('click', function(e) { // evento para registrar onde houveram cliques
    const elemento = e.target;

    if (elemento.classList.contains('zerar')) {
        console.log('Você clicou em "zerar".')
    } else if (elemento.classList.contains('iniciar')) {
        console.log('Você clicou em "iniciar".') 
    } else if (elemento.classList.contains('pausar')) {
        console.log('Você clicou em "pausar".')
    }
});

function iniciaRelogio() {
    timer = setInterval(function() {
        segundos++;
        relogio.innerHTML = getTimeSeconds(segundos);
    }, 1000);
}

iniciar.addEventListener('click', function(event) {
    relogio.classList.remove('pausado');
    clearInterval(timer);
    iniciaRelogio();
});

pausar.addEventListener('click', function(event) {
    relogio.classList.add('pausado');
    clearInterval(timer);
});

zerar.addEventListener('click', function(event) {
    relogio.classList.remove('pausado');
    clearInterval(timer);
    segundos = 0;
    relogio.innerHTML = '00:00:00';
}); 
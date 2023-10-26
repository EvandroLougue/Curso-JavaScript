
const form = document.querySelector('#formulario')

function getIMC (peso, altura) {
    let imc = peso / (altura ** altura);
    imc = imc.toFixed(2);
    return imc;
}

form.addEventListener('submit', function(evento) { // capturar evento de submit do formulário
    evento.preventDefault();
    let inputPeso = evento.target.querySelector('#peso');
    let inputAltura = evento.target.querySelector('#altura');
    let peso = Number(inputPeso.value);
    let altura = Number(inputAltura.value);

    if (!peso) {
        setResultado('Peso inválido!', false)
        return;
    }
    if (!altura) {
        setResultado('Altura inválida!', false)
        return;
    }
    const imc = getIMC(peso, altura);
    const nivelIMC = getnivelIMC(imc);
    const msg = `<p>Seu IMC é ${imc} (${nivelIMC})</p>`;

    setResultado(msg, true);
});

function getnivelIMC (imc) {
    const nivel = ['ABAIXO DO PESO', 'PESO NORMAL', 'SOBREPESO', 'OBESIDADE GRAU 1', 'OBESIDADE GRAU 2', 'OBESIDADE GRAU 3'];

    if (imc >= 40) {
        return nivel[5];
    } else if (imc >= 35) {
        return nivel[4];
    } else if (imc >= 30) {
        return nivel[3];
    } else if (imc >= 25) {
        return nivel[2];
    } else if (imc >= 18.5) {
        return nivel[1];
    } else {
        return nivel[0];
    }
} 

function criaP() {
    const p = document.createElement('p'); // criando um parágrafo novo a partir do javascript
    //p.classList.add('paragrafo-resultado') // colocando classe nesse parágrafo
    return p;
}

function setResultado (msg, isValid) { // colocar um html dentro da div RESULTADO
    const resultado = document.querySelector('#resultado');
    resultado.innerHTML = '';
    const p = criaP();

    if (isValid) { // atribui uma classe de acordo com resultado true ou false
        p.classList.add('paragrafo-resultado')
    } else {
        p.classList.add('bad')
    }
    p.innerHTML = msg;
    resultado.appendChild(p); 
}

/*
if (imc < 18.5) {
    document.querySelector('#resultado').innerHTML = `Seu IMC é ${imc}. Você está ABAIXO DO PESO.`;
} else if (imc >= 18.5 && imc <= 24.9) {
    document.querySelector('#resultado').innerHTML = `Seu IMC é ${imc}. Você está com PESO NORMAL.`;
} else if (imc >= 25 && imc <= 29.9) {
    document.querySelector('#resultado').innerHTML = `Seu IMC é ${imc}. Você está com SOBREPESO.`;
} else if (imc >= 30 && imc <= 34.9) {
    document.querySelector('#resultado').innerHTML = `Seu IMC é ${imc}. Você está com OBESIDADE GRAU 1.`;
} else if (imc >= 35 && imc <= 39.9) {
    document.querySelector('#resultado').innerHTML = `Seu IMC é ${imc}. Você está com OBESIDADE GRAU 2.`;
} else {
    document.querySelector('#resultado').innerHTML = `Seu IMC é ${imc}. Você está com OBESIDADE GRAU 3.`;
}
*/
const numero = Number(prompt('Digite um número: '));
const numeroTitulo = document.getElementById('numero-titulo');
const texto = document.getElementById('texto');

numeroTitulo.innerHTML = numero;
//window.document.body.innerHTML += `<h1>Seu número é <strong>${numero}<strong></h1><br><br>`;
textp.innerHTML = ' ';
texto.innerHTML += `A raiz quadrada de ${numero} é <strong>${numero ** 0.5}</strong><br><br>`;
texto.innerHTML += `${numero} é um número inteiro: <strong>${Number.isInteger(numero)}</strong><br><br>`;
texto.innerHTML += `Arredondando para baixo: <strong>${Math.floor(numero)}</strong><br><br>`;
texto.innerHTML += `Arredondando para cima: <strong>${Math.ceil(numero)}</strong><br><br>`;
texto.innerHTML += `É um número? <strong>${Number.isNaN(numero)}</strong><br><br>`;
texto.innerHTML += `Seu número com duas casas decimais: <strong>${numero.toFixed(2)}</strong><br>`;
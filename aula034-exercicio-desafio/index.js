function meuEscopo() {
    const form = document.querySelector('.form'); 
    const resultado = document.querySelector('.resultado'); // resultado que será exibido na DIV
    const pessoas = []; // variável que vai receber os dados para exibir na DIV

    //form.onsubmit = function (evento) {
    //    evento.preventDefault(); // previne evento padrão, como atualizar página
    //};
    function recebeEventoForm(evento) {
        evento.preventDefault(); // retira o evento padrão ao clicar
        const nome = form.querySelector('.nome');
        const sobrenome = form.querySelector('.sobrenome'); 
        const altura = form.querySelector('.altura');
        const peso = form.querySelector('.peso');

        pessoas.push({ // colocar um OBJETO por ÍNDICE dentro do array, serve para registrar dentro do sistema
            nome: nome.value,
            sobrenome: sobrenome.value, // aqui vai incluir os VALORES escritos com .value
            altura: altura.value,
            peso: peso.value
        });

        console.log(pessoas);

        resultado.innerHTML += `<p>${nome.value} ${sobrenome.value} ${altura.value} ${peso.value}</p>` // aparecer os dados dentro da tag DIV.resultado
    }
    form.addEventListener('submit', recebeEventoForm); // aqui é a função que está chamando para quando clicar no botão SUBMIT
}
meuEscopo();
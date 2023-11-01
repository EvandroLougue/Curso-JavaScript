const inputTarefa = document.querySelector('.input-tarefa');
const addTarefa = document.querySelector('.add-tarefa');
const tarefas = document.querySelector('.tarefas');
// 

function criaLi() {
    const li = document.createElement('li'); // cria o elemento LI da lista de um UL
    return li;
}

inputTarefa.addEventListener('keypress', function(e) { // quando pressionado o ENTER, chama a função de criaTarefa
    if (e.keyCode === 13) {
        if (!inputTarefa.value) return;
    criaTarefa(inputTarefa.value);
    }
});

function limpaInput () {
    inputTarefa.value = '';
    inputTarefa.focus();
}

function criaBotaoApagar(li) {
    li.innerHTML += ' ';
    const botaoApagar = document.createElement('button');
    botaoApagar.innerHTML = 'Apagar';
    li.appendChild(botaoApagar);
    botaoApagar.setAttribute('class', 'apagar'); // colocar um atributo
    botaoApagar.setAttribute('title', 'Apagar esta tarefa');
}

function criaTarefa(textoInput) { // coloca o texto digitado no HTML
    const li = criaLi();
    li.innerHTML = textoInput;
    tarefas.appendChild(li);
    limpaInput();
    criaBotaoApagar(li);
    salvaTarefa();
}

addTarefa.addEventListener('click', function() {
    if (!inputTarefa.value) return; // verifica se foi digitado algo para gravar na memória
    criaTarefa(inputTarefa.value);
});

document.addEventListener('click', function(e) {
    const elemento = e.target;
    if (elemento.classList.contains('apagar')) { // verificando se o objeto se encaixa com a classe que determinei
        elemento.parentElement.remove(); // evento para remover o parent
        salvaTarefa();
    }
})

function salvaTarefa() {
    const liTarefa = tarefas.querySelectorAll('li');
    const listaTarefas = [];

    for (let tarefa of liTarefa) {
        let tarefaTexto = tarefa.innerText;
        tarefaTexto = tarefaTexto.replace('Apagar', '').trim();
        listaTarefas.push(tarefaTexto);
    }
    const tarefasJSON = JSON.stringify(listaTarefas);
    localStorage.setItem('tarefas', tarefasJSON);
};

function tarefasSalvas() {
    const tarefas = localStorage.getItem('tarefas');
    const listaTarefas = JSON.parse(tarefas);
    for (let tarefa of listaTarefas) {
    criaTarefa(tarefa);
}
};
tarefasSalvas();
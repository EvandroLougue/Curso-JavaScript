/*
try {
    // é executada quando não há erros
    //console.log(a);
    console.log('Abri um arquivo.');
    console.log('Manipulei o arquivo e gerou erro.');
    console.log('Fechei o arquivo.')

    try {
        console.log(b);
    } catch (erro) {
        console.log('Deu erro.');
    } finally {
        console.log('FINALLY: Também sou finally')
    }
} catch (erro) {
    // é executado quando existe algum erro no IF
    console.log('Aqui trata o erro.');
} finally {
    // Executado SEMPRE 
    console.log('FINALLY: Sempre sou executado.');
}
*/

function retornaHora(data) {
    if (data && !(data instanceof Date)) {
        throw new TypeError('Esperando instância de Date');
    }
    if (!data) {
        data = new Date();
    }
    return data.toLocaleTimeString('pt-BR', {


    })
}

const hora = retornaHora(new Date());
console.log(hora);
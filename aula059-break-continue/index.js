const numeros = [1,2,3,4,5,6,7,8,9];

for (let numero of numeros) {

    if (numero === 2) {
        console.log('Pulei o 2')
        continue; // conclui a iteração
    }
    if (numero === 5) {
        console.log('Encontrei o 5')
        break; // quebra o laço e para de executar
    }
    console.log(numero);
}
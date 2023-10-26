// condição ? 'para true' : 'para false'; 

const pontuacao = 1009;
const nivel = pontuacao >= 1000 ? 'Usuário VIP' : 'Usuário Normal';

const cor = null;
const corpadrao = cor || 'Preto';

console.log(nivel, corpadrao)

/*
if (pontuacao >= 1000) {
    console.log('Usuário VIP');
} else {
    console.log('Usuário Normal');
}
*/
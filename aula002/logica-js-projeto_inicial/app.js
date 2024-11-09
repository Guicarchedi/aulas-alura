alert('Seja bem vindo ao jogo do numero secrto!');
let numeroSecreto = 35
console.log(numeroSecreto)
let chute = prompt('Escolha um nomero estre 1 e 100');

// se o chute for igual ao numero secreto
if ( chute == numeroSecreto) {
    alert(`Parabéns vc acertou o numero secreto ${numeroSecreto}`);
} else {
    alert('Você errou :(');
}
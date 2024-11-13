alert('Boas vindas ao jogo do número secreto');
let numeroSecreto = parseInt (Math.random() * 100 + 1);
console.log(numeroSecreto);
let chute;
let tentaivas = 1;

// enquanto o chute não for igual o numero secreto
while (chute != numeroSecreto){
    chute = prompt('Escolha um número entre 1 e 100');
    // se chute for igual ao número secreto
    if (chute == numeroSecreto) {
        break
    } else {
        if(chute > numeroSecreto){
            alert (`O numero secreto é menor q ${chute}`);
        } else{
            alert (`O numero secreto é maior q ${chute}`);
        }
        // tentaivas = tentaivas +1;
        tentaivas++;
    }
}

let palavraTentativa = tentaivas > 1 ? 'tentativas' : 'tentativa';
alert(`Isso ai! Você descobriu o número secreto ${numeroSecreto} com ${tentaivas} ${palavraTentativa}`);
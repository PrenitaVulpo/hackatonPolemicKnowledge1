//#Desafio3- Pedra, Papel ou tesoura

const rl = require('readline-sync');


//gera um número inteiro aleatório de 0 a 2
function getRandomInt() {
    return Math.floor(Math.random() * Math.floor(3));
}

opcoes = ['Papel', 'Pedra', 'Tesoura'];


function start(){
    num = rl.question('escolha o que vai jogar (1 para papel, 2 para pedra e' +
        ' 3 para tesoura): ');
    if (num != 1 && num != 2 && num != 3){
        console.log("Entrada inválida");
        start()
    }
    num2 = getRandomInt();
    console.log('Você escolheu '+opcoes[num-1]);
    console.log('O computador escolheu '+opcoes[num2]);
    if (num-1 == num2){
        console.log("Deu empate!!!");
        start()
    } else if (num - 1 == 0) {
        switch (num2) {
            case 2:
                console.log('Vocẽ perdeu!');
                break;
            default:
                console.log('Vocẽ ganhou!');
        }
    } else if (num - 1 == 1) {
        switch (num2) {
            case 0:
                console.log('Vocẽ perdeu!');
                break;
            default:
                console.log('Vocẽ ganhou!');
        }
    } else {
        switch (num2) {
            case 1:
                console.log('Vocẽ perdeu!');
                break;
            default:
                console.log('Vocẽ ganhou!');
        }

    }
}

start();
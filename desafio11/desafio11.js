//#Desafio11- Gerador de senhas

var chars = 'fghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ@#$%&_+-={}[]?';
const rl = require('readline-sync');

function generator(length){
    result = [];
    chars2 = chars.split('');
    for (x = length; x>0; x--){
        index = Math.round(Math.random()*chars2.length);
        console.log(index);
        console.log(result);

        result[length-x] = chars2[index];
    }
    console.log(result);
    return result
}

function start(){
    length = rl.question('informe o tamanho da senha (entre 8 e 32 caracteres)');
    if (length >=8 && length <=32){
        result = generator(length);
        console.log('A sua senha gerada é: ' + result.join(''))
    } else {
        console.log('entrada inválida');
        start();
    }
}

start();
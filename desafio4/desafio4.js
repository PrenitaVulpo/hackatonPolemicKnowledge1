//#Desafio4- Validador de CPF

const rl = require('readline-sync');


//expressão regular para validar se a entrada contém só números
const regex = /[^0-9]/g;

function validaDigito1(entrada) {
    array = entrada.toString().split('');
    digito1 = parseInt(array[9]);
    //console.log('dígito 1: ' + digito1);
    soma = 0;
    for (x = 10; x > 1; x--){
        soma = soma + parseInt(array[10-x])*x;
    }
    //console.log('soma: '+soma);
    resto = (soma*10)%11;
    //console.log('resto: ' + resto);
    if (array[9] == resto){
        return true
    } else {
        return false
    }
}

function validaDigito2(entrada) {
    array = entrada.toString().split('');
    digito2 = parseInt(array[10]);
    //console.log('dígito 2: ' + digito1);
    soma = 0;
    for (x = 11; x > 1; x--){
        soma = soma + parseInt(array[11-x])*x;
    }
    //console.log('soma: '+soma);
    resto = (soma*10)%11;
    //console.log('resto: ' + resto);
    if (array[10] == resto){
        return true
    } else {
        return false
    }
}

function start() {
    entrada = rl.question('Informe o seu CPF(somente números): ');
    if (regex.test(entrada) == false && entrada.length == 11){
        if (validaDigito1(entrada) == true && validaDigito2(entrada) == true){
            console.log('CPF válido');
        } else{
            console.log('CPF inválido');
        }
    } else {
        console.log('entrada inválida');
        start()
    }

}
start();
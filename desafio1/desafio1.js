//#Desafio1- Conversor de Graus Celsius para Farenheint e Vice-versa


//para testar a solução, basta  dar um "node desafio1.js"

const rl = require('readline-sync');

function start(){
valor = rl.question('Converter de qual medida (1 para Celcius em Farenheint e 2 para converter Farenheint em Celcius): ')
    result = 0;
    if (valor == 1){
        num = rl.question('Informe o valor em Celsius: ');
        result = (1.8*num)+32;
        console.log('O valor convertido é de: ' + result);
    }else if(valor == 2){
        num = rl.question('Informe o valor em Farenheint: ');
        result = (num - 32) / 1.8;
        console.log('O valor convertido é de: ' + result);
    }else{
        console.log('entrada inválida');
    }
};

start();
//#Desafio5- Conversor de texto para código morse

const morseTable = ['/', '.-', '-...', '-.-.', '-..', '.','..-.','--.','....','..','.---',
    '-.-','.-..','--', '-.','---','.--.','--.-','.-.','...','-','..-','...-','.--','-..-',
    '-.--','--..'];
const letterTable = [' ', 'A', 'B', 'C', 'D','E','F','G','H','I','J','K','L','M','N','O',
    'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
const rl = require('readline-sync');
const regex = /[^a-zA-Z\s]/g;

function translate(string){
    array = string.toUpperCase().split('');
    length = array.length;
    result = [];
    for (x = length; x>0; x--){
        char = array[length-x];
        index = letterTable.indexOf(char);
        result += morseTable[index];
    }
    return result
}

function start() {
    entrada = rl.question('digite a frase a ser transcrita: ');
    testResult = regex.test(entrada);
    if (testResult == false){
        result = translate(entrada);
        console.log('mensagem transcrita:\n'+result);
    } else{
        console.log('Entrada inválida');
        start();
    }
    
}

start();
//#Desafio2-  Conversor de números romanos para decimais

const rl = require('readline-sync');

function Start() {
    num = rl.question('informe um número a ser convertido: ');
    arrayResultado = [];
    algarismosRomanos = ['M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I'];
    decimais = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
    resto = num;
    for (x=12;x>0;x--) {
        casa = 12 - x;
        contador = Math.floor(resto / decimais[casa]);
        for (z = contador; z > 0; z--) {
            arrayResultado.push(algarismosRomanos[casa]);
        };
        resto = resto-(contador*decimais[casa]);
    };
    console.log(arrayResultado.join(''));
}
Start()
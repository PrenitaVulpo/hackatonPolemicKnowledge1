//#Desafio6- Jogo da velha
//A versão que roda no console é a desafio6-2
//a versão em html está incompleta
const rl = require('readline-sync');
var table = [[".",".","."],[".",".","."],[".",".","."]];
var turn = 2;


function showTable() {
    for (i=0;i<table.length;i++){
        console.log(table[i])
    }
}

function validateCoord(coord, letter) {
    c = coord.split("");
    if (table[c[0]][c[2]] == "X"||
        table[c[0]][c[2]] == "O"||
        c[0]>2 || c[0]<0 || c[2]>2 || c[2]<0) {
        console.log("entrada inválida");
        turnAssistant();
    } else{
        table[parseInt(c[0])][parseInt(c[2])] = letter;
        turn ++
    }
}

function turnAssistant() {
    if (turn%2==0){
        letter = "X";
        console.log("Vez do "+letter);
    } else {
        letter = "O";
        console.log("Vez do "+letter);
    }
    coord = rl.question("Digite as coordenadas(somente números separados por vírgula): ")
    validateCoord(coord,letter);
}

function checkWinner() {
    winner = '';
    switch (false) {
        case checkSideways()==false:
            winner = checkSideways();
            return winner;
            break
        case checkColumn()==false:
            winner = checkColumn();
            return winner;
            break
        case checkCross()==false:
            winner = checkCross();
            return winner;
            break
        default:
            return false
    }
}

function checkCross() {
    x = "X";
    o = "O";
    victor = '';
    pivot = '';
    if (table[1][1] != '.'){
        pivot = table[1][1];
        console.log("pivô: "+pivot)
    }
    check1 = pivot == table[0][0] && pivot == table[2][2];
    check2 = pivot == table[0][2] && pivot == table[2][0];
    if (check1 == true || check2 == true){
        return pivot
    }
    return false
}

function checkSideways() {
    x = "X";
    o = "O";
    victor = '';
    for (i=0;i<table.length;i++){
        countX = 0;
        countO = 0;
        for (c=0;c<3;c++){
            pivot = table[i][c];
            if (pivot == x){
                countX ++
            } else if(pivot == o){
                countO ++
            }
        }
        if (countO == 3){
            victor = o;
            return victor
        } else if (countX == 3){
            victor = x;
            return victor
        }
    }
    return false
}

function checkColumn() {
    x = "X";
    o = "O";
    victor = '';
    for (i=0;i<table.length;i++){
        countX = 0;
        countO = 0;
        for (c=0;c<3;c++){
            pivot = table[c][i];
            if (pivot == x){
                countX ++
            } else if(pivot == o){
                countO ++
            }
        }
        if (countO == 3){
            victor = o;
            return victor
        } else if (countX == 3){
            victor = x;
            return victor
        }
    }
    return false
}

function start(){
    while (checkWinner()==false) {
        showTable();
        turnAssistant();
    }
    showTable();
    console.log("O vencedor é "+checkWinner())

}

start();
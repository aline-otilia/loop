/*
    1) Faça um algoritmo que imprima todos os números ímpares no 
       intervalo entre 1 e 30 (incluindo ambos).
*/
//Utilizando o FOR
for (var i = 1; i <= 30; i++) {
    if (i % 2 != 0) {
        console.log(i);
    }
}

//Utilizando o WHILE

var i = 1;
while(i <= 30)
    {i++ ;
    if(i % 2 != 0){
    }
}
console.log("Números ímpar de 1 a 30: " + i);





/*
    2) Faça um algoritmo que imprima a quantidade de números multiplos 
       de 7 intervalo entre 1 e 70 (incluindo ambos).
*/
//Utilizando FOR

var qtdeMultilplosDeSete = 0;
for(var i = 1; i <= 70; i++) {
    if(i % 7 == 0){
        qtdeMultilplosDeSete++;
    }
}
console.log("Qtde de múltiplos de 7: " + qtdeMultilplosDeSete);

//Utilizando WHILE

var qtdeMultilplosDeSete = 0;
var i = 1;
while(i <= 70)
    {i++ ;
    if(i % 7 == 0){
        qtdeMultilplosDeSete++;
    }
}
console.log("Qtde de múltiplos de 7: " + qtdeMultilplosDeSete);





/*
    3) Faça um algoritmo que imprima a quantidade de números pares e a 
       quantidade de números ímpares em um intervalo digitado pelo usuário.
*/
var inicio = parseInt(prompt("Digite o ínicio do intervalo"));
var fim = parseInt(prompt("Digite o fim do intervalo"));

var qtdePares = 0;
var qtdeImpares = 0;

for(var i = inicio; i <= fim; i++) {
    if(i % 2 == 0) {
        qtdePares++;
    } else {
        qtdeImpares++;
    }
}

console.log("Qtde de pares: " + qtdePares);
console.log("Qtde de ímpares: " + qtdeImpares);





/*
    4) Faça um algoritmo que imprima a soma dos números multiplos de 11 
       em um intervalo digitado pelo usuário;
*/
var inicio = parseInt(prompt("Digite o ínicio do intervalo"));
var fim = parseInt(prompt("Digite o fim do intervalo"));

var somaMultiplosOnze = 0;
debugger;
for(var i = inicio; i <= fim; i++) {
    if(i % 11 == 0) {
        // somaMultiplosOnze = somaMultiplosOnze + i;
        somaMultiplosOnze += i;
    }
}
console.log("Soma dos multiplos de 11: " + somaMultiplosOnze);





/*
    5) Faça um algoritmo que imprima o somatório de todos os números 
       entre 1 e um valor digitado pelo usuário. 
       Por exemplo, se o usuário digitar o número 4, o programa 
       deverá calcular o somatório 1 + 2 + 3 + 4 = 10.
*/
var fim = parseInt(prompt("Digite o fim do intervalo"));

var soma = 0;

for(var i = 1; i <= fim; i++) {
    soma += i;
}

console.log("Soma dos números: " + soma);
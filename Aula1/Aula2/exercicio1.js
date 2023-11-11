// Exercício 1: Soma dos elementos de um vetor
// Dado um vetor `numeros` com 5 elementos, calcule a soma de todos os valores e armazene o resultado na variável `soma`. Utilize o índice para acessar os valores do vetor e realizar os cálculos.

let numeros = [10, 5, 8, 12, 3, 19];
let soma = 0;

for (let index = 0; index < numeros.length; index++) {
  soma += numeros[index];
}

console.log(soma)
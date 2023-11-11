// Exercício 2: Média dos elementos de um vetor
// Dado um vetor `notas` com 4 elementos, calcule a média aritmética de todos os valores e armazene o resultado na variável `media`. Utilize o índice para acessar os valores do vetor e realizar os cálculos.

let notas = [17, 28, 39, 96, 55];

let soma = 0;
let media = 0;

for (let index = 0; index = notas.length; index++) {
  soma += notas[index];
}

console.log(soma)

let quantidadeNotas = notas.length

// media = soma/quantidadeNotas

// console.log(media)
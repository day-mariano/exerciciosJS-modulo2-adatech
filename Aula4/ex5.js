// 5. Exercício Desafiador:
// Escreva um programa em JavaScript que verifica se um número é um palíndromo. Use a estrutura if-else para realizar essa verificação. Um palíndromo é um número que permanece o mesmo quando seus dígitos são invertidos.

numero = 12321
numeroInvertido = parseInt(numero.toString().split('').reverse().join(''))

if (numero == numeroInvertido) {
  console.log(numero, "é um políndromo")
} else {
  console.log(numero, "não é um políndromo")
}
// 3. Exercício Intermediário:
// Escreva um programa em JavaScript que recebe uma letra do alfabeto e retorna se é uma vogal ou uma consoante.  Utilize a estrutura switch/case para realizar essa verificação.

let letra = "a"

switch (letra) {
  case "a":
  case "e":
  case "i":
  case "o":
  case "u":
    console.log("Essa letra é uma vogal")
    break;
  default:
    console.log("Essa letra é uma consoante")
    break;
}
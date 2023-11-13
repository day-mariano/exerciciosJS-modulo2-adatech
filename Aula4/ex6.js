// 1. **Exercício Fácil:**
// Escreva um programa em JavaScript que recebe uma cor em inglês e retorna o seu nome em português. Utilize a estrutura `switch/case` para realizar essa verificação. As cores podem ser: "red" (vermelho), "blue" (azul), "green" (verde), "yellow" (amarelo) e "black" (preto).

let cor = "blue"

switch (cor) {
  case "red":
    console.log("A cor é vermelho")
    break;
  case "blue":
    console.log("A cor é azul")
    break;
  case "green":
    console.log("A cor é verde")
    break;
  case "yellow":
    console.log("A cor é amarelo")
    break;
  case "black":
    console.log("A cor é preto")
    break;
  default:
    console.log("Nenhuma das cores cadastradas")
    break;
}
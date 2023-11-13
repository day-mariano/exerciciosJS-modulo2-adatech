// 2. Exercício Moderado:
// Escreva um programa em JavaScript que recebe um número de 1 a 12 e retorna o mês correspondente. Caso seja um número inválido retorna "Número inválido.” Utilize a estrutura switch/case para realizar essa verificação.

let mês = 12 

switch (mês) {
  case 1:
    console.log("Janeiro")
    break
  case 2:
    console.log("Fevereiro")
    break
  case 3:
    console.log("Março")
    break
  case 4:
    console.log("Abril")
    break
  case 5:
    console.log("Maio")
    break
  case 6:
    console.log("Junho")
    break
  case 7:
    console.log("Julho")
    break
  case 8:
    console.log("Agosto")
    break
  case 9:
    console.log("Setembro")
    break
  case 10:
    console.log("Outrubro")
    break
  case 10:
    console.log("Novembro")
    break
  case 12:
    console.log("Dezembro")
    break
  default:
    console.log("Nenhum mês correspondente")
    break
}
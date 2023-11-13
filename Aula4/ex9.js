// 4. Exercício Avançado:
// Crie um programa em JavaScript que implemente uma calculadora básica. A função calculadora receberá dois números como parâmetro e um terceiro parâmetro indicando a ação a ser executada. Utilize a estrutura switch/case para realizar a operação correta com base na ação fornecida. As ações possíveis são: "somar", "subtrair", "dividir" e "multiplicar". O resultado da operação deve ser retornado pela função.
// Exemplo de uso: calculadora(5, 3, "somar") deve retornar 8.

let n1 = 5
let n2 = 2
let ação = "multiplicar"

function calculadora (n1, n2, ação) {
  switch (ação) {
    case "somar":
      return(n1 + n2)
      break;
    case "subtrair":
      return(n1 - n2)
      break;
    case "dividir":
      return(n1 / n2)
      break;
    case "multiplicar":
      return(n1 * n2)
      break;
      return(n1 + n2)
    default:
      return("Nenhuma ação cadastrada")
      break;
  }
}

console.log(calculadora(n1,n2, ação))
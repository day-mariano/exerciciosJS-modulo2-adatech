// 5. **Exercício Desafiado**
// Escreva um programa em JavaScript que recebe um número de 1 a 7 e retorna o dia da semana correspondente. Utilize a estrutura `switch/case` para realizar essa verificação.
// Além disso, implemente uma verificação adicional utilizando `if-else` para retornar "Fim de semana" caso o número seja 1 ou 7 (domingo ou sábado), e "Dia útil" caso contrário.
    
//     **Exemplo de uso:** `verificarDiaSemana(3)` deve retornar "Quarta-feira, Dia útil".
    
//     **Dica:** Utilize os valores de 1 a 7 para representar os dias da semana, sendo 1 para domingo, 2 para segunda-feira e assim por diante.

let numero = 7
let dia = ""
let isUtil = ""

function verificarDiaSemana(numero) {

  switch (numero) {
    case 1:
      dia = "Domingo"
      break;
    case 2:
      dia = "Segunda"
      break;
    case 3:
      dia = "Terça"
      break;
    case 4:
      dia = "Quarta"
      break;
    case 5:
      dia = "Quinta"
      break;
    case 6:
      dia = "Sexta"
      break;
    case 7:
      dia = "Sábado"
      break;
    default:
      dia = "Nenhum dia equivalente"
      break;
}

  if (numero == 1 || numero == 7) {
    isUtil = "Fim de semana"
  } else {
    isUtil = "Dia útil"
  }

  return (dia + ", " + isUtil)
}

console.log(verificarDiaSemana(numero))
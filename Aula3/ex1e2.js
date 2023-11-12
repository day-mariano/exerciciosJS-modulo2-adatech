// 1. **Criando uma lista de contatos**
// Crie uma lista de contatos, essa lista deve ter o seguintes dados:
// - Nome
// - Telefone
// - Endereço
//     - Nome da rua
//     - Número da residência
//     - Nome do bairro
// - Data de nascimento

let contatos = [
  {
    nome: "runo Cabral",
    telefone: "(11) 99999-9999",
    endereço: {
      rua: "Rua Major Prado",
      numero: 200,
      bairro: "Jardim Terezinha",
    },
    nascimento: "04/04/1988",
  },
  {
    nome: "Dayana Mariano",
    telefone: "(22) 8888-8888",
    endereço: {
      rua: "Rua Major Prado",
      numero: 200,
      bairro: "Jardim Terezinha",
    },
    nascimento: "28/05/1994"
  },
]

// 2. Percorrendo a lista de contato
// Crie um laço de repetição que percorra toda a lista de contatos e mostre uma frase contento Nome, Telefone, Endereço e data de nascimento, exemplo:
// Bruno Cabral, telefone (11) 99999-9999, mora na Rua Major Prado, no número 200, no bairro Jardim Terezinha, nascido na data de 04/04/1988

for (let index = 0; index < contatos.length; index++) {
  for (let propriedade in contatos[index]) {
    console.log(propriedade + ": " + contatos[index][propriedade])
  }
}
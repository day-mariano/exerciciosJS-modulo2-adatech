// 3. Criando estrutura de números
// Crie laços de repetição para retornar a seguinte estrutura de numeros:

for (var i = 0; i <= 5; i++) {
  var linha = "";
  for (var j = 1; j <= i; j++) {
    linha += j;
}
console.log(linha);
}


// 4. Agora tente criar o inverso:


for (var i = 5; i >= 1; i--) {
  var linha = "";
  for (var j = 1; j <= i; j++) {
    linha += j;
}
console.log(linha);
}
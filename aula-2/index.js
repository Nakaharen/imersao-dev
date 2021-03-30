var primeiroValor = parseInt(prompt("Digite o primeiro valor:"))
var segundoValor = parseInt(prompt("Digite o segundo valor:"))

var resultado

var operacao = parseInt(prompt(" Digite 1 para fazer uma adição \n Digite 2 para fazer uma subtração \n Digite 3 para fazer uma multiplicação \n Digite 4 para fazer uma divisão"))
if (operacao === 1) {
  resultado = primeiroValor + segundoValor
  document.write("<h2>" + primeiroValor + " + " + segundoValor + " = " + resultado + "</h2>")
} else if (operacao === 2) {
  resultado = primeiroValor - segundoValor
  document.write("<h2>" + primeiroValor + " - " + segundoValor + " = " + resultado + "</h2>")
} else if (operacao === 3) {
  resultado = primeiroValor * segundoValor
  document.write("<h2>" + primeiroValor + " * " + segundoValor + " = " + resultado + "</h2>")
} else if (operacao === 4) {
  resultado = primeiroValor / segundoValor
  document.write("<h2>" + primeiroValor + " / " + segundoValor + " = " + resultado + "</h2>")
} else {
  document.write("<h2>Opção inválida</h2>")
}

// document.write() - para escrever na tela
// concatenação (juntar palavra com palavra ou variáveis) - ("palavra" + variável)
// = atribuição
// == comparação do valor
// === comparação do valor e do tipo


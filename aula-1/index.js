let valorEmDolarTexto = prompt("Qual o valor em dolar que você quer converter?");

let valorEmDolarNumero = parseFloat(valorEmDolarTexto);

let valorEmReal = valorEmDolarNumero * 5.50;
let valorEmRealFixado = valorEmReal.toFixed(2);

alert(valorEmRealFixado);

/*
  Revisão
  variáveis var int - float - string
  alert - parseInt - parseFloat - prompt
  operações + somar * multiplicar
*/
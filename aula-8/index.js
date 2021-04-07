var cartaKaren = {
  nome: "Sailor Moon",
  imagem: "https://www.arrobanerd.com.br/wp-content/uploads/2021/01/sailormoon_eternal_kouhen-destaque.jpg",
  atributos: {
      ataque: 70,
      defesa: 50,
      magia: 110
  }
}

var cartaGui = {
  nome: "Tuxedo Mask",
  imagem: "https://i.ytimg.com/vi/H-PUIEouG_Q/maxresdefault.jpg",
  atributos: {
      ataque: 80,
      defesa: 65,
      magia: 95
  }
}

var cartaPan = {
  nome: "Sailor Chibi Moon",
  imagem: "https://i.pinimg.com/originals/4d/91/9b/4d919b043140e44b9408e13d7e280634.jpg",
  atributos: {
      ataque: 65,
      defesa: 70,
      magia: 90
  }
}


var cartaMaquina
var cartaJogador
var cartas = [cartaKaren, cartaGui, cartaPan]
// 0          1           2

function sortearCarta() {
  var numeroCartaMaquina = parseInt(Math.random() * 3)
  cartaMaquina = cartas[numeroCartaMaquina]

  var numeroCartaJogador = parseInt(Math.random() * 3)
  while (numeroCartaJogador == numeroCartaMaquina) {
      numeroCartaJogador = parseInt(Math.random() * 3)
  }
  cartaJogador = cartas[numeroCartaJogador]
  console.log(cartaJogador)

  document.getElementById('btnSortear').disabled = true
  document.getElementById('btnJogar').disabled = false

  exibeCartaJogador()
}

function exibeCartaJogador(){
  var divCartaJogador = document.getElementById("carta-jogador")
  var moldura = '<img src="https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent-ajustado.png" style=" width: inherit; height: inherit; position: absolute;">'
  divCartaJogador.style.backgroundImage=`url(${cartaJogador.imagem})`
  var nome =`<p class="carta-subtitle">${cartaJogador.nome}</p>`
  var opcoesTexto = ""

  for (var atributo in cartaJogador.atributos) {
    opcoesTexto += "<input type='radio' name='atributo' value='" + atributo + "'>" + atributo + " " + cartaJogador.atributos[atributo] + '<br>'
  }

  var html = "<div id='opcoes' class= 'carta-status'>"

  divCartaJogador.innerHTML = moldura + nome + html + opcoesTexto+'</div>'
}

function obtemAtributoSelecionado() {
  var radioAtributo = document.getElementsByName('atributo')
  for (var i = 0; i < radioAtributo.length; i++) {
      if (radioAtributo[i].checked) {
          return radioAtributo[i].value
      }
  }
}

function jogar() {
  var divResultado = document.getElementById("resultado")
  var atributoSelecionado = obtemAtributoSelecionado()

  if (cartaJogador.atributos[atributoSelecionado] > cartaMaquina.atributos[atributoSelecionado]) {
      htmlResultado = '<p class="resultado-final">Você venceu!</p>'
  } else if (cartaJogador.atributos[atributoSelecionado] < cartaMaquina.atributos[atributoSelecionado]) {
    htmlResultado = '<p class="resultado-final">Você perdeu!</p>'
  } else {
    htmlResultado = '<p class="resultado-final">Empatou!</p>'
  }

  divResultado.innerHTML = htmlResultado
  exibeCartaMaquina()
}

function exibeCartaMaquina(){
  var divCartaMaquina = document.getElementById("carta-maquina")
  var moldura = '<img src="https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent-ajustado.png" style=" width: inherit; height: inherit; position: absolute;">'
  divCartaMaquina.style.backgroundImage=`url(${cartaMaquina.imagem})`
  var nome =`<p class="carta-subtitle">${cartaMaquina.nome}</p>`
  var opcoesTexto = ""

  for (var atributo in cartaMaquina.atributos) {
        opcoesTexto += "<p type='text' name='atributo' value='" + atributo + "'>" + atributo + "" + cartaMaquina.atributos[atributo] + "</p>"
  }

 var html = "<div id='opcoes' class= 'carta-status' -- spacing'>"

  divCartaMaquina.innerHTML = moldura+nome+html+opcoesTexto+'</div>'
}
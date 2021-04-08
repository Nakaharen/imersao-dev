var cartaSailorMoon = {
  nome: "Sailor Moon",
  imagem: "https://www.arrobanerd.com.br/wp-content/uploads/2021/01/sailormoon_eternal_kouhen-destaque.jpg",
  atributos: {
      ataque: 70,
      defesa: 60,
      magia: 110
  }
}

var cartaTuxedoMask = {
  nome: "Tuxedo Mask",
  imagem: "https://i.ytimg.com/vi/H-PUIEouG_Q/maxresdefault.jpg",
  atributos: {
      ataque: 85,
      defesa: 80,
      magia: 90
  }
}

var cartaChibiMoon = {
  nome: "Sailor Chibi Moon",
  imagem: "https://i.pinimg.com/originals/4d/91/9b/4d919b043140e44b9408e13d7e280634.jpg",
  atributos: {
      ataque: 70,
      defesa: 70,
      magia: 100
  }
}

var cartaSailorPluto = {
  nome: "Sailor Pluto",
  imagem: "https://c4.wallpaperflare.com/wallpaper/664/917/279/anime-outer-senshi-sailor-pluto-anime-sailor-moon-hd-art-wallpaper-preview.jpg",
  atributos: {
      ataque: 80,
      defesa: 75,
      magia: 100
  }
}

var cartaSailorSaturn = {
  nome: "Sailor Saturn",
  imagem: "https://i.pinimg.com/originals/12/57/b5/1257b5ad6730bacaaf755ee836d6c8b3.jpg",
  atributos: {
      ataque: 65,
      defesa: 80,
      magia: 110
  }
}

var cartaSailorUranus = {
  nome: "Sailor Uranus",
  imagem: "https://wallpaperaccess.com/full/1706957.jpg",
  atributos: {
      ataque: 85,
      defesa: 70,
      magia: 100
  }
}

var cartaSailorNeptune = {
  nome: "Sailor Neptune",
  imagem: "https://i.pinimg.com/originals/be/a4/c7/bea4c78d1b73610d47e235814663e9ff.jpg",
  atributos: {
      ataque: 75,
      defesa: 65,
      magia: 105
  }
}

var cartaSailorMars = {
  nome: "Sailor Mars",
  imagem: "https://i.pinimg.com/originals/e8/91/ae/e891aef0dbade631fe09b46374eed9cd.jpg",
  atributos: {
      ataque: 75,
      defesa: 60,
      magia: 95
  }
}

var cartaSailorMercury = {
  nome: "Sailor Mercury",
  imagem: "https://i.pinimg.com/originals/79/69/e1/7969e12656c6d13de210d4a570a7ec90.jpg",
  atributos: {
      ataque: 65,
      defesa: 55,
      magia: 100
  }
}

var cartaSailorVenus = {
  nome: "Sailor Venus",
  imagem: "https://64.media.tumblr.com/43f42ce935f8e554c13e019f7d6bc7a1/b9a097ad166e6fdd-6a/s500x750/2bbd00759fccd57de98139de1a58685ea0710a0e.jpg",
  atributos: {
      ataque: 75,
      defesa: 60,
      magia: 90
  }
}

var cartaSailorJupiter = {
  nome: "Sailor Jupiter",
  imagem: "https://64.media.tumblr.com/0d948556369ded8a4a62b93bb87850cf/edf15774e0406080-76/s500x750/e4447d044e30a39aaa10bb18c0c33d53ccb23c2d.jpg",
  atributos: {
      ataque: 75,
      defesa: 60,
      magia: 100
  }
}

var cartaMaquina
var cartaJogador
var cartas = [
  cartaSailorMoon,
  cartaTuxedoMask,
  cartaChibiMoon,
  cartaSailorPluto,
  cartaSailorSaturn,
  cartaSailorUranus,
  cartaSailorNeptune,
  cartaSailorMercury,
  cartaSailorMars,
  cartaSailorVenus,
  cartaSailorJupiter
]
// 0          1           2

function sortearCarta() {
  var numeroCartaMaquina = parseInt(Math.random() * cartas.length)
  cartaMaquina = cartas[numeroCartaMaquina]

  var numeroCartaJogador = parseInt(Math.random() * cartas.length)
  while (numeroCartaJogador == numeroCartaMaquina) {
      numeroCartaJogador = parseInt(Math.random() * cartas.length)
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
        opcoesTexto += "<p type='text' name='atributo' value='" + atributo + "'>" + atributo + " " + cartaMaquina.atributos[atributo] + "</p>"
  }

 var html = "<div id='opcoes' class= 'carta-status' -- spacing'>"

  divCartaMaquina.innerHTML = moldura+nome+html+opcoesTexto+'</div>'
}
var listaFilmes = [
  {
    nome: 'Harry Potter e a pedra filosofal',
    imagem: "https://m.media-amazon.com/images/M/MV5BNjQ3NWNlNmQtMTE5ZS00MDdmLTlkZjUtZTBlM2UxMGFiMTU3XkEyXkFqcGdeQXVyNjUwNzk3NDc@._V1_UX182_CR0,0,182,268_AL_.jpg",
  },
  {
    nome: 'Closer - Perto demais',
    imagem: "https://m.media-amazon.com/images/M/MV5BN2I0Y2JmZjQtNjEyOC00ODhkLWE5YWUtOWFkOGQwMGYyODRiXkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_UX182_CR0,0,182,268_AL_.jpg",
  },
  {
    nome: 'Brilho eterno de uma mente sem lembranças',
    imagem: "https://m.media-amazon.com/images/M/MV5BMTY4NzcwODg3Nl5BMl5BanBnXkFtZTcwNTEwOTMyMw@@._V1_UX182_CR0,0,182,268_AL_.jpg"
  }
]

document.write("<div class='filmes-container'>")
  document.write("<div class='filmes'>")

  for (var i = 0; i < listaFilmes.length; i++){
    document.write("<div class='filmes-titulo'>")
      document.write("<img src=" + listaFilmes[i].imagem + ">")
      document.write("<p>" + listaFilmes[i].nome + "</p>")
    document.write("</div>")
  }

  document.write("</div>")
document.write("</div>")
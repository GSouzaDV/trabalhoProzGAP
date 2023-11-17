const musicas = [
  //musica 1 
  {
    title: "Groupies",
    artist: " Doode, Teto e Matuê ",
    mp3: "mp3/GROUPIES - Doode Teto Matuê.mp3",
    capa: "img/Groupies.jpg"
  },
  //musica 2    
  {
    title: "Frio",
    artist: "Wiu",
    mp3: "mp3/Frio - wiu.mp3",
    capa: "img/frio.jpg"
  },
  //musica 3
  {
    title: "Novo Balanço",
    artist: "Veigh",
    mp3: "mp3/Novo Balanço - Veigh.mp3",
    capa: "img/novoBalanco.jpg"
  },
  //musica 4  
  {
    title: "Bode",
    artist: "Djonga",
    mp3: "mp3/vbode - Djonga.mp3",
    capa: "img/bode.jpg"
  },
  //musica 5     
  {
    title: "Close Friends",
    artist: "Caio Luccas - L7nnon - Teto",
    mp3: "mp3/Close Friends - Caio Luccas L7nnon Teto.mp3",
    capa: "img/cf.jpg"
  },
  //musica 6    
  {
    title: "Bound 2",
    artist: "Kanye West",
    mp3: "mp3/Kanye West - Bound 2 (audio) (mp3cut.net).mp3",
    capa: "img/bound.jpg"
  },
  //musica 7
  {
    title: "God's plan",
    artist: "Drake",
    mp3: "mp3/God's Plan (mp3cut.net).mp3",
    capa: "img/godsplan.jpg"
  },
  //musica 8  
  {
    title: "Regras da Loja",
    artist: "Nill",
    mp3: "mp3/02 niLL - Regras da Loja Part (mp3cut.net).mp3",
    capa: "img/regrasdaloja.jpg"
  },
  //musica 9 
  {
    title: "Pukka",
    artist: "Nikito",
    mp3: "mp3/Pukka (mp3cut.net).mp3",
    capa: "img/pukka.jpg"
  },
  //musica 10
  {
    title: "Dentro da Hilux ",
    artist: "Luan Pereira",
    mp3: "mp3/Dentro da Hilux - Luan Pereira, Mc Daniel, Mc Ryan SP  Ecoando Amazon Music Brasil (mp3cut.net).mp3",
    capa: "img/hilux.jpg"
  },
  {
    title: "",
    artist: "",
    mp3: "",
    capa: "img/preto.jpg"
  }
]

var indiceAtual = 0

function s2() {
  if (musicas.length <= indiceAtual) {
    alert("Você avaliou todas as músicas!")
    return
  }
  const sim = document.getElementById("sim")
  const li = document.createElement("li")
  li.innerText = musicas[indiceAtual].title
  sim.appendChild(li)
  indiceAtual++
  atualizarCartao()
}

function x() {
  if (musicas.length === indiceAtual) {
    alert("Você avaliou todas as músicas!")
    return
  }
  atualizarCartao()
  const nao = document.getElementById("nao")
  const li = document.createElement("li")
  li.innerText = musicas[indiceAtual].title
  nao.appendChild(li)
  indiceAtual++
}

function playPause() {
  const audio = document.getElementById('audio')

  if (audio.paused) {
    audio.play()
    document.getElementById('playButton').innerText = '⏸'
  } else {
    audio.pause()
    document.getElementById('playButton').innerText = '▶'
  }
}

function ajustarTempo() {
  var controleTempo = document.getElementById('controleTempo')
  var audio = document.getElementById('audio')
  var duracaoTotal = audio.duration
  var novoTempo = (controleTempo.value / 100) * duracaoTotal
  audio.currentTime = novoTempo
}

function atualizarCartao() {
  const card = document.getElementById('card')
  card.style.backgroundImage = `url('${musicas[indiceAtual].capa}')`

  const audio = document.getElementById('audio')
  audio.src = musicas[indiceAtual].mp3

  const albumCover = document.getElementById('album-cover')
  albumCover.src = musicas[indiceAtual].capa

  const title = document.getElementById('title')
  title.innerText = musicas[indiceAtual].title

  const artist = document.getElementById('artist')
  artist.innerText = musicas[indiceAtual].artist

}
atualizarCartao()
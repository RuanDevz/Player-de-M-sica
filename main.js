// VARIAVEIS //
const play = document.getElementById('play');
const audio = document.querySelector('.barra #audio');
const imagem = document.querySelector('img');
let indexmsc = 0;
const nomemusica = document.querySelector('.titles h1');
const artista = document.querySelector('.titles p');
const proxima = document.getElementById('proxima');
const anterior = document.getElementById('anterior');
const musicas = [
  {
    img: 'logo/baby.jpg',
    musica: 'Baby, Im Back',
    artista: 'Akon',
    src: 'musica/Baby,Im Back.mp3'
  },
  {
    img: 'logo/Miss.jpg',
    musica: 'Miss Indepedent',
    artista: 'Ne-yo',
    src: 'musica/Ne-Yo-Miss-Independent-(HipHopKit.com).mp3'
  },
  {
    img: 'logo/emotions.jpg',
    musica: 'emotions',
    artista: 'Iann dior',
    src: 'musica/iann dior - emotions (Official Music Video) (320 kbps).mp3'
  }
];

// EVENTOS //

play.addEventListener('click', start);
audio.addEventListener('timeupdate', Barra);
proxima.addEventListener('click', () => {
  indexmsc++;
  carregarmusica(indexmsc);
});
anterior.addEventListener('click', () => {
  indexmsc--;
  carregarmusica(indexmsc);
});

// FUNÇÕES //

function carregarmusica(index) {
  audio.setAttribute('src', musicas[index].src);
  audio.addEventListener('loadeddata', () => {
    let duracao = audio.duration;
    nomemusica.textContent = musicas[index].musica;
    artista.textContent = musicas[index].artista;
    imagem.src = musicas[index].img;
    let segundosrestantes = Math.floor(duracao - audio.currentTime);
  });
}

function start() {
  const audio = document.querySelector('.barra #audio');
  if (play.classList.contains('fa-play')) {
    play.classList.remove('fa-play');
    play.classList.add('fa-pause');
    audio.play();
  } else {
    play.classList.remove('fa-pause');
    play.classList.add('fa-play');
    audio.pause();
  }
}

function Barra() {
  const carregar = document.querySelector('progress');

  carregar.style.width = Math.floor((audio.currentTime / audio.duration) * 100) + '%';

  let inicio = document.getElementById('inicio');

  inicio.textContent = SecundsForMinutes(Math.floor(audio.currentTime));

  let fim = document.getElementById('fim');
  let duracao = audio.duration;
  let tempoRestante = duracao - audio.currentTime;
  fim.textContent = SecundsForMinutes(tempoRestante);
}
function SecundsForMinutes(segundos){
    let minutos = Math.floor(segundos / 60);
    let segundosrestantes = Math.floor(segundos % 60);
    let segundosformatados = segundosrestantes < 10 ? '0' + segundosrestantes : segundosrestantes;
    return minutos + ':' + segundosformatados;
}






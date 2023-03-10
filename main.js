const play = document.getElementById('play');
const audio = document.querySelector('.barra #audio');
play.addEventListener('click', start);

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

audio.addEventListener('timeupdate',Barra)

function Barra(){
    const carregar = document.querySelector('progress')

    carregar.style.width = Math.floor((audio.currentTime / audio.duration) * 100) + '%';

    let inicio = document.getElementById('inicio')

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

const play = document.getElementById('audio');
play.addEventListener('click', start);

function start() {
    const audio = document.querySelector('.barra #audio');
    if (audio.paused) {
        play.classList.remove('fa-play');
        play.classList.add('fa-pause');
        play.play();
    } else {
        play.classList.remove('fa-pause');
        play.classList.add('fa-play');
        play.pause();
    }
}

let musica = document.getElementById('audio');
musica.addEventListener('timeupdate', Barra);

function Barra(){
    let barra = document.querySelector('progress');
    barra.style.width = Math.floor((musica.currentTime / musica.duration) * 100) + '%';

    let tempodecorrido = document.getElementById('inicio');

    tempodecorrido.textContent = segundosParaMinutos(musica.currentTime);
}

function segundosParaMinutos(segundos){
    let minutos = Math.floor(segundos / 60);
    let segundosRestantes = Math.floor(segundos % 60);
    let segundosFormatados = segundosRestantes < 10 ? '0' + segundosRestantes : segundosRestantes;
    return minutos + ':' + segundosFormatados;
}

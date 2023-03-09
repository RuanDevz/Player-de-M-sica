const play = document.getElementById('play');

play.addEventListener('click', start);

function start() {
    if (play.classList.contains('fa-play')) {
        play.classList.remove('fa-play');
        play.classList.add('fa-pause');
        document.querySelector('.barra #audio').play();
    } else {
        play.classList.remove('fa-pause');
        play.classList.add('fa-play');
        document.querySelector('.barra #audio').pause();
    }
}
let musica = document.getElementById('audio')
musica.addEventListener('timeupdate',Barra)

function Barra(){
    let barra = document.querySelector('progress')
    barra.style.width = Math.floor((musica.currentTime / musica.duration) * 100) + '%';

    let tempodecorrido = document.getElementById('inicio')

    tempodecorrido.textContent = segundosParaMinutos(musica.currentTime);
}

function segundosParaMinutos(segundos){
    let minutos = Math.floor(segundos / 60);
    let segundosRestantes = Math.floor(segundos % 60);
    let segundosFormatados = segundosRestantes < 10 ? '0' + segundosRestantes : segundosRestantes;
    return minutos + ':' + segundosFormatados;
}

function updateTempo() {
    const currentTime = audio.currentTime;
    const duration = audio.duration;
    const tempoDecorrido = segundosParaMinutos(currentTime);
    const tempoRestante = segundosParaMinutos(duration - currentTime);
    const tempoDecorridoElemento = document.getElementById('inicio');
    const tempoRestanteElemento = document.getElementById('fim');
    tempoDecorridoElemento.textContent = tempoDecorrido;
    tempoRestanteElemento.textContent = tempoRestante;
}

setInterval(updateTempo, 1000);



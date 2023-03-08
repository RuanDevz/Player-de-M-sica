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
    barra.style.width = Math.floor((musica.currentTime / musica.duration) * 100) + '%'
}
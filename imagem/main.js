const play = document.getElementById('play')

play.addEventListener('click', start)

function start(){
    if(play.classList.contains('fa-play')){
        play.classList.remove('fa-play');
        play.classList.add('fa-pause');
    } else {
        play.classList.remove('fa-pause');
        play.classList.add('fa-play')
    }
}
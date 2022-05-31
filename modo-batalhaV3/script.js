var musica = document.getElementsByClassName('audio-batalha')[0];

function iniciar() {
    if (b < 130) {
        b++;
        a.innerHTML=`${b}`
        a.style.color='transparent'
        loading.classList.add('preenchimento')
    } else if (b == 130) {
        document.getElementsByClassName('box')[0].style.display="none"
        document.getElementsByClassName('modo-versus')[0].style.display="block"
        document.getElementsByClassName('tela-de-carregamento')[0].style.display="none"
        document.getElementsByClassName('menu')[0].style.display="none"
        musica.play();
    }
}
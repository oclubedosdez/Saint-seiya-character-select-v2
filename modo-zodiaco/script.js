/*Tela de carregamento*/
var a = document.getElementById('pre')
var botao = document.getElementById('botao')
var loading = document.querySelector('.load')
const remover = document.querySelector('.tela-de-confirmacao')
var Interval;
b = 0;

botao.onload = function() {
    clearInterval(Interval)
    Interval = setInterval(inicia, 30)
}

function inicia() {
    if (b < 160) {
        b++;
        a.innerHTML=`${b}`
        a.style.color='transparent'
        loading.classList.add('preenchimento')
    } else if (b == 160) {
        document.getElementsByClassName('box')[0].style.display="none"
        document.getElementsByClassName('tela-de-inicio')[0].style.display="none"
        document.getElementsByClassName('historia-dos-personagems')[0].style.display="block"
    }
}
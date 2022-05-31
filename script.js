/*modulo de  opções*/
var a = document.getElementById('pre')
var botao = document.getElementById('botao')
var loading = document.querySelector('.load')
let audio = document.getElementsByClassName('musica')[0];
var botaostartinicia = document.getElementById('start')
const remover = document.querySelector('.tela-de-confirmacao')
var botaosair = document.getElementById('botaosumario')
var Interval;
b = 0;


botao.onload = function () {
    clearInterval(Interval);
    Interval = setInterval(iniciar, 30);
}



function iniciar() {
    if (b < 110) {
        b++;
        a.innerHTML=`${b}`
        a.style.color ='transparent'
        loading.classList.add('preenchimento')
    } else if (b == 110) {
        document.getElementsByClassName('box')[0].style.display="none"
        document.getElementsByClassName('tela-de-confirmacao')[0].style.display="block"
       document.getElementsByClassName('tela-de-incio')[0].style.display="none"
    } else if (b == 120) {
        audio.play();
    }
}

botaostartinicia.onclick = function () {
    audio.play();
    document.getElementsByClassName('fundo-da-janela-de-start')[0].style.display="none"
    document.getElementsByClassName('conteudo1')[0].style.display="block"
}

botaosumario.onclick = function () {
    document.body.style.backgroundColor="rgb(75, 74, 74)"
    document.getElementsByClassName('conteudo1')[0].style.display="none"
    document.body.style.overflowY="scroll"
    document.getElementsByClassName('creditos')[0].style.display="inline"
}


/*modulo de opções */
const somdeopcoes = document.querySelectorAll('.opcao')
let somnave = document.getElementsByClassName('som-nave')[0];
let ventolento = document.getElementsByClassName('vento-lento')[0];

somdeopcoes.forEach((opcao) => {
    opcao.addEventListener('mouseenter', () => {
        somnave.play(); 
        /*mudar a imagem de fundo do menu*/
        const idSelecionado = opcao.attributes.id.value;
        const imagemselecionada = document.getElementById('fundo-principal')
        imagemselecionada.src = `./src/imagems/${idSelecionado}.jpg`
        document.getElementsByClassName('banner')[0].style.display="none"
    })
    opcao.addEventListener('click', () => {
        ventolento.play();
    })
})

var opcaoselecionada = document.getElementById('modo-versus')

opcaoselecionada.onclick = function() {
    document.getElementsByClassName('conteudo1')[0].style.display="none"
    document.getElementsByClassName('modo-batalha')[0].style.display="block"
}



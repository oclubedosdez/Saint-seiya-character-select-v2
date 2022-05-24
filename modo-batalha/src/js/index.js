const personagens = document.querySelectorAll('.personagem')
var somdeselecao = document.getElementsByClassName('audio-selecao')[0];

personagens.forEach((personagem) => {
    personagem.addEventListener('mouseenter', () => {
        const idSelecionado = personagem.attributes.id.value;

        /*if (idSelecionado === 'ultron') return;*/
        /*OBJETIVO 1 - quando passar o mouse em cima do personagem temos que:*/
        const personagemSelecionado = document.querySelector('.selecionado')
        personagemSelecionado.classList.remove('selecionado')

        personagem.classList.add('selecionado')

        /*OBJETIVO 2 - qunado passar o mouse em cima do personagem da listagem, troca a imagem e nome do personagem grande*/

       const imagemJogador1 = document.getElementById('personagem-jogador-1')
       imagemJogador1.src = `./src/imagens/${idSelecionado}.png`;

       const nomejogador1 = document.getElementById('nome-jogador-1')
       const nomeSeleceionado = personagem.getAttribute('data-name');

       nomejogador1.innerHTML = nomeSeleceionado;
       somdeselecao.play();
    });
});

/*Tela de carregamento */
var a = document.getElementById('pre')
var botao = document.getElementById('botao')
var loading = document.querySelector('.load')
var musica = document.getElementsByClassName('audio-batalha')[0];
var Interval;
b = 0;

botao.onload = function() {
    clearInterval(Interval)
    Interval = setInterval(iniciar, 30);
}

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
        musica.play();
    }
}



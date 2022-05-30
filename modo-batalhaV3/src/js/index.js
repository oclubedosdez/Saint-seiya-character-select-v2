const personagens = document.querySelectorAll('.personagem')
var somdeselecao = document.getElementsByClassName('audio-selecao')[0];
var confirmacao = document.getElementsByClassName('audio-select')[0];
var botaovoltar = document.getElementsByClassName('botao-voltar')[0];
var botaoir = document.getElementsByClassName('botao-avancar')[0];

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
    personagem.addEventListener('click', () => {
        /*remover intems*/ 
        document.getElementsByClassName('lista-de-personagens')[0].style.visibility="hidden"
        document.getElementsByClassName('titulo')[0].style.visibility="hidden"
        document.getElementsByClassName('titulo2')[0].style.display="block";transition="3s"
        document.getElementsByClassName('lista-de-personagens')[0].style.maxWidth="200px"
        document.getElementsByClassName('botoes-de-decisao')[0].style.display="inline"
        document.getElementsByClassName('menu')[0].style.visibility="hidden"
        confirmacao.play();
    })
});

botaovoltar.onclick = function() {
    document.getElementsByClassName('lista-de-personagens')[0].style.visibility="visible"
    document.getElementsByClassName('lista-de-personagens')[0].style.maxWidth="700px"
    document.getElementsByClassName('botoes-de-decisao')[0].style.display="none"
    document.getElementsByClassName('titulo')[0].style.visibility="visible"
    document.getElementsByClassName('menu')[0].style.visibility="visible"
}
botaovoltar.mouseover = function() {
    somdeselecao.play();
}

botaoir.onclick = function() {
    document.getElementsByClassName('modo-luta')[0].style.display="none"
    document.getElementsByClassName('modo-batalha')[0].style.display="none"
    document.getElementsByClassName('selecao-de-niveis')[0].style.display="flex"
    botaoir = document.getElementsByClassName('botao-avancar')[0].style.display="none"
    botaovoltar = document.getElementsByClassName('botao-voltar')[0].style.display="none"
}



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
        document.getElementsByClassName('menu')[0].style.display="inline"
        musica.play();
    }
}

/*SELEÇÃO DE CENARIOS*/
const cenarios = document.querySelectorAll('.cenario')

cenarios.forEach((cenario) => {
    cenario.addEventListener('mouseenter', () => {
        const idSelecionado = cenario.attributes.id.value;

        /*if (idSelecionado === 'ultron') return;*/
        /*OBJETIVO 1 - quando passar o mouse em cima do cenario temos que:*/
        const cenarioSelecionado = document.querySelector('.selecionado')
        cenarioSelecionado.classList.remove('selecionado')

        cenario.classList.add('selecionado')

        /*OBJETIVO 2 - qunado passar o mouse em cima do cenario da listagem, troca a imagem e nome do cenario grande*/

       const imagemcenario1 = document.getElementById('cenario-cenario-1')
       imagemcenario1.src = `./src/cenarios/${idSelecionado}.jpg`;

       const nomecenario1 = document.getElementById('nome-cenario-1')
       const nomecenarioSeleceionado = cenario.getAttribute('data-name');

       nomecenario1.innerHTML = nomecenarioSeleceionado;
       somdeselecao.play();
    });
});


// document.getElementsByClassName('modo-luta')[0].style.position="absolute"






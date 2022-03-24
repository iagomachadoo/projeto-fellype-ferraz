const slides = document.querySelectorAll('.temas__item-slide');

const corressel = document.getElementById('corressel');

const btnEsquerdo = document.getElementById('btn-esquerdo');

const btnDireito = document.getElementById('btn-direito');

const quantidadeDeSlides = slides.length;

let slidAtual = 0;

btnEsquerdo.addEventListener('click', () => {
    slidAtual --;
    console.log(slidAtual);
    if (slidAtual < 0) {
        slidAtual = quantidadeDeSlides -1;
    }

    atualizarCarrossel();
});

btnDireito.addEventListener('click', () => {
    slidAtual ++;
    console.log(slidAtual);
    if (slidAtual > quantidadeDeSlides -1) {
        slidAtual = 0;
    }

    atualizarCarrossel();
});

function atualizarCarrossel() {
    corressel.style.transform = `translateX(${-slidAtual * slides[0].offsetWidth}px)`;
};//offsetWidth é uma propriedade somente de leitura e retorna a largura de um elemento
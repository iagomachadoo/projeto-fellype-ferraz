'use strict'

function pegandoElementosASeremAnimados(){
    const itensASeremAnimados = document.querySelectorAll('.is-animacao');

    return itensASeremAnimados
}//pegando os elementos a serem animados

window.addEventListener('scroll', animaScroll)//adicionando o evento de scroll ao window

function animaScroll() {
    const itensASeremAnimados = pegandoElementosASeremAnimados()
    
    itensASeremAnimados.forEach((item) => {
        const distanciaDoItemEmRelacaoAoTopo = item.getBoundingClientRect().top

        const pegando50PorCentoDaAlturaDaTela = definindoEmQueAlturaAAnimacaoOcorre()

        const alturaQueAAnimacaoDeveOcorrer = (distanciaDoItemEmRelacaoAoTopo - pegando50PorCentoDaAlturaDaTela) < 0

        if(pegandoLarguraDaTela()){
            item.classList.remove('is-scroll')

        } else if (alturaQueAAnimacaoDeveOcorrer) {
            item.classList.add('is-scroll-ativo')
        }
    })
}

function definindoEmQueAlturaAAnimacaoOcorre(){
    const alturaWindow = window.innerHeight

    const pegandoProporcaoDoTamanhoDaTela = alturaWindow * 0.5

    return pegandoProporcaoDoTamanhoDaTela
}//definindo em que altura a animação vai ocorrer

function pegarLarguraDaTela(){
    const larguraDaTela = window.innerWidth
    
    return larguraDaTela
}

function pegandoLarguraDaTela(){
    const verificandoLarguraDaTela = window.matchMedia("(max-width: 1000px)").matches

    return verificandoLarguraDaTela
}
function pegarBotaoVoltaTopo(){
    const botaoVoltaTopo = document.querySelector('[data-anima="scroll"]');
    
    return botaoVoltaTopo
}

function pegarElReferencia(){
    const divIntroBg = document.querySelector('.intro__bg');
    
    return divIntroBg
}

function pegarAlturaElReferencia(){
    const alturadivIntroBg = pegarElReferencia().getBoundingClientRect().top
    
    return alturadivIntroBg
}

function pegarCabecalho(){
    const cabecalho = document.getElementById('cabecalho');
    
    return cabecalho
}

window.addEventListener('scroll', mostrarBtnVoltaTopo)

function mostrarBtnVoltaTopo(){
    if(pegarAlturaElReferencia() < 0){

        pegarBotaoVoltaTopo().classList.add('footer__btn--opacity1')

    }else{

        pegarBotaoVoltaTopo().classList.remove('footer__btn--opacity1')
    }
}

pegarBotaoVoltaTopo().addEventListener('click', voltarAoTopo)

function voltarAoTopo(event){
    event.preventDefault()

    window.scrollTo(
        {
        top: 0,
        behavior: 'smooth',
        }
    );
}
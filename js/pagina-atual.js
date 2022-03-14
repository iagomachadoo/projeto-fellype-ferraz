function indicarPaginaAtual(){
    const links = document.querySelectorAll('.header__link');
    
    const larguraDaJanelaDoNavegador = window.innerWidth
    
    if(links){
        if(larguraDaJanelaDoNavegador > 600){
            links.forEach(ativarLink)
        
            function ativarLink(link) {
                const hrefLinkClicado = link.href;
        
                const linkPaginaAtual = location.href;
        
                if (linkPaginaAtual.includes(hrefLinkClicado)) {
                    link.setAttribute('class', 'link-ativo')
                }   
            }
    
        } else{
            console.log('janela mobile.');
        }
    }
}

indicarPaginaAtual()
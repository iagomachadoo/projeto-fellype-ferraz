const links = document.querySelectorAll('.header__link');

links.forEach(ativarLink)

function ativarLink(link) {
    const hrefLinkClicado = link.href;

    const linkPaginaAtual = location.href;

    if (linkPaginaAtual.includes(hrefLinkClicado)) {
        link.setAttribute('class', 'link-ativo')
    }   
}
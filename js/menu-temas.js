const headerItem = document.querySelector('.header__item--relative');

const headerLinkSeta = headerItem.querySelector('.header__link--seta')

headerLinkSeta.addEventListener('click', abreFechaTemas);

headerLinkSeta.addEventListener('touchstart', abreFechaTemas);

function abreFechaTemas(evento) {
    if(evento.type === 'touchstart' ){
        evento.preventDefault()
    }

    const subMenuLista = document.querySelector('.sub-menu__lista ');

    subMenuLista.classList.toggle('is-ativo');

    const subMenuAtivo = subMenuLista.classList.contains('is-ativo')

    evento.currentTarget.setAttribute('aria-expanded', subMenuAtivo)

    if (subMenuAtivo) {
        headerLinkSeta.classList.toggle( 'header__link--seta-180-deg')
        evento.currentTarget.setAttribute('aria-label', 'Fechar temas')
    } else {
        headerLinkSeta.classList.remove( 'header__link--seta-180-deg')
        evento.currentTarget.setAttribute('aria-label',  'Abrir temas')
    }
}
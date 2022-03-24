const btnMenuMobile = document.querySelector('.btn__menu--mobile');

btnMenuMobile.addEventListener('click', toggleClass);

btnMenuMobile.addEventListener('touchstart', toggleClass);//evento relacionado ao mobile

function toggleClass(evento) {
    if (evento.type === 'touchstart') {
        evento.preventDefault()
    }//previnindo o comportamento do evento touchstart. Por padrão, quando esse evento for disparado, o de click também será, assim resultará em um bug no comportamento do elemento

    const headerMenu = document.querySelector('.header__menu');

    const subMenuLista = document.querySelector('.sub-menu__lista');

    const classesSubMenuLista = subMenuLista.classList

    headerMenu.classList.toggle('is-ativo');

    const menuAtivo = headerMenu.classList.contains('is-ativo');//retorna um valor booleano

    evento.currentTarget.setAttribute('aria-expanded',menuAtivo); 
    
    if (menuAtivo) {
        evento.currentTarget.setAttribute('aria-label','Fechar menu');
    } else {
        evento.currentTarget.setAttribute('aria-label','Abrir menu');

        classesSubMenuLista.remove('is-ativo')
    }
}
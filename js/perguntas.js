const pergunta = document.querySelectorAll('.perguntas__pergunta');

pergunta.forEach((btn) => {
    btn.addEventListener('click', abriFechaTexto)
})

function abriFechaTexto(el) {
    const btnClicado = el.currentTarget;

    const ariaControlsBtnCLicado = btnClicado.getAttribute('aria-controls');

    const ariaExpandedBtnCLicado = btnClicado.getAttribute('aria-expanded');

    const resposta = document.getElementById(ariaControlsBtnCLicado);

    resposta.classList.toggle('is-ativo');

    btnClicado.classList.toggle('perguntas__pergunta--rotacionar');

    const contemClasseAtivo = resposta.classList.contains('is-ativo');

    if (contemClasseAtivo) {
        btnClicado.setAttribute('aria-expanded', contemClasseAtivo)
    }else{
        btnClicado.setAttribute('aria-expanded', contemClasseAtivo)
    }
}
const header = document.querySelector('header');
const alturaHeader = header.clientHeight;

// Adiciona o evento de rolagem
window.addEventListener('scroll', function() {
    const posicaoAtual = window.scrollY;

    // Altera a classe com base na posição da rolagem
    if (posicaoAtual < alturaHeader) {
        header.classList.add('header--is-hidden');
    } else {
        header.classList.remove('header--is-hidden');
    }
});

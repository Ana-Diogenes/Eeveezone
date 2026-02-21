function trocarIcon(novaImagem) {
    let imagemCard = document.getElementById("imagemCard");
    imagemCard.src = novaImagem;
}



document.querySelectorAll('.carrossel').forEach(carrossel => {
    const imagens = carrossel.querySelectorAll('.gameplay-red');
    const prev = carrossel.querySelector('.prev');
    const next = carrossel.querySelector('.next');

    let index = 0;

    function mostrarImagem(i){
        imagens.forEach(img => img.classList.remove('ativo'));
        imagens[i].classList.add('ativo');
    }

    if(prev && next){
        prev.addEventListener('click', () => {
            index = (index - 1 + imagens.length) % imagens.length;
            mostrarImagem(index);
        });

        next.addEventListener('click', () => {
            index = (index + 1) % imagens.length;
            mostrarImagem(index);
        });
    }
});

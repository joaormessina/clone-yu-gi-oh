const btnAvancar = document.getElementById("btn-avancar");
const btnVoltar = document.getElementById("btn-voltar");
const cartoes = document.querySelectorAll(".cartao");
let cartaoAtual = 0;

// let cartaoVirado = document.querySelector(".lista-personagens");

btnAvancar.addEventListener("click", function() {
    if(cartaoAtual === cartoes.length -1) return;

    esconderCartaoSelecionado();

    cartaoAtual++;
    mostrarCartao(cartaoAtual);
});

btnVoltar.addEventListener("click", function() {
    if(cartaoAtual === 0) return;

    esconderCartaoSelecionado();
    
    cartaoAtual--;
    mostrarCartao(cartaoAtual);
});

function mostrarCartao(cartaoAtual) {
    cartoes[cartaoAtual].classList.add("selecionado");
};

function esconderCartaoSelecionado() {
    const cartaoSelecionado = document.querySelector(".selecionado");
    cartaoSelecionado.classList.remove("selecionado");
};

/* cartaoVirado.addEventListener("click", function() {

    const cartaoV = document.querySelector(".selecionado");

    if(cartaoV.classList.contains("virado")) {
        cartaoV.classList.remove("virado");
    } else {
        cartaoV.classList.add("virado") ;
    }

}); */
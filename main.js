"use strict"

const listaFotos = document.querySelectorAll('.conteudo__fotos_secundaria');
const fotoPrincipal = document.querySelector('.conteudo__fotos_principal');

function trocaImagemPrincipal (id) {    

    for (let index = 0; index < listaFotos.length; index++) {

        const foto = listaFotos[index];    

        if (foto.classList.contains('ativo')) {
            foto.classList.remove('ativo');    
        }      

        if (index == id) {            
            foto.classList.add('ativo');
        }                     
    }

    fotoPrincipal.src = `images/image-product-${parseInt(id) + 1}.jpg`;
}

for (let index = 0; index < listaFotos.length; index++) {

    const foto = listaFotos[index];    

    foto.onclick = function () {
        trocaImagemPrincipal(foto.id); 
    }

}

function expandeFoto () {
    document.querySelector(".modal").classList.toggle("show-modal");    
}

fotoPrincipal.onclick = function () {
    expandeFoto();
}

function alteraQuantidade(tipo) {

    const botaoQtd = document.querySelector('.conteudo__info_botao_qtd')        
    const qtd = botaoQtd.innerHTML;

    if (tipo == 'diminui') {        
      if ((parseInt(qtd) - 1) >= 0)
        botaoQtd.innerHTML = parseInt(qtd) - 1;  
    } else {
      botaoQtd.innerHTML = parseInt(qtd) + 1;
    }
}

const botaoDiminuirQtd = document.querySelector('.conteudo__info_botao_qtd_diminui')
botaoDiminuirQtd.onclick = function () {
    alteraQuantidade('diminui')
}

const botaoAumentaQtd = document.querySelector('.conteudo__info_botao_qtd_aumenta')
botaoAumentaQtd.onclick = function () {
    alteraQuantidade('aumenta')
}

function mostraCart () {
    document.querySelector(".cart").classList.toggle("invisivel");  
}

const botaoUsuarioCart = document.querySelector('.menu__usuario_cart')
botaoUsuarioCart.onclick = function () {
    mostraCart();
} 

window.addEventListener("click", function(event) {
    if (event.target === document.querySelector(".modal")) {        
        expandeFoto();
    }
});

const listaFotosModal = document.querySelectorAll('.modal__fotos_secundaria');
const fotoPrincipalModal = document.querySelector('.modal__fotos_principal');

function trocaImagemPrincipalModal (id) {    

    for (let index = 0; index < listaFotosModal.length; index++) {

        const fotoModal = listaFotosModal[index];    

        if (fotoModal.classList.contains('ativo')) {
            fotoModal.classList.remove('ativo');    
        }      

        if (index == id) {            
            fotoModal.classList.add('ativo');
        }                     
    }

    fotoPrincipalModal.src = `images/image-product-${parseInt(id) + 1}.jpg`;
}

for (let index = 0; index < listaFotosModal.length; index++) {

    const fotoModal = listaFotosModal[index];    

    fotoModal.onclick = function () {
        trocaImagemPrincipalModal(fotoModal.id); 
    }

}

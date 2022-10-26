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






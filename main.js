
function trocaImagemPrincipal (id) {
    const listaFotos = document.querySelectorAll('.conteudo__fotos_secundaria');

    for (let index = 0; index < listaFotos.length; index++) {

        const foto = listaFotos[index];    

        if (foto.classList.contains('ativo')) {
            foto.classList.remove('ativo');    
        }        

        if (index == id) {            
            foto.classList.add('ativo');
        }             
        
    }
}

function adicionaFuncoes () {
    const listaFotos = document.querySelectorAll('.conteudo__fotos_secundaria');    

     for (let index = 0; index < listaFotos.length; index++) {

        const foto = listaFotos[index];    

        foto.onclick = function () {
           trocaImagemPrincipal(foto.id); 
        }
        
    }
}





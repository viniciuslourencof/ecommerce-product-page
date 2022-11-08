const botaoAdicionarAoCarrinho = document.querySelector('.conteudo__info_botoes_add')
const notificacaoCarrinho = document.querySelector('.menu__usuario_cart_notificacao') 
const containerProdutos = document.querySelector('.cart__produtos')

let itens = [];

function removerItem (id) {    

    for (let index = 0; index < itens.length; index++) {
        const element = itens[index];

        if (element[0] = id) {            
            if (index > -1) { // only splice array when item is found
                itens.splice(index, 1); // 2nd parameter means remove one item only
            }                                        
        }                 
    }         
}

async function renderizarItens() {         

    let html = '';    

    if (itens.length === 0) {
        `<div class="cart__produto_vazio">Your cart is empty</div>`        
    } else {      
        itens.forEach(item => {            
    
            let htmlSegment = 
                `<div class="cart__produto_top">
                    <img class="cart__produto_foto" src="images/image-product-1.jpg" alt="">  
                    <div class="cart__produto_info">
                    <p class="cart__produto_info_descricao">${item[1].nome}</p>
                    <div class="cart__produto_info_valores">
                        <span class="cart__produto_info_valor">$${item[2].valor_item.toFixed(2)}</span> 
                        <span>x</span>
                        <span class="cart__produto_info_qtd">${item[3].qtd_item}</span>
                        <span class="cart__produto_info_valortotal">$${item[4].valor_totalitem.toFixed(2)}</span>
                    </div>              
                    </div>
                    <img class="cart__produto_delete" id="${item[0].id}" src="images/icon-delete.svg" alt="">
                </div>`;                
                
            html += htmlSegment;                               
            
        });        
    }
   
    html += '<button class="botao cart__produto_info_botao">Checkout</button>'
    containerProdutos.innerHTML = html;                              

    const listaItens  = document.querySelectorAll('.cart__produto_delete');
    for (let index = 0; index < listaItens.length; index++) {

        const item = listaItens[index];    

        item.onclick = function () {
            removerItem(item.id); 
            renderizarItens();              
        }
    }
}                

renderizarItens();              

let idItem = 0;

function addItem() {

    const nomeItem = document.querySelector('.conteudo__info_titulo').innerHTML;
    const valorItem =  parseFloat(document.querySelector('.conteudo__info_preco_atual').innerHTML.replace('$',''));
    const qtdItem = parseFloat(document.querySelector('.conteudo__info_botao_qtd').innerHTML);
    const valorTotalItem = valorItem * qtdItem; 
    
    idItem += 1;

    itens.push(
        [
            {'id': idItem},
            {'nome': nomeItem},
            {'valor_item': valorItem},
            {'qtd_item': qtdItem}, 
            {'valor_totalitem': valorTotalItem}
        ]
    );    

    if (notificacaoCarrinho.classList.contains('invisivel')) {
        notificacaoCarrinho.classList.toggle('invisivel')
    }
    
    notificacaoCarrinho.innerHTML = parseInt(notificacaoCarrinho.innerHTML) + parseInt(qtdItem);

    renderizarItens();              
}

botaoAdicionarAoCarrinho.onclick = function () {
    addItem();    
}




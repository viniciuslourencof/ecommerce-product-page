const botaoAdicionarAoCarrinho = document.querySelector('.conteudo__info_botoes_add')
const notificacaoCarrinho = document.querySelector('.menu__usuario_cart_notificacao') 
const containerProdutos = document.querySelector('.cart__produtos')
let itens = [];

async function renderizarItens() {         

    let html = '';

    if (itens) {
        itens.forEach(item => {
    
            let htmlSegment = 
                `<div class="cart__produto_top">
                    <img class="cart__produto_foto" src="images/image-product-1.jpg" alt="">  
                    <div class="cart__produto_info">
                    <p class="cart__produto_info_descricao">${item[0].nome}</p>
                    <div class="cart__produto_info_valores">
                        <span class="cart__produto_info_valor">$${item[1].valor_item.toFixed(2)}</span> 
                        <span>x</span>
                        <span class="cart__produto_info_qtd">${item[2].qtd_item}</span>
                        <span class="cart__produto_info_valortotal">$${item[3].valor_totalitem.toFixed(2)}</span>
                    </div>              
                    </div>
                    <img class="cart__produto_delete" src="images/icon-delete.svg" alt="">
                </div>`;                
                
            html += htmlSegment;                               
            
        });
    };
   
    html += '<button class="botao cart__produto_info_botao">Checkout</button>'
    containerProdutos.innerHTML = html;                           

}                        

function addItem() {

    const nomeItem = document.querySelector('.conteudo__info_titulo').innerHTML;
    const valorItem =  parseFloat(document.querySelector('.conteudo__info_preco_atual').innerHTML.replace('$',''));
    const qtdItem = parseFloat(document.querySelector('.conteudo__info_botao_qtd').innerHTML);
    const valorTotalItem = valorItem * qtdItem;

    itens.push(
        [
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
    console.log(itens)
}
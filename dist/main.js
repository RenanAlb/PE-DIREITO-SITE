"use strict";
const styleMenu = document.querySelector('.style-menu');
const lineTop = document.querySelector('.line-top');
const lineBottom = document.querySelector('.line-bottom');
const pesquisa = document.getElementById('pesquisa');
const shopCart = document.getElementById('shop-cart');
const logo = document.querySelector('.logo');
const styleHeader = document.querySelector('.style-header');
const header = document.querySelector('header');
const divGlobal = document.createElement('div');
const menu = document.querySelector('.menu');
divGlobal.classList.add('global');
const carrinhoEl = document.createElement('div');
carrinhoEl.classList.add('carrinho');
const produtosAddCarrinho = [];
const produtosAddCompras = [];
const main = document.getElementById('content');
const ballRed = document.createElement('div');
const divPesquisa = document.createElement('div');
const linkContato = document.querySelector('.contate-nos a');
const div = document.createElement('div');
const menuEl = document.querySelector('.nav-bar');
function controlesMenu() {
    divPesquisa.classList.add('div-pesquisa');
    divPesquisa.innerHTML = `
    <div>
      <input type="text" id="pesq" placeholder="O que você está procurando?">
      <button class="btn-pesq">PROCURAR</button>
    </div>
    <p class="aviso"></p>
    <ul class="list">
    </ul>
  `;
    document.body.appendChild(divPesquisa);
    pesquisa.addEventListener('click', () => {
        if (divPesquisa.style.display === 'block') {
            divPesquisa.style.display = 'none';
        }
        else {
            divPesquisa.style.display = 'block';
        }
    });
    const suggestions = [
        'bolsa grande',
        'bolsa pequena',
        'sandália anacapri',
        'rasteira anacapri',
        'sandália',
        'sapatilha anacapri',
        'vestido',
        'biquini',
        'tênis anacapri',
        'bota anacapri',
    ];
    const searchInput = document.querySelector('#pesq');
    const suggestionsList = document.querySelector('.list');
    const aviso = document.querySelector('.aviso');
    const btn = document.querySelector('.btn-pesq');
    searchInput.addEventListener('input', () => {
        const inputValue = searchInput.value.toLowerCase();
        const filteredSuggestions = suggestions.filter(suggestion => suggestion.toLowerCase().startsWith(inputValue));
        suggestionsList.innerHTML = '';
        aviso.innerHTML = '';
        if (filteredSuggestions.length === 0 && inputValue !== '') {
            showNoResultsMessage();
        }
        else {
            filteredSuggestions.forEach(suggestion => {
                const li = document.createElement('li');
                li.classList.add('link-li');
                li.textContent = suggestion;
                li.addEventListener('click', () => {
                    searchInput.value = suggestion;
                    suggestionsList.innerHTML = '';
                });
                suggestionsList.appendChild(li);
            });
        }
    });
    searchInput.addEventListener('keypress', (event) => {
        if (event.key === 'Enter') {
            console.log(searchInput.value);
            resultadoSuggestionsPage(searchInput.value.toLocaleLowerCase());
            divPesquisa.style.display = 'none';
            searchInput.value = '';
        }
    });
    btn.addEventListener('click', () => {
        console.log(searchInput.value);
        divPesquisa.style.display = 'none';
        resultadoSuggestionsPage(searchInput.value.toLocaleLowerCase());
        searchInput.value = '';
    });
    function resultadoSuggestionsPage(res) {
        const array = all.filter(e => e.tipo_produto === res);
        console.log(array);
        styleHeader.innerHTML = '';
        styleHeader.style.display = 'none';
        main.innerHTML = '';
        header.style.height = '80px';
        const printProdutos = document.createElement('div');
        printProdutos.classList.add('print-produtos');
        if (array.length === 0) {
            main.innerHTML = '<p class="message">NENHUM RESULTAdO FOI ENCONTRADO :(</p>';
        }
        else {
            main.innerHTML = '<p class="message">RESULTADOS ENCONTRADOS</p>';
        }
        for (let i = 0; i < array.length; i++) {
            printProdutos.innerHTML += `
      <div class="produto">
        <div class="bk-img-produto-${i}"></div>
        <div class="desc-produto">
          <p>${array[i].nome}</p>
          <p>R$${array[i].custo.toFixed(2).replace('.', ',')}</p>
          <button class="carrinho-produto" data-type="${array[i].tipo}" id="${array[i].id}">
            Adicionar ao carrinho
          </button><br>
          <button class="comprar-produto" id="${array[i].id}">
            Comprar agora
          </button>
        </div>
      </div>
      `;
            main.appendChild(printProdutos);
            let imgBk = document.querySelector(`.bk-img-produto-${i}`);
            imgBk.style.backgroundImage = `url(${array[i].img})`;
        }
        carrinho();
    }
    function showNoResultsMessage() {
        suggestionsList.innerHTML = '';
        aviso.innerHTML = 'NENHUM RESULTADO FOI ENCONTRADO :(';
    }
    // ------
    div.classList.add('div-contate');
    div.innerHTML = `
    <ul>
      <li>WHATSAPP: <br><a href="#">(18) 99651 5152</a></li>
      <li><a href="https://www.facebook.com/lojapedireito/?locale=pt_BR" target="_blank">FACEBOOK</a></li>
      <li><a href="https://www.instagram.com/lojapedireitoadamantina/" target="_blank">INSTAGRAM</a></li>
    </ul>
  `;
    document.body.appendChild(div);
    linkContato.addEventListener('click', () => {
        if (div.style.display === 'block') {
            div.style.display = 'none';
        }
        else {
            div.style.display = 'block';
        }
    });
    //----
    menuEl.innerHTML = `
  <section>
    <ul>
      <li><a class="hyperlink" id="home" href="#">HOME</a></li>
      <li><a class="hyperlink" id="roupas" href="#">ROUPAS</a></li>
      <li><a class="hyperlink" id="bolsas" href="#">BOLSAS</a></li>
      <li><a class="hyperlink" id="calcados" href="#">CALÇADOS</a></li>
      <li><a class="hyperlink" id="o-que-ha-de-novo" href="#">O QUE HÁ DE NOVO</a></li>
      <li><a class="hyperlink" id="ajuda" href="#">AJUDA</a></li>
      <li><a class="hyperlink" id="fale-conosco" href="#">FALE CONOSCO</a></li>
    </ul>
  </section>
  `;
    styleMenu.addEventListener('click', controleMenuStyle);
    const links = document.querySelectorAll('.hyperlink');
    links;
    links.forEach(link => {
        link.addEventListener('click', (event) => {
            event.preventDefault();
            controleMenuStyle();
            const type = link.getAttribute('id');
            console.log(type);
            controleMain(String(type));
        });
    });
    //---
    function controleMenuStyle() {
        if (menuEl.style.display === 'block') {
            menuEl.style.display = 'none';
            document.body.classList.remove('pauseScroll');
            divGlobal.style.display = 'none';
            div.style.display = 'none';
            divPesquisa.style.display = 'none';
            closeMenu();
        }
        else {
            menuEl.style.display = 'block';
            document.body.classList.add('pauseScroll');
            divGlobal.style.display = 'none';
            div.style.display = 'none';
            divPesquisa.style.display = 'none';
            openMenu();
        }
    }
}
controlesMenu();
function openMenu() {
    const keyframesTop = [
        { transform: 'rotate(50deg) translateY(4.5px)' }
    ];
    const optionsTop = {
        duration: 300,
        easing: 'ease-in-out',
        fill: 'forwards'
    };
    const keyframesBottom = [
        { transform: 'rotate(-50deg) translateY(-4.5px)' }
    ];
    const optionsBottom = {
        duration: 300,
        easing: 'ease-in-out',
        fill: 'forwards'
    };
    const animationTop = lineTop.animate(keyframesTop, optionsTop);
    const animationBottom = lineBottom.animate(keyframesBottom, optionsBottom);
}
function closeMenu() {
    const keyframesTop = [
        { transform: 'rotate(0deg) translateY(0)' }
    ];
    const optionsTop = {
        duration: 300,
        easing: 'ease-in-out',
        fill: 'forwards'
    };
    const keyframesBottom = [
        { transform: 'rotate(0deg) translateY(0)' }
    ];
    const optionsBottom = {
        duration: 300,
        easing: 'ease-in-out',
        fill: 'forwards'
    };
    const animationTop = lineTop.animate(keyframesTop, optionsTop);
    const animationBottom = lineBottom.animate(keyframesBottom, optionsBottom);
}
const conteudo = {
    imgLook1: 'img/look1.jpg',
    imgLook2: 'img/look2.jpg',
    imgLook3: 'img/look3.jpg',
    text: 'VARIEDADE DE BOLSAS EXCLUSIVAS',
    imgBolsa: 'img/img-bolsa.jpg'
};
function loadPageFirst() {
    styleHeader.style.display = 'block';
    header.style.height = '670px';
    styleHeader.innerHTML = `
    <video src="img/video-bk.mp4" autoplay muted loop>
      Não foi possível carregar o vídeo. Recarregue o site novamente!
    </video>
    <div class="text-position">
      <h1>SEJA PÉ DIREITO</h1>
      <p>Seja um cliente pé direito</p>
    </div>
  `;
    main.innerHTML = `
    <div class="part1-index">
      <div class="display-img"></div>
      <div class="display-text">
        <p>LOOKS INCRÍVEIS E VIBRANTES PARA VOCÊ</p>
        <button class="view-look">VER LOOKS</button>
      </div>
    </div>
    <div class="part2-index">
      <div class="produtos-exibir">
        <section class="style-produto" id="15">
          <div class="img-bk1-p2"></div>
          <div class="sobre-style-produto">
            <p>BOLSA TAL</p>
            <p>R$ 300,00</p>
          </div>
        </section>
        <section class="style-produto" id="16">
          <div class="img-bk2-p2"></div>
          <div class="sobre-style-produto">
            <p>BOLSA TAL</p>
            <p>R$ 300,00</p>
          </div>
        </section>
        <section class="style-produto" id="5">
          <div class="img-bk3-p2"></div>
          <div class="sobre-style-produto">
            <p>BOLSA TAL</p>
            <p>R$ 300,00</p>
          </div>
        </section>
        <section class="style-produto" id="11">
          <div class="img-bk4-p2"></div>
          <div class="sobre-style-produto">
            <p>BOLSA TAL</p>
            <p>R$ 300,00</p>
          </div>
        </section>
      </div>
    </div>
  `;
}
loadPageFirst();
const viewLook = document.querySelector('.view-look');
viewLook.addEventListener('click', roupasMain);
const divStyleProduto = document.createElement('div');
divStyleProduto.classList.add('style-produto-div-absolute');
function clickStyleProduto() {
    const produtosClicados = document.querySelectorAll('.style-produto');
    produtosClicados.forEach(produto => {
        produto.addEventListener('click', () => {
            bolsasMain();
        });
    });
}
clickStyleProduto();
function controleMain(typePage) {
    styleHeader.innerHTML = '';
    styleHeader.style.backgroundImage = '';
    main.innerHTML = '';
    switch (typePage) {
        case 'home':
            homeMain();
            break;
        case 'roupas':
            roupasMain();
            break;
        case 'bolsas':
            bolsasMain();
            break;
        case 'calcados':
            calcadosMain();
            break;
        default:
            homeMain();
            break;
    }
}
function homeMain() {
    loadPageFirst();
}
//// ROUPAS MAIN
function roupasMain() {
    main.innerHTML = '';
    styleHeader.style.display = 'block';
    header.style.height = '670px';
    styleHeader.style.backgroundImage = "url('img/roupa-bk.jpg')";
    styleHeader.innerHTML = '<h1 class="title-page">ROUPAS<h1>';
    const printProdutos = document.createElement('div');
    printProdutos.classList.add('print-produtos');
    for (let i = 0; i < roupas_produtos.roupas.length; i++) {
        printProdutos.innerHTML += `
      <div class="produto">
        <div class="bk-img-produto-${i}"></div>
        <div class="desc-produto">
          <p>${roupas_produtos.roupas[i].nome}</p>
          <p>R$${roupas_produtos.roupas[i].custo.toFixed(2).replace('.', ',')}</p>
          <button class="carrinho-produto" data-type="${roupas_produtos.roupas[i].tipo}" id="${i}">
            Adicionar ao carrinho
          </button><br>
        </div>
      </div>
    `;
        main.appendChild(printProdutos);
        let imgBk = document.querySelector(`.bk-img-produto-${i}`);
        imgBk.style.backgroundImage = `url(${roupas_produtos.roupas[i].img})`;
    }
    carrinho();
}
//// BOLSAS MAIN
function bolsasMain() {
    main.innerHTML = '';
    styleHeader.style.display = 'block';
    header.style.height = '670px';
    styleHeader.style.backgroundImage = 'url(img/bolsa-bk.jpg)';
    styleHeader.innerHTML = '<h1 class="title-page">BOLSAS</h1>';
    const printProdutos = document.createElement('div');
    printProdutos.classList.add('print-produtos');
    for (let i = 0; i < bolsas_produtos.bolsas.length; i++) {
        printProdutos.innerHTML += `
      <div class="produto">
        <div class="bk-img-produto-${i}"></div>
        <div class="desc-produto">
          <p>${bolsas_produtos.bolsas[i].nome}</p>
          <p>R$${bolsas_produtos.bolsas[i].custo.toFixed(2).replace('.', ',')}</p>
          <button class="carrinho-produto" data-type="${bolsas_produtos.bolsas[i].tipo}" id="${i}">
            Adicionar ao carrinho
          </button><br>
        </div>
      </div>
    `;
        main.appendChild(printProdutos);
        let imgBk = document.querySelector(`.bk-img-produto-${i}`);
        imgBk.style.backgroundImage = `url(${bolsas_produtos.bolsas[i].img})`;
    }
    carrinho();
}
function calcadosMain() {
    styleHeader.style.display = 'block';
    header.style.height = '670px';
    styleHeader.style.backgroundImage = 'url(img/cal-bk.jpg)';
    styleHeader.innerHTML = '<h1 class="title-page">CALÇADOS</h1>';
    const printProdutos = document.createElement('div');
    printProdutos.classList.add('print-produtos');
    for (let i = 0; i < bolsas_produtos.bolsas.length; i++) {
        printProdutos.innerHTML += `
      <div class="produto">
        <div class="bk-img-produto-${i}"></div>
        <div class="desc-produto">
          <p>${calcados_produtos.calcados[i].nome}</p>
          <p>R$${calcados_produtos.calcados[i].custo.toFixed(2).replace('.', ',')}</p>
          <button class="carrinho-produto" data-type="${calcados_produtos.calcados[i].tipo}" id="${i}">
            Adicionar ao carrinho
          </button><br>
        </div>
      </div>
    `;
        main.appendChild(printProdutos);
        let imgBk = document.querySelector(`.bk-img-produto-${i}`);
        imgBk.style.backgroundImage = `url(${calcados_produtos.calcados[i].img})`;
    }
    carrinho();
}
function carrinho() {
    const btnAddCarrinho = document.querySelectorAll('.carrinho-produto');
    console.log(btnAddCarrinho);
    btnAddCarrinho.forEach(btn => {
        btn.addEventListener('click', (event) => {
            event.preventDefault();
            const idProduto = btn.getAttribute('id');
            const tipo = btn.getAttribute('data-type');
            console.log(tipo, idProduto);
            atualizarCarrinho(Number(idProduto), String(tipo));
        });
    });
    let produtoAdicionado;
    function atualizarCarrinho(idProduto, tipo) {
        if (tipo === 'roupa') {
            produtoAdicionado = roupas_produtos.roupas[idProduto];
        }
        else if (tipo === 'bolsa') {
            produtoAdicionado = bolsas_produtos.bolsas[idProduto];
        }
        else if (tipo === 'calcado') {
            produtoAdicionado = calcados_produtos.calcados[idProduto];
        }
        else {
            alert('ERRO');
            console.error('ERRO');
        }
        const produtoExistente = produtosAddCarrinho.find(item => item.id === produtoAdicionado.id);
        console.log(produtoExistente);
        if (!produtoExistente) {
            if (produtoAdicionado.estoque > 0) {
                produtoAdicionado.qnt_adicionada_carrinho++;
                produtoAdicionado.estoque--;
                produtosAddCarrinho.push(produtoAdicionado);
                console.log('Produto adicionado ao carrinho:', produtosAddCarrinho);
            }
            else {
                alert('Estoque esgotado!');
            }
        }
        else {
            console.log('Produto existente: ', produtoExistente);
            if (produtoExistente.qnt_adicionada_carrinho < produtoAdicionado.estoque_fixo) {
                produtoExistente.qnt_adicionada_carrinho++;
                produtoExistente.estoque--;
                console.log('Produto existente atualizado:', produtosAddCarrinho);
            }
            else {
                alert('Estoque esgotado!');
            }
        }
        ballRed.innerHTML = `<p>${produtosAddCarrinho.length}</p>`;
        if (produtosAddCarrinho.length > 0) {
            ballRed.classList.add('ball');
            shopCart.appendChild(ballRed);
        }
        else {
            shopCart.removeChild(ballRed);
        }
    }
}
const pIndexContainer = [];
shopCart.addEventListener('click', () => {
    carrinhoEl.innerHTML = '';
    if (divGlobal.style.display === 'block') {
        divGlobal.style.display = 'none';
        div.style.display = 'none';
    }
    else {
        divGlobal.style.display = 'block';
        div.style.display = 'none';
    }
    if (produtosAddCarrinho.length == 0) {
        carrinhoEl.innerHTML = '<p class="center-p">CARRINHO VAZIO</p>';
    }
    else {
        carrinhoEl.innerHTML += `
      <div class="head-carrinho">
        <p>CARRINHO</p>
        <p style="margin-left: 16px">QUANTIDADE</p>
        <p>REMOVER</p>
      </div>
    `;
        for (let i = 0; i < produtosAddCarrinho.length; i++) {
            carrinhoEl.innerHTML += `
      <div class="produto-add-carrinho">
        <p>${produtosAddCarrinho[i].nome}</p>
        <div class="mais-ou-menos">
          <span id="menos" class="event-span" data-spanid="${produtosAddCarrinho[i].id}">-</span>
          <p class="p-id" data-index="${i}" id="${produtosAddCarrinho[i].id}">1</p>
          <span id="mais" class="event-span" data-spanid="${produtosAddCarrinho[i].id}">+</span>
        </div>
        <p class="custo">R$ 200,00</p>
        <span id="remove-item" data-item="${i}" class="material-symbols-outlined">
          close
        </span>
      </div>
    `;
        }
        let incremento = 0;
        carrinhoEl.innerHTML += `
      <div class="total">
        <p>TOTAL</p>
          <p class="print-custo-total"><strong>R$ ${calcularTotalCusto().toFixed(2).replace('.', ',')}</strong></p>
        </div>
      <button class="checkout">CHECKOUT</button>
    `;
        console.log(carrinhoEl);
        divGlobal.appendChild(carrinhoEl);
        menu.appendChild(divGlobal);
        const spans = document.querySelectorAll('.event-span');
        console.log(spans);
        spans.forEach(span => {
            span.addEventListener('click', () => {
                const tipoSpan = span.getAttribute('id');
                const indexProduto = span.getAttribute('data-spanid');
                console.log(tipoSpan, indexProduto);
                atualizarQntSpan(String(tipoSpan), String(indexProduto));
            });
        });
        function atualizarQntSpan(tipoSpan, indexProduto) {
            const pIds = document.querySelectorAll('.p-id');
            if (tipoSpan === 'mais') {
                console.log('+1', pIndexContainer);
                pIds.forEach(e => {
                    const index = e.getAttribute('data-index');
                    if (e.getAttribute('id') === indexProduto) {
                        if (produtosAddCarrinho[Number(index)].qnt_adicionada_carrinho !== produtosAddCarrinho[Number(index)].estoque_fixo) {
                            produtosAddCarrinho[Number(index)].qnt_adicionada_carrinho++;
                            e.innerHTML = `${produtosAddCarrinho[Number(index)].qnt_adicionada_carrinho}`;
                        }
                        else {
                            alert('Não é possível ultrapassar o limite do estoque');
                        }
                    }
                });
            }
            else if (tipoSpan === 'menos') {
                pIds.forEach(e => {
                    const index = e.getAttribute('data-index');
                    if (e.getAttribute('id') === indexProduto) {
                        if (produtosAddCarrinho[Number(index)].qnt_adicionada_carrinho <= 1) {
                            alert('Não é possível adicionar 0 para a quantidade de produtos');
                        }
                        else {
                            produtosAddCarrinho[Number(index)].qnt_adicionada_carrinho--;
                            e.innerHTML = `${produtosAddCarrinho[Number(index)].qnt_adicionada_carrinho}`;
                        }
                    }
                });
            }
            atualizarTotalCusto();
        }
        function calcularTotalCusto() {
            incremento = 0;
            for (let i = 0; i < produtosAddCarrinho.length; i++) {
                const total = produtosAddCarrinho[i].qnt_adicionada_carrinho * produtosAddCarrinho[i].custo;
                console.log(total);
                incremento += total;
            }
            return incremento;
        }
        function atualizarTotalCusto() {
            const printCustoTotal = document.querySelector('.print-custo-total');
            printCustoTotal.innerHTML = `<strong>R$ ${calcularTotalCusto().toFixed(2).replace('.', ',')}</strong>`;
        }
        function carregamentoDeDadosAdicionais() {
            ballRed.innerHTML = `<p></p>`;
            ballRed.innerHTML = `<p>${produtosAddCarrinho.length}</p>`;
            if (produtosAddCarrinho.length > 0) {
                ballRed.classList.add('ball');
                shopCart.appendChild(ballRed);
            }
            else {
                shopCart.removeChild(ballRed);
            }
            if (divGlobal.style.display === 'none') {
                divGlobal.style.display = 'none';
            }
            else {
                divGlobal.style.display = 'none';
            }
        }
        function carregamentoCarrinho() {
            const events = document.querySelector('.events');
            events.style.display = 'block';
            document.body.classList.add('pauseScroll');
            events.innerHTML = `
      <div class="div-event">
      <l-hourglass
        size="40"
        bg-opacity="0.1"
        speed="1.25"
        color="black"
      ></l-hourglass>
      <p>Atualizando o carrinho, por favor aguarde...</p>
      </div>
    `;
            setTimeout(() => {
                if (events.style.display = 'block') {
                    events.style.display = 'none';
                    document.body.classList.remove('pauseScroll');
                }
            }, 3000);
        }
        function identificarItemParaRemover() {
            const removeItem = document.querySelectorAll('#remove-item');
            removeItem.forEach(item => {
                item.addEventListener('click', () => {
                    const index = item.getAttribute('data-item');
                    console.log('remove', index);
                    removerItem(Number(index));
                });
            });
            function removerItem(index) {
                produtosAddCarrinho[index].qnt_adicionada_carrinho = 0;
                produtosAddCarrinho[index].estoque = produtosAddCarrinho[index].estoque_fixo;
                produtosAddCarrinho.splice(index, 1);
                carregamentoCarrinho();
                carregamentoDeDadosAdicionais();
            }
        }
        identificarItemParaRemover();
        function comprarItens() {
            const checkout = document.querySelector('.checkout');
            checkout.addEventListener('click', () => {
                for (let i = 0; i < produtosAddCarrinho.length; i++) {
                    produtosAddCarrinho[i].estoque_fixo = produtosAddCarrinho[i].qnt_adicionada_carrinho;
                    const tipoProduto = produtosAddCarrinho[i].tipo;
                    const idProduto = produtosAddCarrinho[i].id++;
                    console.log(idProduto);
                    switch (tipoProduto) {
                        case 'roupa':
                            roupas_produtos.roupas[idProduto - 20].estoque_fixo--;
                            break;
                        case 'bolsa':
                            bolsas_produtos.bolsas[idProduto - 40].estoque_fixo--;
                            break;
                        case 'calcado':
                            calcados_produtos.calcados[idProduto].estoque_fixo--;
                            break;
                    }
                }
                produtosAddCarrinho.splice(0, produtosAddCarrinho.length);
                carregamentoCarrinho();
                carregamentoDeDadosAdicionais();
            });
        }
        comprarItens();
    }
});

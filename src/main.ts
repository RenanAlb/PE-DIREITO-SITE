const styleMenu = document.querySelector('.style-menu') as HTMLDivElement
const lineTop = document.querySelector('.line-top') as HTMLSpanElement
const lineBottom = document.querySelector('.line-bottom') as HTMLSpanElement
const pesquisa = document.getElementById('pesquisa') as HTMLSpanElement
const shopCart = document.getElementById('shop-cart') as HTMLSpanElement
const logo = document.querySelector('.logo') as HTMLDivElement
const styleHeader = document.querySelector('.style-header') as HTMLElement
const header = document.querySelector('header') as HTMLElement
const divGlobal = document.createElement('div') as HTMLDivElement
const menu = document.querySelector('.menu') as HTMLDivElement
divGlobal.classList.add('global')
const carrinhoEl = document.createElement('div') as HTMLDivElement
carrinhoEl.classList.add('carrinho')
const produtosAddCarrinho: any[] = []
const produtosAddCompras: any[] = []
const main = document.getElementById('content') as HTMLElement
const ballRed = document.createElement('div') as HTMLDivElement

const divPesquisa = document.createElement('div') as HTMLDivElement
const linkContato = document.querySelector('.contate-nos a') as HTMLAnchorElement
const div = document.createElement('div') as HTMLDivElement
const menuEl = document.querySelector('.nav-bar') as HTMLElement

function controlesMenu() {
  divPesquisa.classList.add('div-pesquisa')
  divPesquisa.innerHTML = `
    <div>
      <input type="text" id="pesq" placeholder="O que você está procurando?">
      <button class="btn-pesq">PROCURAR</button>
    </div>
    <p class="aviso"></p>
    <ul class="list">
    </ul>
  `
  document.body.appendChild(divPesquisa)

  pesquisa.addEventListener('click', () => {
    if (divPesquisa.style.display === 'block') {
      divPesquisa.style.display = 'none'
    } else {
      divPesquisa.style.display = 'block'
    }
  })

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
  ]

  const searchInput = document.querySelector('#pesq') as HTMLInputElement
  const suggestionsList = document.querySelector('.list') as HTMLElement
  const aviso = document.querySelector('.aviso') as HTMLElement
  const btn = document.querySelector('.btn-pesq') as HTMLButtonElement

  searchInput.addEventListener('input', () => {
    const inputValue = searchInput.value.toLowerCase()
    const filteredSuggestions = suggestions.filter(suggestion =>
      suggestion.toLowerCase().startsWith(inputValue)
    )

    suggestionsList.innerHTML = ''
    aviso.innerHTML = ''

    if (filteredSuggestions.length === 0 && inputValue !== '') {
      showNoResultsMessage()
    } else {
      filteredSuggestions.forEach(suggestion => {
        const li = document.createElement('li')
        li.classList.add('link-li')
        li.textContent = suggestion
        li.addEventListener('click', () => {
          searchInput.value = suggestion
          suggestionsList.innerHTML = ''
        })
        suggestionsList.appendChild(li)
      })
    }
  })

  searchInput.addEventListener('keypress', (event: KeyboardEvent) => {
    if (event.key === 'Enter') {
      console.log(searchInput.value)
      resultadoSuggestionsPage(searchInput.value.toLocaleLowerCase())
      divPesquisa.style.display = 'none'
      searchInput.value = ''
    }
  })
  btn.addEventListener('click', () => {
    console.log(searchInput.value)
    divPesquisa.style.display = 'none'
    resultadoSuggestionsPage(searchInput.value.toLocaleLowerCase())
    searchInput.value = ''
  })

  function resultadoSuggestionsPage(res: string) {
    const array = all.filter(e => e.tipo_produto === res)
    console.log(array)
    styleHeader.innerHTML = ''
    styleHeader.style.display = 'none'
    main.innerHTML = ''
    header.style.height = '80px'

    const printProdutos = document.createElement('div') as HTMLElement
    printProdutos.classList.add('print-produtos')

    if (array.length === 0) {
      main.innerHTML = '<p class="message">NENHUM RESULTAdO FOI ENCONTRADO :(</p>'
    } else {
      main.innerHTML = '<p class="message">RESULTADOS ENCONTRADOS</p>'
    }

    for (let i = 0; i < array.length; i++) {
      printProdutos.innerHTML += `
      <div class="produto">
        <div class="bk-img-produto-${i}"></div>
        <div class="desc-produto">
          <p>${array[i].nome}</p>
          <p>R$${array[i].custo.toFixed(2).replace('.',',')}</p>
          <button class="carrinho-produto" data-type="${array[i].tipo}" id="${array[i].id}">
            Adicionar ao carrinho
          </button>
        </div>
      </div>
      `
      main.appendChild(printProdutos)
      let imgBk = document.querySelector(`.bk-img-produto-${i}`) as HTMLDivElement
      imgBk.style.backgroundImage = `url(${array[i].img})`
    }
    carrinho()
  }

  function showNoResultsMessage() {
    suggestionsList.innerHTML = ''
    aviso.innerHTML = 'NENHUM RESULTADO FOI ENCONTRADO :('
  }
  // ------

  div.classList.add('div-contate')
  div.innerHTML = `
    <ul>
      <li>WHATSAPP: <br><a href="#">(18) 99651 5152</a></li>
      <li><a href="https://www.facebook.com/lojapedireito/?locale=pt_BR" target="_blank">FACEBOOK</a></li>
      <li><a href="https://www.instagram.com/lojapedireitoadamantina/" target="_blank">INSTAGRAM</a></li>
    </ul>
  `
  document.body.appendChild(div)
  linkContato.addEventListener('click', () => {
    if (div.style.display === 'block') {
      div.style.display = 'none'
    } else {
      div.style.display = 'block'
    }
  })

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
  `

  styleMenu.addEventListener('click', controleMenuStyle)

  const links = document.querySelectorAll('.hyperlink') as NodeListOf<HTMLAnchorElement>
  links

  links.forEach(link => {
    link.addEventListener('click', (event) => {
      event.preventDefault()
      controleMenuStyle()
      const type = link.getAttribute('id')
      console.log(type)
      controleMain(String(type))
    })
  })

  //---

  function controleMenuStyle() {
    if (menuEl.style.display === 'block') {
      menuEl.style.display = 'none'
      document.body.classList.remove('pauseScroll')
      divGlobal.style.display = 'none'
      div.style.display = 'none'
      divPesquisa.style.display = 'none'
      closeMenu()
    } else {
      menuEl.style.display = 'block'
      document.body.classList.add('pauseScroll')
      divGlobal.style.display = 'none'
      div.style.display = 'none'
      divPesquisa.style.display = 'none'
      openMenu()
    }
  }
}
controlesMenu()



function openMenu(): void {
  const keyframesTop: Keyframe[] = [
    {transform: 'rotate(50deg) translateY(4.5px)'}
  ]

  const optionsTop: KeyframeAnimationOptions = {
    duration: 300,
    easing: 'ease-in-out',
    fill: 'forwards'
  }

  const keyframesBottom: Keyframe[] = [
    {transform: 'rotate(-50deg) translateY(-4.5px)'}
  ]

  const optionsBottom: KeyframeAnimationOptions = {
    duration: 300,
    easing: 'ease-in-out',
    fill: 'forwards'
  }

  const animationTop = lineTop.animate(keyframesTop, optionsTop)
  const animationBottom = lineBottom.animate(keyframesBottom, optionsBottom)
}

function closeMenu(): void {
  const keyframesTop: Keyframe[] = [
    {transform: 'rotate(0deg) translateY(0)'}
  ]

  const optionsTop: KeyframeAnimationOptions = {
    duration: 300,
    easing: 'ease-in-out',
    fill: 'forwards'
  }

  const keyframesBottom: Keyframe[] = [
    {transform: 'rotate(0deg) translateY(0)'}
  ]

  const optionsBottom: KeyframeAnimationOptions = {
    duration: 300,
    easing: 'ease-in-out',
    fill: 'forwards'
  }

  const animationTop = lineTop.animate(keyframesTop, optionsTop)
  const animationBottom = lineBottom.animate(keyframesBottom, optionsBottom)
}

// MAIN HTML ------------------------------------------------

type HomeContent = {
  imgLook1: string,
  imgLook2: string,
  imgLook3: string,
  text: string,
  imgBolsa: string
}
const conteudo: HomeContent = {
  imgLook1: 'img/look1.jpg',
  imgLook2: 'img/look2.jpg',
  imgLook3: 'img/look3.jpg',
  text: 'VARIEDADE DE BOLSAS EXCLUSIVAS',
  imgBolsa: 'img/img-bolsa.jpg'
}

function loadPageFirst() {
  styleHeader.style.display = 'block'
  header.style.height = '670px'
  styleHeader.innerHTML = `
    <video src="img/video-bk.mp4" autoplay muted loop>
      Não foi possível carregar o vídeo. Recarregue o site novamente!
    </video>
    <div class="text-position">
      <h1>SEJA PÉ DIREITO</h1>
      <p>Seja um cliente pé direito</p>
    </div>
  `
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
  `
}
loadPageFirst()

const viewLook = document.querySelector('.view-look') as HTMLButtonElement
viewLook.addEventListener('click', roupasMain)

const divStyleProduto = document.createElement('div') as HTMLDivElement
divStyleProduto.classList.add('style-produto-div-absolute')

function clickStyleProduto() {
  const produtosClicados = document.querySelectorAll('.style-produto')
  produtosClicados.forEach(produto => {
    produto.addEventListener('click', () => {
      bolsasMain()
    })
  })
}
clickStyleProduto()


function controleMain(typePage: string): void {
  styleHeader.innerHTML = ''
  styleHeader.style.backgroundImage = ''
  main.innerHTML = ''

  switch(typePage) {
    case 'home':
      homeMain()
    break
    case 'roupas':
      roupasMain()
    break
    case 'bolsas':
      bolsasMain()
    break
    case 'calcados':
      calcadosMain()
    break
    default:
      homeMain()
    break
  }
}

function homeMain() {
  loadPageFirst()
}

//// ROUPAS MAIN
function roupasMain() {
  main.innerHTML = ''
  styleHeader.style.display = 'block'
  header.style.height = '670px'
  styleHeader.style.backgroundImage = "url('img/roupa-bk.jpg')"
  styleHeader.innerHTML = '<h1 class="title-page">ROUPAS<h1>'

  const printProdutos = document.createElement('div') as HTMLElement
  printProdutos.classList.add('print-produtos')

  for (let i = 0; i < roupas_produtos.roupas.length; i++) {
    printProdutos.innerHTML += `
      <div class="produto">
        <div class="bk-img-produto-${i}"></div>
        <div class="desc-produto">
          <p class="name-produto">${roupas_produtos.roupas[i].nome}</p>
          <p>R$${roupas_produtos.roupas[i].custo.toFixed(2).replace('.',',')}</p>
          <button class="carrinho-produto" data-type="${roupas_produtos.roupas[i].tipo}" id="${i}">
            Adicionar ao carrinho
          </button><br>
        </div>
      </div>
    `
    main.appendChild(printProdutos)
    let imgBk = document.querySelector(`.bk-img-produto-${i}`) as HTMLDivElement
    imgBk.style.backgroundImage = `url(${roupas_produtos.roupas[i].img})`
  }
  carrinho()
}

//// BOLSAS MAIN
function bolsasMain() {
  main.innerHTML = ''
  styleHeader.style.display = 'block'
  header.style.height = '670px'
  styleHeader.style.backgroundImage = 'url(img/bolsa-bk.jpg)'
  styleHeader.innerHTML = '<h1 class="title-page">BOLSAS</h1>'

  const printProdutos = document.createElement('div') as HTMLElement
  printProdutos.classList.add('print-produtos')

  for (let i = 0; i < bolsas_produtos.bolsas.length; i++) {
    printProdutos.innerHTML += `
      <div class="produto">
        <div class="bk-img-produto-${i}"></div>
        <div class="desc-produto">
          <p class="name-produto">${bolsas_produtos.bolsas[i].nome}</p>
          <p>R$${bolsas_produtos.bolsas[i].custo.toFixed(2).replace('.',',')}</p>
          <button class="carrinho-produto" data-type="${bolsas_produtos.bolsas[i].tipo}" id="${i}">
            Adicionar ao carrinho
          </button><br>
        </div>
      </div>
    `
    main.appendChild(printProdutos)
    let imgBk = document.querySelector(`.bk-img-produto-${i}`) as HTMLDivElement
    imgBk.style.backgroundImage = `url(${bolsas_produtos.bolsas[i].img})`
  }
  carrinho()
}

function calcadosMain() {
  styleHeader.style.display = 'block'
  header.style.height = '670px'
  styleHeader.style.backgroundImage = 'url(img/cal-bk.jpg)'
  styleHeader.innerHTML = '<h1 class="title-page">CALÇADOS</h1>'

  const printProdutos = document.createElement('div') as HTMLElement
  printProdutos.classList.add('print-produtos')

  for (let i = 0; i < bolsas_produtos.bolsas.length; i++) {
    printProdutos.innerHTML += `
      <div class="produto">
        <div class="bk-img-produto-${i}"></div>
        <div class="desc-produto">
          <p class="name-produto">${calcados_produtos.calcados[i].nome}</p>
          <p>R$${calcados_produtos.calcados[i].custo.toFixed(2).replace('.',',')}</p>
          <button class="carrinho-produto" data-type="${calcados_produtos.calcados[i].tipo}" id="${i}">
            Adicionar ao carrinho
          </button><br>
        </div>
      </div>
    `
    main.appendChild(printProdutos)
    let imgBk = document.querySelector(`.bk-img-produto-${i}`) as HTMLDivElement
    imgBk.style.backgroundImage = `url(${calcados_produtos.calcados[i].img})`
  }
  carrinho()
}

function carrinho() {
  const btnAddCarrinho = document.querySelectorAll('.carrinho-produto') as NodeListOf<HTMLButtonElement>
  console.log(btnAddCarrinho)
  btnAddCarrinho.forEach(btn => {
    btn.addEventListener('click', (event) => {
      event.preventDefault()
      const idProduto = btn.getAttribute('id')
      const tipo = btn.getAttribute('data-type')
      console.log(tipo, idProduto)
      atualizarCarrinho(Number(idProduto), String(tipo))
    })
  })

  interface Produto {
    nome: string,
    img: string,
    tipo: string,
    custo: number,
    estoque: number,
    qnt_comprada: number,
    qnt_adicionada_carrinho: number,
    custo_total_qnt_comprada: number,
    custo_total_qnt_adicionada_carrinho: number,
    custo_total_itens: number,
    id: number,
    estoque_fixo: number
  }

  let produtoAdicionado: Produto
  function atualizarCarrinho(idProduto: number, tipo: string) {
    if (tipo === 'roupa') {
      produtoAdicionado = roupas_produtos.roupas[idProduto]
    } else if (tipo === 'bolsa') {
      produtoAdicionado = bolsas_produtos.bolsas[idProduto]
    } else if (tipo === 'calcado') {
      produtoAdicionado = calcados_produtos.calcados[idProduto]
    } else {
      alert('ERRO')
      console.error('ERRO')
    }

    const produtoExistente = produtosAddCarrinho.find(item => item.id === produtoAdicionado.id)
    console.log(produtoExistente)

    if (!produtoExistente) {
      if (produtoAdicionado.estoque > 0) {
        produtoAdicionado.qnt_adicionada_carrinho++
        produtoAdicionado.estoque--
        produtosAddCarrinho.push(produtoAdicionado)
        console.log('Produto adicionado ao carrinho:', produtosAddCarrinho)
      } else {
        alert('Esgotado!')
      }
    } else {
      console.log('Produto existente: ', produtoExistente)
      if (produtoExistente.qnt_adicionada_carrinho < produtoAdicionado.estoque_fixo) {
        produtoExistente.qnt_adicionada_carrinho++
        produtoExistente.estoque--
        console.log('Produto existente atualizado:', produtosAddCarrinho)
      } else {
        alert('Esgotado!')
      }
    }
    ballRed.innerHTML = `<p>${produtosAddCarrinho.length}</p>`
    if (produtosAddCarrinho.length > 0) {
      ballRed.classList.add('ball')
      shopCart.appendChild(ballRed)
    } else {
      console.log('Renan')
    }
  }
}

const pIndexContainer: string[] = []
shopCart.addEventListener('click', () => {
  carrinhoEl.innerHTML = ''
  if (divGlobal.style.display === 'block') {
    divGlobal.style.display = 'none'
    div.style.display = 'none'
  } else {
    divGlobal.style.display = 'block'
    div.style.display = 'none'
  }

  if (produtosAddCarrinho.length == 0) {
    carrinhoEl.innerHTML = '<p class="center-p">CARRINHO VAZIO</p>'
  } else {
    carrinhoEl.innerHTML += `
      <div class="head-carrinho">
        <p>CARRINHO</p>
        <p style="margin-left: 44px">QUANTIDADE</p>
        <p>REMOVER</p>
      </div>
    `
    for (let i = 0; i < produtosAddCarrinho.length; i++) {
      if (produtosAddCarrinho[i].qnt_adicionada_carrinho > produtosAddCarrinho[i].estoque_fixo) {
        produtosAddCarrinho[i].qnt_adicionada_carrinho = 1
      } else {
        produtosAddCarrinho[i].qnt_adicionada_carrinho = produtosAddCarrinho[i].qnt_adicionada_carrinho
      }
    carrinhoEl.innerHTML += `
      <div class="produto-add-carrinho">
        <div class="mini-image-${i}"></div>
        <div class="mais-ou-menos">
          <span id="menos" class="event-span" data-spanid="${produtosAddCarrinho[i].id}">-</span>
          <p class="p-id" data-index="${i}" id="${produtosAddCarrinho[i].id}">${produtosAddCarrinho[i].qnt_adicionada_carrinho}</p>
          <span id="mais" class="event-span" data-spanid="${produtosAddCarrinho[i].id}">+</span>
        </div>
        <p class="custo">R$ ${produtosAddCarrinho[i].custo.toFixed(2).replace('.',',')}</p>
        <span id="remove-item" data-item="${i}" class="material-symbols-outlined">
          close
        </span>
      </div>
    `

    divGlobal.appendChild(carrinhoEl)
    menu.appendChild(divGlobal)

    const miniImage = document.querySelector(`.mini-image-${i}`) as HTMLDivElement

    miniImage.style.backgroundImage = `url(${produtosAddCarrinho[i].img})`
    miniImage.style.width = '80px'
    miniImage.style.height = '110px'
    miniImage.style.backgroundSize = 'cover'
    miniImage.style.backgroundPosition = 'center center'
    }
    let incremento: number =  0
    carrinhoEl.innerHTML += `
      <div class="total">
        <p>TOTAL</p>
          <p class="print-custo-total"><strong>R$ ${calcularTotalCusto().toFixed(2).replace('.', ',')}</strong></p>
        </div>
      <button class="checkout">CHECKOUT</button>
    `

    console.log(carrinhoEl)

    const spans = document.querySelectorAll('.event-span') as NodeListOf<HTMLSpanElement>
    console.log(spans)

    spans.forEach(span => {
      span.addEventListener('click', () => {
        const tipoSpan = span.getAttribute('id')
        const indexProduto = span.getAttribute('data-spanid')
        console.log(tipoSpan, indexProduto)
        atualizarQntSpan(String(tipoSpan), String(indexProduto))
      })
    })
    function atualizarQntSpan(tipoSpan: string, indexProduto: string) {
      const pIds = document.querySelectorAll('.p-id') as NodeListOf<HTMLParagraphElement>
      if (tipoSpan === 'mais') {
        console.log('+1', pIndexContainer)
        pIds.forEach(e => {
          const index = e.getAttribute('data-index')
          if (e.getAttribute('id') === indexProduto) {
            if (produtosAddCarrinho[Number(index)].estoque !== 0) {
              produtosAddCarrinho[Number(index)].qnt_adicionada_carrinho++
              produtosAddCarrinho[Number(index)].estoque--
              console.log('qnt-adicionada-carrinho:', produtosAddCarrinho[Number(index)].qnt_adicionada_carrinho, 'estoque:',produtosAddCarrinho[Number(index)].estoque)
              e.innerHTML = `${produtosAddCarrinho[Number(index)].qnt_adicionada_carrinho}`
            } else {
              alert('Não é possível ultrapassar o limite do estoque')
            }
          }
        })
      } else if (tipoSpan === 'menos') {
        pIds.forEach(e => {
          const index = e.getAttribute('data-index')
          if (e.getAttribute('id') === indexProduto) {
            if (produtosAddCarrinho[Number(index)].qnt_adicionada_carrinho <= 1) {
              alert('Não é possível adicionar 0 para a quantidade de produtos.\nClique no X para remover o produto.')
            } else {
              produtosAddCarrinho[Number(index)].qnt_adicionada_carrinho--
              produtosAddCarrinho[Number(index)].estoque++
              e.innerHTML = `${produtosAddCarrinho[Number(index)].qnt_adicionada_carrinho}`
            }
          }
        })
      }
      atualizarTotalCusto()
    }
    function calcularTotalCusto() {
      incremento = 0
      for (let i = 0; i < produtosAddCarrinho.length; i++) {
        const total = produtosAddCarrinho[i].qnt_adicionada_carrinho * produtosAddCarrinho[i].custo
        console.log(total)
        incremento += total
      }
      return incremento
    }
    function atualizarTotalCusto() {
      const printCustoTotal = document.querySelector('.print-custo-total') as HTMLParagraphElement
      printCustoTotal.innerHTML = `<strong>R$ ${calcularTotalCusto().toFixed(2).replace('.', ',')}</strong>`
    }

    function carregamentoDeDadosAdicionais() {
      ballRed.innerHTML = `<p></p>`
      ballRed.innerHTML = `<p>${produtosAddCarrinho.length}</p>`

      if (produtosAddCarrinho.length > 0) {
        ballRed.classList.add('ball')
        shopCart.appendChild(ballRed)
      } else {
        shopCart.removeChild(ballRed)
      }

      if (divGlobal.style.display === 'none') {
        divGlobal.style.display = 'none'
      } else {
        divGlobal.style.display = 'none'
      }
    }

    function carregamentoCarrinho() {
      const events = document.querySelector('.events') as HTMLDivElement

      events.style.display = 'block'
      document.body.classList.add('pauseScroll')
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
      `

      function gerarNumeroAleatorio(): number {
        return Math.floor((Math.random() * 5) + 1 ) * 1000
      }

      const numeroAleatorio = gerarNumeroAleatorio()
      console.log(numeroAleatorio)
      setTimeout(() => {
        if (events.style.display = 'block') {
          events.style.display = 'none'
          document.body.classList.remove('pauseScroll')
        }
      }, numeroAleatorio)
    }

    function identificarItemParaRemover() {
      const removeItem = document.querySelectorAll('#remove-item') as NodeListOf<HTMLButtonElement>
      removeItem.forEach(item => {
        item.addEventListener('click', () => {
          const index = item.getAttribute('data-item')
          console.log('remove', index)
          removerItem(Number(index))
        })
      })
      function removerItem(index: number): void {
        produtosAddCarrinho[index].qnt_adicionada_carrinho = 0
        produtosAddCarrinho[index].estoque = produtosAddCarrinho[index].estoque_fixo
        produtosAddCarrinho.splice(index, 1)

        carregamentoCarrinho()

        carregamentoDeDadosAdicionais()
      }
    }
    identificarItemParaRemover()

    function comprarItens() {
      const checkout = document.querySelector('.checkout') as HTMLButtonElement
      checkout.addEventListener('click', () => {
        for(let i = 0; i < produtosAddCarrinho.length; i++) {
          produtosAddCarrinho[i].estoque_fixo = produtosAddCarrinho[i].qnt_adicionada_carrinho
          const tipoProduto = produtosAddCarrinho[i].tipo
          const idProduto = produtosAddCarrinho[i].id
          console.log(idProduto)
          switch(tipoProduto) {
            case 'roupa':
              roupas_produtos.roupas[idProduto - 20].estoque_fixo--
            break
            case 'bolsa':
              bolsas_produtos.bolsas[idProduto - 40].estoque_fixo--
            break
            case 'calcado':
              calcados_produtos.calcados[idProduto].estoque_fixo--
            break
          }
        }
        produtosAddCarrinho.splice(0, produtosAddCarrinho.length)
        carregamentoCarrinho()
       carregamentoDeDadosAdicionais()
      })
    }
    comprarItens()
  }
})


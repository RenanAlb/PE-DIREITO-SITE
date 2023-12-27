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
    <p class="aviso">PESQUISAS COMUNS</p>
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
      resultadoSuggestionsPage(searchInput.value)
      divPesquisa.style.display = 'none'
      searchInput.value = ''
    }
  })
  btn.addEventListener('click', () => {
    console.log(searchInput.value)
    divPesquisa.style.display = 'none'
    resultadoSuggestionsPage(searchInput.value)
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
      main.innerHTML = '<p class="message">NENHUM RESULTAO FOI ENCONTRADO :(</p>'
    } else {
      main.innerHTML = '<p class="message">RESULTADOS ENCONTRADOS</p>'
    }


    // const print = array.map(index => {
    //   printProdutos.innerHTML += `
    //   <div class="produto">
    //     <div class="bk-img-produto-${index.id}"></div>
    //     <div class="desc-produto">
    //       <p>${index.nome}</p>
    //       <p>R$${index.custo.toFixed(2).replace('.',',')}</p>
    //       <button class="carrinho-produto" data-type="${index.tipo}" id="${index.id}">
    //         Adicionar ao carrinho
    //       </button><br>
    //       <button class="comprar-produto" id="${index.id}">
    //         Comprar agoravestido
    //       </button>
    //     </div>
    //   </div> `
    // })
    for (let i = 0; i < array.length; i++) {
      printProdutos.innerHTML += `
      <div class="produto">
        <div class="bk-img-produto-${i}"></div>
        <div class="desc-produto">
          <p>${array[i].nome}</p>
          <p>R$${array[i].custo.toFixed(2).replace('.',',')}</p>
          <button class="carrinho-produto" data-type="${array[i].tipo}" id="${array[i].id}">
            Adicionar ao carrinho
          </button><br>
          <button class="comprar-produto" id="${array[i].id}">
            Comprar agora
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
    <h2 class="title">NOVOS LOOKS</h2>
    <div class="part1-index">
      <img src="${conteudo.imgLook1}" alt="look">
      <img src="${conteudo.imgLook2}" alt="look">
      <img src="${conteudo.imgLook3}" alt="look">
    </div>
    <div class="part2-index">
      <section>
        <h1>${conteudo.text}</h1>
      </section>
      <img src="${conteudo.imgBolsa}" alt="">
    </div>
  `
}
loadPageFirst()

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
          <p>${roupas_produtos.roupas[i].nome}</p>
          <p>R$${roupas_produtos.roupas[i].custo.toFixed(2).replace('.',',')}</p>
          <button class="carrinho-produto" data-type="${roupas_produtos.roupas[i].tipo}" id="${i}">
            Adicionar ao carrinho
          </button><br>
          <button class="comprar-produto" id="${roupas_produtos.roupas[i].id}">
            Comprar agora
          </button>
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
          <p>${bolsas_produtos.bolsas[i].nome}</p>
          <p>R$${bolsas_produtos.bolsas[i].custo.toFixed(2).replace('.',',')}</p>
          <button class="carrinho-produto" data-type="${bolsas_produtos.bolsas[i].tipo}" id="${i}">
            Adicionar ao carrinho
          </button><br>
          <button class="comprar-produto" id="${bolsas_produtos.bolsas[i].id}">
            Comprar agora
          </button>
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
          <p>${calcados_produtos.calcados[i].nome}</p>
          <p>R$${calcados_produtos.calcados[i].custo.toFixed(2).replace('.',',')}</p>
          <button class="carrinho-produto" data-type="${calcados_produtos.calcados[i].tipo}" id="${i}">
            Adicionar ao carrinho
          </button><br>
          <button class="comprar-produto" id="${calcados_produtos.calcados[i].id}">
            Comprar agora
          </button>
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
  btnAddCarrinho.forEach(btn => {
    btn.addEventListener('click', (event) => {
      event.preventDefault()
      const idProduto = btn.getAttribute('id')
      const tipo = btn.getAttribute('data-type')
      console.log(tipo, idProduto)
      atualizarCarrinho(Number(idProduto), String(tipo))
    })
  })

  console.log('btns', btnAddCarrinho)

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
      alert('ERRO 89')
      console.error('ERRO 89')
    }

    const produtoExistente = produtosAddCarrinho.find(item => item.id === produtoAdicionado.id)

    if (!produtoExistente) {
      if (produtoAdicionado.estoque > 0) {
        produtoAdicionado.qnt_adicionada_carrinho++
        produtoAdicionado.estoque--
        produtosAddCarrinho.push(produtoAdicionado)
        console.log('Produto adicionado ao carrinho:', produtosAddCarrinho)
      } else {
        alert('Estoque esgotado!')
      }
    } else {
      console.log('Produto existente: ', produtoExistente)
      if (produtoExistente.qnt_adicionada_carrinho < produtoAdicionado.estoque_fixo) { //=
        produtoExistente.qnt_adicionada_carrinho++
        produtoExistente.estoque--
        console.log('Produto existente atualizado:', produtosAddCarrinho)
      } else {
        alert('Estoque esgotado!')
      }
    }

    const ballRed = document.createElement('div') as HTMLDivElement
    ballRed.innerHTML = `<p>${produtosAddCarrinho.length}</p>`
    if (produtosAddCarrinho.length > 0) {
      ballRed.classList.add('ball')
      shopCart.appendChild(ballRed)
    } else {
      shopCart.removeChild(ballRed)
    }
  }
}


divGlobal.appendChild(carrinhoEl)
menu.appendChild(divGlobal)
shopCart.addEventListener('click', () => {
  carrinhoEl.innerHTML = ''
  if (divGlobal.style.display === 'block') {
    divGlobal.style.display = 'none'
    div.style.display = 'none'
  } else {
    divGlobal.style.display = 'block'
    div.style.display = 'none'
  }
  console.log('1', produtosAddCarrinho)

  if (produtosAddCarrinho.length == 0) {
    carrinhoEl.innerHTML = '<p class="center-p">CARRINHO VAZIO</p>'
  } else {
    for (let i = 0; i < produtosAddCarrinho.length; i++) {
    carrinhoEl.innerHTML += `
      <div class="produto-add-carrinho">
        <div class="img-${i}"></div>
        <section>
          <p>Nome: ${produtosAddCarrinho[i].nome}</p>
          <p>Preço: R$${produtosAddCarrinho[i].custo.toFixed(2).replace('.',',')}</p>
          <p>Quantidade adicionada: ${produtosAddCarrinho[i].qnt_adicionada_carrinho}</p>
        </section>
      </div>
    `
    const img = document.querySelector(`.img-${i}`) as HTMLDivElement
    img.style.backgroundImage = `url(${produtosAddCarrinho[i].img})`
    img.style.width = '250px'
    img.style.height = '350px'
    img.style.margin = 'auto'
    img.style.backgroundPosition = 'center center'
    img.style.backgroundSize = 'cover'
    }
  }
})


"use strict";
const all = [
    {
        nome: 'CALÇA PANTALONA ALFAIATADA',
        img: 'img/look1.jpg',
        tipo: 'roupa',
        custo: 699.90,
        estoque: 2,
        qnt_comprada: 0,
        qnt_adicionada_carrinho: 0,
        custo_total_qnt_comprada: 0,
        custo_total_qnt_adicionada_carrinho: 0,
        custo_total_itens: 0,
        id: 20,
        estoque_fixo: 2,
        tipo_produto: 'vestido'
    },
    {
        nome: 'VESTIDO CURTO LITORAL JADE',
        img: 'img/look2.jpg',
        tipo: 'roupa',
        custo: 559,
        estoque: 2,
        qnt_comprada: 0,
        qnt_adicionada_carrinho: 0,
        custo_total_qnt_comprada: 0,
        custo_total_qnt_adicionada_carrinho: 0,
        custo_total_itens: 0,
        id: 21,
        estoque_fixo: 2,
        tipo_produto: 'vestido'
    },
    {
        nome: 'MACACÃO SLIM CÓS TRANSPASSADO',
        img: 'img/look3.jpg',
        tipo: 'roupa',
        custo: 479.90,
        estoque: 2,
        qnt_comprada: 0,
        qnt_adicionada_carrinho: 0,
        custo_total_qnt_comprada: 0,
        custo_total_qnt_adicionada_carrinho: 0,
        custo_total_itens: 0,
        id: 22,
        estoque_fixo: 2,
        tipo_produto: 'macacão'
    },
    {
        nome: 'VESTIDO ALGA MARINHA',
        img: 'img/roupa4.jpg',
        tipo: 'roupa',
        custo: 699,
        estoque: 2,
        qnt_comprada: 0,
        qnt_adicionada_carrinho: 0,
        custo_total_qnt_comprada: 0,
        custo_total_qnt_adicionada_carrinho: 0,
        custo_total_itens: 0,
        id: 23,
        estoque_fixo: 2,
        tipo_produto: 'vestido'
    },
    {
        nome: 'VESTIDO FLOR DE RIO',
        img: 'img/roupa5.jpg',
        tipo: 'roupa',
        custo: 699,
        estoque: 2,
        qnt_comprada: 0,
        qnt_adicionada_carrinho: 0,
        custo_total_qnt_comprada: 0,
        custo_total_qnt_adicionada_carrinho: 0,
        custo_total_itens: 0,
        id: 24,
        estoque_fixo: 2,
        tipo_produto: 'vestido'
    },
    {
        nome: 'VESTIDO OMBRO ÚNICO',
        img: 'img/roupa6.jpg',
        tipo: 'roupa',
        custo: 799.90,
        estoque: 2,
        qnt_comprada: 0,
        qnt_adicionada_carrinho: 0,
        custo_total_qnt_comprada: 0,
        custo_total_qnt_adicionada_carrinho: 0,
        custo_total_itens: 0,
        id: 25,
        estoque_fixo: 2,
        tipo_produto: 'vestido'
    },
    {
        nome: 'VESTIDO MALHA ONÇA PELE',
        img: 'img/roupa7.jpg',
        tipo: 'roupa',
        custo: 479.90,
        estoque: 2,
        qnt_comprada: 0,
        qnt_adicionada_carrinho: 0,
        custo_total_qnt_comprada: 0,
        custo_total_qnt_adicionada_carrinho: 0,
        custo_total_itens: 0,
        id: 26,
        estoque_fixo: 2,
        tipo_produto: 'vestido'
    },
    {
        nome: 'VESTIDO MALHA LISTRA',
        img: 'img/roupa8.jpg',
        tipo: 'roupa',
        custo: 479,
        estoque: 2,
        qnt_comprada: 0,
        qnt_adicionada_carrinho: 0,
        custo_total_qnt_comprada: 0,
        custo_total_qnt_adicionada_carrinho: 0,
        custo_total_itens: 0,
        id: 27,
        estoque_fixo: 2,
        tipo_produto: 'vestido'
    },
    {
        nome: 'MACACÃO LONGO ESTAMPADO EM VISCOSE COM FENDA',
        img: 'img/roupa9.jpg',
        tipo: 'roupa',
        custo: 599.90,
        estoque: 2,
        qnt_comprada: 0,
        qnt_adicionada_carrinho: 0,
        custo_total_qnt_comprada: 0,
        custo_total_qnt_adicionada_carrinho: 0,
        custo_total_itens: 0,
        id: 28,
        estoque_fixo: 2,
        tipo_produto: 'macacão'
    },
    {
        nome: 'MACACÃO ESTAMPADO COM DECOTE RETO',
        img: 'img/roupa10.jpg',
        tipo: 'roupa',
        custo: 749.90,
        estoque: 2,
        qnt_comprada: 0,
        qnt_adicionada_carrinho: 0,
        custo_total_qnt_comprada: 0,
        custo_total_qnt_adicionada_carrinho: 0,
        custo_total_itens: 0,
        id: 29,
        estoque_fixo: 2,
        tipo_produto: 'vestido'
    },
    {
        nome: 'CONJUNTO NÚBIA COLETE E SHORT PRETO',
        img: 'img/roupa11.jpg',
        tipo: 'roupa',
        custo: 379.90,
        estoque: 2,
        qnt_comprada: 0,
        qnt_adicionada_carrinho: 0,
        custo_total_qnt_comprada: 0,
        custo_total_qnt_adicionada_carrinho: 0,
        custo_total_itens: 0,
        id: 30,
        estoque_fixo: 2,
        tipo_produto: 'conjunto'
    },
    {
        nome: 'BIQUÍNI CINTURA BAIXA COM BOJO ESTAMPADO',
        img: 'img/roupa12.jpg',
        tipo: 'roupa',
        custo: 139.90,
        estoque: 2,
        qnt_comprada: 0,
        qnt_adicionada_carrinho: 0,
        custo_total_qnt_comprada: 0,
        custo_total_qnt_adicionada_carrinho: 0,
        custo_total_itens: 0,
        id: 31,
        estoque_fixo: 2,
        tipo_produto: 'biquini'
    },
    {
        nome: 'CHEMISE COLOR SPRITZ LUA LUÁ',
        img: 'img/roupa13.jpg',
        tipo: 'roupa',
        custo: 129.90,
        estoque: 2,
        qnt_comprada: 0,
        qnt_adicionada_carrinho: 0,
        custo_total_qnt_comprada: 0,
        custo_total_qnt_adicionada_carrinho: 0,
        custo_total_itens: 0,
        id: 32,
        estoque_fixo: 2,
        tipo_produto: 'chemise'
    },
    {
        nome: 'MAIÔ FLORAL CAVADO',
        img: 'img/roupa14.jpg',
        tipo: 'roupa',
        custo: 149.90,
        estoque: 2,
        qnt_comprada: 0,
        qnt_adicionada_carrinho: 0,
        custo_total_qnt_comprada: 0,
        custo_total_qnt_adicionada_carrinho: 0,
        custo_total_itens: 0,
        id: 33,
        estoque_fixo: 2,
        tipo_produto: 'maiô'
    },
    {
        nome: 'CHEMISE SKY VALLEY LUA LUÁ',
        img: 'img/roupa15.jpg',
        tipo: 'roupa',
        custo: 139.90,
        estoque: 2,
        qnt_comprada: 0,
        qnt_adicionada_carrinho: 0,
        custo_total_qnt_comprada: 0,
        custo_total_qnt_adicionada_carrinho: 0,
        custo_total_itens: 0,
        id: 34,
        estoque_fixo: 2,
        tipo_produto: 'chemise'
    },
    {
        nome: 'MAIÔ MALIBU VERMELHO PASSION',
        img: 'img/roupa16.jpg',
        tipo: 'roupa',
        custo: 159.90,
        estoque: 2,
        qnt_comprada: 0,
        qnt_adicionada_carrinho: 0,
        custo_total_qnt_comprada: 0,
        custo_total_qnt_adicionada_carrinho: 0,
        custo_total_itens: 0,
        id: 35,
        estoque_fixo: 2,
        tipo_produto: 'maiô'
    },
    {
        nome: 'VESTIDO MIDI BÁSICO EVASÊ COM FRANZIDOS',
        img: 'img/roupa17.jpg',
        tipo: 'roupa',
        custo: 259.90,
        estoque: 2,
        qnt_comprada: 0,
        qnt_adicionada_carrinho: 0,
        custo_total_qnt_comprada: 0,
        custo_total_qnt_adicionada_carrinho: 0,
        custo_total_itens: 0,
        id: 36,
        estoque_fixo: 2,
        tipo_produto: 'vestido'
    },
    {
        nome: 'MACACÃO CURTO UTILITÁRIO',
        img: 'img/roupa18.jpg',
        tipo: 'roupa',
        custo: 559,
        estoque: 2,
        qnt_comprada: 0,
        qnt_adicionada_carrinho: 0,
        custo_total_qnt_comprada: 0,
        custo_total_qnt_adicionada_carrinho: 0,
        custo_total_itens: 0,
        id: 37,
        estoque_fixo: 2,
        tipo_produto: 'macacão'
    },
    {
        nome: 'SHORT DOLL SUNLIGHT MICROFIBRA LUA LUÁ',
        img: 'img/roupa19.jpg',
        tipo: 'roupa',
        custo: 289.90,
        estoque: 2,
        qnt_comprada: 0,
        qnt_adicionada_carrinho: 0,
        custo_total_qnt_comprada: 0,
        custo_total_qnt_adicionada_carrinho: 0,
        custo_total_itens: 0,
        id: 38,
        estoque_fixo: 2,
        tipo_produto: 'conjunto'
    },
    {
        nome: 'VESTIDO LA ROSSI GRÁFICO AZUL',
        img: 'img/roupa20.jpg',
        tipo: 'roupa',
        custo: 235.90,
        estoque: 2,
        qnt_comprada: 0,
        qnt_adicionada_carrinho: 0,
        custo_total_qnt_comprada: 0,
        custo_total_qnt_adicionada_carrinho: 0,
        custo_total_itens: 0,
        id: 39,
        estoque_fixo: 2,
        tipo_produto: 'vestido'
    },
    {
        nome: 'RASTEIRA MANTA BRILHOSA MULTICOLORIDA',
        img: 'img/cal1.jpg',
        tipo: 'calcado',
        custo: 119.90,
        estoque: 4,
        qnt_comprada: 0,
        qnt_adicionada_carrinho: 0,
        custo_total_qnt_comprada: 0,
        custo_total_qnt_adicionada_carrinho: 0,
        custo_total_itens: 0,
        id: 0,
        estoque_fixo: 4,
        tipo_produto: 'rasteira anacapri'
    },
    {
        nome: 'RASTEIRA ANACAPRI TIRA CRUZADA',
        img: 'img/cal2.jpg',
        tipo: 'calcado',
        custo: 119.80,
        estoque: 2,
        qnt_comprada: 0,
        qnt_adicionada_carrinho: 0,
        custo_total_qnt_comprada: 0,
        custo_total_qnt_adicionada_carrinho: 0,
        custo_total_itens: 0,
        id: 1,
        estoque_fixo: 2,
        tipo_produto: 'rasteira anacapri'
    },
    {
        nome: 'SANDÁLIAS DESLIZANTES BRIGADEIRO',
        img: 'img/cal3.jpg',
        tipo: 'calcado',
        custo: 219,
        estoque: 2,
        qnt_comprada: 0,
        qnt_adicionada_carrinho: 0,
        custo_total_qnt_comprada: 0,
        custo_total_qnt_adicionada_carrinho: 0,
        custo_total_itens: 0,
        id: 2,
        estoque_fixo: 2,
        tipo_produto: 'sandália anacapri'
    },
    {
        nome: 'SANDÁLIA ANACAPRI PAPETE GLAMOUR MARROM',
        img: 'img/cal4.jpg',
        tipo: 'calcado',
        custo: 279.90,
        estoque: 2,
        qnt_comprada: 0,
        qnt_adicionada_carrinho: 0,
        custo_total_qnt_comprada: 0,
        custo_total_qnt_adicionada_carrinho: 0,
        custo_total_itens: 0,
        id: 3,
        estoque_fixo: 2,
        tipo_produto: 'sandália anacapri'
    },
    {
        nome: 'CHINELO PAPETE VIZZANO',
        img: 'img/cal5.jpg',
        tipo: 'calcado',
        custo: 180,
        estoque: 2,
        qnt_comprada: 0,
        qnt_adicionada_carrinho: 0,
        custo_total_qnt_comprada: 0,
        custo_total_qnt_adicionada_carrinho: 0,
        custo_total_itens: 0,
        id: 4,
        estoque_fixo: 2,
        tipo_produto: 'chinelo anacapri'
    },
    {
        nome: 'SANDÁLIA USAFLEX',
        img: 'img/cal6.jpg',
        tipo: 'calcado',
        custo: 212.90,
        estoque: 2,
        qnt_comprada: 0,
        qnt_adicionada_carrinho: 0,
        custo_total_qnt_comprada: 0,
        custo_total_qnt_adicionada_carrinho: 0,
        custo_total_itens: 0,
        id: 5,
        estoque_fixo: 2,
        tipo_produto: 'sandália anacapri'
    },
    {
        nome: 'SAPATILHA VERMELHO VINHO SLINGBACK',
        img: 'img/cal7.jpg',
        tipo: 'calcado',
        custo: 189.90,
        estoque: 2,
        qnt_comprada: 0,
        qnt_adicionada_carrinho: 0,
        custo_total_qnt_comprada: 0,
        custo_total_qnt_adicionada_carrinho: 0,
        custo_total_itens: 0,
        id: 6,
        estoque_fixo: 2,
        tipo_produto: 'sapatilha anacapri'
    },
    {
        nome: 'SAPATILHA SLINGBACK NUDE CORRENTES',
        img: 'img/cal8.jpg',
        tipo: 'calcado',
        custo: 125.90,
        estoque: 2,
        qnt_comprada: 0,
        qnt_adicionada_carrinho: 0,
        custo_total_qnt_comprada: 0,
        custo_total_qnt_adicionada_carrinho: 0,
        custo_total_itens: 0,
        id: 7,
        estoque_fixo: 2,
        tipo_produto: 'sapatilha anacapri'
    },
    {
        nome: 'SANDÁLIA LUIZA BARCELOS PAPETE',
        img: 'img/cal9.jpg',
        tipo: 'calcado',
        custo: 255,
        estoque: 2,
        qnt_comprada: 0,
        qnt_adicionada_carrinho: 0,
        custo_total_qnt_comprada: 0,
        custo_total_qnt_adicionada_carrinho: 0,
        custo_total_itens: 0,
        id: 8,
        estoque_fixo: 2,
        tipo_produto: 'sandália anacapri'
    },
    {
        nome: 'RASTEIRA MOLECA FATFORM',
        img: 'img/cal10.jpg',
        tipo: 'calcado',
        custo: 120,
        estoque: 2,
        qnt_comprada: 0,
        qnt_adicionada_carrinho: 0,
        custo_total_qnt_comprada: 0,
        custo_total_qnt_adicionada_carrinho: 0,
        custo_total_itens: 0,
        id: 9,
        estoque_fixo: 2,
        tipo_produto: 'rasteira anacapri'
    },
    {
        nome: 'RASTEIRA BRANVA GLAM TIRA TRANSPASSADA',
        img: 'img/cal11.jpg',
        tipo: 'calcado',
        custo: 190,
        estoque: 2,
        qnt_comprada: 0,
        qnt_adicionada_carrinho: 0,
        custo_total_qnt_comprada: 0,
        custo_total_qnt_adicionada_carrinho: 0,
        custo_total_itens: 0,
        id: 10,
        estoque_fixo: 2,
        tipo_produto: 'rasteira anacapri'
    },
    {
        nome: 'SAPATILHA ANACAPRI SLINGBACK LAÇO',
        img: 'img/cal12.jpg',
        tipo: 'calcado',
        custo: 215.90,
        estoque: 2,
        qnt_comprada: 0,
        qnt_adicionada_carrinho: 0,
        custo_total_qnt_comprada: 0,
        custo_total_qnt_adicionada_carrinho: 0,
        custo_total_itens: 0,
        id: 11,
        estoque_fixo: 2,
        tipo_produto: 'sapatilha anacapri'
    },
    {
        nome: 'TÊNIS ANACAPRI LISO',
        img: 'img/cal13.jpg',
        tipo: 'calcado',
        custo: 185,
        estoque: 2,
        qnt_comprada: 0,
        qnt_adicionada_carrinho: 0,
        custo_total_qnt_comprada: 0,
        custo_total_qnt_adicionada_carrinho: 0,
        custo_total_itens: 0,
        id: 12,
        estoque_fixo: 2,
        tipo_produto: 'tênis anacapri'
    },
    {
        nome: 'BOTA COTURNO GABRIELA',
        img: 'img/cal14.jpg',
        tipo: 'calcado',
        custo: 130,
        estoque: 2,
        qnt_comprada: 0,
        qnt_adicionada_carrinho: 0,
        custo_total_qnt_comprada: 0,
        custo_total_qnt_adicionada_carrinho: 0,
        custo_total_itens: 0,
        id: 13,
        estoque_fixo: 2,
        tipo_produto: 'bota'
    },
    {
        nome: 'TÊNIS ANACAPRI AYLA',
        img: 'img/cal15.jpg',
        tipo: 'calcado',
        custo: 220,
        estoque: 2,
        qnt_comprada: 0,
        qnt_adicionada_carrinho: 0,
        custo_total_qnt_comprada: 0,
        custo_total_qnt_adicionada_carrinho: 0,
        custo_total_itens: 0,
        id: 14,
        estoque_fixo: 2,
        tipo_produto: 'tênis anacapri'
    },
    {
        nome: 'BOTA SALTO PRETA',
        img: 'img/cal16.jpg',
        tipo: 'calcado',
        custo: 426,
        estoque: 2,
        qnt_comprada: 0,
        qnt_adicionada_carrinho: 0,
        custo_total_qnt_comprada: 0,
        custo_total_qnt_adicionada_carrinho: 0,
        custo_total_itens: 0,
        id: 15,
        estoque_fixo: 2,
        tipo_produto: 'tênis anacapri'
    },
    {
        nome: 'TÊNIS MELA REP PLAY',
        img: 'img/cal17.jpg',
        tipo: 'calcado',
        custo: 85,
        estoque: 2,
        qnt_comprada: 0,
        qnt_adicionada_carrinho: 0,
        custo_total_qnt_comprada: 0,
        custo_total_qnt_adicionada_carrinho: 0,
        custo_total_itens: 0,
        id: 16,
        estoque_fixo: 2,
        tipo_produto: 'tênis anacapri'
    },
    {
        nome: 'TÊNIS SLIP ON AZUL BLUEBERRY',
        img: 'img/cal18.jpg',
        tipo: 'calcado',
        custo: 125.90,
        estoque: 2,
        qnt_comprada: 0,
        qnt_adicionada_carrinho: 0,
        custo_total_qnt_comprada: 0,
        custo_total_qnt_adicionada_carrinho: 0,
        custo_total_itens: 0,
        id: 17,
        estoque_fixo: 2,
        tipo_produto: 'tênis'
    },
    {
        nome: 'SANDÁLIA FEMININA RASTEIRINHA DOURADA',
        img: 'img/cal19.jpg',
        tipo: 'calcado',
        custo: 160,
        estoque: 2,
        qnt_comprada: 0,
        qnt_adicionada_carrinho: 0,
        custo_total_qnt_comprada: 0,
        custo_total_qnt_adicionada_carrinho: 0,
        custo_total_itens: 0,
        id: 18,
        estoque_fixo: 2,
        tipo_produto: 'sandália'
    },
    {
        nome: 'SAPATILHA SLINGBACK BICO FINO ANACAPRI',
        img: 'img/cal20.jpg',
        tipo: 'calcado',
        custo: 179.90,
        estoque: 2,
        qnt_comprada: 0,
        qnt_adicionada_carrinho: 0,
        custo_total_qnt_comprada: 0,
        custo_total_qnt_adicionada_carrinho: 0,
        custo_total_itens: 0,
        id: 19,
        estoque_fixo: 2,
        tipo_produto: 'tênis anacapri'
    },
    {
        nome: 'CARTEIRA SOFT SANTA LOLLA PRETA',
        img: 'img/bolsa1.jpg',
        tipo: 'bolsa',
        custo: 399.90,
        estoque: 2,
        qnt_comprada: 0,
        qnt_adicionada_carrinho: 0,
        custo_total_qnt_comprada: 0,
        custo_total_qnt_adicionada_carrinho: 0,
        custo_total_itens: 0,
        id: 40,
        estoque_fixo: 2,
        tipo_produto: 'bolsa pequena'
    },
    {
        nome: 'BOLSA VICTOR HUGO ANDY CATENA SHOULDER',
        img: 'img/bolsa2.jpg',
        tipo: 'bolsa',
        custo: 2950.90,
        estoque: 2,
        qnt_comprada: 0,
        qnt_adicionada_carrinho: 0,
        custo_total_qnt_comprada: 0,
        custo_total_qnt_adicionada_carrinho: 0,
        custo_total_itens: 0,
        id: 41,
        estoque_fixo: 2,
        tipo_produto: 'bolsa grande'
    },
    {
        nome: 'BOLSA SCHULTZ TIRACOLO LILI TRIANGLE',
        img: 'img/bolsa3.jpg',
        tipo: 'bolsa',
        custo: 690.90,
        estoque: 2,
        qnt_comprada: 0,
        qnt_adicionada_carrinho: 0,
        custo_total_qnt_comprada: 0,
        custo_total_qnt_adicionada_carrinho: 0,
        custo_total_itens: 0,
        id: 42,
        estoque_fixo: 2,
        tipo_produto: 'bolsa pequena'
    },
    {
        nome: 'BOLSA LUIZA BARCELOS COBRA METALIZADA',
        img: 'img/bolsa4.jpg',
        tipo: 'bolsa',
        custo: 739,
        estoque: 2,
        qnt_comprada: 0,
        qnt_adicionada_carrinho: 0,
        custo_total_qnt_comprada: 0,
        custo_total_qnt_adicionada_carrinho: 0,
        custo_total_itens: 0,
        id: 43,
        estoque_fixo: 2,
        tipo_produto: 'bolsa pequena'
    },
    {
        nome: 'BOLSA CAPODARTE METALASSÊ',
        img: 'img/bolsa5.jpg',
        tipo: 'bolsa',
        custo: 200,
        estoque: 2,
        qnt_comprada: 0,
        qnt_adicionada_carrinho: 0,
        custo_total_qnt_comprada: 0,
        custo_total_qnt_adicionada_carrinho: 0,
        custo_total_itens: 0,
        id: 44,
        estoque_fixo: 2,
        tipo_produto: 'bolsa grande'
    },
    {
        nome: 'BOLSA ROSA BALLET MATELASSÊ',
        img: 'img/bolsa6.jpg',
        tipo: 'bolsa',
        custo: 710.90,
        estoque: 2,
        qnt_comprada: 0,
        qnt_adicionada_carrinho: 0,
        custo_total_qnt_comprada: 0,
        custo_total_qnt_adicionada_carrinho: 0,
        custo_total_itens: 0,
        id: 45,
        estoque_fixo: 2,
        tipo_produto: 'bolsa pequena'
    },
    {
        nome: 'BOLSA VICTOR HUGO CHELSEA POCKET',
        img: 'img/bolsa7.jpg',
        tipo: 'bolsa',
        custo: 2776.90,
        estoque: 2,
        qnt_comprada: 0,
        qnt_adicionada_carrinho: 0,
        custo_total_qnt_comprada: 0,
        custo_total_qnt_adicionada_carrinho: 0,
        custo_total_itens: 0,
        id: 46,
        estoque_fixo: 2,
        tipo_produto: 'bolsa grande'
    },
    {
        nome: 'BOLSA ANDY CATENA SHULDER DUCA POCKET',
        img: 'img/bolsa8.jpg',
        tipo: 'bolsa',
        custo: 3275,
        estoque: 2,
        qnt_comprada: 0,
        qnt_adicionada_carrinho: 0,
        custo_total_qnt_comprada: 0,
        custo_total_qnt_adicionada_carrinho: 0,
        custo_total_itens: 0,
        id: 47,
        estoque_fixo: 2,
        tipo_produto: 'bolsa grande'
    },
    {
        nome: 'BOLSA TOTE NEO EMMA TRIANGLE BEGE',
        img: 'img/bolsa9.jpg',
        tipo: 'bolsa',
        custo: 1200.90,
        estoque: 2,
        qnt_comprada: 0,
        qnt_adicionada_carrinho: 0,
        custo_total_qnt_comprada: 0,
        custo_total_qnt_adicionada_carrinho: 0,
        custo_total_itens: 0,
        id: 48,
        estoque_fixo: 2,
        tipo_produto: 'bolsa grande'
    },
    {
        nome: 'BOLSA TIRACOLO LUZ DA LUA BELLA',
        img: 'img/bolsa10.jpg',
        tipo: 'bolsa',
        custo: 699.90,
        estoque: 2,
        qnt_comprada: 0,
        qnt_adicionada_carrinho: 0,
        custo_total_qnt_comprada: 0,
        custo_total_qnt_adicionada_carrinho: 0,
        custo_total_itens: 0,
        id: 49,
        estoque_fixo: 2,
        tipo_produto: 'bolsa pequena'
    },
    {
        nome: 'BOLSA CHELSEA DUCA POCKET AL MEDIUM',
        img: 'img/bolsa11.jpg',
        tipo: 'bolsa',
        custo: 4535.90,
        estoque: 2,
        qnt_comprada: 0,
        qnt_adicionada_carrinho: 0,
        custo_total_qnt_comprada: 0,
        custo_total_qnt_adicionada_carrinho: 0,
        custo_total_itens: 0,
        id: 50,
        estoque_fixo: 2,
        tipo_produto: 'bolsa grande'
    },
    {
        nome: 'BOLSA CODAPORTE CORRENTE AZUL',
        img: 'img/bolsa12.jpg',
        tipo: 'bolsa',
        custo: 1190,
        estoque: 2,
        qnt_comprada: 0,
        qnt_adicionada_carrinho: 0,
        custo_total_qnt_comprada: 0,
        custo_total_qnt_adicionada_carrinho: 0,
        custo_total_itens: 0,
        id: 51,
        estoque_fixo: 2,
        tipo_produto: 'bolsa pequena'
    },
    {
        nome: 'BOLSA TIRACOLO MINI LORIE COURO PRETA',
        img: 'img/bolsa13.jpg',
        tipo: 'bolsa',
        custo: 1100,
        estoque: 2,
        qnt_comprada: 0,
        qnt_adicionada_carrinho: 0,
        custo_total_qnt_comprada: 0,
        custo_total_qnt_adicionada_carrinho: 0,
        custo_total_itens: 0,
        id: 52,
        estoque_fixo: 2,
        tipo_produto: 'bolsa pequena'
    },
    {
        nome: 'BOLSA TIRACOLO PEQUENA BELIEVE',
        img: 'img/bolsa14.jpg',
        tipo: 'bolsa',
        custo: 890.90,
        estoque: 2,
        qnt_comprada: 0,
        qnt_adicionada_carrinho: 0,
        custo_total_qnt_comprada: 0,
        custo_total_qnt_adicionada_carrinho: 0,
        custo_total_itens: 0,
        id: 53,
        estoque_fixo: 2,
        tipo_produto: 'bolsa pequena'
    },
    {
        nome: 'BOLSA TIRACOLO PEQUENA TASSY',
        img: 'img/bolsa15.jpg',
        tipo: 'bolsa',
        custo: 390,
        estoque: 2,
        qnt_comprada: 0,
        qnt_adicionada_carrinho: 0,
        custo_total_qnt_comprada: 0,
        custo_total_qnt_adicionada_carrinho: 0,
        custo_total_itens: 0,
        id: 54,
        estoque_fixo: 2,
        tipo_produto: 'bolsa grande'
    },
    {
        nome: 'BOLSA VICTOR HUGO CHELSEA POCKET PANNA HUE BROWN',
        img: 'img/bolsa16.jpg',
        tipo: 'bolsa',
        custo: 2776.90,
        estoque: 2,
        qnt_comprada: 0,
        qnt_adicionada_carrinho: 0,
        custo_total_qnt_comprada: 0,
        custo_total_qnt_adicionada_carrinho: 0,
        custo_total_itens: 0,
        id: 55,
        estoque_fixo: 2,
        tipo_produto: 'bolsa grande'
    },
    {
        nome: 'BOLSA CHELSEA DUCA POCKET AL MEDIUM NERO BLACK WAX JACQUARD',
        img: 'img/bolsa17.jpg',
        tipo: 'bolsa',
        custo: 3665,
        estoque: 2,
        qnt_comprada: 0,
        qnt_adicionada_carrinho: 0,
        custo_total_qnt_comprada: 0,
        custo_total_qnt_adicionada_carrinho: 0,
        custo_total_itens: 0,
        id: 56,
        estoque_fixo: 2,
        tipo_produto: 'bolsa grande'
    },
    {
        nome: 'BOLSA DUOMO SMALL BLACK CANVAS',
        img: 'img/bolsa18.jpg',
        tipo: 'bolsa',
        custo: 2458,
        estoque: 2,
        qnt_comprada: 0,
        qnt_adicionada_carrinho: 0,
        custo_total_qnt_comprada: 0,
        custo_total_qnt_adicionada_carrinho: 0,
        custo_total_itens: 0,
        id: 57,
        estoque_fixo: 2,
        tipo_produto: 'bolsa grande'
    },
    {
        nome: 'BOLSA CHELSEA POCKET AL ROCK MEDIUM',
        img: 'img/bolsa19.jpg',
        tipo: 'bolsa',
        custo: 2565,
        estoque: 2,
        qnt_comprada: 0,
        qnt_adicionada_carrinho: 0,
        custo_total_qnt_comprada: 0,
        custo_total_qnt_adicionada_carrinho: 0,
        custo_total_itens: 0,
        id: 58,
        estoque_fixo: 2,
        tipo_produto: 'bolsa grande'
    },
    {
        nome: 'BOLSA ROMA POCKET AL SMALL GRAY BROWN',
        img: 'img/bolsa20.jpg',
        tipo: 'bolsa',
        custo: 2475,
        estoque: 2,
        qnt_comprada: 0,
        qnt_adicionada_carrinho: 0,
        custo_total_qnt_comprada: 0,
        custo_total_qnt_adicionada_carrinho: 0,
        custo_total_itens: 0,
        id: 59,
        estoque_fixo: 2,
        tipo_produto: 'bolsa grande'
    },
];
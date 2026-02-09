// 1. Módulo de Itens
function calcularTotalItens(listaPrecos) {
    let total = 0;
    // Loop simples para somar array
    for (let i = 0; i < listaPrecos.length; i++) {
        total = total + listaPrecos[i];
    }
    return total;
}

// 2. Módulo de Logística (Frete)
function calcularFrete(distanciaKm, isVip, valorItens) {
    // Regra VIP (Early Return - Fail Fast)
    if (isVip === true && valorItens > 80) {
        return 0;
    }

    let precoFrete = distanciaKm * 2.00;

    // Taxa de distância
    if (distanciaKm > 5) {
        precoFrete = precoFrete + 3.00;
    }

    return precoFrete;
}

// 3. O Orquestrador (Pedido Completo)
function processarPedido(pedido) {
    // Chama as outras funções (Modularização)
    const totalItens = calcularTotalItens(pedido.precos);
    const totalFrete = calcularFrete(pedido.distancia, pedido.vip, totalItens);
    
    return totalItens + totalFrete;
}
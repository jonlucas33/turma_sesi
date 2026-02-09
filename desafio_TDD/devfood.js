// 1. Módulo de Itens
function calcularTotalItens(listaPrecos) {
    // TODO: Implementar lógica de soma
    return 0; 
}

// 2. Módulo de Logística (Frete)
function calcularFrete(distanciaKm, isVip, valorItens) {
    // TODO: Implementar lógica de frete
    return 0; 
}

// 3. O Orquestrador (Pedido Completo)
function processarPedido(pedido) {
    // TODO: Usar as funções acima para calcular o total
    return 0;
}

// EXPORTANDO AS FUNÇÕES PARA O ARQUIVO DE TESTE
// Isso é necessário para que o outro arquivo "enxergue" estas funções.
module.exports = {
    calcularTotalItens,
    calcularFrete,
    processarPedido
};
// 1. SEGURANÇA
function checarSegurança(integridade, vento) {
    // If composto (AND)
    if (integridade === 100 && vento < 20) {
        return true;
    }
    return false;
}

// 2. QUEIMA
function queimarCombustivel(combustivelAtual, altitudeGanha) {
    // Regra de 3 simples: 20kg por 100km
    // Quantos blocos de 100km subimos?
    let ciclos = altitudeGanha / 100; 
    let gasto = ciclos * 20;
    
    return combustivelAtual - gasto;
}

// 3. SIMULAÇÃO
function simularLancamento(foguete, altitudeAlvo, condicoesClima) {
    
    // Passo 1: Modularização (Chama a segurança)
    let isSeguro = checarSegurança(condicoesClima.integridade, condicoesClima.vento);
    
    if (isSeguro === false) {
        return "ABORTAR: CLIMA/SISTEMA";
    }

    // Passo 2: O Loop de Voo
    // Enquanto não chegou lá E tem gasolina
    while (foguete.altitudeAtual < altitudeAlvo && foguete.combustivel > 0) {
        
        // Sobe
        foguete.altitudeAtual = foguete.altitudeAtual + 100;
        
        // Gasta (Chamando a função modularizada)
        // Passamos 100 pq é o quanto subimos neste ciclo
        foguete.combustivel = queimarCombustivel(foguete.combustivel, 100);
    }

    // Passo 3: Verificação Final
    if (foguete.altitudeAtual >= altitudeAlvo) {
        return "SUCESSO: EM ORBITA";
    } else {
        return "FALHA: QUEDA LIVRE";
    }
}

module.exports = { checarSegurança, queimarCombustivel, simularLancamento };
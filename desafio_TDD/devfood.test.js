// devfood.test.js

// Importando as funções do seu arquivo de código
// O "./" indica que o arquivo está na mesma pasta
const { calcularTotalItens, calcularFrete, processarPedido } = require('./devfood');

function rodarTestes() {
    console.clear();
    console.log("================================================");
    console.log("🚀 INICIANDO SUÍTE DE TESTES 'DEVFOOD' (TDD)");
    console.log("================================================\n");
    
    let erros = 0;
    let acertos = 0;

    // Função auxiliar para desenhar o resultado
    const assert = (titulo, esperado, obtido) => {
        if (esperado === obtido) {
            console.log(`✅ [PASSOU] ${titulo}`);
            acertos++;
        } else {
            console.log(`❌ [FALHOU] ${titulo}`);
            console.log(`   - Esperado: ${esperado}`);
            console.log(`   - Obtido:   ${obtido}`);
            erros++;
        }
    };

    // --- BATERIA DE TESTES ---

    // TESTE 01: Soma de Itens
    assert("Soma dos Itens", 35, calcularTotalItens([10, 20, 5]));

    // TESTE 02: Frete Simples 
    assert("Frete Simples", 6, calcularFrete(3, false, 40));

    // TESTE 03: Frete Longo
    assert("Frete Longo", 15, calcularFrete(6, false, 40));

    // TESTE 04: Regra VIP 
    assert("Cliente VIP", 0, calcularFrete(10, true, 100));

    // TESTE 05: Integração Total
    const pedidoTeste = { precos: [50, 40], distancia: 4, vip: false };
    assert("Processamento Final do Pedido", 98, processarPedido(pedidoTeste));

    // --- PLACAR FINAL ---
    console.log("\n================================================");
    console.log(`📊 RESULTADO FINAL: ${acertos} Acertos | ${erros} Erros`);
    
    if (erros === 0) {
        console.log("\n🏆 PARABÉNS! O SISTEMA ESTÁ PRONTO PARA PRODUÇÃO!");
        console.log("   (Pode entregar o desafio)");
    } else {
        console.log("\n⚠️  O CÓDIGO AINDA PRECISA DE AJUSTES.");
        console.log("   (Corrija a lógica no arquivo 'devfood.js' e rode de novo)");
    }
    console.log("================================================");
}

// Executar
rodarTestes();
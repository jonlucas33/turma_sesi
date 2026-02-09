const { checarSegurança, queimarCombustivel, simularLancamento } = require('./foguete');

function rodarTestes() {
    console.clear();
    console.log("🚀 INICIANDO TELEMETRIA DA MISSÃO MARTE");
    console.log("----------------------------------------------");

    let erros = 0;

    const verificar = (titulo, esperado, obtido) => {
        if (esperado === obtido) {
            console.log(`✅ [PASSOU] ${titulo}`);
        } else {
            console.log(`❌ [FALHOU] ${titulo}`);
            console.log(`   - Esperado: ${esperado}`);
            console.log(`   - Obtido:   ${obtido}`);
            erros++;
        }
    };

    // --- GRUPO 1: SEGURANÇA (Condicionais) ---
    
    // Teste 1: Tudo perfeito
    verificar("Segurança: Condições Ideais", true, checarSegurança(100, 10));

    // Teste 2: Vento forte (Deve abortar)
    verificar("Segurança: Vento Perigoso (>20)", false, checarSegurança(100, 50));

    // Teste 3: Sistema danificado (Deve abortar)
    verificar("Segurança: Sistema 99%", false, checarSegurança(99, 10));


    // --- GRUPO 2: FÍSICA ---

    // Teste 4:
    verificar("Queima de Combustível (100kg - 20kg)", 80, queimarCombustivel(100, 100));


    // --- GRUPO 3: SIMULAÇÃO ---

    // Cenário A: Lançamento Abortado 
    const fogueteA = { combustivel: 1000, altitudeAtual: 0 };
    const climaRuim = { integridade: 100, vento: 80 }; 
    
    verificar("Simulação: Deve Abortar (Clima)", 
        "ABORTAR: CLIMA/SISTEMA", 
        simularLancamento(fogueteA, 500, climaRuim)
    );

    // Cenário B: Sucesso (Combustível Suficiente)
    const fogueteB = { combustivel: 200, altitudeAtual: 0 };
    const climaBom = { integridade: 100, vento: 5 };
    
    verificar("Simulação: Sucesso em Órbita", 
        "SUCESSO: EM ORBITA", 
        simularLancamento(fogueteB, 500, climaBom)
    );

    // Cenário C: Falha (Combustível Acaba no meio)
    const fogueteC = { combustivel: 60, altitudeAtual: 0 };
    
    verificar("Simulação: Falha por falta de combustível", 
        "FALHA: QUEDA LIVRE", 
        simularLancamento(fogueteC, 1000, climaBom)
    );

    console.log("----------------------------------------------");
    if (erros === 0) {
        console.log("🌌 ORBITA ESTÁVEL! SISTEMA PRONTO.");
    } else {
        console.log(`⚠️  ${erros} ERROS CRÍTICOS DETECTADOS.`);
    }
}

rodarTestes();
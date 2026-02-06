// CENÁRIO C: BRAÇO ROBÓTICO DA FÁBRICA 🏭

async function controlarQualidade() {
    console.log("🏭 Iniciando Esteira 04...");

    // 1. INPUT (Lote de Peças)
    // Vamos simular 10 peças para o teste (no real seriam muitas)
    let loteDePecas = [10, 8.5, 10, 12, 9.5, 10, 10, 5, 11, 10];
    
    let caixaAprovados = 0;
    let caixaReciclagem = 0;
    let caixaLixo = 0;

    // 2. LOOP (Enquanto houver peças na esteira)
    while (loteDePecas.length > 0) {
        
        let pecaAtual = loteDePecas.shift(); // Pega a próxima peça
        console.log(`\n🔧 Medindo peça: ${pecaAtual}cm`);

        // 3. CONDICIONAIS (Classificação Rigorosa)
        if (pecaAtual === 10) {
            console.log("✅ PERFEITA: Enviada para Aprovados.");
            caixaAprovados++; // Soma +1
        } 
        else if (pecaAtual < 9) {
            console.log("♻️ PEQUENA: Enviada para Reciclagem.");
            caixaReciclagem++;
        } 
        else {
            // Aqui caem as maiores que 10 OU as entre 9 e 9.9 (tortas)
            console.log("🗑️ DEFEITO: Enviada para o Lixo.");
            caixaLixo++;
        }
    }

    // 4. CHECK FINAL (Relatório de Meta)
    console.log("\n--- FIM DO TURNO ---");
    console.log(`Total Aprovados: ${caixaAprovados}`);

    // Nota: Ajustei a meta para 5 no exemplo para podermos testar,
    // mas a regra de negócio original pedia 50.
    let metaDoDia = 10; 

    if (caixaAprovados >= metaDoDia) {
        console.log("🟢 LUZ VERDE: Meta Batida! Bônus liberado.");
    } else {
        console.log("🔴 LUZ VERMELHA: Produção abaixo do esperado. Tocar Sirene.");
    }
}

// Executar
controlarQualidade();
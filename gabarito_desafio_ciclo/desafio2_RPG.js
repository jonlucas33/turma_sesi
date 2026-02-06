// CENÁRIO B: A BATALHA DE RPG (V2.0)

async function iniciarCombate() {
    console.log("⚔️ COMBATE INICIADO!");

    // 1. Variáveis Iniciais
    let vidaBoss = 100;
    let vidaHeroi = 100;
    let turno = 0;

    // 2. Loop com Operador Lógico E (&&)
    // O jogo só roda se AMBOS estiverem vivos
    while (vidaBoss > 0 && vidaHeroi > 0) {
        turno++;
        console.log(`\n--- Turno ${turno} ---`);

        // Rolagem de Dados (1 a 10)
        let dado1 = Math.floor(Math.random() * 10) + 1;
        let dado2 = Math.floor(Math.random() * 10) + 1;
        
        // 3. Processamento (Soma)
        let soma = dado1 + dado2;
        console.log(`🎲 Dados: ${dado1} + ${dado2} = SOMA ${soma}`);

        // 4. Condicionais Compostas
        if (soma >= 15) {
            console.log("💥 CRÍTICO! Dano Dobrado (20).");
            vidaBoss = vidaBoss - 20;
        } 
        else if (soma <= 10) {
            console.log("🛡️ FALHA CRÍTICA! O Boss contra-atacou (-15 HP).");
            vidaHeroi = vidaHeroi - 15;
        } 
        else {
            console.log("⚔️ Ataque Normal (10).");
            vidaBoss = vidaBoss - 10;
        }

        // Feedback visual
        console.log(`Status: Boss (${vidaBoss} HP) | Herói (${vidaHeroi} HP)`);
    }

    // 5. Decisão Final (Quem morreu?)
    console.log("\n--- FIM DE JOGO ---");
    
    if (vidaHeroi > 0) {
        console.log("🏆 VITÓRIA! Você derrotou o monstro.");
    } else {
        console.log("💀 GAME OVER. O Herói caiu em batalha.");
    }
}

// Executar
iniciarCombate();
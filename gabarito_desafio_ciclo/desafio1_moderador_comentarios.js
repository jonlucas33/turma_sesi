// CENÁRIO A: MODERADOR DE INSTAGRAM 📱

async function moderarComentarios() {
    console.log("🤖 Iniciando Moderador Automático...");

    // 1. INPUT (A Fila de Comentários)
    // Simulando o que chegou no servidor
    let filaComentarios = [
        "Linda!",
        "Vou te xingar, palavrão",
        "Acesse meu site http://golpe.com",
        "Maravilhosa!",
        "Odeio você, palavrão",
        "Compre seguidores no link http://bot.com"
    ];

    let totalBans = 0;

    // 2. LOOP (Enquanto a fila não estiver vazia)
    while (filaComentarios.length > 0) {
        
        // Pega o primeiro da fila
        let comentarioAtual = filaComentarios.shift();
        console.log(`\n💬 Analisando: "${comentarioAtual}"`);

        // 3. CONDICIONAIS (Análise de Texto)
        // .includes() verifica se uma palavra existe dentro do texto
        if (comentarioAtual.includes("palavrão")) {
            console.log("🚫 OFFENSIVE: Comentário apagado. Usuário banido.");
            totalBans = totalBans + 1;
        } 
        else if (comentarioAtual.includes("http")) {
            console.log("⚠️ SPAM: Comentário ocultado (Link suspeito).");
        } 
        else {
            console.log("✅ CLEAN: Comentário Publicado!");
        }
    }

    // 4. CHECK FINAL (Segurança)
    console.log(`\n📊 Relatório Final: ${totalBans} bans aplicados.`);

    if (totalBans > 10) {
        console.log("🔒 ALERTA CRÍTICO: Bloquear conta por ataque massivo.");
    } else {
        console.log("✅ STATUS: Conta segura e operando normalmente.");
    }
}

// Executar
moderarComentarios();
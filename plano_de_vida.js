// 🏁 ARQUIVO: PlanoDeCarreira.js
// OBJETIVO: Simular a jornada de um aluno até a primeira vaga de emprego.

// --- 1. DECLARAÇÃO DE VARIÁVEIS (O Estado Atual) ---
// Variáveis são "caixinhas" que guardam informações na memória.
let nomeDoAluno = "Dev Iniciante";
let nivelDeLogica = 0; // De 0 a 100
let temPortfolio = false;
let sabeIngles = false;

console.log(`🚀 Iniciando sistema para: ${nomeDoAluno}`);

// --- 2. ESTRUTURA DE REPETIÇÃO (WHILE) ---
// O "While" (Enquanto) repete um bloco de código até que a condição seja falsa.
// Cenário: Enquanto eu não souber lógica, eu continuo estudando.

console.log("\n📚 FASE 1: ESTUDANDO LÓGICA...");

while (nivelDeLogica < 80) {
    // A cada loop, o aluno ganha +20 de XP
    nivelDeLogica = nivelDeLogica + 20; 
    console.log(`   🔄 Estudando... Nível atual: ${nivelDeLogica}%`);
    
    // Pequena pausa dramática (simulação)
}

console.log("✅ Lógica Dominada! Agora vamos construir projetos.");
temPortfolio = true; // Mudamos o estado da variável

// --- 3. ESTRUTURA DE REPETIÇÃO (DO-WHILE / LOOP INFINITO COM BREAK) ---
// Agora entramos na fase de buscar emprego. Vamos tentar até conseguir.

let contratado = false;
let tentativas = 0;

console.log("\n🔎 FASE 2: BUSCANDO VAGAS NO LINKEDIN...");

while (contratado === false) {
    tentativas++;
    console.log(`\n--- Tentativa nº ${tentativas} ---`);

    // Simulamos uma vaga aleatória
    // Math.random() gera um número entre 0 e 1
    let vagaPedeIngles = Math.random() > 0.5; 
    
    console.log(vagaPedeIngles ? "🇺🇸 Vaga exige Inglês." : "🇧🇷 Vaga não exige Inglês.");

    // --- 4. ESTRUTURA CONDICIONAL (IF / ELSE) ---
    // O "If" (Se) toma decisões baseadas em verdadeiro ou falso.

    if (vagaPedeIngles === true && sabeIngles === false) {
        // Bloco do "Problema"
        console.log("⚠️ AVISO: Requisito não atendido.");
        console.log("🛠️ AÇÃO: Fazer curso rápido de inglês...");
        sabeIngles = true; // O aluno aprendeu inglês para a próxima
        console.log("↩️ Pular para a próxima vaga (continue).");
        continue; // Volta para o início do While
    }

    // Se passou pelo filtro do inglês, faz a entrevista
    console.log("🎤 Fazendo entrevista técnica...");

    // Simulação: 50% de chance de passar
    let passouNaEntrevista = Math.random() > 0.5;

    if (passouNaEntrevista === true) {
        console.log("🎉 SUCESSO: Você passou na entrevista!");
        contratado = true; // Isso vai quebrar o loop While
    } else {
        console.log("❌ REPROVADO: O entrevistador disse 'Não'.");
        console.log("🐛 DEBUG: Melhorando o portfólio e tentando de novo...");
    }
}

// --- FIM DO PROGRAMA ---
console.log("\n🏆 PARABÉNS! Você foi contratado como Dev Júnior.");
console.log(`📊 Total de tentativas: ${tentativas}`);
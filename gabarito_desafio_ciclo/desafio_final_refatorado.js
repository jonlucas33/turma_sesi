const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Função auxiliar para transformar a pergunta em uma Promessa (Async/Await)
// Isso permite que o código "espere" a resposta do usuário
const perguntar = (pergunta) => {
    return new Promise((resolve) => rl.question(pergunta, resolve));
}

// --- FUNÇÃO 1: RESPONSÁVEL PELA SEGURANÇA (LOGIN) ---
async function validarAcesso() {
    const senhaCorreta = "9999";
    let tentativas = 3;

    console.log("\n🔒 ÁREA DE SEGURANÇA");

    while (tentativas > 0) {
        const senhaDigitada = await perguntar("Digite sua senha (4 dígitos): ");

        if (senhaDigitada === senhaCorreta) {
            console.log("✅ Senha Correta! Acesso Liberado.");
            return true; 
        } else {
            tentativas--;
            console.log(`❌ Senha Incorreta. Restam ${tentativas} tentativas.`);
        }
    }

    console.log("🚫 TENTATIVAS ESGOTADAS. Cartão Bloqueado.");
    return false; 
}

// --- FUNÇÃO 2: RESPONSÁVEL PELO DINHEIRO (SAQUE) ---
async function realizarSaque(saldoAtual) {
    console.log(`\n💰 SALDO DISPONÍVEL: R$ ${saldoAtual.toFixed(2)}`);
    
    const entrada = await perguntar("Quanto deseja sacar? R$ ");
    const valorSaque = Number(entrada); 

    if (isNaN(valorSaque)) {
        console.log("⚠️ Erro: Por favor, digite apenas números.");
        return saldoAtual;
    }
    
    if (valorSaque <= 0) {
        console.log("⚠️ Erro: Valor inválido (Zero ou Negativo).");
        return saldoAtual;
    }

    if (valorSaque > saldoAtual) {
        console.log("⚠️ Erro: Saldo Insuficiente.");
        return saldoAtual;
    }

    if (valorSaque % 10 !== 0) {
        console.log("⚠️ Erro: O caixa só possui notas de R$ 10,00.");
        return saldoAtual;
    }

    // Se passou por tudo, executa o saque
    const novoSaldo = saldoAtual - valorSaque;
    console.log("💵 Tchuk tchuk tchuk... Dinheiro entregue!");
    console.log(`✅ NOVO SALDO: R$ ${novoSaldo.toFixed(2)}`);
    
    return novoSaldo;
}
// --- FUNÇÃO PRINCIPAL: CONTROLA O FLUXO DO CAIXA ELETRÔNICO ---
async function iniciarCaixa() {
    console.clear();
    console.log("🏦 BEM-VINDO AO BANCO SEGURO");

    // 1. Tenta fazer o login
    const acessoPermitido = await validarAcesso();

    // 2. Se o acesso for permitido, libera o saque
    if (acessoPermitido) {
        let saldoUsuario = 1000.00;
        await realizarSaque(saldoUsuario);
    } else {
        console.log("🔒 Procure seu gerente para desbloqueio.");
    }

    // 3. Encerra o programa
    console.log("\n👋 Operação Finalizada. Obrigado.");
    rl.close();
}

// Executar
iniciarCaixa();
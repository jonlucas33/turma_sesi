// DESAFIO FINAL: CAIXA ELETRÔNICO SEGURO 🏧

async function caixaEletronico() {
    console.log("🏦 BEM-VINDO AO BANCO SEGURO");

    // 1. Variáveis Iniciais
    let saldo = 1000;
    let senhaCorreta = "9999";
    let tentativas = 3;
    let acessoLiberado = false; // Flag de controle

    // 2. LOOP DE SEGURANÇA (Senha)
    while (tentativas > 0 && acessoLiberado === false) {
        // Simulação de Input
        let senhaDigitada = "9999"; // Teste com valores errados aqui

        if (senhaDigitada === senhaCorreta) {
            console.log("✅ Senha Correta! Acesso Liberado.");
            acessoLiberado = true; // Sai do Loop
        } else {
            tentativas = tentativas - 1; // Decrementa chance
            console.log(`❌ Senha Incorreta. Restam ${tentativas} tentativas.`);
        }
    }

    // 3. DECISÃO PÓS-LOOP (Bloqueia ou Segue?)
    if (acessoLiberado === false) {
        console.log("🔒 CARTÃO BLOQUEADO. Procure seu gerente.");
        return; // O comando 'return' mata o programa aqui.
    }

    // 4. O SAQUE (Só acontece se o cartão não foi bloqueado)
    console.log(`\n💰 Saldo Atual: R$ ${saldo}`);
    let valorSaque = 250; // Input do usuário

    // Validações Complexas (Ninho de Ifs)
    if (valorSaque > saldo) {
        console.log("⚠️ Erro: Saldo Insuficiente.");
    } 
    else if (valorSaque <= 0) {
        console.log("⚠️ Erro: Valor Inválido (Negativo ou Zero).");
    } 
    else if (valorSaque % 10 !== 0) { // O operador % pega o resto
        console.log("⚠️ Erro: Apenas notas de 10. Digite um valor múltiplo de 10.");
    } 
    else {
        // Sucesso!
        saldo = saldo - valorSaque;
        console.log("💵 Tchuk tchuk tchuk... Dinheiro entregue!");
        console.log(`✅ Novo Saldo: R$ ${saldo}`);
    }
}

// Executar
caixaEletronico();
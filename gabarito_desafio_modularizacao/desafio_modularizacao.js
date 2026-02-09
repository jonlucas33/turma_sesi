const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const perguntar = (texto) => new Promise(resolve => rl.question(texto, resolve));

// --- MÓDULO DE REGRAS DE NEGÓCIO ---

// Regra 1: Desconto por Valor
function calcularDescontoVolume(valorTotal) {
    if (valorTotal > 500) {
        console.log("   [+] Desconto de Volume aplicado (10%)");
        return valorTotal * 0.10;
    }
    return 0;
}

// Regra 2: Desconto PIX 
function calcularDescontoPix(valorTotal, metodoPagamento) {
    if (metodoPagamento === "PIX") {
        console.log("   [+] Desconto PIX aplicado (5%)");
        return valorTotal * 0.05;
    }
    return 0;
}

// Regra 3: Bônus de Sexta-Feira 
function calcularBonusSexta() {
    const hoje = new Date().getDay(); 
    const simulacaoSexta = 5; 
    
    if (simulacaoSexta === 5) {
        console.log("   [+] Bônus 'Sextou' aplicado (R$ 20,00 OFF)");
        return 20.00;
    }
    return 0;
}

// --- MÓDULO PRINCIPAL (O ORQUESTRADOR) ---

async function finalizarVenda() {
    console.clear();
    console.log("🛒 CAIXA DA LOJA - SISTEMA MODULAR");
    
    const valorBruto = Number(await perguntar("Valor da Compra: R$ "));
    const pagamento = (await perguntar("Forma de Pagamento (PIX/CARTAO): ")).toUpperCase();

    console.log("\n--- Calculando Descontos ---");

    let totalDescontos = 0;

    totalDescontos += calcularDescontoVolume(valorBruto);
    totalDescontos += calcularDescontoPix(valorBruto, pagamento);
    totalDescontos += calcularBonusSexta(); 

    const valorFinal = valorBruto - totalDescontos;

    console.log("----------------------------");
    console.log(`Valor Original: R$ ${valorBruto.toFixed(2)}`);
    console.log(`Total Descontos: -R$ ${totalDescontos.toFixed(2)}`);
    console.log(`\nVALOR A PAGAR: R$ ${valorFinal.toFixed(2)}`);
    
    rl.close();
}

finalizarVenda();
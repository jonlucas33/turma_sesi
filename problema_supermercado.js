// DESAFIO: CAIXA DE SUPERMERCADO 🛒
// Objetivo: Somar itens, verificar se precisa pesar e pagar.

async function passarNoCaixa() {
    console.log("🏪 Iniciando atendimento...");

    // 1. DADOS DE ENTRADA (O Carrinho)
    // Uma lista de produtos. Cada um tem nome, preço e tipo.
    let carrinho = [
        { nome: "Arroz", preco: 30.00, tipo: "industrializado" },
        { nome: "Banana", preco: 15.00, tipo: "fruta" }, // Precisa pesar!
        { nome: "Coca-Cola", preco: 8.00, tipo: "bebida" },
        { nome: "Tomate", preco: 7.00, tipo: "legume" }  // Precisa pesar!
    ];

    let totalDaConta = 0;
    let meuDinheiro = 50.00;

    // 2. O LOOP (WHILE)
    // Enquanto o tamanho da lista for maior que 0 (tem itens)
    while (carrinho.length > 0) {
        
        // Remove o primeiro item da lista e coloca na mão
        let itemAtual = carrinho.shift(); 
        console.log(`\n🖐️ Peguei: ${itemAtual.nome}`);

        // 3. CONDICIONAL INTERNA (IF / ELSE) - Verificação de Peso
        if (itemAtual.tipo === "fruta" || itemAtual.tipo === "legume") {
            console.log("   ⚖️ Opa! É produto fresco. Pesando na balança...");
            // Simula tempo de pesar
        } else {
            console.log("   📟 Bip! Código de barras lido.");
        }

        // Soma o valor
        totalDaConta = totalDaConta + itemAtual.preco;
        console.log(`   💲 Parcial: R$ ${totalDaConta}`);
    }

    console.log("\n--- Carrinho Vazio. Hora de Pagar ---");
    console.log(`Total Final: R$ ${totalDaConta}`);
    console.log(`Minha Carteira: R$ ${meuDinheiro}`);

    // 4. CONDICIONAL FINAL (IF / ELSE) - O Pagamento
    if (meuDinheiro >= totalDaConta) {
        console.log("✅ PAGAMENTO APROVADO! Obrigado e volte sempre.");
    } else {
        console.log("❌ SALDO INSUFICIENTE. Precisa devolver itens.");
    }
}

// Executar
passarNoCaixa();
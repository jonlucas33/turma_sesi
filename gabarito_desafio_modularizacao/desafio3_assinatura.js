async function cobrarAssinatura() {
    console.log("--- SISTEMA DE COBRANÇA STREAMFLIX V1.0 ---");
    
    // Dados simulados do usuário que chegou no sistema
    let usuario = { 
        nome: "Carlos", 
        pais: "BR", 
        plano: "PREMIUM", 
        estudante: true 
    };

    let valorFinal = 0;

    if (usuario.plano === "BASICO") {
        let preco = 20.00;
        
        if (usuario.estudante === true) {
            preco = preco * 0.5; 
        }

        if (usuario.pais === "BR") {
            preco = preco + (preco * 0.10);
        } else if (usuario.pais === "EU") {
            preco = preco + (preco * 0.20);
        }

        preco = preco - 5.00; 

        valorFinal = preco;
    } 
    else if (usuario.plano === "PREMIUM") {
        let preco = 40.00;

        if (usuario.pais === "BR") {
            preco = preco + (preco * 0.10);
        } else if (usuario.pais === "EU") {
            preco = preco + (preco * 0.20);
        }

        preco = preco - 5.00;

        valorFinal = preco;
    }
    else if (usuario.plano === "FAMILIA") {
        let preco = 60.00;
        
        if (usuario.pais === "BR") {
            preco = preco + (preco * 0.10);
        } else if (usuario.pais === "EU") {
            preco = preco + (preco * 0.20);
        }

        preco = preco - 5.00;

        valorFinal = preco;
    }

    console.log(`Cliente: ${usuario.nome}`);
    console.log(`Plano: ${usuario.plano}`);
    console.log(`TOTAL A PAGAR: R$ ${valorFinal.toFixed(2)}`);
}

cobrarAssinatura();


// // --- MÓDULO 1: TABELA DE PREÇOS ---
// function obterPrecoBase(plano) {
//     if (plano === "BASICO") return 20.00;
//     if (plano === "PREMIUM") return 40.00;
//     if (plano === "FAMILIA") return 60.00;
//     return 0;
// }

// // --- MÓDULO 2: GOVERNO ---
// function calcularImposto(valor, pais) {
//     if (pais === "BR") return valor * 0.10; // 10%
//     if (pais === "EU") return valor * 0.20; // 20%
//     return 0;
// }

// // --- MÓDULO 3: MARKETING ---
// function calcularDescontos(valor, plano, isEstudante) {
//     let descontoTotal = 0;

//     // Regra 1: Estudante 
//     if (isEstudante && plano === "BASICO") {
//         console.log("   [+] Desconto Estudante (50%)");
//         descontoTotal += valor * 0.50;
//     }

//     // Regra 2: Promoção Sazonal
//     const promoVeraoAtiva = true; 
    
//     if (promoVeraoAtiva) {
//         console.log("   [+] Promo Verão (R$ 5,00 OFF)");
//         descontoTotal += 5.00;
//     }

//     return descontoTotal;
// }

// // --- O ORQUESTRADOR (Main) ---
// async function cobrarAssinaturaRefatorada() {
//     console.log("--- SISTEMA STREAMFLIX V2.0 (MODULAR) ---");

//     let usuario = { 
//         nome: "Carlos", 
//         pais: "BR", 
//         plano: "BASICO", 
//         estudante: true 
//     };

//     // 1. Obtém o preço bruto (Simples)
//     let precoBase = obterPrecoBase(usuario.plano);

//     // 2. Calcula os acréscimos (Imposto)
//     let imposto = calcularImposto(precoBase, usuario.pais);

//     // 3. Calcula os descontos (Marketing)
//     let descontos = calcularDescontos(precoBase, usuario.plano, usuario.estudante);

//     // 4. Matemática Final
//     let total = precoBase + imposto - descontos;

//     console.log(`Cliente: ${usuario.nome} (${usuario.plano})`);
//     console.log(`   Preço Base: R$ ${precoBase.toFixed(2)}`);
//     console.log(`   (+) Imposto (${usuario.pais}): R$ ${imposto.toFixed(2)}`);
//     console.log(`   (-) Descontos: R$ ${descontos.toFixed(2)}`);
//     console.log(`================================`);
//     console.log(`TOTAL A PAGAR: R$ ${total.toFixed(2)}`);
// }

// cobrarAssinaturaRefatorada();
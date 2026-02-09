// --- INPUTS (Simulando a entrada de dados) ---
const filmeEscolhido = "Vingadores"; 
const salaEscolhida = "VIP"; // Opções: PADRAO, 3D, VIP
const idadeCliente = 25;
const isEstudante = true;
const isProfessor = false; // Novo input que o sistema ignora por enquanto

async function processarVenda() {
    console.log("--- BILHETERIA ---");
    let precoFinal = 0;

    if (salaEscolhida === "PADRAO") {
        let preco = 20.00;

        if (filmeEscolhido === "Vingadores") {
            preco = preco + 5.00;
        }

        if (isEstudante === true || idadeCliente >= 60) {
            preco = preco * 0.5;
        }
        
        precoFinal = preco;
    } 
    else if (salaEscolhida === "3D") {
        let preco = 35.00;

        if (filmeEscolhido === "Vingadores") {
            preco = preco + 5.00;
        }

        if (isEstudante === true || idadeCliente >= 60) {
            preco = preco * 0.5;
        }

        precoFinal = preco;
    }
    else if (salaEscolhida === "VIP") {
        let preco = 50.00;

        if (filmeEscolhido === "Vingadores") {
            preco = preco + 5.00;
        }

        if (isEstudante === true || idadeCliente >= 60) {
            preco = preco * 0.5;
        }

        precoFinal = preco;
    }
    else {
        console.log("Erro: Sala não existe");
        return;
    }

    console.log(`Filme: ${filmeEscolhido}`);
    console.log(`Sala: ${salaEscolhida}`);
    console.log(`TOTAL: R$ ${precoFinal.toFixed(2)}`);
}

processarVenda();

// // --- INPUTS ---
// const filme = "Avatar 2"; 
// const sala = "VIP";
// const idade = 30;
// const estudante = false;
// const professor = true; // Agora vamos usar isso!

// // --- MÓDULOS (FUNÇÕES) ---

// function obterPrecoBase(tipoSala) {
//     if (tipoSala === "PADRAO") return 20.00;
//     if (tipoSala === "3D") return 35.00;
//     if (tipoSala === "VIP") return 60.00; // Alterado conforme pedido
//     return 0;
// }

// function calcularTaxaFilme(nomeFilme) {
//     // Fácil de trocar a regra de estreia
//     if (nomeFilme === "Avatar 2") {
//         return 5.00;
//     }
//     return 0;
// }

// function calcularDesconto(valor, isEstudante, isProfessor, idade) {
//     // Lógica centralizada: Se mudar a lei, muda só aqui.
//     if (isEstudante || isProfessor || idade >= 60) {
//         return valor * 0.5; // Retorna o valor DO DESCONTO
//     }
//     return 0;
// }

// // --- ORQUESTRADOR ---

// async function sistemaRefatorado() {
//     console.log("--- BILHETERIA 2.0 ---");

//     // 1. Preço Base
//     let base = obterPrecoBase(sala);
//     if (base === 0) {
//         console.log("Sala inválida.");
//         return;
//     }

//     // 2. Taxas
//     let extra = calcularTaxaFilme(filme);

//     // 3. Subtotal (Base + Extra)
//     let subtotal = base + extra;

//     // 4. Descontos (Aplicado sobre o subtotal)
//     let desconto = calcularDesconto(subtotal, estudante, professor, idade);

//     // 5. Final
//     let total = subtotal - desconto;

//     console.log(`Filme: ${filme} | Sala: ${sala}`);
//     console.log(`Subtotal: R$ ${subtotal.toFixed(2)}`);
//     console.log(`Desconto: R$ ${desconto.toFixed(2)}`);
//     console.log(`TOTAL A PAGAR: R$ ${total.toFixed(2)}`);
// }

// sistemaRefatorado();
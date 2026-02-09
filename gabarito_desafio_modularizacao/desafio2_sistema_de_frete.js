async function sistemaDeFrete() {
    console.log("--- CÁLCULO DE FRETE (COPY/PASTE) ---");
    
    let compras = [
        { destino: "SP", valor: 100 },
        { destino: "NE", valor: 100 },
        { destino: "SUL", valor: 100 }
    ];

    for (let i = 0; i < compras.length; i++) {
        let pedido = compras[i];
        let frete = 0;


        if (pedido.destino === "SP") {

            if (pedido.valor > 200) {
                frete = 0; 
            } else {
                frete = 20; 
            }
            console.log(`Pedido SP: Frete R$ ${frete}`);
        }
        else if (pedido.destino === "NE") {
            if (pedido.valor > 200) {
                frete = 0; 
            } else {
                frete = 40; 
            }
            console.log(`Pedido NE: Frete R$ ${frete}`);
        }
        else if (pedido.destino === "SUL") {
            if (pedido.valor > 200) {
                frete = 0; 
            } else {
                frete = 30; 
            }
            console.log(`Pedido SUL: Frete R$ ${frete}`);
        }
    }
}

sistemaDeFrete();


// function calcularFrete(valorPedido, regiao) {
//     if (valorPedido > 200) return 0;

//     if (regiao === "SP") return 20;
//     if (regiao === "NE") return 40;
//     if (regiao === "SUL") return 30;
    
//     return 50; 
// }

// for (let i = 0; i < compras.length; i++) {
//     let frete = calcularFrete(compras[i].valor, compras[i].destino);
//     console.log(`Pedido ${compras[i].destino}: Frete R$ ${frete}`);
// }
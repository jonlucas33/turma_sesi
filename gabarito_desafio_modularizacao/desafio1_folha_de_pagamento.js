async function calcularFolha() {
    console.log("--- SISTEMA DE PAGAMENTO V1.0 (LEGADO) ---");
    
    let funcionarios = [
        { nome: "Ana", salarioBruto: 3000, cargo: "Dev" },
        { nome: "João", salarioBruto: 5000, cargo: "Gerente" },
        { nome: "Bia", salarioBruto: 1412, cargo: "Estagiário" }
    ];

    for (let i = 0; i < funcionarios.length; i++) {
        let f = funcionarios[i];
        console.log(`\nProcessando: ${f.nome}...`);

        let inss = 0;
        if (f.salarioBruto <= 1412) {
            inss = f.salarioBruto * 0.075;
        } else if (f.salarioBruto <= 2666.68) {
            inss = f.salarioBruto * 0.09;
        } else if (f.salarioBruto <= 4000.03) {
            inss = f.salarioBruto * 0.12;
        } else {
            inss = f.salarioBruto * 0.14;
        }

        let bonus = 0;
        if (f.cargo === "Gerente") {
            bonus = 1000;
        } else if (f.cargo === "Dev") {
            bonus = 500;
        }

        let salarioLiquido = f.salarioBruto - inss + bonus;

        console.log(`   Salário Base: R$ ${f.salarioBruto}`);
        console.log(`   Desconto INSS: -R$ ${inss.toFixed(2)}`);
        console.log(`   Bônus Cargo: +R$ ${bonus.toFixed(2)}`);
        console.log(`   TOTAL A PAGAR: R$ ${salarioLiquido.toFixed(2)}`);
    }
}

calcularFolha();


// // --- DEPARTAMENTO 1: CONTABILIDADE ---
// function calcularINSS(salarioBruto) {
//     if (salarioBruto <= 1412) {
//         return salarioBruto * 0.075;
//     } 
//     else if (salarioBruto <= 2666.68) {
//         return salarioBruto * 0.09;
//     } 
//     else if (salarioBruto <= 4000.03) {
//         return salarioBruto * 0.12;
//     } 
//     else {
//         return salarioBruto * 0.14; // Teto
//     }
// }

// // --- DEPARTAMENTO 2: RH ---
// function calcularBonus(cargo) {
//     if (cargo === "Gerente") {
//         return 1000;
//     } 
//     else if (cargo === "Dev") {
//         return 500;
//     } 
//     return 0; 
// }

// // --- O ORQUESTRADOR (Main) ---
// async function calcularFolhaRefatorada() {
    
//     let funcionarios = [
//         { nome: "Ana", salarioBruto: 3000, cargo: "Dev" },
//         { nome: "João", salarioBruto: 5000, cargo: "Gerente" },
//         { nome: "Bia", salarioBruto: 1412, cargo: "Estagiário" }
//     ];

//     for (let i = 0; i < funcionarios.length; i++) {
//         let f = funcionarios[i];
           
//         let inss = calcularINSS(f.salarioBruto);
//         let bonus = calcularBonus(f.cargo);

//         let salarioLiquido = f.salarioBruto - inss + bonus;

//         console.log(`\nFuncionário: ${f.nome}`);
//         console.log(`   Salário Base: R$ ${f.salarioBruto}`);
//         console.log(`   (-) INSS: R$ ${inss.toFixed(2)}`);
//         console.log(`   (+) Bônus: R$ ${bonus.toFixed(2)}`);
//         console.log(`   (=) LÍQUIDO: R$ ${salarioLiquido.toFixed(2)}`);
//     }
// }

// calcularFolhaRefatorada();
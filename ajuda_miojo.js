// Exemplo: Fazer Miojo
function fazerMiojo() {
    ferverAgua();
    colocarMacarrao();

    let tempo = 0;

    // Losango: Já passaram 3 minutos?
    while (tempo < 3) {
        esperar();
        tempo++;
    }

    // Losango: Gosta de tempero?
    if (gostaDeTempero == true) {
        colocarPoMistico();
    } else {
        comerSemGosto();
    }
}
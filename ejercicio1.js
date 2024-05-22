

function imprimirNumerosConIntervalo(desde, hasta) {
    let numeroActual = desde;
    const intervalo = setInterval(() => {
        document.getElementById('resultado').innerHTML += numeroActual + ' ';
        console.log(numeroActual);
        if (numeroActual === hasta) {
            clearInterval(intervalo);
        }
        numeroActual++;
    }, 1000);
}

function imprimirNumerosConTimeout(desde, hasta) {
    let numeroActual = desde;

    function imprimir() {
        document.getElementById('resultado').innerHTML += numeroActual + ' ';
        console.log(numeroActual);
        if (numeroActual < hasta) {
            numeroActual++;
            setTimeout(imprimir, 1000);
        }
    }

    imprimir();
}

document.getElementById('btnInterval').addEventListener('click', () => {
    document.getElementById('resultado').innerHTML = '';
    imprimirNumerosConIntervalo(1, 5);
});

document.getElementById('btnTimeout').addEventListener('click', () => {
    document.getElementById('resultado').innerHTML = '';
    imprimirNumerosConTimeout(1, 5);
});

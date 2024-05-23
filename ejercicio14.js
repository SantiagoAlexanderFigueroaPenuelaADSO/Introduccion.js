// Definir una función asincrónica
async function operacionAsincronica() {
    // Esperar 1 segundo
    await new Promise(resolve => setTimeout(resolve, 1000));
    // Devolver la cadena "Operación completada" después de esperar
    return "Operación completada";
}

// Llamar a la función asincrónica y actualizar el HTML con el resultado
operacionAsincronica()
    .then(resultado => {
        document.getElementById('resultado').textContent = resultado;
    })
    .catch(error => {
        console.error("Error:", error);
    });

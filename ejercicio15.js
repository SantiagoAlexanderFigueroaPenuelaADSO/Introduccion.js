// Crear una Promise que se rechace después de 2 segundos
const miPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        reject("Promise rechazada");
    }, 2000); // 2 segundos de espera
});

// Capturar el error e imprimirlo
miPromise.catch((error) => {
    console.error("Error:", error);
});

// Crear una Promise
const miPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Promise resuelta");
    }, 3000); // 3 segundos de espera
});

// Usar la Promise
miPromise.then((mensaje) => {
    console.log(mensaje);
}).catch((error) => {
    console.error("Error:", error);
});

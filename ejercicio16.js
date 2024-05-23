// Primera Promise que devuelve 2 después de 1 segundo
const promise1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(2);
    }, 1000);
});

// Segunda Promise que devuelve 3 después de 1 segundo
const promise2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(3);
    }, 1000);
});

// Tercera Promise que devuelve 4 después de 1 segundo
const promise3 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(4);
    }, 1000);
});

// Encadenar las tres Promises para sumar los resultados
Promise.all([promise1, promise2, promise3])
    .then(resultados => {
        const suma = resultados.reduce((total, num) => total + num, 0);
        document.getElementById('resultado').textContent = suma;
    })
    .catch(error => {
        console.error("Error:", error);
    });

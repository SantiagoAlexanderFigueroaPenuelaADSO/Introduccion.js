// Definición de la función findIndex
function findIndex(array, callback) {
    for (let i = 0; i < array.length; i++) {
        if (callback(array[i])) {
            return i;
        }
    }
    return undefined;
}

// Ejemplo de uso de la función findIndex
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const indexGreaterThanFive = findIndex(numbers, function(num) {
    return num > 5;
});

// Mostrar los resultados en el HTML
document.getElementById('array').textContent = numbers.join(', ');
document.getElementById('find-index-result').textContent = indexGreaterThanFive !== undefined ? indexGreaterThanFive : 'No encontrado';

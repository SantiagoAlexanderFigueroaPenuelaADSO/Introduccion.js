// Definición de la función find
function find(array, callback) {
    for (let i = 0; i < array.length; i++) {
        if (callback(array[i])) {
            return array[i];
        }
    }
    return undefined;
}

// Ejemplo de uso de la función find
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const firstGreaterThanFive = find(numbers, function(num) {
    return num > 5;
});

// Mostrar los resultados en el HTML
document.getElementById('array').textContent = numbers.join(', ');
document.getElementById('find-result').textContent = firstGreaterThanFive !== undefined ? firstGreaterThanFive : 'No encontrado';

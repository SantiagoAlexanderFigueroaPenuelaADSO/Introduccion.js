// Definición de la función some
function some(array, callback) {
    for (let i = 0; i < array.length; i++) {
        if (callback(array[i])) {
            return true;
        }
    }
    return false;
}

// Ejemplo de uso de la función some
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const hasGreaterThanFive = some(numbers, function(num) {
    return num > 5;
});

// Mostrar los resultados en el HTML
document.getElementById('array').textContent = numbers.join(', ');
document.getElementById('some-result').textContent = hasGreaterThanFive ? 'Sí' : 'No';

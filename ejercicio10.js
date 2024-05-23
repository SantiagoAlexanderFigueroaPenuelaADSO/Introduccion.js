// Definición de la función takeWhile
function takeWhile(array, callback) {
    const result = [];

    for (let i = 0; i < array.length; i++) {
        if (!callback(array[i])) {
            break;
        }
        result.push(array[i]);
    }
    return result;
}

// Ejemplo de uso de la función takeWhile
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const takenArray = takeWhile(numbers, function(num) {
    return num < 5;
});

// Mostrar los resultados en el HTML
document.getElementById('original-array').textContent = numbers.join(', ');
document.getElementById('take-while-result').textContent = takenArray.join(', ');

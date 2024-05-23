// Definición de la función dropWhile
function dropWhile(array, callback) {
    const result = [];
    let drop = false;

    for (let i = 0; i < array.length; i++) {
        if (!drop && !callback(array[i])) {
            drop = true;
        }
        if (drop) {
            result.push(array[i]);
        }
    }
    return result;
}

// Ejemplo de uso de la función dropWhile
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const droppedArray = dropWhile(numbers, function(num) {
    return num < 5;
});

// Mostrar los resultados en el HTML
document.getElementById('original-array').textContent = numbers.join(', ');
document.getElementById('drop-while-result').textContent = droppedArray.join(', ');

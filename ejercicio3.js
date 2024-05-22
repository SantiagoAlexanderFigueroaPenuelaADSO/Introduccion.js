// Definición de la función map
function map(array, callback) {
    const resultArray = [];
    for (let i = 0; i < array.length; i++) {
        const result = callback(array[i]);
        resultArray.push(result);
    }
    return resultArray;
}

// Ejemplo de uso de la función map
const numbers = [1, 2, 3, 4, 5];
const doubled = map(numbers, function(num) {
    return num * 2;
});

// Mostrar los resultados en el HTML
document.getElementById('original-array').textContent = numbers.join(', ');
document.getElementById('mapped-array').textContent = doubled.join(', ');

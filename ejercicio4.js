// Definición de la función filter
function filter(array, callback) {
    const resultArray = [];
    for (let i = 0; i < array.length; i++) {
        if (callback(array[i])) {
            resultArray.push(array[i]);
        }
    }
    return resultArray;
}

// Ejemplo de uso de la función filter
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const evenNumbers = filter(numbers, function(num) {
    return num % 2 === 0;
});

// Mostrar los resultados en el HTML
document.getElementById('original-array').textContent = numbers.join(', ');
document.getElementById('filtered-array').textContent = evenNumbers.join(', ');

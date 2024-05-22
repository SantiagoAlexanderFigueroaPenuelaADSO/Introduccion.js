
function every(array, callback) {
    for (let i = 0; i < array.length; i++) {
        if (!callback(array[i])) {
            return false;
        }
    }
    return true;
}


const numbers = [1, 2, 3, 4, 5];
const allPositive = every(numbers, function(num) {
    return num > 0;
});

document.getElementById('array').textContent = numbers.join(', ');
document.getElementById('every-result').textContent = allPositive ? 'Sí' : 'No';

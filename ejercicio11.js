let i = 0;

setTimeout(() => alert(i), 100); //?

//Asumimos que el tiempo para ejecutar esta funcion es > 100ms

for (let j = 0; j < 100000000; j++) {
  i++;
}

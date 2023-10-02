let suma = 0;
while (true) {
    const numero = parseFloat(prompt("Introduce un número (o introduce 0 para terminar):"));

    if (numero === 0) {
        break;
    }

    suma += numero;
}

console.log(`La suma total es: ${suma}`);

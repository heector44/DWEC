const numero = parseInt(prompt("Introduce un número:"));

let resultado = `El número ${numero} `;

if (numero % 2 === 0) {
    resultado += "es par. ";
} else {
    resultado += "es impar. ";
}

if (numero % 3 === 0) {
    resultado += "es múltiplo de 3, ";
}

if (numero % 5 === 0) {
    resultado += "es múltiplo de 5. ";
}

console.log(resultado);


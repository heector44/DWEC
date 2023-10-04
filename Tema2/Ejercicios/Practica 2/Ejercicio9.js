const numero = parseInt(
  prompt("Introduce un número para calcular su factorial:")
);
let factorial = 1;
let i = 1;

while (i <= numero) {
  factorial *= i;
  i++;
}

console.log(`El factorial de ${numero} es: ${factorial}`);

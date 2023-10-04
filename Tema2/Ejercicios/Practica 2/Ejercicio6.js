function sumar(num1, num2) {
  return num1 + num2;
}
function restar(num1, num2) {
  return num1 - num2;
}

function multiplicar(num1, num2) {
  return num1 * num2;
}

// Función para dividir dos números
function dividir(num1, num2) {
  if (num2 !== 0) {
    return num1 / num2;
  } else {
    return "No se puede dividir por cero";
  }
}
const num1 = parseFloat(prompt("Introduce el primer número:"));
const num2 = parseFloat(prompt("Introduce el segundo número:"));
const operacion = prompt("Introduce la operación (+, -, *, /):");
let resultado;
switch (operacion) {
  case "+":
    resultado = sumar(num1, num2);
    break;
  case "-":
    resultado = restar(num1, num2);
    break;
  case "*":
    resultado = multiplicar(num1, num2);
    break;
  case "/":
    resultado = dividir(num1, num2);
    break;
  default:
    resultado = "Operación no válida";
}

console.log(`El resultado de la operación es: ${resultado}`);

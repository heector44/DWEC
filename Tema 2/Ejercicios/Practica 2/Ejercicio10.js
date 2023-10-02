const numeroAdivinar = parseInt(
  prompt("Jugador 1: Introduce un número para que el Jugador 2 lo adivine:")
);
let intentos = 0;

while (true) {
  const intento = parseInt(prompt("Jugador 2: Adivina el número:"));
  intentos++;

  if (intento === numeroAdivinar) {
    console.log(
      `¡Felicidades! Has adivinado el número en ${intentos} intentos.`
    );
    break;
  } else if (intento < numeroAdivinar) {
    console.log("El número buscado es mayor.");
  } else {
    console.log("El número buscado es menor.");
  }
}

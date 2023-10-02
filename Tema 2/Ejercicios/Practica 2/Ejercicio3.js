let numhermanos = parseInt(prompt("Cuantos hermanos tienes?"));
let cantidad = parseInt(prompt("Dime una cantidad"));
if (numhermanos >= 3) {
  cantidad = cantidad * 0.85;
  alert(`Obtienes un descuento de 15% y tu cantidad se queda en ${cantidad}`);
} else if (numhermanos < 3) {
  cantidad = cantidad * 0.95;
  alert(`Obtienes un descuento de 5% y tu cantidad se queda en ${cantidad}`);
} else if ((numhermanos === 0)) {
  alert(`No obtienes descuento y tu cantidad se queda en ${cantidad}`);
}

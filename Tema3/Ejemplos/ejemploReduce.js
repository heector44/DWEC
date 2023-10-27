// Listado de coches
let coches = [
    {matricula: "ABC1", color: "rojo"},
    {matricula: "ABC2", color: "verde"},
    {matricula: "ABC3", color: "azul"},
    {matricula: "ABC4", color: "rojo"}
]

let clasificacion = coches.reduce(function(acc, coche) {
    // Hay que comprobar si existe una entrada en el objeto para el color del coche actual
    // El operador '||' ('or' lógico) se comporta como un condicional:
    // si el primer operando está definido, se devuelve; si no, se devuelve el segundo
    // En este caso, si existe 'acc[coche.color]', se utiliza;
    // si no, se crea un objeto nuevo con las propiedades 'cuenta' y 'listado' vacías
    acc[coche.color] = acc[coche.color] || {cuenta: 0, listado: []};
    // Se incrementa la cuenta de coches de ese color
    acc[coche.color].cuenta++;
    // Se añade el coche al listado del color correspondiente
    acc[coche.color].listado.push(coche);
    return acc;
}, {}); // El valor inicial es un objeto vacío

console.log(clasificacion);
// {
//   rojo: { cuenta: 2, listado: [ [Object], [Object] ] },
//   verde: { cuenta: 1, listado: [ [Object] ] },
//   azul: { cuenta: 1, listado: [ [Object] ] }
// }

// Cuántos coches hay de color rojo
console.log(clasificacion.rojo.cuenta); // 2
// Cuántos coches hay de color verde
console.log(clasificacion.verde.cuenta); // 1
// Cuántos coches hay de color azul
console.log(clasificacion.azul.cuenta); // 1

// Listado de coches de color rojo
console.log(clasificacion.rojo.listado); 
// [
//   { matricula: 'ABC1', color: 'rojo' },
//   { matricula: 'ABC4', color: 'rojo' }
// ]

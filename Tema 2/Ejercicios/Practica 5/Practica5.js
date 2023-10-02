let nombre = prompt("Escribe tu nombre");
let apellidos = prompt("Escribe tus apellidos");
let salario = parseFloat(prompt("Escribe tu salario"));
let edad = parseInt(prompt("Escribe tu edad"));
if (salario >= 1000 && salario <= 2000){
    if(edad > 45){
        salario = salario * 1.03;
    }
    else{
        salario = salario * 1.1;
    }
}else if(salario <= 1000){
    if(edad < 30){
        salario = salario = 1100;
    }
    else if(edad >= 30 && edad <= 45){
        salario = salario * 1.03;
    }
    else if(edad > 45){
        salario = salario * 1.15;
    }
}
alert(`Datos: \n Nombre: ${nombre}\n Apellidos: ${apellidos}\n Salario: ${salario} \n Edad: ${edad}`);
let domicilio = prompt("Donde vive?");
let edad = prompt("Que edad tiene?");
if (domicilio == "Alicante" && edad > 18 && edad < 35){
    alert(`Puedes acceder al carnet de empresarios emprendedores`);
}else{
    alert(` No puedes acceder al carnet de empresarios emprendedores`);
}
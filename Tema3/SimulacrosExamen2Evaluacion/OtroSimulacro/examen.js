'use strict'
let clientes = [];
let idCliente = 0;
function Persona(nombre, apellidos, nif, edad){
    this.nombre = nombre;
    this.apellidos = apellidos;
    this.nif = nif;
    this.edad = edad;
}
function Cliente(nombre, apellidos, nif, edad, fechaAlta, tipoCliente){
    this.__proto__=new Persona(nombre,apellidos,nif,edad);
    this.fechaAlta=Date.parse(fechaAlta);
    this.tipoCliente=tipoCliente;
}


function anyadirCliente(cliente){
    idCliente++;
    cliente.id = idCliente;
    clientes.push(cliente);
}

function muestraWeb(){
    let divListado = document.getElementById("listado");
    let h1 = document.createElement("h1");
    h1.setAttribute("id", "tituloH1");
    h1.textContent = "Listado de Clientes";
    h1.style.textAlign = "center";
    divListado.append(h1);
    
    let listaOrd = document.createElement("ol");
    listaOrd.setAttribute("id", "listaOrd");
    divListado.append(listaOrd);

    for(let cliente of clientes){
        let lista = document.createElement("li");
        lista.setAttribute("id", `li${cliente.id}`)
        
        let divLista = document.createElement("div");
        divLista.classList.add("cliente"); 
        divLista.setAttribute("id", `${cliente.id}`);

        let nombreApellidos = document.createElement("p");
        nombreApellidos.textContent = `${cliente.nombre} ${cliente.apellidos}`;
        nombreApellidos.style.fontSize = "1.5em";
        nombreApellidos.style.fontWeight = "bold";
        divLista.append(nombreApellidos);

        let nif = document.createElement("p");
        nif.textContent = `Nif: ${cliente.nif}`;
        divLista.append(nif);
        
        let edad = document.createElement("p");
        nif.textContent = `Edad: ${cliente.edad}`;
        divLista.append(edad);

        
        let fechaAlta = document.createElement("p");
        nif.textContent = `Fecha de Alta: ${cliente.fechaAlta}`;
        divLista.append(fechaAlta);

        let tipoCliente = document.createElement("p");
        nif.textContent = `Tipo: ${cliente.tipoCliente}`;
        divLista.append(tipoCliente);

    }


}
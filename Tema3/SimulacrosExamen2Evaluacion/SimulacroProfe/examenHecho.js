'use strict';

let empleados = [];

let idEmple = 0;



function Empleado(nombre, apellidos, nif, edad, puesto, salario, antigüedad) {
  this.nombre = nombre;
  this.apellidos = apellidos;
  this.nif = nif;
  this.edad = edad;
  this.puesto = puesto;
  this.salario = salario;
  this.antigüedad = antigüedad;
}



function anyadirEmpleado(nuevoEmple) {
    nuevoEmple.id = idEmple;
    idEmple++;
    empleados.push(nuevoEmple);
}

function muestraWeb(){

    if(document.getElementById("divEmple") != null)
    document.getElementById("divEmple").innerHTML = "";
    
    
    if(document.getElementById("tituloH1") != null)
    document.getElementById("tituloH1").innerHTML = "";

    if(document.getElementById("listaOrd") != null)
    document.getElementById("listOrd").innerHTML = "";

    let divEmple = document.getElementById("divEmple");
    let tituloH1 = document.createElement("h1");
    tituloH1.innerHTML = "Listado de Empleados";
    tituloH1.id = "tituloH1";
    

    let ordList = document.createElement("ol");
        ordList.id = "listaOrd";
        ordList.className = "rounded-list";
            
            divEmple.append(tituloH1, ordList);

            empleados.forEach(element => {
        
                muestraEmpleado(element);
        
            });
}

function EditarHandleFormulario(){
    this.handleEvent = function(event){
        let botonEditar = event.currentTarget;
        botonEditar.setAttribute('disabled', 'disabled');

        let plantillaForm = document.getElementById("formulario-template").content.cloneNode(true);
        let formul = plantillaForm.querySelector("form");
        
       
        let divEmpleado = document.getElementById(this.empleado.id);
        
        divEmpleado.append(formul);
      
      
        formul.elements.nombre.value = this.empleado.nombre;
        formul.elements.apellidos.value = this.empleado.apellidos;
        formul.elements.nif.value = this.empleado.nif;
        formul.elements.edad.value = this.empleado.edad;
        formul.elements.puesto.value = this.empleado.puesto;
        formul.elements.salario.value = this.empleado.salario;
        formul.elements.antigüedad.value = this.empleado.antigüedad;        


        let objCancel = new FormCancelHandle();
        objCancel.empleado = this.empleado;
        let botonCancelarFormulario = formul.querySelector("button.cancelar");
        botonCancelarFormulario.addEventListener('click',objCancel);

        let objSubmit = new FormSubmitHandle();
        objSubmit.empleado = this.empleado;
        formul.addEventListener('submit', objSubmit);

    }
}

function FormCancelHandle(){
    this.handleEvent = function (event) {
        //event.currentTarget.removeAttribute("disabled");
        
        if (Object.hasOwnProperty(this.empleado))
            document.getElementById("bEdit" + this.empleado.id).removeAttribute("disabled");
        else
            document.getElementById("anyadeEmpleForm").removeAttribute("disabled");

        event.currentTarget.parentNode.remove();
    
    
        muestraWeb();
    }
}

function BorrarHandle() {
    this.handleEvent = function (event) {
        empleados.splice(empleados.indexOf(this.empleado),1);
        console.log(empleados);
        muestraWeb();
    }
}

function FormSubmitHandle(){
    this.handleEvent = function (event) {
        event.preventDefault();
        let formulario = event.currentTarget;

        
        let nom = formulario.elements.nombre.value;
        let ap = formulario.elements.apellidos.value;
        let nif = formulario.elements.nif.value;
        let edad = formulario.elements.edad.value;
        let puest = formulario.elements.puesto.value;
        let sal = parseFloat(formulario.salario.value);
        let ant = formulario.elements.antigüedad.value;
        
        let nEmpl = new Empleado(nom,ap,nif,edad,puest,sal,ant);
        anyadirEmpleado(nEmpl);
       
        muestraWeb();
        document.getElementById("bEdit" + this.empleado.id).removeAttribute("disabled");
    
        event.currentTarget.remove();
    }

}


function muestraEmpleado(empleado){
    let listaOrd = document.getElementById("listaOrd");

    let elList = document.createElement("li");
        elList.id = "li" + empleados.indexOf(empleado);

    let divEmpleado = document.createElement("div");
     
    divEmpleado.setAttribute("class", "empleado");
    divEmpleado.id = empleado.id;

                let nomAp = document.createElement("p");
                    nomAp.textContent = `${empleado.nombre} ${empleado.apellidos}`;
                    nomAp.setAttribute("style","font-size:1.5em; font-weight:bold");
                let nif = document.createElement("p");
                    nif.textContent = `NIF: ${empleado.nif}`;
                let edad = document.createElement("p");
                    edad.textContent = `Edad: ${empleado.edad}`;
                let puesto = document.createElement("p");
                    puesto.textContent = `Puesto: ${empleado.puesto}`;
                let salario = document.createElement("p");
                    salario.textContent = `Salario: ${empleado.salario}`;
                let antig = document.createElement("p");
                    antig.textContent = `Antigüedad: ${empleado.antigüedad}`;
    
    divEmpleado.append(nomAp, nif, edad, puesto, salario, antig);

    let botonEdit = document.createElement("button");
        botonEdit.id = "bEdit" + empleado.id;
        botonEdit.textContent = "Editar";
        let manejaBtnEdit = new EditarHandleFormulario();
        manejaBtnEdit.empleado = empleado;
        botonEdit.addEventListener("click", manejaBtnEdit);
        divEmpleado.append(botonEdit);

    let botonBorra = document.createElement("button");
        botonBorra.id = "borra" + empleado.id;
        botonBorra.textContent = "Borrar";
        let manejaBtnBorra = new BorrarHandle();
        manejaBtnBorra.empleado = empleado;
        botonBorra.addEventListener("click", manejaBtnBorra);
        divEmpleado.append(botonBorra);    

        listaOrd.append(elList);
    document.getElementById(elList.id).append(divEmpleado);
}

function nuevoEmpleadoWebFormulario() {
    
    
    let plantillaFormulario = document.getElementById("formulario-template").content.cloneNode(true);
    let formulario = plantillaFormulario.querySelector('form');
    
    
    let divContPpal = document.getElementById('controlesprincipales');
    divContPpal.append(formulario);
    let botonAnyaEmpleFormulario = document.getElementById("anyadeEmpleForm").setAttribute("disabled", "")
   
    let objSubmit = new FormSubmitHandle();
    formulario.addEventListener('submit', objSubmit);

    let objCancel = new FormCancelHandle();
    let botonCancelarFormulario = formulario.querySelector("button.cancelar");
    botonCancelarFormulario.addEventListener('click',objCancel);

}

let botonAnyadeForm = document.getElementById("anyadeEmpleForm");

botonAnyadeForm.addEventListener("click", nuevoEmpleadoWebFormulario);


let emple1 = new Empleado("Juan", "PÃ©rez", "12345678A", 30, "Programador", 2000, 5); 
let emple2 = new Empleado("Ana", "GarcÃ­a", "87654321B", 25, "Programador", 2000, 2);

anyadirEmpleado(emple1);
anyadirEmpleado(emple2);


muestraWeb();
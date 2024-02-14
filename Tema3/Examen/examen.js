"use strict";

var idEmp = 0;
var empleados = [];

function Empleado(nombre, apellidos, nif, edad, puesto, salario, antigüedad)
{
    this.nombre = nombre;
    this.apellidos = apellidos;
    this.nif = nif;
    this.edad = edad;
    this.puesto = puesto;
    this.salario = salario;
    this.antigüedad = antigüedad;
}

function anyadirEmpleado(empleado){
    idEmp++;
    empleado.id = idEmp;
    empleados.push(empleado);
}
function muestraWeb(){
    let divEmp = document.getElementById('divEmple');

    if(divEmp.innerHTML != ""){
        divEmp.innerHTML = "";
    }
    
    let tituloH1 = document.createElement("h1");
    tituloH1.innerHTML = "Listado de empleados";
    tituloH1.id = "tituloH1";
    divEmp.append(tituloH1);

    let listaOrdenada = document.createElement("ol");
    listaOrdenada.id = "listaOrd";
    listaOrdenada.classList.add("rounded-list");
    

    for (let emp of empleados){
        listaOrdenada.append(muestraEmpleado(emp));
    }
    divEmp.append(listaOrdenada);
}

function muestraEmpleado(empleado){
    let li = document.createElement("li");
    li.id = `li${empleado.id}`;

    let divEmp = document.createElement("div");
    divEmp.id = `${empleado.id}`;
    divEmp.className = "empleado";

    let nombreApellidos = document.createElement("p");
    nombreApellidos.textContent = `${empleado.nombre} ${empleado.apellidos}`;
    divEmp.append(nombreApellidos);

    let nif = document.createElement("p");
    nif.textContent = `NIF: ${empleado.nif}`;
    divEmp.append(nif);

    let edad = document.createElement("p");
    edad.textContent = `Edad: ${empleado.edad}`;
    divEmp.append(edad);

    let puesto = document.createElement("p");
    puesto.textContent = `Puesto: ${empleado.puesto}`;
    divEmp.append(puesto);

    let salario = document.createElement("p");
    salario.textContent = `NIF: ${empleado.salario}`;
    divEmp.append(salario);

    let antigüedad = document.createElement("p");
    antigüedad.textContent = `NIF: ${empleado.antigüedad}`;
    divEmp.append(antigüedad);

    let btnEditar = document.createElement("button");
    btnEditar.textContent = "Editar";
    let obj = new EditarHandleFormulario();
    obj.divEmp = divEmp;
    obj.empleado = empleado;
    btnEditar.addEventListener("click", obj);
    divEmp.append(btnEditar);

    let btnBorrar = document.createElement("button");
    btnBorrar.textContent = "Borrar";
    let obj2 = new BorrarHandle();
    obj2.divEmp = divEmp;
    obj2.empleado = empleado;
    btnBorrar.addEventListener("click", obj2);
    divEmp.append(btnBorrar);

    li.append(divEmp);
    return li;
}

function EditarHandleFormulario(){
    this.handleEvent = function(event){
        let formulario = document.getElementById('formulario-template').content.cloneNode(true); 
        let form = formulario.querySelector("form");

        this.divEmp.append(form);
        let empleado = this.empleado;
        let boton = event.currentTarget;
        boton.disabled = true;

        form.elements.nombre.value = empleado.nombre;
        form.elements.apellidos.value = empleado.apellidos;
        form.elements.nif.value = empleado.nif;
        form.elements.edad.value = empleado.edad;
        form.elements.puesto.value = empleado.puesto;
        form.elements.salario.value = empleado.salario;
        form.elements.antigüedad.value = empleado.antigüedad;

        form.addEventListener("submit", function(){
            event.preventDefault();
            empleado.nombre = form.elements.nombre.value;
            empleado.apellidos = form.elements.apellidos.value;
            empleado.nif = form.elements.nif.value;
            empleado.edad = form.elements.edad.value;
            empleado.puesto = form.elements.puesto.value;
            empleado.salario = form.elements.salario.value;
            empleado.antigüedad = form.elements.antigüedad.value;
            form.remove();
            muestraWeb(); 
        })

        let btnCancelar = form.querySelector("button.cancelar");
        btnCancelar.addEventListener("click", function(){
            boton.disabled = false;
            form.remove();
        })

    }
}

function BorrarHandle(id) {
    this.handleEvent = function() {
        let index = empleados.findIndex(emp => emp.id == id)
        empleados.splice(index, 1);
        muestraWeb();
    };
}

function nuevoEmpleadoWebFormulario(){
    let principales = document.getElementById("fNuevo");
    let formulario = document.getElementById('formulario-template').content.cloneNode(true); 
    let form = formulario.querySelector('form');
    principales.append(form);
    let boton = document.getElementById("anyadeEmpleForm");
    boton.disabled = true;
    form.addEventListener("submit", function(event) {
        event.preventDefault();
        let nombre = form.elements.nombre.value;
        let apellidos = form.elements.apellidos.value;
        let nif = form.elements.nif.value;
        let edad = form.elements.edad.value;
        let puesto = form.elements.puesto.value;
        let salario = form.elements.salario.value;
        let antigüedad = form.elements.antigüedad.value;

        let nuevoEmp = new Empleado(nombre, apellidos, nif, edad, puesto, salario, antigüedad);
        anyadirEmpleado(nuevoEmp);
        form.remove();
        boton.disabled = false; 
        muestraWeb();
    })
    let btnCancel = form.querySelector("button.cancelar");
    btnCancel.addEventListener("click", function() {
        form.remove();
        boton.disabled = false;
    });
}
let empleadoFormulario = document.getElementById("anyadeEmpleForm");
    empleadoFormulario.addEventListener("click", function(){
        nuevoEmpleadoWebFormulario();
    })

function guardarEmpleados(){
    localStorage.empleados = JSON.stringify(empleados);
}  
function cargarEmpleados(){
    let array = [];
    if (localStorage.empleados){
        array = JSON.parse(localStorage.empleados);
    }
    cargarDatosEmpleados(array);
    muestraWeb();

}

function cargarDatosEmpleados(empleadosAlmacenamiento){
    empleados = [];
    for (let emp of empleadosAlmacenamiento){
        let empleadoRehidratado = new Empleado();
        Object.assign(empleadoRehidratado, emp)
        empleados.push(empleadoRehidratado);
    }
}

let principales = document.getElementById("controlesprincipales");
let botonGuardado = document.createElement("button");
botonGuardado.textContent = "Guardar Registros"
botonGuardado.addEventListener("click", function(){
    guardarEmpleados();
})

let botonCargado = document.createElement("button");
botonCargado.textContent = "Cargar Registros";
botonCargado.addEventListener("click", function(){
    cargarEmpleados();
})
principales.append(botonGuardado, botonCargado);




let emple1 = new Empleado("Juan", "Pérez", "12345678A", 30, "Programador", 2000, 5);
let emple2 = new Empleado("Ana", "García", "87654321B", 25, "Programador", 2000, 2);
anyadirEmpleado(emple1);
anyadirEmpleado(emple2);
muestraWeb();
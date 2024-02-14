"use strict";

var idEmp = 0;
var listEmp = [];

function crearEmpleado(nombre, apellidos, nif, edad, puesto, salario, antigüedad)
{
    this.nombre = nombre;
    this.apellidos = apellidos;
    this.nif = nif;
    this.edad = edad;
    this.puesto = puesto;
    this.salario = salario;
    this.antigüedad = antigüedad;
}

function anyadirEmpleado (empleado)
{
    idEmp++;
    empleado.id = idEmp;
    listEmp.push(empleado);
}

function muestraWeb()
{
    let divEmp = document.getElementById('divEmple');

    if(divEmp.innerHTML != ""){
        divEmp.innerHTML = "";
    }

    let h1 = document.createElement('h1');
    h1.id = "tituloH1";
    h1.textContent = "Listado de Empleados";
    divEmp.append(h1);

    let listaOrd = document.createElement('ol');
    listaOrd.id = "listaOrd";
    listaOrd.classList.add('rounded-list');
    divEmp.append(listaOrd);

    /*for(let emp of listEmp)
    {
        muestraEmpleado(emp);
    }*/
    for (let i = 0; i < listEmp.length; i++) {
        listaOrd.append(muestraEmpleado(listEmp[i]));
        // muestraEmpleado(listEmp[i]);
    }
}

function muestraEmpleado(empleado)
{

    // let listaOrd = document.getElementById("listaOrd");
    
    let li = "li" + empleado.id
    let newli = document.createElement('li');
    newli.id = li;
    
    // listaOrd.append(newli);
    
    let idDivEmpleado = "divEmpleado" + empleado.id;
    let divEmp = document.createElement("div");
    divEmp.className = "empleado";
    divEmp.id = idDivEmpleado;

    
    let pNombre = document.createElement('p');
    pNombre.textContent = "Nombre: " + empleado.nombre + " " + empleado.apellidos;
    divEmp.append(pNombre);
    
    let pNif = document.createElement('p');
    pNif.textContent = "NIF: " + empleado.nif;
    divEmp.append(pNif);
    
    let pEdad = document.createElement('p');
    pEdad.textContent = "Edad: " + empleado.edad;
    divEmp.append(pEdad);
    
    let pPuesto = document.createElement('p');
    pPuesto.textContent = "Puesto: " + empleado.puesto;
    divEmp.append(pPuesto);
    
    let pSalario = document.createElement('p');
    pSalario.textContent = "Salario: " + empleado.salario;
    divEmp.append(pSalario);
    
    let pAntigüedad = document.createElement('p');
    pAntigüedad.textContent = "Antigüedad: " + empleado.antigüedad;
    divEmp.append(pAntigüedad);
    
    let btnEditar = document.createElement('button');
    btnEditar.textContent = "Editar";
    let obj1 = new EditarHandleFormulario();
    obj1.divEmp = divEmp;
    obj1.empleado = empleado;
    btnEditar.addEventListener('click', obj1);
    divEmp.append(btnEditar);
    
    
    let btnBorrar = document.createElement('button');
    btnBorrar.textContent = "Borrar";
    let obj2 = new BorrarHandle(empleado.id);
    btnBorrar.addEventListener('click', obj2);
    divEmp.append(btnBorrar);
    newli.append(divEmp);
    return newli;
}


function EditarHandleFormulario() {
    this.handleEvent = function(event) {
        let formulario = document.getElementById('formulario-template').content.cloneNode(true);
        let form = formulario.querySelector('form');
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
        
        form.addEventListener('submit', function(event) {
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
        });
        
        let btncacel = form.querySelector('button.cancelar');
        btncacel.addEventListener('click', function() {
            boton.disabled = false;
            form.remove();
        });
        
        // Mover muestraWeb() fuera del evento submit
        //boton.addEventListener('click', function() {
                
            //});
        };
    }

    function BorrarHandle(id) {
        this.handleEvent = function() {
            let indice = listEmp.findIndex(emp => emp.id == id)
            listEmp.splice(indice, 1);
            muestraWeb();
        };
    }

    function nuevoEmpleadoWebFormulario(){
        let contr = document.getElementById("controlesprincipales");
        let formulario = document.getElementById('formulario-template').content.cloneNode(true);
        let form = formulario.querySelector('form');
        contr.append(form);
        let boton = document.getElementById('anyadeEmpleForm');
        boton.disabled = true;
        form.addEventListener('submit', function(event) {
            event.preventDefault();
            let nombre = form.elements.nombre.value;
            let apellidos = form.elements.apellidos.value;
            let nif = form.elements.nif.value;
            let edad = form.elements.edad.value;
            let puesto = form.elements.puesto.value;
            let salario = form.elements.salario.value;
            let antigüedad = form.elements.antigüedad.value;

            let newEmp = new crearEmpleado(nombre, apellidos, nif, edad, puesto, salario, antigüedad);
            anyadirEmpleado(newEmp);
            form.remove();
            boton.disabled = false; 
            muestraWeb();
        });
        
        let btncacel = form.querySelector('button.cancelar');
        btncacel.addEventListener('click', function() {
            form.remove();
            boton.disabled = false;
        });

    }

    let empleform = document.getElementById("anyadeEmpleForm");
    empleform.addEventListener('click', function(){
        nuevoEmpleadoWebFormulario();
    })
    
    let emple1 = new crearEmpleado("Juan", "Pérez", "12345678A", 30, "Programador", 2000, 5);
    let emple2 = new crearEmpleado("Ana", "García", "87654321B", 25, "Programador", 2000, 2);
    
    anyadirEmpleado(emple1);
    anyadirEmpleado(emple2);

    muestraWeb();
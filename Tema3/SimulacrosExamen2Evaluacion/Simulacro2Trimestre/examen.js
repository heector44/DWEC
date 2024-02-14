let empleados = [];
function Empleado(empleado) {
  this.nombre = empleado.nombre;
  this.apellidos = empleado.apellidos;
  this.nif = empleado.nif;
  this.edad = empleado.edad;
  this.puesto = empleado.puesto;
  this.salario = empleado.salario;
  this.antigüedad = empleado.antigüedad;
}
function anyadirEmpleado(empleado) {
  let id;
  empleado.id = id;
  id++;
  empleados.push(empleado);
}

function muestraWeb() {
  let divPrincipal = document.getElementById("divPrincipal");
  if (divPrincipal != null) {
    divPrincipal.innerHTML = "";
  }

  let h1Listado = document.createElement("h1");
  h1Listado.setAttribute("id", "tituloH1");
  h1Listado.textContent = "Listado de Empleados";
  divPrincipal.append(h1Listado);

  let lista = document.createElement("ol");
  lista.setAttribute("id", "listaOrd");
  lista.classList.add("rounded-list");
  divPrincipal.append(lista);
  for (let i = 0; i < empleados.length; i++) {
    lista.append(muestraEmpleado(empleados[i]));
  }
}

function muestraEmpleado(empleado) {
  let listaOrdenada = document.getElementById("listaOrd");
  let li = document.createElement("li");
  li.setAttribute("id", `li${empleado.id}`);
  listaOrdenada.append(li);

  let divPrincipal = document.createElement("div");
  divPrincipal.classList.add("empleado");
  divPrincipal.setAttribute("id", `${empleado.id}`);
  listaOrdenada.append(divPrincipal);

  let nombreApellidos = document.createElement("p");
  nombreApellidos.textContent = `${empleado.nombre} ${empleado.apellidos}`;
  divPrincipal.append(nombreApellidos);

  let nif = document.createElement("p");
  nif.textContent = `NIF: ${empleado.nif}`;
  divPrincipal.append(nif);

  let edad = document.createElement("p");
  nif.textContent = `Edad: ${empleado.edad}`;
  divPrincipal.append(edad);

  let puesto = document.createElement("p");
  nif.textContent = ` Pueto: ${empleado.puesto}`;
  divPrincipal.append(puesto);

  let salario = document.createElement("p");
  nif.textContent = `Salario: ${empleado.salario}`;
  divPrincipal.append(salario);

  let antiguedad = document.createElement("p");
  nif.textContent = `${empleado.antigüedad}`;
  divPrincipal.append(antiguedad);

  let botonEditar = document.createElement("button");
  botonEditar.setAttribute("id", `bEdit${empleado.id}`);
  botonEditar.textContent = "Borrar";
  let EditarHandle = new EditarHandleFormulario();
  let empleado = botonEditar.addEventListener(
    "click",
    EditarHandleFormulario()
  );
  divPrincipal.append(botonEditar);

  let botonBorrar = document.createElement("button");
  botonBorrar.setAttribute("id", `bDelete${empleado.id}`);
  botonBorrar.textContent = "Editar";
  botonBorrar.addEventListener("click", BorrarHandle());
  divPrincipal.append(botonBorrar);
}

let emple1 = new Empleado(
  "Juan",
  "Pérez",
  "12345678A",
  30,
  "Programador",
  2000,
  5
);
let emple2 = new Empleado(
  "Ana",
  "García",
  "87654321B",
  25,
  "Programador",
  2000,
  2
);
anyadirEmpleado(emple1);
anyadirEmpleado(emple2);
muestraWeb();

function EditarHandleFormulario() {
  this.handleEvent = function (event) {
    let plantillaFormulario = document
      .getElementById("formulario-template")
      .content.cloneNode(true);

    var formulario = plantillaFormulario.querySelector("form");
    let divPrin = getElementById("");
    divPrin.append(formulario);

    formulario.addEventListener("submit", function () {
      let nombre = form.elements["nombre"].value;
      let apellidos = form.elements["apellidos"].value;
      let nif = form.elements["nif"].value;
      let edad = form.elements["edad"].value;
      let puesto = form.elements["puesto"].value;
      let salario = form.elements["puesto"].value;
      let antiguedad = form.elements["antigüedad"].value;
    });
  };
}

function BorrarHandle() {
  this.handleEvent = function () {
    let indice = empleados.findIndex((emp) => (emp.id = empleado.id));
    empleados.splice(indice, 1);
  };
}

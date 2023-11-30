function Usuario(nombre, apellido1, apellido2, NIF, edad = 20, mayoria = true, fechaNacimiento = undefined, ...aficiones) {
    this.nombre = typeof nombre === 'string' ? nombre : '----';
    this.apellido1 = typeof apellido1 === 'string' ? apellido1 : '----';
    this.apellido2 = typeof apellido2 === 'string' ? apellido2 : '----';
    this.NIF = typeof NIF === 'string' ? NIF : '----';

    if (typeof edad !== 'number' || isNaN(edad) || edad < 0 || edad > 99) {
        this.edad = 18;
    } else {
        this.edad = edad;
    }

    this.mayoria = this.edad >= 18 ? true : false;

    if (typeof fechaNacimiento !== 'string' || isNaN(Date.parse(fechaNacimiento))) {
        this.fechaNacimiento = Date.now();
    } else {
        this.fechaNacimiento = Date.parse(fechaNacimiento);
    }

    this.aficiones = new Set(aficiones.map(aficion => aficion.toLowerCase()));
}

Usuario.prototype.mostrarUsuario = function () {
    console.log(`Nombre: ${this.nombre}`);
    console.log(`Apellidos: ${this.apellido1} ${this.apellido2}`);
    console.log(`NIF: ${this.NIF}`);
    console.log(`Edad: ${this.edad} - ${this.mayoria ? 'es mayor de edad' : 'no es mayor de edad'}`);
    console.log(`F. Nac.: ${new Date(this.fechaNacimiento).toISOString().slice(0, 10)}`);
    console.log('Aficiones:');
    this.aficiones.forEach(aficion => console.log(`- ${aficion}`));
};

Usuario.prototype.actualizarNombreApellidosNifFnac = function (datos) {
    if (datos.nombre && typeof datos.nombre === 'string') {
        this.nombre = datos.nombre;
    }
    if (datos.apellido1 && typeof datos.apellido1 === 'string') {
        this.apellido1 = datos.apellido1;
    }
    if (datos.apellido2 && typeof datos.apellido2 === 'string') {
        this.apellido2 = datos.apellido2;
    }
    if (datos.NIF && typeof datos.NIF === 'string') {
        this.NIF = datos.NIF;
    }
    if (datos.fechaNacimiento && typeof datos.fechaNacimiento === 'string' && !isNaN(Date.parse(datos.fechaNacimiento))) {
        this.fechaNacimiento = Date.parse(datos.fechaNacimiento);
        const today = new Date();
        const birthDate = new Date(this.fechaNacimiento);
        this.edad = today.getFullYear() - birthDate.getFullYear();
        const diffMonths = today.getMonth() - birthDate.getMonth();
        if (diffMonths < 0 || (diffMonths === 0 && today.getDate() < birthDate.getDate())) {
            this.edad--;
        }
        this.mayoria = this.edad >= 18 ? true : false;
    }
};

Usuario.prototype.anyadirAficiones = function (...nuevasAficiones) {
    nuevasAficiones.forEach(aficion => this.aficiones.add(aficion.toLowerCase()));
};

Usuario.prototype.borrarAficiones = function (...aficionesABorrar) {
    aficionesABorrar.forEach(aficion => this.aficiones.delete(aficion.toLowerCase()));
};

const fechasNacimiento = arrayUsuarios.reduce((fechas, usuario) => {
    const fecha = new Date(usuario.fechaNacimiento).toISOString().slice(0, 10);
    fechas[fecha] = (fechas[fecha] || 0) + 1;
    return fechas;
}, {});

console.log(fechasNacimiento);


function filtrarUsuarios({ fechaDesde, fechaHasta, dni, edad, mayoria }) {
    return arrayUsuarios.filter(usuario => {
        const fechaNacimiento = new Date(usuario.fechaNacimiento);
        const edadUsuario = new Date().getFullYear() - fechaNacimiento.getFullYear();
        const esMayor = edadUsuario >= 18 ? true : false;

        return (
            (!fechaDesde || fechaNacimiento >= Date.parse(fechaDesde)) &&
            (!fechaHasta || fechaNacimiento <= Date.parse(fechaHasta)) &&
            (!dni || usuario.NIF === dni) &&
            (!edad || usuario.edad === edad) &&
            (!mayoria || usuario.mayoria === mayoria) &&
            (!mayoria || esMayor === mayoria)
        );
    });
}

// Ejemplo de uso del filtro
const usuariosFiltrados = filtrarUsuarios({ fechaDesde: '1970-01-01', edad: 30 });
console.log(usuariosFiltrados);


'use strict';
let global = [];
function Ordenador(marca, modelo, ram = 16, disco = 256, pulgadas = 15.6, fecha, ...accesorios){
    this.marca = typeof marca === 'string' ? marca : "no definida";
    this.modelo = typeof modelo === 'string' ? marca : "no definido";
    this.ram = !isNaN(ram) ? ram : 256;
    this.disco = disco;
    this.pulgadas = !isNaN(pulgadas) ? pulgadas : 15.6;
    this.fecha = isNaN(Date.parse(fecha)) ? Date.now() : Date.parse(fecha);
    this.accesorios = [...accesorios];

    //mostrar todos los parametros
    this.mostrarOrdenador = function(){
        let accesorios = "";
        for (let i = 0; i < this.accesorios.length; i++){
            accesorios += `- ${this.accesorios[i]}\n`;
        }
        return `ORDENADOR: ${this.marca} ${this.modelo}\n
        RAM: ${this.ram}\n
        PULGADAS: ${this.pulgadas}\n
        ALTA: ${new Date(this.fecha).toLocaleString()}\n
        ACCESORIOS: ${accesorios}`;
    }
    this.actualizarMarcaModelo = function(NuevaMarca, NuevoModelo){
        if (typeof NuevaMarca === 'string'){
            this.marca = NuevaMarca;
        }
        if (typeof NuevoModelo === "string"){
            this.modelo = NuevoModelo;
        }
    }
    this.actualizarRamDiscoPulgadas = function(NuevaRam, NuevoDisco, NuevasPulgadas){
        if (!isNaN(NuevaRam)){
            this.ram = NuevaRam;
        }
        if (!isNaN(NuevoDisco)){
            this.disco = NuevoDisco;
        }
        if (!isNaN(NuevasPulgadas)){
            this.pulgadas = NuevasPulgadas;
        }
    }
    this.actualizarFecha = function(nuevaFecha){
        this.fecha = isNaN(Date.parse(nuevaFecha)) ? this.fecha : Date.parse(nuevaFecha);
    }
    this.anyadirAccesorios = function(...nuevoAccesorios){
        for (let i = 0; i < this.accesorios.length; i++){
            if (!this.accesorios.includes(NuevosAccesorios[i]))
                this.accesorios.push(nuevoAccesorios[i]);
        }
    }
    this.borrarAccesorios = function(...AccesoriosEliminar){
        for (let i = 0; i < this.AccesoriosEliminar.length; i++){
            let index = this.accesorios.indexOf(AccesoriosEliminar[i]);
            if (index != -1){
                this.accesorios.splice(index, 1);
            } 
        }
    }

}

let orde1 = new Ordenador(('lenovo', 'legion', 32, 256, 15.6, '2022-11-09', 'ratón', 'teclado'));
let orde2 = new Ordenador(('hp', 'omen', 32, 256, 15.6, '2022-11-09', 'ratón', 'teclado'));
let orde3 = new Ordenador(('acer', 'ferrari', 32, 256, 15.6, '2022-09-09', 'ratón', 'teclado'));
let orde4 = new Ordenador(('msi', 'modern', 32, 256, 15.6, '2022-08-09', 'ratón', 'teclado'));




/*
    Mirarse el export e import
    Object.keys(), Object.values()
    InnerHTML, OutterHTML
    Toda la movida de HTML
*/ 

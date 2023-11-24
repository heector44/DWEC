function Ordenador(
    marca,
    modelo,
    ram = 16,
    disco = 256,
    pulgadas = 15.6,
    fecha,
    ...accesorios
){
    this.marca = typeof marca === "string" ? marca : "no definida";
    this.modelo = typeof modelo === "string" ? modelo : "no definido";
    this.ram = typeof ram === "number" ? ram : 256;
    this.pulgadas = typeof pulgadas === "number" ? pulgadas :  15.6;
    this.fecha = Date.parse(fecha) ? Date.parse(fecha) : Date.now;
    this.accesorios = [...accesorios];

    this.mostrarOrdenador = function(){
        return `ORDENADOR: ${this.marca} ${this.modelo}`;
    }
        
    
}
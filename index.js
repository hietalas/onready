//Ejercicio para OnReady
//Franco Peretti

function mostrarVehiculos() {
    
    //Objeto Vehículo
    function Vehiculo(marca, modelo, puertas, cilindrada, precio, masCaro, masBarato, letraY, ordenar) {
    //Inicialización de atributos
        this.marca = marca;
        this.modelo = modelo;
        this.puertas = puertas;
        this.precio = precio;
        this.cilindrada = cilindrada;
    
//        this.masCaro = function masCaro();
//        this.masBarato = function masBarato();
//        this.modeloConY = function modeloConY();
//        this.ordenar = function ordenar();
    };
    
    //Creación de instancias de Vehículo
    var veh1 = new Vehiculo("Peugeot","206","4","","200000");
    var veh2 = new Vehiculo("Honda","Titan","","125","60000");
    var veh3 = new Vehiculo("Peugeot","208","5","","250000");
    var veh4 = new Vehiculo("Yamaha","YBR","","160","80500.50");
    
    //Métodos
    function masCaro() {
        var vehiculos = [veh1,veh2,veh3,veh4];
        vehiculos.sort(a, b){return a.precio - b.precio};
        return vehiculos.0;
    };
    
    function masBarato() {
        var vehiculos = [veh1,veh2,veh3,veh4];
        vehiculos.sort(a,b) {return a.precio - b.precio;};
        return vehiculos.3;
    };
    
    function modeloConY(vehiculo) {
        for(i=0,i<4,i++) {
            if(vehiculo.modelo.includes("y"))
                return vehiculo;
        };
    };
    
    //Impresión en pantalla
    
    console.log(
    
        "Marca: Peugeot // Modelo: 206 // Puertas: 4 // Precio: $200.000,00\n"
        "Marca: Honda // Modelo: Titan // Cilindrada: 125c // Precio: $60.000,00\n"
        "Marca: Peugeot // Modelo: 208 // Puertas: 5 // Precio: $250.000,00\n"
        "Marca: Yamaha // Modelo: YBR // Cilindrada: 160c // Precio: $80.500,50\n\n"

        "Vehículo más caro: " + masCaro +
        "Vehículo más barato: " + masBarato +
        "Vehículo que contiene en el modelo la letra ‘Y’: " + modeloConY    
    )
    
    
}
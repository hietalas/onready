//Ejercicio para OnReady
//Franco Peretti

function mostrarVehiculos() {
    
    //Clase Vehículo
    class Vehiculo {
        constructor(marca, modelo, precio) {
    //Inicialización de atributos
            this._marca = marca;
            this._modelo = modelo;
            this._precio = precio;
        }
    }
    
    //Clase auto con herencia
    class Auto extends Vehiculo {
        constructor(marca, modelo, precio, puertas) {
            super(marca, modelo, precio);
            this._puertas = puertas;
        }
    }
    
    //Clase moto con herencia
    class Moto extends Vehiculo {
        constructor(marca, modelo, precio, cilindrada) {
            super(marca, modelo, precio);
            this._cilindrada = cilindrada;
        }
    }
    
    //Creación de instancias de vehículos
    var aut1 = new Auto("Peugeot","206","4","","200000");
    var aut2 = new Auto("Peugeot","208","5","","250000");
    var mot1 = new Moto("Honda","Titan","","125","60000");
    var mot2 = new Moto("Yamaha","YBR","","160","80500.50");
    
    //Métodos
    function masCaro() {
        var vehiculos = [aut1,aut2,mot1,mot2];
        vehiculos.sort(function(a, b){return a.precio - b.precio});
        return vehiculos[0];
    };
    
    function masBarato() {
        var vehiculos = [aut1,aut2,mot1,mot2];
        vehiculos.sort(a,b) {return a.precio - b.precio;};
        return vehiculos[vehiculos.length-1];
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
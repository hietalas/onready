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
    var aut1 = new Auto("Peugeot","206","200000","4");
    var aut2 = new Auto("Peugeot","208","250000","5");
    var mot1 = new Moto("Honda","Titan","60000","125");
    var mot2 = new Moto("Yamaha","YBR","80500.50","160");
    
    //Métodos
    var vehiculos = [aut1,mot1,aut2,mot2];

    function masCaro() {
        vehiculos.sort(function(a, b){return a.precio - b.precio});
        return vehiculos[0];
    }
    
    function masBarato() {
        vehiculos.sort(function(a,b) {return a.precio - b.precio});
        return vehiculos[vehiculos.length-1];
    }
    
    function modeloConY(vehiculo) {
        for(i=0; i<vehiculos.length; i++) {
            if(vehiculo.modelo.includes("y"))
                return vehiculo;
        }
    }
    
    //Construcción de lo que se va a mostrar en pantalla
    var stringSalida = "";
    
    for(i=0; i<vehiculos.length; i++) {
        stringsalida += "Marca:\t" + vehiculos[i]._marca + 
                        "Modelo:\t" + vehiculos[i]._modelo;
        if(vehiculos[i] instanceof Auto) {
            stringsalida += "Puertas:\t" + vehiculos[i]._puertas
        }
            else if(vehiculos[i] instanceof Moto) {
                stringsalida += "Cilindrada:\t" + vehiculos[i]._cilindrada
            } 
        stringsalida += "Precio:\t" + vehiculos[i]._precio + "\n"
    }
    
    stringsalida += "Vehículo más caro: " + masCaro + "\n";
    stringsalida += "Vehículo más barato: " + masBarato + "\n";
    stringsalida += "Vehículo que contiene en el modelo la letra ‘Y’: " + modeloConY + "\n";

    //Impresión en pantalla
    console.log(stringSalida);
 
}
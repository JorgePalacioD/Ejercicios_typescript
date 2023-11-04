// Definición de la interfaz base "Vehicle" con propiedades comunes
interface Vehicle {
    model: string;
    year: number;
    color: string;
    start(): void;
    stop(): void;
  }
  
  // Definición de la interfaz "Car" que hereda de "Vehicle" y agrega propiedades específicas para automóviles
  interface Car extends Vehicle {
    numDoors: number;
    drive(): void;
  }
  
  // Definición de la interfaz "Motorcycle" que hereda de "Vehicle" y agrega propiedades específicas para motocicletas
  interface Motorcycle extends Vehicle {
    engineSize: number;
    wheelie(): void;
  }
  
  // Implementación de una clase "VehicleClass" que implementa las interfaces "Car" y "Motorcycle"
  class VehicleClass implements Car, Motorcycle {
    model: string;
    year: number;
    color: string;
    numDoors: number;
    engineSize: number;
  
    constructor(model: string, year: number, color: string, numDoors: number, engineSize: number) {
      this.model = model;
      this.year = year;
      this.color = color;
      this.numDoors = numDoors;
      this.engineSize = engineSize;
    }
  
    // Métodos comunes a todos los vehículos
    start() {
      console.log("El vehículo se ha encendido.");
    }
  
    stop() {
      console.log("El vehículo se ha apagado.");
    }
  
    // Métodos específicos para automóviles
    drive() {
      console.log("El automóvil está en movimiento.");
    }
  
    // Método específico para motocicletas
    wheelie() {
      console.log("La motocicleta está haciendo una acrobacia de wheelie.");
    }
  }
  
  // Crear una instancia de VehicleClass (automóvil)
  const car = new VehicleClass("Sedan", 2023, "Rojo", 4, 2000);
  console.log("Automóvil:");
  console.log("Modelo:", car.model);
  console.log("Año:", car.year);
  console.log("Color:", car.color);
  console.log("Número de puertas:", car.numDoors);
  car.start();
  car.drive();
  car.stop();
  
  // Crear una instancia de VehicleClass (motocicleta)
  const motorcycle = new VehicleClass("Deportiva", 2023, "Negro", 0, 1000);
  console.log("\nMotocicleta:");
  console.log("Modelo:", motorcycle.model);
  console.log("Año:", motorcycle.year);
  console.log("Color:", motorcycle.color);
  console.log("Tamaño del motor:", motorcycle.engineSize);
  motorcycle.start();
  motorcycle.wheelie();
  motorcycle.stop();
  
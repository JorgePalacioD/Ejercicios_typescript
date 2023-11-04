// Clase base "Vehículo"
class Vehículo {
    constructor(private nombre: string) {}
  
    // Método genérico para desplazarse
    desplazarse() {
      console.log(`${this.nombre} se está desplazando.`);
    }
  }
  
  // Subclase "Coche"
  class Coche extends Vehículo {
    constructor(nombre: string) {
      super(nombre);
    }
  
    // Método específico para coches
    desplazarse() {
      console.log(`${this.nombre} está rodando por la carretera.`);
    }
  }
  
  // Subclase "Barco"
  class Barco extends Vehículo {
    constructor(nombre: string) {
      super(nombre);
    }
  
    // Método específico para barcos
    desplazarse() {
      console.log(`${this.nombre} está navegando por el agua.`);
    }
  }
  
  // Subclase "Avión"
  class Avión extends Vehículo {
    constructor(nombre: string) {
      super(nombre);
    }
  
    // Método específico para aviones
    desplazarse() {
      console.log(`${this.nombre} está volando por los cielos.`);
    }
  }
  
  // Crear objetos de las subclases y probar sus métodos
  const miCoche = new Coche("Mi Coche");
  const miBarco = new Barco("Mi Barco");
  const miAvión = new Avión("Mi Avión");
  
  miCoche.desplazarse();
  miBarco.desplazarse();
  miAvión.desplazarse();
  
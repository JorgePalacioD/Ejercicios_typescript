// Clase base "Electrodoméstico"
class Electrodoméstico {
    constructor(public precio: number, public color: string) {}
  
    // Método para obtener una descripción del electrodoméstico
    obtenerDescripción(): string {
      return `Precio: $${this.precio}, Color: ${this.color}`;
    }
  }
  
  // Subclase "Televisor"
  class Televisor extends Electrodoméstico {
    constructor(precio: number, color: string, public tamañoPantalla: number) {
      super(precio, color);
    }
  
    // Método para obtener una descripción del televisor (incluyendo el tamaño de pantalla)
    obtenerDescripción(): string {
      return `${super.obtenerDescripción()}, Tamaño de pantalla: ${this.tamañoPantalla} pulgadas`;
    }
  }
  
  // Subclase "Nevera"
  class Nevera extends Electrodoméstico {
    constructor(precio: number, color: string, public capacidadLitros: number) {
      super(precio, color);
    }
  
    // Método para obtener una descripción de la nevera (incluyendo la capacidad en litros)
    obtenerDescripción(): string {
      return `${super.obtenerDescripción()}, Capacidad: ${this.capacidadLitros} litros`;
    }
  }
  
  // Subclase "Lavadora"
  class Lavadora extends Electrodoméstico {
    constructor(precio: number, color: string, public capacidadKg: number) {
      super(precio, color);
    }
  
    // Método para obtener una descripción de la lavadora (incluyendo la capacidad en kilogramos)
    obtenerDescripción(): string {
      return `${super.obtenerDescripción()}, Capacidad: ${this.capacidadKg} kg`;
    }
  }
  
  // Crear objetos de las subclases y probarlos
  const miTelevisor = new Televisor(800, "Negro", 55);
  const miNevera = new Nevera(600, "Blanco", 400);
  const miLavadora = new Lavadora(700, "Gris", 8);
  
  console.log("Mi Televisor:", miTelevisor.obtenerDescripción());
  console.log("Mi Nevera:", miNevera.obtenerDescripción());
  console.log("Mi Lavadora:", miLavadora.obtenerDescripción());
  
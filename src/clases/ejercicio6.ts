// Clase "Hotel"
class Hotel {
    constructor(public nombre: string, public ubicacion: string) {}
  
    // Método para obtener información del hotel
    obtenerInformacion(): string {
      return `Hotel: ${this.nombre}, Ubicación: ${this.ubicacion}`;
    }
  }
  
  // Clase "Habitación"
  class Habitacion {
    private reservada: boolean = false;
  
    constructor(public numero: number, public precio: number) {}
  
    // Método para reservar la habitación
    reservar() {
      if (this.reservada) {
        console.log(`La habitación ${this.numero} ya está reservada.`);
      } else {
        this.reservada = true;
        console.log(`Habitación ${this.numero} reservada con éxito.`);
      }
    }
  
    // Método para liberar la habitación
    liberar() {
      if (this.reservada) {
        this.reservada = false;
        console.log(`Habitación ${this.numero} liberada.`);
      } else {
        console.log(`La habitación ${this.numero} no está reservada.`);
      }
    }
  
    // Método para obtener información de la habitación
    obtenerInformacion(): string {
      return `Habitación ${this.numero}, Precio: $${this.precio}, ${
        this.reservada ? "Reservada" : "Disponible"
      }`;
    }
  }
  
  // Crear un hotel y algunas habitaciones
  const miHotel = new Hotel("Mi Hotel", "Ciudad Ejemplo");
  
  const habitacion101 = new Habitacion(101, 80);
  const habitacion102 = new Habitacion(102, 100);
  const habitacion103 = new Habitacion(103, 120);
  
  // Mostrar información del hotel
  console.log(miHotel.obtenerInformacion());
  
  // Mostrar información de las habitaciones
  console.log(habitacion101.obtenerInformacion());
  console.log(habitacion102.obtenerInformacion());
  console.log(habitacion103.obtenerInformacion());
  
  // Reservar una habitación y mostrar información actualizada
  habitacion101.reservar();
  console.log(habitacion101.obtenerInformacion());
  
  // Intentar reservar una habitación ya reservada
  habitacion102.reservar();
  
  // Liberar una habitación y mostrar información actualizada
  habitacion102.liberar();
  console.log(habitacion102.obtenerInformacion());
  
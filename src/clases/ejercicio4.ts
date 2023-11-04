// Clase base "FiguraGeometrica"
class FiguraGeometrica {
    constructor(public nombre: string) {}
  
    // Método genérico para calcular el área (se implementará en las subclases)
    area(): number {
      return 0;
    }
  }
  
  // Subclase "Triángulo"
  class Triangulo extends FiguraGeometrica {
    constructor(private base: number, private altura: number) {
      super("Triángulo");
    }
  
    // Implementación del método "area" para triángulos
    area(): number {
      return (this.base * this.altura) / 2;
    }
  }
  
  // Subclase "Círculo"
  class Circulo extends FiguraGeometrica {
    constructor(private radio: number) {
      super("Círculo");
    }
  
    // Implementación del método "area" para círculos
    area(): number {
      return Math.PI * Math.pow(this.radio, 2);
    }
  }
  
  // Subclase "Cuadrado"
  class Cuadrado extends FiguraGeometrica {
    constructor(private lado: number) {
      super("Cuadrado");
    }
  
    // Implementación del método "area" para cuadrados
    area(): number {
      return Math.pow(this.lado, 2);
    }
  }
  
  // Crear objetos de las subclases y calcular sus áreas
  const miTriangulo = new Triangulo(5, 4);
  const miCirculo = new Circulo(3);
  const miCuadrado = new Cuadrado(6);
  
  console.log(`${miTriangulo.nombre}: Área = ${miTriangulo.area()}`);
  console.log(`${miCirculo.nombre}: Área = ${miCirculo.area()}`);
  console.log(`${miCuadrado.nombre}: Área = ${miCuadrado.area()}`);
  
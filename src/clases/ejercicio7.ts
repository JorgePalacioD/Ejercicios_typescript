// Clase "Película"
class Película {
    constructor(public título: string, public duración: number, public director: string) {}
  }
  
  // Clase "CatalogoPeliculas"
  class CatalogoPeliculas {
    private películas: Película[] = [];
  
    // Método para agregar películas al catálogo
    agregarPelícula(película: Película) {
      this.películas.push(película);
    }
  
    // Método para buscar películas por título
    buscarPorTítulo(título: string): Película[] {
      return this.películas.filter((película) => película.título.includes(título));
    }
  
    // Método para filtrar películas por director
    filtrarPorDirector(director: string): Película[] {
      return this.películas.filter((película) => película.director === director);
    }
  }
  
  // Crear un catálogo de películas
  const catalogo = new CatalogoPeliculas();
  
  // Agregar películas al catálogo
  catalogo.agregarPelícula(new Película("Pelicula 1", 120, "Director 1"));
  catalogo.agregarPelícula(new Película("Pelicula 2", 110, "Director 2"));
  catalogo.agregarPelícula(new Película("Otra Pelicula", 90, "Director 1"));
  catalogo.agregarPelícula(new Película("Gran Pelicula", 150, "Director 3"));
  
  // Buscar películas por título
  console.log("Películas con 'Pelicula' en el título:");
  console.log(catalogo.buscarPorTítulo("Pelicula"));
  
  // Filtrar películas por director
  console.log("Películas dirigidas por 'Director 1':");
  console.log(catalogo.filtrarPorDirector("Director 1"));
  
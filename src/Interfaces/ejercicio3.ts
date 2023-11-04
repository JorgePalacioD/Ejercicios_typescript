// Definición de la interfaz "Product"
interface Product {
    name: string;
    price: number;
    description?: string; // Propiedad opcional para la descripción del producto
  }
  
  // Definición de la interfaz "Inventory"
  interface Inventory {
    products: Product[]; // Un array de productos
    addProduct(product: Product): void; // Función para agregar un producto
    findProductByName(name: string): Product | undefined; // Función para buscar un producto por nombre
  }
  
  // Implementación de la interfaz "Inventory" en una clase
  class InventoryManager implements Inventory {
    products: Product[] = [];
  
    addProduct(product: Product) {
      this.products.push(product);
    }
  
    findProductByName(name: string) {
      return this.products.find((product) => product.name === name);
    }
  }
  
  // Crear una instancia de InventoryManager
  const inventory = new InventoryManager();
  
  // Agregar productos al inventario
  inventory.addProduct({ name: "Producto 1", price: 10 });
  inventory.addProduct({ name: "Producto 2", price: 20 });
  inventory.addProduct({ name: "Producto 3", price: 15, description: "Descripción del producto 3" });
  
  // Buscar un producto por nombre
  const productName = "Producto 2";
  const foundProduct = inventory.findProductByName(productName);
  
  if (foundProduct) {
    console.log(`Producto encontrado: ${foundProduct.name}, Precio: $${foundProduct.price}`);
    if (foundProduct.description) {
      console.log(`Descripción: ${foundProduct.description}`);
    }
  } else {
    console.log(`Producto "${productName}" no encontrado en el inventario.`);
  }
  
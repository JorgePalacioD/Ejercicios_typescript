// Definición de la interfaz base "BaseObject" con una propiedad "id"
interface BaseObject {
    id: number;
  }
  
  // Definición de la interfaz "User" que hereda de "BaseObject"
  interface User extends BaseObject {
    name: string;
    email: string;
  }
  
  // Definición de la interfaz "Product" que hereda de "BaseObject"
  interface Product extends BaseObject {
    name: string;
    price: number;
  }
  
  // Definición de la interfaz "Order" que hereda de "BaseObject"
  interface Order extends BaseObject {
    orderNumber: string;
    items: Product[];
  }
  
  // Función genérica para imprimir los datos de cualquier objeto que implemente "BaseObject"
  function printObjectData<T extends BaseObject>(obj: T) {
    console.log("ID:", obj.id);
    // Comprueba el tipo de objeto y muestra propiedades específicas
    if ('email' in obj) {
      const user = obj as unknown as User;
      console.log("Name:", user.name);
      console.log("Email:", user.email);
    }
    if ('price' in obj) {
      const product = obj as unknown as Product;
      console.log("Product Name:", product.name);
      console.log("Price:", product.price);
    }
    if ('orderNumber' in obj) {
      const order = obj as unknown as Order;
      console.log("Order Number:", order.orderNumber);
      console.log("Items:", order.items);
    }
  }
  
  // Ejemplo de uso con objetos de las interfaces
  const user: User = { id: 1, name: "Usuario1", email: "usuario1@example.com" };
  const product: Product = { id: 2, name: "Producto1", price: 20 };
  const order: Order = {
    id: 3,
    orderNumber: "ORD123",
    items: [{ id: 4, name: "Producto2", price: 30 }]
  };
  
  // Llama a la función para imprimir los datos
  console.log("Datos del Usuario:");
  printObjectData(user);
  console.log("\nDatos del Producto:");
  printObjectData(product);
  console.log("\nDatos del Pedido:");
  printObjectData(order);
  
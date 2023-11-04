// Definición de la interfaz base "User"
interface User {
    username: string;
    email: string;
  }
  
  // Definición de la interfaz "Admin" que hereda de "User"
  interface Admin extends User {
    isAdmin: boolean;
  }
  
  // Función para imprimir datos de usuario (acepta tanto User como Admin)
  function printUserData(user: User) {
    console.log("Username:", user.username);
    console.log("Email:", user.email);
  
    if ('isAdmin' in user) {
      console.log("Es administrador:", (user as Admin).isAdmin);
    }
  }
  
  // Crear una instancia de User
  const regularUser: User = {
    username: "usuario123",
    email: "usuario@example.com"
  };
  
  // Crear una instancia de Admin
  const adminUser: Admin = {
    username: "admin1",
    email: "admin@example.com",
    isAdmin: true
  };
  
  // Imprimir datos del usuario regular
  console.log("Datos del usuario regular:");
  printUserData(regularUser);
  
  // Imprimir datos del usuario administrador
  console.log("\nDatos del usuario administrador:");
  printUserData(adminUser);
  
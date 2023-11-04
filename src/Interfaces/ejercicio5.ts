// Definición de la interfaz "Database"
interface Database {
    connect(): void;
    find(query: string): void;
    update(query: string, data: any): void;
    insert(query: string, data: any): void;
    delete(query: string): void;
  }
  
  // Implementación de la interfaz "Database" en la clase "MySQLDatabase"
  class MySQLDatabase implements Database {
    connect() {
      console.log("Conectado a la base de datos MySQL.");
    }
  
    find(query: string) {
      console.log(`Ejecutando consulta en MySQL: ${query}`);
      // Lógica para buscar en una base de datos MySQL
    }
  
    update(query: string, data: any) {
      console.log(`Ejecutando actualización en MySQL: ${query}`);
      // Lógica para actualizar en una base de datos MySQL
    }
  
    insert(query: string, data: any) {
      console.log(`Insertando datos en MySQL: ${query}`);
      // Lógica para insertar datos en una base de datos MySQL
    }
  
    delete(query: string) {
      console.log(`Eliminando datos en MySQL: ${query}`);
      // Lógica para eliminar datos en una base de datos MySQL
    }
  }
  
  // Implementación de la interfaz "Database" en la clase "SQLiteDatabase"
  class SQLiteDatabase implements Database {
    connect() {
      console.log("Conectado a la base de datos SQLite.");
    }
  
    find(query: string) {
      console.log(`Ejecutando consulta en SQLite: ${query}`);
      // Lógica para buscar en una base de datos SQLite
    }
  
    update(query: string, data: any) {
      console.log(`Ejecutando actualización en SQLite: ${query}`);
      // Lógica para actualizar en una base de datos SQLite
    }
  
    insert(query: string, data: any) {
      console.log(`Insertando datos en SQLite: ${query}`);
      // Lógica para insertar datos en una base de datos SQLite
    }
  
    delete(query: string) {
      console.log(`Eliminando datos en SQLite: ${query}`);
      // Lógica para eliminar datos en una base de datos SQLite
    }
  }
  
  // Ejemplo de uso
  const mysqlDB = new MySQLDatabase();
  mysqlDB.connect();
  mysqlDB.find("SELECT * FROM users");
  mysqlDB.update("UPDATE products SET price = 25", {});
  mysqlDB.insert("INSERT INTO orders (user_id, product_id) VALUES (1, 3)", {});
  mysqlDB.delete("DELETE FROM customers WHERE id = 5");
  
  const sqliteDB = new SQLiteDatabase();
  sqliteDB.connect();
  sqliteDB.find("SELECT * FROM items");
  sqliteDB.update("UPDATE inventory SET quantity = 50", {});
  sqliteDB.insert("INSERT INTO sales (product_id, quantity) VALUES (2, 10)", {});
  sqliteDB.delete("DELETE FROM orders WHERE id = 7");
  
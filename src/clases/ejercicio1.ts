class Persona {
    nombre: string;
    edad: number;
    id: number;

    constructor(nombre: string, edad: number, id: number) {
      this.nombre = nombre;
      this.edad = edad;
      this.id = id;  
    }
    caminar (){
        console.log(`${this.nombre} de ${this.edad} años, identificado con documento de identidad ${this.id} se encuentra caminando`);        
    }
    hablar (){
        console.log(`${this.nombre} de ${this.edad} años, identificado con documento de identidad ${this.id} se encuentra hablando`);        
    }
    comer (){
        console.log(`${this.nombre} de ${this.edad} años, identificado con documento de identidad ${this.id} se encuentra comiendo`);        
    }
}

const persona1 = new Persona ("Jorge", 35, 4376710);

persona1.caminar();
persona1.hablar();
persona1.comer();
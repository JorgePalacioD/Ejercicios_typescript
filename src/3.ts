let costoCasa: number = 200000000;
let tipoInmueble: number = 1;

function calcularComision(): void {
  if (tipoInmueble === 1) {
    console.log(
      `El valor que recibe el propietario es ${costoCasa * 0.9} y el valor que recibe la inmobiliaria es ${costoCasa * 0.1} `
    );
  } else if (tipoInmueble === 2) {
    console.log(
      `El valor que recibe el propietario es ${costoCasa * 0.88} y el valor que recibe la inmobiliaria es ${costoCasa * 0.12} `
    );
  } else {
    console.log(
      `Escriba un valor valido 1 para vivienda usada 2 para vivienda nueva`
    );
  }
}

calcularComision();

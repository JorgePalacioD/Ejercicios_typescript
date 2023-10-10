let lavado: number = 1;
let lavadoSeco: number = 2000;
let lavadoNormal: number = 1500;
let planchado: number = 1800;
let domicilio: number = 3000;
let numeroPrendas: number = 5;
let servicioLavado: number = 3; // 1 lavado 2 Planchado y 3 lavado y planchado

function servicioLavanderia(): void {
  switch (servicioLavado) {
    case 1:
      if (lavado == 1) {
        console.log(`El costo del servicio es $ ${numeroPrendas * lavadoSeco}`);
      } else if (lavado == 2) {
        console.log(`El costo del servicio es $ ${numeroPrendas * lavadoNormal}`);
      } else {
        console.log(`Seleccione un valor válido 1 Lavado en seco 2 Lavado normal`);
      }
      break;
    case 2:
      console.log(`El costo del servicio es $ ${numeroPrendas * planchado + domicilio}`);
      break;
    case 3:
      if (lavado == 1) {
        console.log(`El costo del servicio es $ ${numeroPrendas * lavadoSeco + numeroPrendas * planchado + domicilio}`);
      } else if (lavado == 2) {
        console.log(`El costo del servicio es $ ${numeroPrendas * lavadoNormal + numeroPrendas * planchado + domicilio}`);
      } else {
        console.log(`Seleccione un valor válido 1 Lavado en seco 2 Lavado normal`);
      }
      break;
    default:
      console.log(`Seleccione un valor válido para el servicio 1 lavado 2 Planchado y 3 lavado y planchado`);
      break;
  }
}

servicioLavanderia();

let inicio: number = 1;

function ciclo(): void {
  while (inicio <= 6) {
    if (inicio !== 5) {
      console.log(inicio);
    }
    inicio += 1;
  }
}

ciclo();

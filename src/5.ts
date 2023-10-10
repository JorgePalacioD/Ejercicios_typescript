let tipoSticker: number = 2;
let costoStickerGrande: number = 6000;
let costoStickerPequeño: number = 4000;
let cantidadSticker: number = 9;

function costoStickers(): void {
  if (cantidadSticker >= 10) {
    if (tipoSticker === 1) {
      console.log(`El costo total a pagar es $ ${costoStickerPequeño * cantidadSticker}`);
    } else if (tipoSticker === 2) {
      console.log(`El costo total a pagar es $ ${costoStickerGrande * cantidadSticker}`);
    } else {
      console.log(`Seleccione un tipo de sticker válido 1 Pequeño 2 Grande`);
    }
  } else {
    console.log(`Debe seleccionar como mínimo 10 stickers`);
  }
}

costoStickers();


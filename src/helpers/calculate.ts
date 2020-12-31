export const calculatePrice =
    (colorPrice: number, finenessPrice: number, size: number, engravingLength: number): number =>
    (colorPrice + finenessPrice) * size + engravingLength * 10
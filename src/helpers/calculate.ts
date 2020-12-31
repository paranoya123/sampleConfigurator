export const calculatePrice =
    (colorId: number, finenessId: number, size: number, engravingLength: number, matrix: Array<Array<number>>): number =>
    (matrix[colorId][finenessId]) * size + engravingLength * 10
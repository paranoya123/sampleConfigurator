import Prices from "../types/Prices"
import {ColorPrices, FinenessPrices} from "../types/Prices"

export const calculatePrice =
    (color: string, fineness: string, size: number, engravingLength: number, matrix: Prices): number => {
        const c = matrix.colors.find((m) => m.color === color)
        if(!c) throw 'Color not defined'
        const f = c.finenessCollection.find((f) => f.fineness === fineness)
        if(!f) throw 'Fineness not defined'
        return f.price * size + engravingLength * 10
    }
export default interface Prices {
    material: string,
    colors: Array<ColorPrices>
}
export interface ColorPrices {
    color: string,
    finenessCollection: Array<FinenessPrices>
}
export interface FinenessPrices {
    fineness: string,
    price: number
}
import Color from './Color'
import Fineness from './Fineness'


export default interface Material {
    name: string,
    colors: Array<Color>,
    fineness: Array<Fineness>
}
import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import Material from "./types/Material";

const priceMatrixGold = [[1000, 200, 300], [800, 900, 100], [500, 800, 1100]]
const priceMatrixPlatinum = [[1000, 2000, 3000], [8000, 9000, 1000], [5000, 8000, 11000]]
const priceMatrixSilver = [[100, 20, 30], [80, 90, 10], [50, 80, 110]]

const colorsForGold = [{name: 'Red'}, {name: 'Green'} ,{name: 'Blue'}]
const colorsForPlatinum = [{name: 'White'}, {name: 'Yellow'} ,{name: 'Blue'}]
const colorsForSilver = [{name: 'Black'}, {name: 'Green'} ,{name: 'Grey'}]

const finenessForGold = [{name: '500'}, {name: '585'} ,{name: '700'}]
const finenessForPlatinum = [{name: '322'}, {name: '888'} ,{name: '444'}]
const finenessForSilver = [{name: '323'}, {name: '898'} ,{name: '999'}]


const data: Array<Material> = [{name: 'Gold', colors: colorsForGold, fineness: finenessForGold},
    {name: 'Platinum', colors: colorsForPlatinum, fineness: finenessForPlatinum},
    {name: 'Silver', colors: colorsForSilver, fineness: finenessForSilver}]

const sizes  = [{name: '23'}, {name: '15'}, {name: '10'}]

ReactDOM.render(
  <React.StrictMode>
    <App
        materials={data}
        sizes={sizes}
        matrix={[priceMatrixGold, priceMatrixPlatinum, priceMatrixSilver]}
    />
  </React.StrictMode>,
  document.getElementById('root')
)

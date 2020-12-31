import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import Material from "./types/Material";

const colorsForGold = [{name: 'Red', price: 1000}, {name: 'Green', price: 333} ,{name: 'Blue', price: 334}]
const colorsForPlatinum = [{name: 'White', price: 500}, {name: 'Yellow', price: 67} ,{name: 'Blue', price: 32}]
const colorsForSilver = [{name: 'Black', price: 100}, {name: 'Green', price: 88} ,{name: 'Grey', price: 93}]

const finenessForGold = [{name: '500', price: 200}, {name: '585', price: 23} ,{name: '700', price: 83}]
const finenessForPlatinum = [{name: '322', price: 500}, {name: '888', price: 90} ,{name: '444', price: 99}]
const finenessForSilver = [{name: '323', price: 100}, {name: '898', price: 84} ,{name: '999', price: 43}]


const data: Array<Material> = [{name: 'Gold', colors: colorsForGold, fineness: finenessForGold},
    {name: 'Platinum', colors: colorsForPlatinum, fineness: finenessForPlatinum},
    {name: 'Silver', colors: colorsForSilver, fineness: finenessForSilver}]

const sizes  = [{name: '23'}, {name: '15'}, {name: '10'}]

ReactDOM.render(
  <React.StrictMode>
    <App
        materials={data}
        sizes={sizes}
    />
  </React.StrictMode>,
  document.getElementById('root')
)

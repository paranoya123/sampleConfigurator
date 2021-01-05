import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import Material from "./types/Material"

const priceMatrix = [
    {material: 'silver', colors: [
            {color: 'white', finenessCollection: [
                    {fineness: '500', price: 10},
                    {fineness: '585', price: 2},
                    {fineness: '700', price: 3},
                ]},
            {color: 'metal', finenessCollection: [
                    {fineness: '500', price: 20},
                    {fineness: '585', price: 3},
                    {fineness: '700', price: 4},
                ]},
            {color: 'grey', finenessCollection: [
                    {fineness: '500', price: 30},
                    {fineness: '585', price: 4},
                    {fineness: '700', price: 5},
                ]}]},
    {material: 'gold', colors: [
            {color: 'yellow', finenessCollection: [
                    {fineness: '500', price: 100},
                    {fineness: '585', price: 20},
                    {fineness: '700', price: 30},
                ]},
            {color: 'blue', finenessCollection: [
                    {fineness: '500', price: 200},
                    {fineness: '585', price: 30},
                    {fineness: '700', price: 40},
                ]},
            {color: 'red', finenessCollection: [
                    {fineness: '500', price: 300},
                    {fineness: '585', price: 40},
                    {fineness: '700', price: 50},
                ]}]},
    {material: 'platinum', colors: [
            {color: 'white', finenessCollection: [
                    {fineness: '500', price: 1000},
                    {fineness: '585', price: 200},
                    {fineness: '700', price: 300},
                ]},
            {color: 'yellow', finenessCollection: [
                    {fineness: '500', price: 2000},
                    {fineness: '585', price: 300},
                    {fineness: '700', price: 400},
                ]},
            {color: 'grey', finenessCollection: [
                    {fineness: '500', price: 3000},
                    {fineness: '585', price: 400},
                    {fineness: '700', price: 500},
                ]}]}
]

const colorsForSilver = [{name: 'white'}, {name: 'metal'} ,{name: 'grey'}]
const colorsForGold = [{name: 'yellow'}, {name: 'blue'} ,{name: 'red'}]
const colorsForPlatinum = [{name: 'white'}, {name: 'yellow'} ,{name: 'grey'}]

const finenessForSilver = [{name: '500'}, {name: '585'} ,{name: '700'}]
const finenessForGold = [{name: '500'}, {name: '585'} ,{name: '700'}]
const finenessForPlatinum = [{name: '500'}, {name: '585'} ,{name: '700'}]



const data: Array<Material> = [{name: 'silver', colors: colorsForSilver, fineness: finenessForSilver},
    {name: 'gold', colors: colorsForGold, fineness: finenessForGold},
    {name: 'platinum', colors: colorsForPlatinum, fineness: finenessForPlatinum}]

const sizes  = [{name: '23'}, {name: '15'}, {name: '10'}]

ReactDOM.render(
  <React.StrictMode>
    <App
        materials={data}
        sizes={sizes}
        matrix={priceMatrix}
    />
  </React.StrictMode>,
  document.getElementById('root')
)

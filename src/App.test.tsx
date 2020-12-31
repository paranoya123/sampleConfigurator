import React from 'react'
import App from './App'
import {Select} from './components/Select'
import Material from "./types/Material"
import {calculatePrice} from './helpers/calculate'
import renderer from 'react-test-renderer'

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


test('Snapshot test App component', () => {
  const snapshot = renderer
      .create(<App
          materials={data}
          sizes={sizes}
      />)
      .toJSON()
  expect(snapshot).toMatchSnapshot()
})

test('Snapshot test Select component with materials', () => {
  const snapshot = renderer
      .create(<Select
          name={'Material'}
          options={data}
          selected = {0}
          onChange = {(e) => {}}
      />)
      .toJSON();
  expect(snapshot).toMatchSnapshot()
})

test('Snapshot test Select component with sizes', () => {
  const snapshot = renderer
      .create(<Select
          name={'Size'}
          options={sizes}
          selected = {0}
          onChange = {(e) => {}}
      />)
      .toJSON();
  expect(snapshot).toMatchSnapshot()
})

test('calculate price test1', () => {
  const colorPrice = 100
  const finenessPrice = 30
  const size = 20
  const engravingLength = 4
  expect(calculatePrice(colorPrice, finenessPrice, size, engravingLength)).toBe(2640)
})

test('calculate price test2', () => {
  const colorPrice = 100
  const finenessPrice = 30
  const size = 0
  const engravingLength = 4
  expect(calculatePrice(colorPrice, finenessPrice, size, engravingLength)).toBe(40)
})



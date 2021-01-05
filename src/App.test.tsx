import React from 'react'
import App from './App'
import {Select} from './components/Select'
import Material from "./types/Material"
import {calculatePrice} from './helpers/calculate'
import renderer from 'react-test-renderer'
import { mount, configure } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

configure({ adapter: new Adapter() })

const gold = 1, silver = 0, platinum = 2

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



test('Snapshot test App component', () => {
  const snapshot = renderer
      .create(<App
          materials={data}
          sizes={sizes}
          matrix={priceMatrix}
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
  const color = 'metal'
  const fineness = '500'
  const size = 23
  const engravingLength = 4
  expect(calculatePrice(color, fineness, size, engravingLength, priceMatrix[silver])).toBe(500)
})

test('calculate price test2', () => {
  const color = 'metal'
  const fineness = '585'
  const size = 0
  const engravingLength = 4
  expect(calculatePrice(color, fineness, size, engravingLength, priceMatrix[silver])).toBe(40)
})

//E2E TESTS

test('test calculate price after ui update with engraving', () => {
  const wrapper = mount(<App
      materials={data}
      sizes={sizes}
      matrix={priceMatrix}
  />)
  expect(wrapper.render().find('#price').text()).toEqual('Price: 230')
  wrapper.find('select[data-testid="Material"]').simulate('change', { target: { value: '1' } } )
  wrapper.find('select[data-testid="Color"]').simulate('change', { target: { value: '1' } } )
  wrapper.find('select[data-testid="Sizes"]').simulate('change', { target: { value: '2' } } )
  wrapper.find('input#engraving').simulate('change', { target: { value: 'te st' } } )
  expect(wrapper.render().find('#price').text()).toEqual('Price: 2040')
})

test('test calculate price after ui update without engraving', () => {
  const wrapper = mount(<App
      materials={data}
      sizes={sizes}
      matrix={priceMatrix}
  />)
  expect(wrapper.render().find('#price').text()).toEqual('Price: 230')
  wrapper.find('select[data-testid="Material"]').simulate('change', { target: { value: '1' } } )
  wrapper.find('select[data-testid="Color"]').simulate('change', { target: { value: '2' } } )
  wrapper.find('select[data-testid="Fineness"]').simulate('change', { target: { value: '2' } } )
  expect(wrapper.render().find('#price').text()).toEqual('Price: 1150')
})

test('test calculate price after ui update after reset Color and Material', () => {
  const wrapper = mount(<App
      materials={data}
      sizes={sizes}
      matrix={priceMatrix}
  />)
  expect(wrapper.render().find('#price').text()).toEqual('Price: 230')
  wrapper.find('select[data-testid="Color"]').simulate('change', { target: { value: '1' } } )
  wrapper.find('select[data-testid="Fineness"]').simulate('change', { target: { value: '1' } } )
  wrapper.find('select[data-testid="Material"]').simulate('change', { target: { value: '2' } } )
  expect(wrapper.render().find('#price').text()).toEqual('Price: 23000')
})




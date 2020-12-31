import React from 'react'
import App from './App'
import {Select} from './components/Select'
import Material from "./types/Material"
import {calculatePrice} from './helpers/calculate'
import renderer from 'react-test-renderer'
import { render, screen, fireEvent, getByText } from '@testing-library/react'

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


test('Snapshot test App component', () => {
  const snapshot = renderer
      .create(<App
          materials={data}
          sizes={sizes}
          matrix={[priceMatrixGold, priceMatrixPlatinum, priceMatrixSilver]}
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
  const colorIndex = 1
  const finenessIndex = 0
  const size = 23
  const engravingLength = 4
  expect(calculatePrice(colorIndex, finenessIndex, size, engravingLength, priceMatrixGold)).toBe(18440)
})

test('calculate price test2', () => {
  const colorIndex = 1
  const finenessIndex = 2
  const size = 0
  const engravingLength = 4
  expect(calculatePrice(colorIndex, finenessIndex, size, engravingLength, priceMatrixGold)).toBe(40)
})

//E2E TESTS


test('test material select', () => {
  const { getByTestId, getAllByTestId } = render(<App
      materials={data}
      sizes={sizes}
      matrix={[priceMatrixGold, priceMatrixPlatinum, priceMatrixSilver]}
  />)
  const select = getAllByTestId('select')[0]
  expect(select).toHaveValue('0')
  fireEvent.change(select, { target: { value: 2 } })
  expect(select).toHaveValue('2')
})

test('test color select', () => {
  const { getByTestId, getAllByTestId } = render(<App
      materials={data}
      sizes={sizes}
      matrix={[priceMatrixGold, priceMatrixPlatinum, priceMatrixSilver]}
  />)
  const select = getAllByTestId('select')[1]
  expect(select).toHaveValue('0')
  fireEvent.change(select, { target: { value: 1 } })
  expect(select).toHaveValue('1')
})

test('test fineness select', () => {
  const { getByTestId, getAllByTestId } = render(<App
      materials={data}
      sizes={sizes}
      matrix={[priceMatrixGold, priceMatrixPlatinum, priceMatrixSilver]}
  />)
  const select = getAllByTestId('select')[2]
  expect(select).toHaveValue('0')
  fireEvent.change(select, { target: { value: 2 } })
  expect(select).toHaveValue('2')
})

test('test sizes select', () => {
  const { getByTestId, getAllByTestId } = render(<App
      materials={data}
      sizes={sizes}
      matrix={[priceMatrixGold, priceMatrixPlatinum, priceMatrixSilver]}
  />)
  const select = getAllByTestId('select')[3]
  expect(select).toHaveValue('0')
  fireEvent.change(select, { target: { value: 1 } })
  expect(select).toHaveValue('1')
})

test('test reset selects after material changed', () => {
  const { getByTestId, getAllByTestId } = render(<App
      materials={data}
      sizes={sizes}
      matrix={[priceMatrixGold, priceMatrixPlatinum, priceMatrixSilver]}
  />)
  const selectM = getAllByTestId('select')[0]
  const selectC = getAllByTestId('select')[1]
  const selectF = getAllByTestId('select')[2]
  expect(selectM).toHaveValue('0')
  fireEvent.change(selectC, { target: { value: 1 } })
  fireEvent.change(selectF, { target: { value: 2 } })
  fireEvent.change(selectM, { target: { value: 1 } })
  expect(selectC).toHaveValue('0')
  expect(selectF).toHaveValue('0')
})

test('test input engraving', () => {
  const { getByTestId, getAllByTestId } = render(<App
      materials={data}
      sizes={sizes}
      matrix={[priceMatrixGold, priceMatrixPlatinum, priceMatrixSilver]}
  />)
  const input = getByTestId('input')

  expect(input).toHaveValue('')
  fireEvent.input(input, { target: { value: 'te st' } })

  expect(input).toHaveValue('te st')
})


import React, {useState, useEffect} from 'react'
import './App.css'
import {Select} from './components/Select'
import Material from './types/Material'
import Fineness from './types/Fineness'
import Color from './types/Color'
import {calculatePrice} from './helpers/calculate'
import Prices from "./types/Prices"

function App(props: {materials: Array<Material>, sizes: Array<{name: string}>,  matrix: Array<Prices>}) {
  const {materials, sizes, matrix} = props
  const [selectedMaterial, setSelectedMaterial] = useState(0)
  const [selectedColor, setSelectedColor] = useState(0)
  const [selectedFineness, setSelectedFineness] = useState(0)
  const [engraving, setEngraving] = useState('')
  const [selectedSize, setSelectedSize] = useState(0)
  const [price, setPrice] = useState(0)


  const onChangeMaterial = (e: React.ChangeEvent<HTMLSelectElement>) => {
      const index = e.target.value
      setSelectedMaterial(+index)
      setSelectedColor(0)
      setSelectedFineness(0)
  }
  const onChangeColor = (e: React.ChangeEvent<HTMLSelectElement>) => {
      const index = e.target.value
      setSelectedColor(+index)
  }

  const onChangeFineness = (e: React.ChangeEvent<HTMLSelectElement>) => {
      const index = e.target.value
      setSelectedFineness(+index)
  }

  const onChangeEngraving = (e: React.ChangeEvent<HTMLInputElement>) => {
      const engraving = e.target.value
      setEngraving(engraving)
  }

  const onChangeSize = (e: React.ChangeEvent<HTMLSelectElement>) => {
      const index = e.target.value
      setSelectedSize(+index)
  }

  useEffect(() => {
      const engravingLength = engraving.replace(/\s/g, '').length
      const m = matrix.find(material => materials[selectedMaterial].name === material.material)
      if(!m) return
      const price = calculatePrice(materials[selectedMaterial].colors[selectedColor].name,
                        materials[selectedMaterial].fineness[selectedFineness].name,
                        +sizes[selectedSize].name,
                        engravingLength,
                        m
      )
      setPrice(price)
   }, [engraving, selectedSize, selectedFineness, selectedColor, selectedMaterial, sizes, matrix])

  return (
      <div className={'App'}>
        <Select
            name={'Material'}
            options={materials}
            selected = {selectedMaterial}
            onChange = {onChangeMaterial}
        />
        <Select
            name={'Color'}
            options={materials[selectedMaterial].colors}
            selected = {selectedColor}
            onChange = {onChangeColor}
        />
        <Select
            name={'Fineness'}
            options={materials[selectedMaterial].fineness}
            selected = {selectedFineness}
            onChange = {onChangeFineness}
        />
        <Select
            name={'Sizes'}
            options={sizes}
            selected = {selectedSize}
            onChange = {onChangeSize}
        />

        <label>
            Engraving :
            <input id={'engraving'} data-testid="input" type="text" value={engraving} onChange={onChangeEngraving} />
        </label>

        <label id={'price'} >Price: {price}</label>
      </div>
  )
}

export default App

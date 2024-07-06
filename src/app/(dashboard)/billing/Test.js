'use client'
import Select_Custom from '@/app/components/inputsFields/Select_Custom'
import React, { useState } from 'react'

const Test = () => {
  const [selectedItem, setselectedItem] = useState([])
  const items = [
    { name: 'Dog', value: 'dog' },
    { name: 'Carabao', value: 'carabao' },
    { name: 'Goat', value: 'goat' },
  ]
  return (
    <div>
      <Select_Custom
        parameters={{
          options: items,
          selectedItem,
          setselectedItem,
          containerHeight: 200,
        //   multiSelect: true, // optional
          optionsStyle: '', // optional
          placeholder: '- Hello world -', // optional
          containerWidth: 260, // optional
          menuStyle: 'w-[260px]', // optional
          placeholderStyle: '', // optional
          singleSelectedStyle: '', // optional
          multiSelectStyle: '', // optional
          menuSpaceFromElement: 10, // optional
        }}
      />
    </div>
  )
}

export default Test

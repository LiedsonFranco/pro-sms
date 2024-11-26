'use client'
import React from 'react'
import { useState } from 'react'
const OptionInput = () => {
    const [value, setValue] = useState('')
  return (
    <option value={value}>
        <input type="text" onChange={(e) => {console.log(e)}} />
    </option>
  )
}

export default OptionInput
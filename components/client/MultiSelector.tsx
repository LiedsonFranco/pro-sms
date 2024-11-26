"use client";
import React, { useState } from "react";
import {MultiSelect} from '@/components/MultipleSelect';

import {Option} from '@/types'

const MultiSelector = ({options, placeholder}: {options:Option[], placeholder:string}) => {
    const [selected, setSelected] = useState<string[]>([]);
    return (
    <>
    <MultiSelect
      options={options}
      onValueChange={setSelected}
      defaultValue={selected}
      placeholder={placeholder}
      variant="inverted"
      animation={2}
      maxCount={3}
      name="contacts"
      className="shadow-md"
    />
    <input type="hidden" name="contacts" value={selected} />
  </>
  )
}

export default MultiSelector
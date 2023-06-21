import React from 'react';

import {Select} from "antd";

interface SelectPropsType {
  options: { id: number, value: string, label: string }[]
  placeholder: string,
  onChange: (selectedValues: string[]) => void
}

const AntSelect: React.FC<SelectPropsType> = (
  {options, placeholder, onChange}
) =>
    <Select
      mode="multiple"
      style={{width: '100%'}}
      placeholder={placeholder}
      options={options}
      onChange={onChange}
    />

export default AntSelect;
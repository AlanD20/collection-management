import { Children, DefProps } from "@/@types/global"
import React from "react"


interface Props extends DefProps, Children {
  name: string;
  label: string;
  parentClass?: string;
  labelClass?: string;
}


const Checkbox = ({ name, label, children, parentClass = '', labelClass = '', className = '' }: Props
) => {
  return (
    <label className={`label cursor-pointer flex w-max gap-4 items-center ${parentClass}`}>

      <input
        type="checkbox"
        name={name}
        className={`checkbox checkbox-primary ${className}`}
      />

      <span className={`label-text ${labelClass}`}>
        {label ? label : children}
      </span>
    </label>
  )
}
export default Checkbox

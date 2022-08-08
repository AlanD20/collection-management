import React from "react"
import { Children, DefProps } from "@/@types/global"


interface Props extends DefProps, Children {
  label: string;
}

const TitleText = ({ label, children, className = '' }: Props) => {
  return (
    <h2
      className={`flex gap-2 justify-center items-center text-3xl font-bold pb-4 pt-2 capitalize ${className}`}
    >
      {label ? label : children}
    </h2>

  )
}
export default TitleText

import { Children, DefProps } from "@/@types/Global"
import React from "react"

interface Props extends DefProps, Children { }


const SectionBody = ({ children, className = '' }: Props) => {
  return (
    <div
      className={`w-full flex flex-col lg:flex-row gap-6 lg:gap-4 lg:flex-wrap justify-center items-stretch lg:justify-start lg:items-start lg:[&>*]:max-w-min ${className}`}
    >
      {children}
    </div>
  )
}

export default SectionBody;

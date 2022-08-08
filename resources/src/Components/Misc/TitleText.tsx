import React from "react"
import { DefProps } from "@/@types/global"


interface Props extends DefProps {
  label: string;
}

const TitleText = ({ label, className = '' }: Props) => {
  return (
    <h2
      className={`flex gap-2 items-center text-3xl font-bold pb-4 pt-2 capitalize ${className}`}>
      {label}
    </h2>

  )
}
export default TitleText

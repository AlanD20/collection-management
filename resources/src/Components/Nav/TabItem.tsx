import { DefProps } from "@/@types/global"
import { Link, usePage } from "@inertiajs/inertia-react"
import React from "react"


interface Props extends DefProps {
  path: string;
  label: string;
  active?: boolean;
}

const TabItem = ({ path, label, active, className }: Props) => {

  const $ = usePage();

  console.log('tab item info page url');
  console.log($);


  return (
    <Link
      href={path}
      as='button'
      className={`tab tab-lg ${active ? 'tab-active' : ''} ${className}`}
    >
      {label}
    </Link>
  )
}
export default TabItem

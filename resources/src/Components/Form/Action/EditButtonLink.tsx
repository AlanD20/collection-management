import React from "react"
import { DefProps, ParamsProp } from "@/@types/Global"
import ButtonLink from "@@/Form/ButtonLink"


interface Props extends DefProps {
  routeName: string;
  params: ParamsProp;
}

const EditButtonLink = ({ routeName, params, className = '' }: Props) => {
  return (
    <ButtonLink
      href={route(routeName, params)}
      as="button"
      preserveScroll={true}
      className={`min-w-[60px] btn-success btn-outline font-bold text-base ${className}`}
    >
      {__('form.edit')}
    </ButtonLink>
  )
}

export default EditButtonLink

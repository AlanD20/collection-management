import React from "react"
import { DefProps, ParamsProp } from "@/@types/Global"
import ButtonLink from "@@/Form/ButtonLink"


interface Props extends DefProps {
  routeName: string;
  params: ParamsProp;
}

const DeleteButtonLink = ({ routeName, params, className = '' }: Props) => {
  return (
    <ButtonLink
      href={route(routeName, params)}
      method="delete"
      as="button"
      preserveScroll={true}
      className={`min-w-[60px] btn-error btn-outline font-bold text-base ${className}`}
    >
      {__('form.delete')}
    </ButtonLink>

  )
}

export default DeleteButtonLink

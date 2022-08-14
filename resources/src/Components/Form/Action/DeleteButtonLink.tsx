import React from 'react';
import { DefProps } from '@/@types/Global';
import ButtonLink from '@@/Form/ButtonLink';
import { ParamsProp } from '@/@types/Response';

interface Props extends DefProps {
  routeName: string;
  params: ParamsProp;
}

const DeleteButtonLink = ({
  routeName,
  params,
  hideWhen = false,
  className = '',
}: Props) => {
  if (hideWhen) return null;

  return (
    <ButtonLink
      href={route(routeName, params)}
      method="delete"
      as="button"
      replace={true}
      preserveScroll={true}
      className={`min-w-[60px] btn-error btn-outline font-bold text-base ${className}`}
    >
      {__('form.delete')}
    </ButtonLink>
  );
};

export default DeleteButtonLink;

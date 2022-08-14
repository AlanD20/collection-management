import React from 'react';
import { DefProps } from '@/@types/Global';
import ButtonLink from '@@/Form/ButtonLink';
import { ParamsProp } from '@/@types/Response';

interface Props extends DefProps {
  routeName: string;
  params: ParamsProp;
}

const ViewButtonLink = ({
  routeName,
  params,
  hideWhen = false,
  className = '',
}: Props) => {
  if (hideWhen) return null;

  return (
    <ButtonLink
      href={route(routeName, params)}
      as="button"
      preserveScroll={true}
      className={`btn-accent font-bold text-base ${className}`}
    >
      {__('form.view')}
    </ButtonLink>
  );
};

export default ViewButtonLink;

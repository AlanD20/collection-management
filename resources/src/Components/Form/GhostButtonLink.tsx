import React from 'react';
import { DefProps } from '@/@types/Global';
import ButtonLink from '@@/Form/ButtonLink';
import { ParamsProp } from '@/@types/Response';
import { InertiaLinkProps } from '@inertiajs/inertia-react';

interface Props extends DefProps, Omit<InertiaLinkProps, 'href'> {
  routeName: string;
  params: ParamsProp;
  label?: string;
}

const GhostButtonLink = ({
  routeName,
  label,
  children,
  params,
  hideWhen = false,
  className = '',
  ...attr
}: Props) => {
  if (hideWhen) return null;

  return (
    <ButtonLink
      as="button"
      replace={true}
      preserveScroll={true}
      className={`w-full flex btn-ghost btn-square text-lg font-bold ${className}`}
      {...attr}
      href={route(routeName, params)}
    >
      {label ? <span className="mx-auto">{label}</span> : children}
    </ButtonLink>
  );
};

export default GhostButtonLink;

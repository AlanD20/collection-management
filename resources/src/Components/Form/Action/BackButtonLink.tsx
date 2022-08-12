import React from 'react';
import ButtonLink from '@@/Form/ButtonLink';
import { DefProps, ParamsProp } from '@/@types/Global';
import { IoIosArrowBack } from 'react-icons/io';

interface Props extends DefProps {
  routeName: string;
  params: ParamsProp;
}

const BackButtonLink = ({
  routeName,
  params = {},
  hideWhen = false,
  className = '',
}: Props) => {
  if (hideWhen) return null;

  return (
    <ButtonLink
      href={route(routeName, params)}
      as="button"
      preserveScroll={true}
      className={`text-xl gap-4 font-bold ${className}`}
    >
      <IoIosArrowBack />
      <span className="capitalize">{__('form.back')}</span>
    </ButtonLink>
  );
};

export default BackButtonLink;

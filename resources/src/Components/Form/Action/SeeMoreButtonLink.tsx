import React from 'react';
import { DefProps } from '@/@types/Global';
import ButtonLink from '@@/Form/ButtonLink';
import { ParamsProp } from '@/@types/Response';
import { AiOutlineArrowRight } from 'react-icons/ai';

interface Props extends DefProps {
  routeName: string;
  params?: ParamsProp;
}

const LikeButtonLink = ({
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
      className={`btn-primary btn-sm px-2 font-bold text-sm gap-2 ${className}`}
    >
      {__('form.see_more')}
      <AiOutlineArrowRight />
    </ButtonLink>
  );
};

export default LikeButtonLink;

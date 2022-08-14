import React from 'react';
import { DefProps } from '@/@types/Global';
import ButtonLink from '@@/Form/ButtonLink';
import { ParamsProp } from '@/@types/Response';
import { FaHeart, FaRegHeart } from 'react-icons/fa';


interface Props extends DefProps {
  routeName: string;
  liked: boolean;
  params: ParamsProp;
}

const LikeButtonLink = ({
  routeName,
  params,
  liked = false,
  hideWhen = false,
  className = '',
}: Props) => {
  if (hideWhen) return null;

  return (
    <ButtonLink
      href={route(routeName, params)}
      as="button"
      preserveScroll={true}
      className={`btn-link font-bold text-base ${className}`}
    >
      {!liked && <FaRegHeart className="text-3xl text-error" />}
      {liked && <FaHeart className="text-3xl text-error" />}
    </ButtonLink>
  );
}

export default LikeButtonLink;

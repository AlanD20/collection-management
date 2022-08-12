import React from 'react';
import ButtonLink from '@@/Form/ButtonLink';
import { ParamsProp } from '@/@types/Global';

interface Props {
  isBlocked: boolean;
  params: ParamsProp;
}

const BlockUser = ({ params = {}, isBlocked }: Props) => {
  return (
    <ButtonLink
      href={route(`admin.users.${isBlocked ? 'unblock' : 'block'}`, params)}
      method="post"
      as="button"
      preserveScroll={true}
      className={`min-w-[60px] btn-outline ${
        isBlocked ? 'btn-error' : 'btn-success'
      }`}
    >
      <i className={`text-lg fas fa-user-${isBlocked ? 'lock' : 'unlock'}`}></i>
    </ButtonLink>
  );
};

export default BlockUser;

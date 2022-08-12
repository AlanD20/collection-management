import React from 'react';
import ButtonLink from '@@/Form/ButtonLink';
import { ParamsProp } from '@/@types/Global';

interface Props {
  isAdmin: boolean;
  params: ParamsProp;
}

const GrantPermission = ({ params = {}, isAdmin }: Props) => {
  return (
    <ButtonLink
      href={route(`admin.users.${isAdmin ? 'demote' : 'promote'}`, params)}
      method="post"
      as="button"
      preserveScroll={true}
      className={`min-w-[60px] btn-outline ${
        isAdmin ? 'btn-error' : 'btn-success'
      }`}
    >
      <i className={`text-lg fas fa-user-${isAdmin ? 'slash' : 'crown'}`}></i>
    </ButtonLink>
  );
};

export default GrantPermission;

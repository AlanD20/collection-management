import React from 'react';
import ButtonLink from '@@/Form/ButtonLink';

interface Props {
  isAdmin: boolean;
  userId: number;
}

const GrantPermission = ({ userId, isAdmin }: Props) => {
  return (
    <ButtonLink
      href={route(`admin.users.${isAdmin ? 'demote' : 'promote'}`, {
        id: userId,
      })}
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

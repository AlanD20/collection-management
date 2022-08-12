import React from 'react';
import ButtonLink from '@@/Form/ButtonLink';

interface Props {
  isBlocked: boolean;
  userId: number;
}

const BlockUser = ({ userId, isBlocked }: Props) => {
  return (
    <ButtonLink
      href={route(`admin.users.${isBlocked ? 'unblock' : 'block'}`, {
        id: userId,
      })}
      method="post"
      as="button"
      preserveScroll={true}
      className={`min-w-[60px] btn-outline ${isBlocked ? 'btn-error' : 'btn-success'
        }`}
    >
      <i className={`text-lg fas fa-user-${isBlocked ? 'lock' : 'unlock'}`}></i>
    </ButtonLink>
  );
};

export default BlockUser;

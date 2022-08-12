import React from 'react';
import ButtonLink from '@@/Form/ButtonLink';

interface Props {
  userId: number;
}

const DeleteUser = ({ userId }: Props) => {
  return (
    <ButtonLink
      href={route('admin.users.destroy', { id: userId })}
      method="delete"
      as="button"
      preserveScroll={true}
      className={`min-w-[60px] btn-outline btn-error`}
    >
      <i className="text-lg fas fa-trash"></i>
    </ButtonLink>
  );
};

export default DeleteUser;

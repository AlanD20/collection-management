import React from 'react';
import ButtonLink from '@@/Form/ButtonLink';
import { ParamsProp } from '@/@types/Response';

interface Props {
  params: ParamsProp;
}

const DeleteUser = ({ params }: Props) => {
  return (
    <ButtonLink
      href={route('admin.users.destroy', params)}
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

import React from 'react';
import { DefProps, UsePage } from '@/@types/Global';
import { Collection } from '@/@types/Models';
import { Link, usePage } from '@inertiajs/inertia-react';
import { Inertia } from '@inertiajs/inertia';

interface Props extends DefProps {
  collection: Collection;
}

const CollectionTableRow = ({ collection, className = '' }: Props) => {
  const $ = usePage<UsePage>().props;

  const handleRowClick = () =>
    Inertia.visit(
      route('u.collections.show', {
        uname: $.auth.user.username,
        id: collection.id,
      })
    );

  return (
    <tr
      onClick={handleRowClick}
      className={`hover cursor-pointer ${className}`}
    >
      <td>{collection.id}</td>
      <td>{collection.name}</td>
      <td>{collection.category.name}</td>
      <td>{collection.description}</td>
      <td>{collection.updatedAt}</td>
      <td>{collection.createdAt}</td>
      <tr className={`hover ${className}`}></tr>
    </tr>
  );
};
export default CollectionTableRow;

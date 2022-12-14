import React from 'react';
import { Tag } from '@/@types/Models';
import EditButtonLink from '@@/Form/Action/EditButtonLink';
import DeleteButtonLink from '@@/Form/Action/DeleteButtonLink';

interface Props {
  tag: Tag;
}

const TagTableRow = ({ tag }: Props) => {
  return (
    <tr className="text-center">
      <td className="w-[10ch] font-bold">{tag.id}</td>
      <td>{tag.name}</td>
      <td className="flex gap-6 px-12">
        <EditButtonLink routeName="admin.tags.edit" params={{ tag: tag.id }} />
        <DeleteButtonLink
          routeName="admin.tags.destroy"
          params={{ tag: tag.id }}
        />
      </td>
    </tr>
  );
};

export default TagTableRow;

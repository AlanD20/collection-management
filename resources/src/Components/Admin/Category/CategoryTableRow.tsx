import React from 'react';
import { Category } from '@/@types/Models';
import ButtonLink from '@@/Form/ButtonLink';

interface Props {
  category: Category;
}

const CategoryTableRow = ({ category }: Props) => {
  return (
    <tr>
      <th className="w-[10ch]">{category.id}</th>
      <td>{category.name}</td>
      <td className="flex gap-6 px-12">
        {/* Edit category */}
        <ButtonLink
          href={route('admin.categories.edit', { id: category.id })}
          className="min-w-[60px] btn-success btn-outline"
        >
          Edit
        </ButtonLink>

        {/* Delete category */}
        <ButtonLink
          href={route('admin.categories.destroy', { id: category.id })}
          method="delete"
          as="button"
          preserveScroll={true}
          className="min-w-[60px] btn-error btn-outline"
        >
          Delete
        </ButtonLink>
      </td>
    </tr>
  );
};

export default CategoryTableRow;

import React from 'react';
import { Category } from '@/@types/Models';
import EditButtonLink from '@@/Form/Action/EditButtonLink';
import DeleteButtonLink from '@@/Form/Action/DeleteButtonLink';

interface Props {
  category: Category;
}

const CategoryTableRow = ({ category }: Props) => {
  return (
    <tr className="text-center">
      <td className="w-[10ch] font-bold">{category.id}</td>
      <td className="max-w-max">{category.name}</td>
      <td className="flex gap-6 px-12">
        <EditButtonLink
          routeName="admin.categories.edit"
          params={{ category: category.id }}
        />
        <DeleteButtonLink
          routeName="admin.categories.destroy"
          params={{ category: category.id }}
        />
      </td>
    </tr>
  );
};

export default CategoryTableRow;

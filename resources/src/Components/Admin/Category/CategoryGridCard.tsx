import React from 'react';
import { Category } from '@/@types/Models';
import EditButtonLink from '@@/Form/Action/EditButtonLink';
import DeleteButtonLink from '@@/Form/Action/DeleteButtonLink';
import { DefProps } from '@/@types/Global';

interface Props extends DefProps {
  category: Category;
}

const CategoryGridCard = ({ category }: Props) => {
  return (
    <div className="card p-0 bg-base-100 shadow-xl">
      <div className="indicator">
        <span className="indicator-item badge badge-primary top-6 right-12 text-lg">
          #{category.id}
        </span>
        <div className="card-body">
          <div className="flex flex-col capitalize">
            <span className="font-bold">Name:</span>
            <span>{category.name}</span>
          </div>

          <div className="mt-4 card-actions flex gap-6 px-12">
            <EditButtonLink
              routeName="admin.categories.edit"
              params={{ category: category.id }}
            />
            <DeleteButtonLink
              routeName="admin.categories.destroy"
              params={{ category: category.id }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategoryGridCard;

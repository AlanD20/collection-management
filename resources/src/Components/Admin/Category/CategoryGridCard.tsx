import React from 'react';
import { Category } from '@/@types/Models';
import ButtonLink from '@@/Form/ButtonLink';

interface Props {
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
            {/* Edit category */}
            <ButtonLink
              href={route('admin.categories.edit', { id: category.id })}
              method="post"
              as="button"
              preserveScroll={true}
              className="min-w-[60px] btn-outline"
            >
              Edit
            </ButtonLink>

            {/* Delete category */}
            <ButtonLink
              href={route('admin.categories.destroy', { id: category.id })}
              method="delete"
              as="button"
              preserveScroll={true}
              className="min-w-[60px] btn-outline"
            >
              Delete
            </ButtonLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategoryGridCard;

import React from 'react';
import { Tag } from '@/@types/Models';
import EditButtonLink from '@@/Form/Action/EditButtonLink';
import DeleteButtonLink from '@@/Form/Action/DeleteButtonLink';

interface Props {
  tag: Tag;
}

const TagGridCard = ({ tag }: Props) => {
  return (
    <div className="card p-0 bg-base-100 shadow-xl">
      <div className="indicator">
        <span className="indicator-item badge badge-primary top-6 right-12 text-lg">
          #{tag.id}
        </span>
        <div className="card-body">
          <div className="flex flex-col capitalize">
            <span className="font-bold">{__('form.name')}</span>
            <span>{tag.name}</span>
          </div>

          <div className="mt-4 card-actions flex gap-6 px-12">
            <EditButtonLink
              routeName="admin.tags.edit"
              params={{ tag: tag.id }}
            />
            <DeleteButtonLink
              routeName="admin.tags.destroy"
              params={{ tag: tag.id }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TagGridCard;

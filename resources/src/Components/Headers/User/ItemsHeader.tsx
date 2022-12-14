import React from 'react';
import { DefProps } from '@/@types/Global';
import { UsePage } from '@/@types/Response';
import MDEditor from '@uiw/react-md-editor';
import { Collection } from '@/@types/Models';
import { usePage } from '@inertiajs/inertia-react';
import CollectionAction from '@@/User/Collection/CollectionAction';
import BadgeLink from '@@/Misc/BadgeLink';

interface Props extends DefProps {}

const ItemsHeader = ({ hideWhen = false, className = '' }: Props) => {
  if (hideWhen) return null;

  const props = usePage<UsePage>().props;
  const collection = props.collection as Collection;

  return (
    <div className="flex flex-col gap-2 min-w-[25ch] max-w-7xl  my-8 bg-base-100 p-4 px-8 rounded-lg shadow-lg">
      <div className="w-full flex flex-col md:flex-row gap-3 items-center mb-4">
        <h2 className="text-2xl font-bold">
          {`${collection.name} #${collection.id}`}
        </h2>
        <BadgeLink
          label={collection.category.name}
          query={collection.category.name}
        />
      </div>
      <div className="flex justify-between gap-4 my-4">
        <div className="flex gap-4 w-full items-center justify-between">
          <span className="text-sm italic">
            {`${__('model.created_at')} ${collection.createdAt}`}
          </span>
          <span className="text-sm italic">
            {`${__('model.updated_at')} ${collection.updatedAt}`}
          </span>
        </div>
        <CollectionAction />
      </div>
      <MDEditor.Markdown source={collection.description} />
    </div>
  );
};

export default ItemsHeader;

import React from 'react';
import { DefProps } from '@/@types/Global';
import { UsePage } from '@/@types/Response';
import { usePage } from '@inertiajs/inertia-react';
import { Collection } from '@/@types/Models';

interface Props extends DefProps {}

const ItemsHeader = ({ hideWhen = false, className = '' }: Props) => {
  if (hideWhen) return null;

  const props = usePage<UsePage>().props;
  const collection = props.collection as Collection;

  return (
    <div className="flex flex-col gap-2 min-w-[25ch] max-w-[55ch] my-8 bg-base-100 p-4 rounded-lg shadow-lg">
      <h4 className="text-2xl font-bold text-center">
        {`${collection.name}#${collection.id}`}
      </h4>
      <div className="flex justify-between gap-4 my-4">
        <span className="text-sm italic">
          {`${__('model.created_at')} ${collection.createdAt}`}
        </span>
        <span className="text-sm italic">
          {`${__('model.updated_at')} ${collection.updatedAt}`}
        </span>
      </div>
      <p>{collection.description}</p>
    </div>
  );
};

export default ItemsHeader;

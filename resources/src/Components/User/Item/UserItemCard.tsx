import React from 'react';
import { DefProps } from '@/@types/Global';
import { Collection, Item } from '@/@types/Models';
import UserItemCardFooter from './UserItemCardFooter';
import UserItemCardHeader from './UserItemCardHeader';
import RenderCustomFieldValue from './RenderCustomFieldValue';

interface Props extends DefProps {
  collection: Collection;
  item: Item;
  likes: number[];
}

const UserItemCard = ({
  collection,
  item,
  likes = [],
  className = '',
}: Props) => {
  const condition = item && item.fields.length > 0;
  return (
    <div
      className={`card card-compact lg:card-normal min-w-[350px] w-[500px] bg-base-100 shadow-xl ${className}`}
    >
      <div className="card-body !py-4">
        <UserItemCardHeader item={item} />
        <div className="flex flex-col">
          {condition &&
            item.fields.map((field) => {
              if (field.type === 'textarea') return null;
              return (
                <RenderCustomFieldValue
                  key={field.id}
                  field={field}
                  className="my-2"
                />
              );
            })}
        </div>
        <UserItemCardFooter item={item} likes={likes} />
      </div>
    </div>
  );
};

export default UserItemCard;

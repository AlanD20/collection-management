import React from 'react';
import { Item } from '@/@types/Models';
import BadgeLink from '@@/Misc/BadgeLink';
import { DefProps } from '@/@types/Global';
import ViewButtonLink from '@@/Form/Action/ViewButtonLink';
import RenderCustomFieldValue from '@@/User/Item/RenderCustomFieldValue';

interface Props extends DefProps {
  item: Item;
}

const ItemCard = ({ item, className = '' }: Props) => {
  const condition = item && item.fields.length > 0;
  return (
    <div
      className={`card card-compact lg:card-normal min-w-[300px] bg-base-100 shadow-xl h-[450px] ${className}`}
    >
      <div className="px-8 pt-4 flex justify-between text-xs italic">
        <span>{`${__('model.created_at')} ${item.createdAt}`}</span>
        <span>{`${__('model.updated_at')} ${item.updatedAt}`}</span>
      </div>
      <div className="card-body !py-4">
        <div className="flex flex-col mb-4">
          <h2 className="card-title capitalize font-bold">
            {`${item.name} #${item.id}`}
          </h2>
          <div className="flex w-full gap-1 flex-wrap">
            {item.tags.map((tag) => (
              <BadgeLink key={tag.id} label={tag.name} query={tag.name} />
            ))}
          </div>
        </div>
        <div className="flex flex-col w-[250px] md:max-w-[400px]">
          {condition &&
            item.fields.map((field) => {
              if (field.type === 'textarea') return null;
              if (field.type === 'text') return null;
              return (
                <RenderCustomFieldValue
                  key={field.id}
                  field={field}
                  className="my-2"
                />
              );
            })}
        </div>
        <div className="card-actions justify-end mt-auto mb-4">
          <ViewButtonLink
            routeName="u.collections.items.show"
            params={{
              uname: item.collection.user.username,
              collection: item.collection.id,
              item: item.id,
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default ItemCard;

import React from 'react';
import { Item } from '@/@types/Models';
import BadgeLink from '@@/Misc/BadgeLink';

interface Props {
  item: Item;
}

const ItemDetailTitle = ({ item }: Props) => {
  return (
    <div className="flex flex-col w-full gap-6">
      <div className="card-title justify-between w-full">
        <h4 className="text-4xl">{item.name}</h4>
      </div>
      <div className="flex flex-wrap gap-1 w-full">
        {item.tags.map((tag) => (
          <BadgeLink key={tag.id} label={tag.name} query={tag.name} />
        ))}
      </div>
    </div>
  );
};

export default ItemDetailTitle;

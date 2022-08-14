import React from 'react';
import { Item } from '@/@types/Models';
import RenderCustomFieldValue from '../RenderCustomFieldValue';

interface Props {
  item: Item;
}

const ItemDetailBody = ({ item }: Props) => {
  return (
    <div className="flex flex-col w-full">
      {item &&
        item.fields.length > 0 &&
        item.fields.map((field) => (
          <RenderCustomFieldValue key={field.id} field={field} />
        ))}
    </div>
  );
};

export default ItemDetailBody;

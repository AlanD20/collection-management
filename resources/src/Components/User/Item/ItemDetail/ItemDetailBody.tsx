import React from 'react';
import { Item } from '@/@types/Models';
import RenderCustomFieldValue from '../RenderCustomFieldValue';

interface Props {
  item: Item;
}

const ItemDetailBody = ({ item }: Props) => {

  const condition = item && item.fields.length > 0;

  return (
    <div className="flex flex-col w-full">
      {condition &&
        item.fields.map((field) => (
          <RenderCustomFieldValue key={field.id} field={field} />
        ))
      }
    </div>
  );
};

export default ItemDetailBody;

import React from 'react';
import ItemCard from '../ItemCard';
import { Item } from '@/@types/Models';
import EmptyResult from '@@/Misc/EmptyResult';
import { Paginator } from '@/@types/Response';
import PaginationLinks from '@@/Table/PaginationLinks';

interface Props {
  items: Paginator<Item[]>;
}

const TagResult = ({ items }: Props) => {
  const condition = items && items.data.length > 0;

  return (
    <div className="flex flex-col w-full bg-base-100 p-4 shadow-md rounded-lg">
      {condition && (
        <div className="flex flex-col gap-4 w-full mb-8">
          {items.data.map((item) => (
            <ItemCard key={item.id} item={item} tags />
          ))}
        </div>
      )}

      {!condition && <EmptyResult model="tag item" />}

      {condition && <PaginationLinks meta={items.meta} />}
    </div>
  );
};

export default TagResult;

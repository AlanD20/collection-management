import React from 'react';
import { Collection } from '@/@types/Models';
import EmptyResult from '@@/Misc/EmptyResult';
import { Paginator } from '@/@types/Response';
import CollectionCard from '../CollectionCard';
import PaginationLinks from '@@/Table/PaginationLinks';

interface Props {
  collections: Paginator<Collection[]>;
}

const CollectionResult = ({ collections }: Props) => {
  const condition = collections && collections.data.length > 0;

  return (
    <div className="flex flex-col w-full bg-base-100 p-4 shadow-md rounded-lg">
      {condition && (
        <div className="flex w-full mb-8">
          {collections.data.map((collection) => (
            <CollectionCard key={collection.id} collection={collection} />
          ))}
        </div>
      )}

      {!condition && <EmptyResult model="collection" />}

      {condition && <PaginationLinks meta={collections.meta} />}
    </div>
  );
};

export default CollectionResult;

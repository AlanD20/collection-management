import React from 'react';
import SectionBody from '../SectionBody';
import SectionTitle from '../SectionTitle';
import { Collection } from '@/@types/Models';
import EmptyResource from '@@/Misc/EmptyResource';
import CollectionCard from '@@/Main/CollectionCard';

interface Props {
  collections: Collection[];
}

const LargestCollections = ({ collections }: Props) => {
  const condition = collections && collections.length > 0;

  return (
    <section className="mb-32 w-full flex flex-col gap-4">
      <SectionTitle
        title={__('main.most_items')}
        routeName="collections.index"
        params={{
          sort: 'desc',
          order_by: 'items'
        }}
      />

      <SectionBody>
        {condition ? (
          collections.map((collection) => (
            <CollectionCard key={collection.id} collection={collection} />
          ))
        ) : (
          <EmptyResource model="Collection" />
        )}
      </SectionBody>
    </section>
  );
};

export default LargestCollections;

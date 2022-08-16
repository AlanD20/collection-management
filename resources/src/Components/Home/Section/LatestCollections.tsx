import React from 'react';
import { Collection } from '@/@types/Models';
import SectionTitle from '../SectionTitle';
import CollectionCard from '../CollectionCard';
import EmptyResource from '@@/Misc/EmptyResource';
import SectionBody from '../SectionBody';

interface Props {
  collections: Collection[];
}

const LatestCollections = ({ collections }: Props) => {
  const condition = collections && collections.length > 0;

  return (
    <section className="mb-16 w-full flex flex-col gap-4">
      <SectionTitle
        title={__('home.latest', {
          model: 'Collections',
        })}
        routeName="index"
      />

      <SectionBody>
        {condition ? (
          collections.map((collection) => (
            <CollectionCard
              key={collection.id}
              collection={collection} />
          ))
        ) : (
          <EmptyResource model="Collection" />
        )}
      </SectionBody>

    </section>
  );
};

export default LatestCollections;

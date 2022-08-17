import React from 'react';
import { Item } from '@/@types/Models';
import ItemCard from '@@/Main/ItemCard';
import SectionBody from '../SectionBody';
import SectionTitle from '../SectionTitle';
import EmptyResource from '@@/Misc/EmptyResource';

interface Props {
  items: Item[];
}

const LatestItems = ({ items }: Props) => {
  const condition = items && items.length > 0;

  return (
    <section className="w-full mb-16 flex flex-col gap-4">
      <SectionTitle
        title={__('main.latest', {
          model: 'Items',
        })}
        routeName="items.index"
      />

      <SectionBody className="lg:w-auto [&>*]:flex-1">
        {condition ? (
          items.map((item) => <ItemCard key={item.id} item={item} />)
        ) : (
          <EmptyResource model="Item" />
        )}
      </SectionBody>
    </section>
  );
};

export default LatestItems;

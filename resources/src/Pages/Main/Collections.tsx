import React from 'react';
import { Collection } from '@/@types/Models';
import { Paginator } from '@/@types/Response';
import EmptyResource from '@@/Misc/EmptyResource';
import MainHeader from '@@/Headers/Main/MainHeader';
import PageContainer from '@/Layouts/PageContainer';
import PaginationLinks from '@@/Table/PaginationLinks';
import { U_COLLECTIONS_SP } from '@/common/select-options';
import UserCollectionCard from '@@/User/Collection/UserCollectionCard';

interface Props {
  collections: Paginator<Collection[]>;
}

const Collections = ({ collections }: Props) => {
  const condition = collections && collections.data.length > 0;

  return (
    <div className="my-4 w-full flex gap-4 flex-wrap justify-center">
      {condition &&
        collections.data.map((collection) => (
          <UserCollectionCard key={collection.id} collection={collection} />
        ))}

      {!condition && <EmptyResource model={__('model.collection')} />}

      {condition && <PaginationLinks meta={collections.meta} />}
    </div>
  );
};

export default PageContainer({
  tabTitle: 'Collections',
  body: { component: Collections },
  header: {
    component: MainHeader,
    props: {
      title: 'main.view_collections',
      optionRoute: {
        sortOptions: U_COLLECTIONS_SP(),
        name: 'collections.index',
        params: ['uname'],
      },
    },
  },
});

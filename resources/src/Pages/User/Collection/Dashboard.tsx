import React from 'react';
import { Collection } from '@/@types/Models';
import { Paginator } from '@/@types/Response';
import EmptyResource from '@@/Misc/EmptyResource';
import UserHeader from '@@/Headers/User/UserHeader';
import PaginationLinks from '@@/Table/PaginationLinks';
import { U_COLLECTIONS_SP } from '@/common/select-options';
import UserPageContainer from '@/Layouts/UserPageContainer';
import UserCollectionCard from '@@/User/Collection/UserCollectionCard';

interface Props {
  collections: Paginator<Collection[]>;
}

const Dashboard = ({ collections }: Props) => {
  const condition = collections && collections.data.length > 0;

  return (
    <div className="w-full flex justify-center items-start gap-8 flex-wrap p-8">
      {!condition && <EmptyResource model={__('model.collection')} />}

      <div className="flex flex-wrap w-full justify-center items-center gap-8">
        {condition &&
          collections.data.map((col) => (
            <UserCollectionCard key={col.id} collection={col} />
          ))}
      </div>

      {condition && (
        <PaginationLinks meta={collections.meta} className="mt-8" />
      )}
    </div>
  );
};

export default UserPageContainer({
  tabTitle: 'User Collection',
  body: {
    component: Dashboard,
  },
  header: {
    component: UserHeader,
    props: {
      title: 'main.view_collections',
      backRoute: {
        label: 'form.profile',
        name: 'u.show',
        params: ['uname'],
      },
      optionRoute: {
        sortOptions: U_COLLECTIONS_SP(),
        name: 'u.collections.index',
        params: ['uname'],
      },
      createRoute: {
        name: 'u.collections.create',
        params: ['uname'],
      },
    },
  },
});

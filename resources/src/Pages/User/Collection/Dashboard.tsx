import React from 'react';
import { Collection } from '@/@types/Models';
import { Paginator } from '@/@types/Response';
import UserPageContainer from '@/Layouts/UserPageContainer';
import CollectionHeader from '@@/User/Collection/CollectionHeader';
import CollectionCard from '@@/User/Collection/CollectionCard';


interface Props {
  uname: string;
  collections: Paginator<Collection[]>;
}

const Dashboard = ({ uname, collections }: Props) => {

  console.log(collections);

  return (
    <div
      className="w-full flex justify-center items-start gap-4 flex-wrap [&>*]:grow p-8"
    >
      {collections && collections.data.length > 0 &&
        collections.data.map(col => (
          <CollectionCard
            key={col.id}
            collection={col}
          />
        ))
      }
    </div>
  );
};

export default UserPageContainer({
  title: 'User Collection',
  body: {
    component: Dashboard,
  },
  header: {
    component: CollectionHeader,
  },
});

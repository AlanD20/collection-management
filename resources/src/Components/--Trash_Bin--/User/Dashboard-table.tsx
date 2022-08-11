import React from 'react';
import { Collection } from '@/@types/Models';
import { Paginator } from '@/@types/Response';
import UserPageContainer from '@/Layouts/UserPageContainer';
import CollectionHead from '@@/--Trash_Bin--/User/CollectionHead';
import CollectionTableRow from './CollectionTableRow';
import UserCollectionHeader from '@@/User/Collection/UserCollectionHeader';

interface Props {
  uname: string;
  collections: Paginator<Collection[]>;
}

const Dashboard = ({ uname, collections }: Props) => {
  console.log(collections);

  return (
    <div>
      <div className="overflow-x-auto">
        <table className="table table-compact">
          <CollectionHead uname={uname} />
          <tbody>
            {collections &&
              collections.data.length > 0 &&
              collections.data.map((col) => (
                <CollectionTableRow key={col.id} collection={col} />
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default UserPageContainer({
  title: 'User Collection',
  body: {
    component: Dashboard,
  },
  header: {
    component: UserCollectionHeader,
  },
});

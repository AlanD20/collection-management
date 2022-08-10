import React from 'react';
import { Collection } from '@/@types/Models';
import { Paginator } from '@/@types/Response';
import { BiSortDown, BiSortUp } from 'react-icons/bi';
import UserPageContainer from '@/Layouts/UserPageContainer';
import CollectionHeader from '@@/User/Collection/CollectionHeader';
import { Link } from '@inertiajs/inertia-react';
import SortButton from '@@/Table/SortButton';
import CollectionHead from '@@/User/Collection/CollectionHead';
import CollectionTableRow from '@@/User/Collection/CollectionTableRow';


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
            {collections && collections.data.length > 0 &&
              collections.data.map(col => (
                <CollectionTableRow
                  key={col.id}
                  collection={col}
                />
              ))
            }
          </tbody>
        </table>
      </div>
    </div >
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

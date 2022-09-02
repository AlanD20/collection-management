import React from 'react';
import { Collection, Item, User } from '@/@types/Models';
import UserPageContainer from '@/Layouts/UserPageContainer';
import CommentSection from '@@/User/Item/Comment/CommentSection';
import UserHeaderCompact from '@@/Headers/User/UserHeaderCompact';
import UserItemDetail from '@@/User/Item/ItemDetail/UserItemDetail';
import UserItemSideDetail from '@@/User/Item/ItemSideDetail/UserItemSideDetail';

interface Props {
  user: User;
  item: Item;
  liked: boolean;
  collection: Collection;
}

const Dashboard = ({ user, item, liked, collection }: Props) => {
  return (
    <div className="w-full flex flex-col lg:flex-row gap-4">
      <div className="w-full flex flex-col lg:flex-row gap-4 p-4 lg:justify-center lg:items-start lg:gap-8 lg:p-8 relative">
        <UserItemSideDetail user={user} item={item} liked={liked} />

        <div className="flex flex-col justify-center gap-4 w-full items-start lg:px-4">
          <UserItemDetail item={item} liked={liked} collection={collection} />

          <div className="divider mt-12"></div>
          <CommentSection itemId={item.id} comments={item.comments} />
        </div>
      </div>
    </div>
  );
};

export default UserPageContainer({
  tabTitle: 'Item',
  body: {
    component: Dashboard,
  },
  header: {
    component: UserHeaderCompact,
    props: {
      backRoute: {
        label: 'form.back_item',
        name: 'u.collections.items.index',
        params: ['uname', 'collection'],
      },
    },
  },
});

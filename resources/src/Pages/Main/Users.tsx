import React from 'react';
import { User } from '@/@types/Models';
import UserCard from '@@/Main/UserCard';
import { Paginator } from '@/@types/Response';
import EmptyResource from '@@/Misc/EmptyResource';
import MainHeader from '@@/Headers/Main/MainHeader';
import PageContainer from '@/Layouts/PageContainer';
import PaginationLinks from '@@/Table/PaginationLinks';
import { MAIN_USERS_SP } from '@/common/select-options';

interface Props {
  users: Paginator<User[]>;
}

const Users = ({ users }: Props) => {
  const condition = users && users.data.length > 0;

  return (
    <div className="my-4 w-full flex gap-4 flex-wrap ">
      {condition &&
        users.data.map((user) => (
          <UserCard key={user.id} user={user} className="max-w-[25ch]" />
        ))}

      {!condition && <EmptyResource model="User" />}

      {condition && <PaginationLinks meta={users.meta} />}
    </div>
  );
};

export default PageContainer({
  tabTitle: 'Users',
  body: { component: Users },
  header: {
    component: MainHeader,
    props: {
      title: 'Users',
      optionRoute: {
        sortOptions: MAIN_USERS_SP,
        name: 'u.index',
      },
    },
  },
});

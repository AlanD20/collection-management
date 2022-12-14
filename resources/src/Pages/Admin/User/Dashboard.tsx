import React from 'react';
import { User } from '@/@types/Models';
import { Paginator } from '@/@types/Response';
import UserHead from '@@/Admin/User/UserHead';
import EmptyResource from '@@/Misc/EmptyResource';
import UserTableRow from '@@/Admin/User/UserTableRow';
import UserGridCard from '@@/Admin/User/UserGridCard';
import AdminHeader from '@@/Headers/Admin/AdminHeader';
import PaginationLinks from '@@/Table/PaginationLinks';
import { ADMIN_USERS_SP } from '@/common/select-options';
import AdminPageContainer from '@/Layouts/AdminPageContainer';

interface Props {
  users: Paginator<User[]>;
}

const Dashboard = ({ users }: Props) => {
  const condition = users && users.data.length > 0;

  return (
    <div className="overflow-x-auto flex flex-col gap-4 w-full">
      <table className="hidden lg:table table-auto table-zebra">
        <UserHead />
        <tbody>
          {condition &&
            users.data.map((user) => (
              <UserTableRow key={user.id} user={user} />
            ))}
        </tbody>
      </table>
      <div className="grid lg:hidden justify-center gap-8 py-4">
        {users &&
          users.data.length > 0 &&
          users.data.map((user) => <UserGridCard key={user.id} user={user} />)}
      </div>

      {!condition && <EmptyResource model={__('model.user')} />}

      {condition && <PaginationLinks meta={users.meta} />}
    </div>
  );
};

export default AdminPageContainer({
  tabTitle: 'Manage Users',
  body: { component: Dashboard },
  header: {
    component: AdminHeader,
    props: {
      componentName: 'Admin/User',
      searchbar: {
        routeName: 'admin.users.index',
      },
      sortOption: {
        routeName: 'admin.users.index',
        options: ADMIN_USERS_SP(),
      },
    },
  },
});

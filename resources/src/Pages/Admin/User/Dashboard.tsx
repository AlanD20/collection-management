import React from 'react';
import { User } from '@/@types/Models';
import { Paginator } from '@/@types/Response';
import Paginate from '@@/Table/Paginate';
import UserHead from '@@/Admin/User/UserHead';
import AdminPageContainer from '@/Layouts/AdminPageContainer';
import UserTableRow from '@@/Admin/User/UserTableRow';
import UserGridCard from '@@/Admin/User/UserGridCard';

interface Props {
  users: Paginator<User[]>;
}

const Dashboard = ({ users }: Props) => {
  return (
    <div className="overflow-x-auto flex flex-col gap-4 w-full">
      <table className="hidden lg:table table-auto table-zebra">
        <UserHead />
        <tbody>
          {users &&
            users.data.length > 0 &&
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
      <Paginate meta={users.meta} />
    </div>
  );
};

export default AdminPageContainer({
  component: Dashboard,
  title: 'Manage Users',
  name: 'Admin/User',
});

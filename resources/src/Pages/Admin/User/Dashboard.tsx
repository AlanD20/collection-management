import React from 'react';
import { User } from '@/@types/Models';
import { Paginator } from '@/@types/Response';
import Paginate from '@@/Table/Paginate';
import UserHead from '@@/Admin/User/UserHead';
import AdminPageContainer from '@/Layouts/AdminPageContainer';
import UserTableRow from '@@/Admin/User/UserTableRow';
import UserGridCard from '@@/Admin/User/UserGridCard';
import AdminHeader from '@@/Admin/AdminHeader';

interface Props {
  users: Paginator<User[]>;
}

const Dashboard = ({ users }: Props) => {
  console.log(users);


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
  title: 'Manage Users',
  body: { component: Dashboard },
  header: {
    component: AdminHeader,
    props: {
      componentName: 'Admin/User',
    },
  },
});

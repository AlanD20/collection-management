import React from 'react';
import { User } from '@/@types/Models';
import { Paginator } from '@/@types/Response';
import UserTableRow from '@/Components/Admin/User/UserTableRow';
import UserHead from '@/Components/Admin/User/UserHead';
import AdminPageContainer from '@/Layouts/AdminPageContainer';
import UserGridCard from '@/Components/Admin/User/UserGridCard';
import Paginate from '@/Components/Table/Paginate';

interface Props {
  users: Paginator<User[]>
}


const Dashboard = ({ users }: Props) => {

  console.log(users);

  return (
    <div className="overflow-x-auto flex flex-col gap-4 w-full">
      <table className="hidden lg:table table-auto table-zebra">
        <UserHead />
        <tbody>
          {users && users.data.length > 0 &&
            users.data.map(user => (
              <UserTableRow
                key={user.id}
                user={user}
              />
            ))
          }
        </tbody>
      </table>
      <div className="grid lg:hidden justify-center gap-8 py-4">
        {users && users.data.length > 0 &&
          users.data.map(user => (
            <UserGridCard
              key={user.id}
              user={user}
            />
          ))
        }
      </div>
      <Paginate meta={users.meta} />
    </div>
  );
};

export default AdminPageContainer({
  component: Dashboard,
  title: 'User Dashboard',
  name: 'Admin/User'
});


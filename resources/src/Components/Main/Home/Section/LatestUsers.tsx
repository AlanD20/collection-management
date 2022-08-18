import React from 'react';
import { User } from '@/@types/Models';
import UserCard from '@@/Main/UserCard';
import SectionBody from '../SectionBody';
import SectionTitle from '../SectionTitle';
import EmptyResource from '@@/Misc/EmptyResource';

interface Props {
  users: User[];
}

const LatestUsers = ({ users }: Props) => {
  const condition = users && users.length > 0;

  return (
    <section className="w-full mb-16 flex flex-col gap-4">
      <SectionTitle
        title={__('main.latest', {
          model: 'Users',
        })}
        routeName="u.index"
        params={{
          sort: 'desc',
          order_by: 'created_at',
        }}
      />

      <SectionBody>
        {condition ? (
          users.map((user) => <UserCard key={user.id} user={user} />)
        ) : (
          <EmptyResource model="User" />
        )}
      </SectionBody>
    </section>
  );
};

export default LatestUsers;

import React from 'react';
import UserCard from '../UserCard';
import { User } from '@/@types/Models';
import SectionTitle from '../SectionTitle';
import EmptyResource from '@@/Misc/EmptyResource';
import SectionBody from '../SectionBody';

interface Props {
  users: User[];
}

const LatestUsers = ({ users }: Props) => {
  const condition = users && users.length > 0;

  return (
    <section className="w-full mb-16 flex flex-col gap-4">
      <SectionTitle
        title={__('home.latest', {
          model: 'Users',
        })}
        routeName="index"
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

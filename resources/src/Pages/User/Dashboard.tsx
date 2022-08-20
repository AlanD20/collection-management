import React from 'react';
import { User } from '@/@types/Models';
import UserProfile from '@@/User/UserProfile';
import UserPageContainer from '@/Layouts/UserPageContainer';
import UserProfileActions from '@@/User/UserProfileActions';

interface Props {
  user: User;
  collectionCount: number;
  commentCount: number;
}

const Dashboard = ({ user, collectionCount, commentCount }: Props) => {
  return (
    <div className="card card-bordered bg-base-100 shadow-md rounded-md p-4 px-8 max-w-max mx-auto">
      <UserProfile
        user={user}
        collectionCount={collectionCount}
        commentCount={commentCount}
      />

      <UserProfileActions user={user} />
    </div>
  );
};

export default UserPageContainer({
  tabTitle: 'User',
  body: {
    component: Dashboard,
  },
});

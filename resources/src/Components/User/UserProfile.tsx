import React from 'react';
import { User } from '@/@types/Models';

interface Props {
  user: User;
  collectionCount: number;
  commentCount: number;
}

const UserProfile = ({ user, collectionCount, commentCount }: Props) => {
  return (
    <div className="flex gap-4">
      <div className="flex flex-col gap-4 py-4 px-8">
        <div className="flex flex-col">
          <span>{__('user.username')}</span>
          <span className="font-bold">{user.username}</span>
        </div>
        <div className="flex flex-col">
          <span>{__('user.name')}</span>
          <span className="font-bold">{user.name}</span>
        </div>
        <div className="flex flex-col">
          <span>{__('user.email')}</span>
          <span className="font-bold">{user.email}</span>
        </div>
        <div className="flex flex-col">
          <span>{__('user.total_collections')}</span>
          <span className="font-bold">{collectionCount}</span>
        </div>
        <div className="flex flex-col">
          <span>{__('user.total_comments')}</span>
          <span className="font-bold">{commentCount}</span>
        </div>

        <div className="flex gap-12 text-xs italic w-full flex-col md:flex-row items-center md:justify-between">
          <span>Created {user.createdAt}</span>
          <span>Updated {user.updatedAt}</span>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;

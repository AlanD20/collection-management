import React from 'react';
import { User } from '@/@types/Models';

interface Props {
  user: User;
  collectionCount: number;
  commentCount: number;
  likeCount: number;
}

const UserProfile = ({
  user,
  collectionCount,
  commentCount,
  likeCount,
}: Props) => {
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
        <div className="flex flex-col">
          <span>{__('user.total_likes')}</span>
          <span className="font-bold">{likeCount}</span>
        </div>

        <div className="flex gap-4 md:gap-12 text-xs italic w-full flex-col md:flex-row items-center md:justify-between">
          <span>{`${__('model.created_at')} ${user.createdAt}`}</span>
          <span>{`${__('model.updated_at')} ${user.updatedAt}`}</span>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;

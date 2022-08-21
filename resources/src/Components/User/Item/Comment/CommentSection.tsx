import React from 'react';
import PostComment from './PostComment';
import { Comment } from '@/@types/Models';
import SingleComment from './SingleComment';
import { UsePage } from '@/@types/Response';
import ButtonLink from '@@/Form/ButtonLink';
import { usePage } from '@inertiajs/inertia-react';
import useCommentsListener from '@/hooks/useCommentsListener';

interface Props {
  comments: Comment[];
  itemId: number;
}

const CommentSection = ({ itemId, comments: _Comments }: Props) => {
  const {
    auth: { user },
  } = usePage<UsePage>().props;

  const { comments } = useCommentsListener({
    itemId,
    comments: _Comments,
  });

  const condition = comments && comments.length > 0;

  return (
    <div className="w-full flex flex-col gap-4 bg-base-100/50 p-4 pb-12 shadow-md rounded-md px-8">
      <div className="flex justify-between items-center w-full py-4">
        <h5 className="text-2xl font-bold">{__('user.comment_section')}</h5>
      </div>

      {user ? (
        <PostComment />
      ) : (
        <div className="flex w-full justify-center items-center text-lg italic">
          <ButtonLink
            href={route('login')}
            label={__('form.login')}
            className="btn-link px-1 text-lg text-accent"
          />
          {__('user.comment_login')}
        </div>
      )}

      {condition ? (
        comments.map((comment) => (
          <SingleComment key={comment.id} comment={comment} />
        ))
      ) : (
        <div className="flex w-full justify-center items-center text-lg italic">
          {__('user.no_comment')}
        </div>
      )}
    </div>
  );
};

export default CommentSection;

import React from 'react';
import { FaTimes } from 'react-icons/fa';
import { Comment } from '@/@types/Models';
import ButtonLink from '@@/Form/ButtonLink';
import { UsePage } from '@/@types/Response';
import { usePage } from '@inertiajs/inertia-react';

interface Props {
  comment: Comment;
  hideDelete?: boolean;
}

const SingleComment = ({ comment, hideDelete }: Props) => {
  const {
    params,
    auth: { user },
  } = usePage<UsePage>().props;

  const condition =
    user &&
    (user.username === params.uname ||
      comment.user.username === user.username ||
      user.admin);

  return (
    <div className="flex flex-col w-full items-start my-4">
      <div className="flex w-full flex-col md:flex-row md:justify-between items-center md:gap-4">
        <div className="flex items-center gap-2">
          <ButtonLink
            href={route('u.show', {
              uname: comment.user.username,
            })}
            as="button"
            label={comment.user.username}
            className="btn-link text-secondary text-lg p-0"
          />
          <span className="text-xs italic">{comment.createdAt}</span>
        </div>
        {!hideDelete && condition && (
          <ButtonLink
            href={route('u.collections.items.comments.destroy', {
              uname: params.uname,
              collection: params.collection,
              item: params.item,
              comment: comment.id,
            })}
            method="delete"
            as="button"
            replace={true}
            preserveScroll={true}
            className="btn-link text-error text-lg p-0"
          >
            <FaTimes />
          </ButtonLink>
        )}
      </div>

      <p className="w-full px-4">{comment.body}</p>
    </div>
  );
};
export default SingleComment;

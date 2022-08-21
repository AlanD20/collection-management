import { Comment } from '@/@types/Models';
import { useEffect, useState } from 'react';

interface Params {
  comments: Comment[];
  itemId: number;
}

const useCommentsListener = ({ itemId, comments: currentComments }: Params) => {
  const [comments, setComments] = useState<Comment[]>([...currentComments]);

  const [deletedComments, setDeletedComments] = useState<number[]>([]);

  _Echo
    .channel('u.collections.items.comments')
    .listen('.comments.posted', (comment: Comment) => {
      if (itemId !== comment.item_id) return;

      setComments([...comments, comment]);
    })
    .listen('.comments.deleted', (comment: Comment) => {
      if (itemId !== comment.item_id) return;

      setDeletedComments([...deletedComments, comment.id]);
    });

  useEffect(() => _Echo.leave('u.collections.items.comments'), []);

  const filteredComments = comments.filter(
    (c) => !deletedComments.includes(c.id)
  );

  return {
    comments: filteredComments,
  };
};

export default useCommentsListener;

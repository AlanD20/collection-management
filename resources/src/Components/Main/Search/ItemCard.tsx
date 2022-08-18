import React from 'react';
import { Item } from '@/@types/Models';
import BadgeLink from '@@/Misc/BadgeLink';
import { Link } from '@inertiajs/inertia-react';
import SingleComment from '@@/User/Item/Comment/SingleComment';

interface Props {
  item: Item;
  tags?: boolean;
  comments?: boolean;
}

const ItemCard = ({ item, tags, comments }: Props) => {
  return (
    <div className="flex flex-col gap-4 p-3">
      <Link
        href={route('u.collections.items.show', {
          uname: item.collection.user.username,
          collection: item.collection.id,
          item: item.id,
        })}
        className="flex flex-col gap-2 bg-base-200 p-3 rounded-lg shadow-md"
      >
        <h3 className="text-2xl capitalize">{`${item.name} #${item.id}`}</h3>
        {tags && (
          <div className="flex flex-col gap-1">
            <h1 className="text-2xl capitalize">Tags</h1>
            <div className="flex gap-1">
              {item.tags.length > 0 ? (
                item.tags.map((tag) => (
                  <BadgeLink key={tag.id} label={tag.name} query={tag.name} />
                ))
              ) : (
                <p className="font-bold">No Tags</p>
              )}
            </div>
          </div>
        )}
        {comments && (
          <div className="flex flex-col">
            <h1 className="text-2xl capitalize">Comments</h1>
            {item.comments.length > 0 ? (
              item.comments.map((comment) => (
                <SingleComment key={comment.id} comment={comment} />
              ))
            ) : (
              <p className="font-bold">No Comments</p>
            )}
          </div>
        )}
      </Link>
    </div>
  );
};

export default ItemCard;

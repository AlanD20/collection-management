import React from "react"
import { Item } from "@/@types/Models";
import ButtonLink from "@@/Form/ButtonLink";

interface Props {
  item: Item;
}


const ItemCard = ({ item }: Props) => {
  return (
    <div className="flex flex-col gap-4 bg-base-300/70 p-4 px-8 rounded-lg shadow-md">
      <div className="flex flex-col gap-2 bg-base-200 p-4 rounded-lg shadow-md">
        <h3 className="text-2xl capitalize">
          {`Collection #${item.collection.id}`}
        </h3>
        <span>{item.collection.name}</span>
        <span className="badge">
          {item.collection.category.name}
        </span>
        <p>{item.collection.description}</p>
      </div>

      <div className="flex flex-col gap-2 bg-base-200 p-4 rounded-lg shadow-md">
        <h3 className="text-2xl capitalize">
          {`Item #${item.id}`}
        </h3>
        <span>{item.name}</span>
        <div className="flex flex-col gap-4 w-full">
          {item.fields.length > 0 &&
            item.fields.map(field => (
              <div key={field.id} className="flex flex-col gap-1">
                <span >{field.label}</span>
                <p>{field.value}</p>
              </div>
            ))}
        </div>
        <h1 className="text-2xl capitalize">tags</h1>
        <ul className="flex gap-1">
          {item.tags.length > 0 ? item.tags.map(tag => (
            <li key={tag.id} className="badge">{tag.name}</li>
          )) :
            <li className="font-bold">No Tags</li>
          }
        </ul>
        <h3 className="text-2xl">comments</h3>
        <div className="flex flex-col gap-4">
          {item.comments.length > 0 ? item.comments.map(comment => (
            <p key={comment.id}>{comment.body}</p>
          )) :
            <span className="font-bold">No comments</span>}
        </div>
      </div>
      <ButtonLink
        href={route('u.collections.items.show', {
          uname: item.collection.user.username,
          collection: item.collection.id,
          item: item.id
        })}
        className="btn-secondary hover:btn-accent py-4 px-8"
      >VIEW MORE
      </ButtonLink>
    </div>
  )
}

export default ItemCard;

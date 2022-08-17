import React from "react"
import { Item } from "@/@types/Models";
import ButtonLink from "@@/Form/ButtonLink";

interface Props {
  item: Item;
}


const ItemCard = ({ item }: Props) => {
  return (
    <div className="flex flex-col gap-4 bg-base-100 p-4 px-8">
      <div className="flex flex-col gap-2">
        <h1 className="text-2xl">collection</h1>
        <p>id: {item.collection.id}</p>
        <p>name: {item.collection.name}</p>
        <p>category : {item.collection.category.name}</p>
        <p>descr: {item.collection.description}</p>
      </div>
      <div className="flex flex-col gap-2">
        <h1 className="text-2xl">item</h1>
        <p>id: {item.id}</p>
        <p>name:{item.name}</p>
        <h1 className="text-2xl">comment</h1>
        <ul className="list-disc">
          {item.comments.length > 0 ? item.comments.map(comment => (
            <li key={comment.id}>{comment.body}</li>
          )) :
            <li className="font-bold">none here</li>}
        </ul>
        <h1 className="text-2xl">tags</h1>
        <ul className="list-disc">
          {item.tags.length > 0 ? item.tags.map(tag => (
            <li key={tag.id}>{tag.name}</li>
          )) :
            <li className="font-bold">none here</li>
          }
        </ul>
        <h1 className="text-2xl">fields</h1>
        <ul className="list-disc">
          {item.fields.length > 0 ? item.fields.map(field => (
            <li key={field.id}>
              {field.label} : {field.value}</li>
          )) :
            <li className="font-bold">none here</li>
          }
        </ul>
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

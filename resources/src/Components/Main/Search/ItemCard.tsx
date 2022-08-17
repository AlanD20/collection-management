import React from "react"
import { Item } from "@/@types/Models";
import ButtonLink from "@@/Form/ButtonLink";

interface Props {
  item: Item;
}


const ItemCard = ({ item }: Props) => {
  return (
    <div className="flex flex-col gap-4 p-4 px-8">
      <div className="flex flex-col gap-2 bg-base-200 p-4 rounded-lg shadow-md">
        <h3 className="text-2xl capitalize">
          {`Item #${item.id}`}
        </h3>
        <span>{item.name}</span>
        <h1 className="text-2xl capitalize">tags</h1>
        <ul className="flex gap-1">
          {item.tags.length > 0 ? item.tags.map(tag => (
            <li key={tag.id} className="badge">{tag.name}</li>
          )) :
            <li className="font-bold">No Tags</li>
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
      >
        {__('main.view_result', { model: 'Item' })}
      </ButtonLink>
    </div>
  )
}

export default ItemCard;

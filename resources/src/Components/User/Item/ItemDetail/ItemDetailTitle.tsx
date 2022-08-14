import React from "react"
import { Item } from "@/@types/Models";


interface Props {
  item: Item;
}

const ItemDetailTitle = ({ item }: Props) => {


  return (
    <div className="flex flex-col w-full gap-6">
      <div className="card-title justify-between w-full">
        <h4 className='text-4xl'>{item.name}</h4>
      </div>
      <div className="flex flex-wrap gap-1 w-full">
        {item.tags.map((tag) => (
          <div
            key={tag.id}
            className='badge'
          >
            {tag.name}
          </div>
        ))}
      </div>
    </div>
  )
}

export default ItemDetailTitle;

import React from "react"
import ItemCard from "../ItemCard";
import { Item } from "@/@types/Models";
import { Paginator } from "@/@types/Response";
import PaginationLinks from "@@/Table/PaginationLinks";
import EmptyResult from "@@/Misc/EmptyResult";


interface Props {
  items: Paginator<Item[]>;
  total: number;
}

const ItemResult = ({ items, total }: Props) => {

  const condition = items && items.data.length > 0;

  return (
    <div className="flex flex-col w-full bg-base-100 p-4 shadow-md rounded-lg">
      <h1 className='font-bold capitalize'>
        {__('main.search_result', {
          model: 'items',
          count: total
        })}
      </h1>

      <div className="flex flex-col gap-4 w-full mb-8">
        {condition &&
          items.data.map(item => (
            <ItemCard
              key={item.id}
              item={item}
            />
          ))
        }
      </div>

      {!condition && <EmptyResult model="item" />}

      {condition && <PaginationLinks meta={items.meta} />}
    </div>
  )
}

export default ItemResult;

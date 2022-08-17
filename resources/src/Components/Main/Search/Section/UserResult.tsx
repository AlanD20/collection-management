import React from "react"
import UserCard from "../UserCard";
import { User } from "@/@types/Models";
import EmptyResult from "@@/Misc/EmptyResult";
import { Paginator } from "@/@types/Response";
import PaginationLinks from "@@/Table/PaginationLinks";


interface Props {
  users: Paginator<User[]>;
  total: number;
}

const UserResult = ({ users, total }: Props) => {

  const condition = users && users.data.length > 0;

  return (
    <div className="flex flex-col w-full bg-base-100 p-4 shadow-md rounded-lg">
      <h1 className='font-bold capitalize'>
        {__('main.search_result', {
          model: 'users',
          count: total
        })}
      </h1>

      <div className="flex flex-col gap-4 w-full mb-8">
        {condition &&
          users.data.map(user => (
            <UserCard
              key={user.id}
              user={user}
            />
          ))
        }
      </div>

      {!condition && <EmptyResult model="user" />}

      {condition && <PaginationLinks meta={users.meta} />}
    </div>
  )
}

export default UserResult;

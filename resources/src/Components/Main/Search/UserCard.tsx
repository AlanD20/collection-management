import React from "react"
import { User } from "@/@types/Models";
import ButtonLink from "@@/Form/ButtonLink";

interface Props {
  user: User;
}


const UserCard = ({ user }: Props) => {
  return (
    <div className="flex flex-col gap-4 p-4 px-8">
      <div className="flex flex-col gap-2 bg-base-200 p-4 rounded-lg shadow-md">
        <h3 className="text-2xl capitalize">
          {`User #${user.id}`}
        </h3>
        <span>{user.name}</span>
        <span>{user.username}</span>
      </div>
      <ButtonLink
        href={route('u.show', {
          uname: user.username,
        })}
        className="btn-secondary hover:btn-accent py-4 px-8"
      >
        {__('main.view_result', { model: 'User' })}
      </ButtonLink>
    </div>
  )
}

export default UserCard;

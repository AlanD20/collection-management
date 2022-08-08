import React from "react"
import { User } from "@/@types/Models"
import ButtonLink from "@/Components/Form/ButtonLink"


interface Props {
  user: User
}

const UserTableRow = ({ user }: Props) => {
  return (

    <tr>
      <th>{user.id}</th>
      <td>{user.name}</td>
      <td>{user.username}</td>
      <td>{user.email}</td>
      <td className={`w-24 capitalize text-center font-semibold text-${user.block ? 'red' : 'green'}-500`}
      >
        {user.block ? 'blocked' : 'active'}
      </td>

      <td className="w-8 text-center">
        <i className={`text-lg fas fa-${user.admin ? 'check' : 'times'}`}></i>
      </td>

      <td className="flex gap-6 px-12">

        {/* Promote/Demote user */}
        <ButtonLink
          href={route(
            `admin.users.${user.admin ? 'demote' : 'promote'}`, {
            id: user.id
          })}
          method='post'
          as='button'
          preserveScroll={true}
          className={`min-w-[60px] btn-outline ${user.admin ? 'btn-error' : 'btn-success'}`}
        >
          <i className={`text-lg fas fa-user-${user.admin ? 'slash' : 'crown'}`}></i>
        </ButtonLink>

        {/* Block/Unblock user */}

        <ButtonLink
          href={route(
            `admin.users.${user.block ? 'unblock' : 'block'}`, {
            id: user.id
          })}
          method='post'
          as='button'
          preserveScroll={true}
          className={`min-w-[60px] btn-outline ${user.block ? 'btn-error' : 'btn-success'}`}
        >
          <i className={`text-lg fas fa-user-${user.block ? 'unlock' : 'lock'}`}></i>
        </ButtonLink>

        {/* Delete User */}
        <ButtonLink
          href={route('admin.users.destroy', { id: user.id })}
          method='delete'
          as='button'
          preserveScroll={true}
          className={`min-w-[60px] btn-outline btn-error`}
        >
          <i className="text-lg fas fa-trash"></i>
        </ButtonLink >
      </td>
    </tr>
  )
}


export default UserTableRow;

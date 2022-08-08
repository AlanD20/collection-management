import React from "react"


const UserHead = () => {
  return (
    <thead>
      <tr className="[&>*]:text-sm">
        <th>#</th>
        <th>Name</th>
        <th>Username</th>
        <th>Email</th>
        <th>Status</th>
        <th>Admin</th>
        <th className="pl-28">Actions</th>
      </tr>
    </thead>
  )
}

export default UserHead

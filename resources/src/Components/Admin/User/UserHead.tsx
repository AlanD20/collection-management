import SortButton from '@@/Table/SortButton';
import React from 'react';

const UserHead = () => {
  const routeName = 'admin.users.index';

  return (
    <thead>
      <tr className="[&>*]:text-sm">
        <th>
          <SortButton label="#" name="id" routeName={routeName} />
        </th>
        <th>
          <SortButton label="Name" name="name" routeName={routeName} />
        </th>
        <th>
          <SortButton label="Username" name="username" routeName={routeName} />
        </th>
        <th>Email</th>
        <th>
          <SortButton label="Status" name="status" routeName={routeName} />
        </th>
        <th>
          <SortButton label="Admin" name="admin" routeName={routeName} />
        </th>
        <th className="pl-28">Actions</th>
      </tr>
    </thead>
  );
};

export default UserHead;

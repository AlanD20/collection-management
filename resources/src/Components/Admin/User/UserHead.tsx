import React from 'react';
import SortButton from '@@/Table/SortButton';

const UserHead = () => {
  const routeName = 'admin.users.index';

  return (
    <thead>
      <tr className="[&>*]:text-sm">
        <th>
          <SortButton label="#" name="id" routeName={routeName} />
        </th>
        <th>
          <SortButton
            label={__('form.name')}
            name="name"
            routeName={routeName}
          />
        </th>
        <th>
          <SortButton
            label={__('form.username')}
            name="username"
            routeName={routeName}
          />
        </th>
        <th>Email</th>
        <th>
          <SortButton
            label={__('form.status')}
            name="status"
            routeName={routeName}
          />
        </th>
        <th>
          <SortButton
            label={__('form.admin')}
            name="admin"
            routeName={routeName}
          />
        </th>
        <th className="pl-28">{__('form.btn_action')}</th>
      </tr>
    </thead>
  );
};

export default UserHead;
